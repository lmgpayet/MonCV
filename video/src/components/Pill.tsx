import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { spaceMonoFontFamily } from "../fonts";

export const Pill: React.FC<{
  children: React.ReactNode;
  delay?: number;
  bg?: string;
  color?: string;
}> = ({ children, delay = 0, bg = "#111111", color = "#FFFFFF" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: frame - delay,
    config: { damping: 10, mass: 0.5, stiffness: 170 },
  });

  const bounce = Math.max(0, 1 - progress) * -30;

  return (
    <div
      style={{
        display: "inline-flex",
        padding: "14px 30px",
        borderRadius: 999,
        background: bg,
        color,
        fontFamily: spaceMonoFontFamily,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "0.02em",
        opacity: progress,
        transform: `scale(${0.5 + progress * 0.5}) translateY(${bounce}px)`,
      }}
    >
      {children}
    </div>
  );
};
