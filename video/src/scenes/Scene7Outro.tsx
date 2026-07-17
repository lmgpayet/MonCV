import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../colors";
import { outfitFontFamily, spaceMonoFontFamily } from "../fonts";
import { PopIn } from "../components/PopIn";
import { Confetti } from "../components/Confetti";

export const Scene7Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const flash = interpolate(frame, [0, 6, 16], [1, 0.15, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: colors.vanilla }}>
      <Confetti
        pieces={[
          { kind: "star", top: "10%", left: "14%", size: 54, color: colors.lemon, delay: 20, spin: true },
          { kind: "circle", top: "16%", left: "76%", size: 40, color: colors.lime, delay: 26, spin: false },
          { kind: "triangle", top: "80%", left: "70%", size: 56, color: colors.grapefruit, delay: 32, spin: true },
        ]}
      />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 30,
          padding: "0 70px",
        }}
      >
        <PopIn delay={0} from={0.4} rotateFrom={-4}>
          <div
            style={{
              fontFamily: outfitFontFamily,
              fontWeight: 900,
              fontSize: 96,
              color: colors.ink,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Laurence Payet
          </div>
        </PopIn>

        <PopIn delay={16} from={0.7}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              background: colors.raspberry,
              color: colors.ink,
              fontFamily: outfitFontFamily,
              fontWeight: 700,
              fontSize: 36,
              padding: "22px 50px",
              borderRadius: 999,
            }}
          >
            Contactez-moi
          </div>
        </PopIn>

        <PopIn delay={28} from={0.8}>
          <div
            style={{
              fontFamily: spaceMonoFontFamily,
              fontSize: 26,
              color: colors.ink,
              opacity: 0.6,
              letterSpacing: "0.05em",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span>p.laurence140297@gmail.com</span>
            <span>0692 43 01 06</span>
          </div>
        </PopIn>
      </AbsoluteFill>

      <AbsoluteFill
        style={{ background: colors.lemon, opacity: flash * 0.5 }}
      />
    </AbsoluteFill>
  );
};
