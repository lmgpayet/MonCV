import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const PopIn: React.FC<{
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  from?: number;
  rotateFrom?: number;
}> = ({ delay = 0, children, style, from = 0.4, rotateFrom = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: frame - delay,
    config: { damping: 12, mass: 0.6, stiffness: 140 },
  });

  const scale = from + progress * (1 - from);
  const rotate = rotateFrom * (1 - progress);

  return (
    <div
      style={{
        opacity: progress,
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const SlideIn: React.FC<{
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
}> = ({ delay = 0, children, style, direction = "up", distance = 80 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: frame - delay,
    config: { damping: 14, mass: 0.7, stiffness: 130 },
  });

  const offset = (1 - progress) * distance;
  const map: Record<string, string> = {
    left: `translateX(${-offset}px)`,
    right: `translateX(${offset}px)`,
    up: `translateY(${offset}px)`,
    down: `translateY(${-offset}px)`,
  };

  return (
    <div
      style={{
        opacity: progress,
        transform: map[direction],
        ...style,
      }}
    >
      {children}
    </div>
  );
};
