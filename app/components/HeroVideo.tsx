"use client";

import { useEffect, useRef } from "react";
import { site } from "../site";

// Minimal typings for the YouTube IFrame API we use.
interface YTPlayer {
  mute(): void;
  playVideo(): void;
  seekTo(seconds: number, allowSeekAhead?: boolean): void;
  getIframe(): HTMLIFrameElement;
}
interface YTEvent {
  target: YTPlayer;
  data?: number;
}
interface YTNamespace {
  Player: new (el: HTMLElement, opts: unknown) => YTPlayer;
}
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Sizes the iframe to cover the hero at 16:9 without distortion.
const COVER =
  "pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2";

export function HeroVideo() {
  const mountRef = useRef<HTMLDivElement>(null);
  const builtRef = useRef(false);

  useEffect(() => {
    function build() {
      if (builtRef.current || !mountRef.current || !window.YT?.Player) return;
      builtRef.current = true;
      new window.YT.Player(mountRef.current, {
        host: "https://www.youtube-nocookie.com",
        videoId: site.heroYouTubeId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: YTEvent) => {
            e.target.mute();
            e.target.playVideo();
            e.target.getIframe().className = COVER;
          },
          onStateChange: (e: YTEvent) => {
            // 0 = ENDED — loop by seeking to the start (no playlist controls).
            if (e.data === 0) {
              e.target.seekTo(0);
              e.target.playVideo();
            }
          },
        },
      });
    }

    if (window.YT?.Player) {
      build();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        build();
      };
      if (!document.getElementById("yt-iframe-api")) {
        const script = document.createElement("script");
        script.id = "yt-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Replaced by the API-controlled iframe on mount. */}
      <div ref={mountRef} className={COVER} />
    </div>
  );
}
