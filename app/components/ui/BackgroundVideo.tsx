"use client";
import { memo, useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

const BackgroundVideo = ({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (
      inView &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
};

export default memo(BackgroundVideo);
