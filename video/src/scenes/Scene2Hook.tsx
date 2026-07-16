import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors } from "../colors";
import { outfitFontFamily, spaceMonoFontFamily } from "../fonts";
import { KineticText } from "../components/KineticText";

export const Scene2Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numberProgress = spring({
    fps,
    frame,
    config: { damping: 9, mass: 0.7, stiffness: 110 },
  });
  const count = Math.round(interpolate(numberProgress, [0, 1], [0, 7], {
    extrapolateRight: "clamp",
  }));

  const wobble = Math.sin(frame / 5) * interpolate(frame, [0, 20], [6, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: colors.burnt,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 18,
          transform: `rotate(${wobble}deg) scale(${0.85 + numberProgress * 0.15})`,
        }}
      >
        <div
          style={{
            fontFamily: outfitFontFamily,
            fontWeight: 900,
            fontSize: 340,
            lineHeight: 1,
            color: colors.dark,
            letterSpacing: "-0.03em",
          }}
        >
          {count}
        </div>
        <div
          style={{
            fontFamily: outfitFontFamily,
            fontWeight: 800,
            fontSize: 90,
            color: colors.cream,
          }}
        >
          ans
        </div>
      </div>

      <div
        style={{
          fontFamily: spaceMonoFontFamily,
          fontSize: 26,
          letterSpacing: "0.08em",
          color: colors.dark,
          marginTop: 20,
          textAlign: "center",
          maxWidth: 780,
          padding: "0 60px",
        }}
      >
        <KineticText
          text="DE PILOTAGE STRATÉGIQUE MULTIMARQUES, EN TOTALE AUTONOMIE"
          delay={40}
          stagger={2}
          style={{ justifyContent: "center" }}
        />
      </div>
    </AbsoluteFill>
  );
};
