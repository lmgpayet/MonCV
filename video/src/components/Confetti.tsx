import React from "react";
import { Circle, Star, Triangle } from "@remotion/shapes";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

type Piece = {
  kind: "circle" | "star" | "triangle";
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
  spin?: boolean;
};

export const Confetti: React.FC<{ pieces: Piece[] }> = ({ pieces }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <>
      {pieces.map((piece, i) => {
        const progress = spring({
          fps,
          frame: frame - piece.delay,
          config: { damping: 11, mass: 0.6, stiffness: 120 },
        });
        const rotate = piece.spin ? (frame - piece.delay) * 1.4 : 0;

        const shape =
          piece.kind === "circle" ? (
            <Circle radius={piece.size / 2} fill={piece.color} />
          ) : piece.kind === "star" ? (
            <Star
              innerRadius={piece.size / 2.6}
              outerRadius={piece.size / 2}
              points={5}
              fill={piece.color}
            />
          ) : (
            <Triangle length={piece.size} direction="up" fill={piece.color} />
          );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: piece.top,
              left: piece.left,
              opacity: progress,
              transform: `scale(${progress}) rotate(${rotate}deg)`,
            }}
          >
            {shape}
          </div>
        );
      })}
    </>
  );
};
