import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Splits text into words that pop in one after another — the
 * staggered kinetic-typography reveal used across every scene.
 */
export const KineticText: React.FC<{
  text: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
}> = ({ text, delay = 0, stagger = 3, style, wordStyle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "0.1em",
        ...style,
      }}
    >
      {words.map((word, i) => {
        const progress = spring({
          fps,
          frame: frame - delay - i * stagger,
          config: { damping: 14, mass: 0.5, stiffness: 150 },
        });
        const y = (1 - progress) * 40;
        return (
          <span
            key={`${word}-${i}`}
            style={{
              display: "inline-block",
              marginRight: "0.28em",
              opacity: progress,
              transform: `translateY(${y}px)`,
              ...wordStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
