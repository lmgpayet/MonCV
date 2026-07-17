import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../colors";
import { outfitFontFamily } from "../fonts";
import { Eyebrow } from "../components/Eyebrow";
import { PopIn } from "../components/PopIn";
import { Confetti } from "../components/Confetti";

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const lineWidth = interpolate(frame, [10, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: colors.ink }}>
      <Confetti
        pieces={[
          { kind: "circle", top: "8%", left: "12%", size: 46, color: colors.lemon, delay: 4, spin: false },
          { kind: "star", top: "14%", left: "78%", size: 70, color: colors.raspberry, delay: 10, spin: true },
          { kind: "triangle", top: "78%", left: "16%", size: 60, color: colors.grapefruit, delay: 16, spin: true },
          { kind: "circle", top: "82%", left: "82%", size: 34, color: colors.lime, delay: 22, spin: false },
        ]}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 90px",
          gap: 26,
        }}
      >
        <Eyebrow delay={2} color={colors.raspberry}>
          Responsable Com &amp; Marketing Groupe
        </Eyebrow>

        <PopIn delay={8} from={0.6} rotateFrom={-6}>
          <div
            style={{
              fontFamily: outfitFontFamily,
              fontWeight: 200,
              fontSize: 118,
              lineHeight: 0.95,
              color: colors.cream,
              letterSpacing: "-0.02em",
            }}
          >
            Laurence
            <br />
            <span style={{ fontWeight: 900, color: colors.lemon }}>
              Payet
            </span>
          </div>
        </PopIn>

        <div
          style={{
            width: `${lineWidth * 280}px`,
            height: 8,
            background: colors.lime,
            borderRadius: 4,
          }}
        />

        <PopIn delay={26} from={0.7}>
          <div
            style={{
              fontFamily: outfitFontFamily,
              fontWeight: 500,
              fontSize: 34,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 780,
            }}
          >
            Stratégie, création &amp; IA au service de la marque.
          </div>
        </PopIn>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
