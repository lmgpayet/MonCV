import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../colors";
import { outfitFontFamily } from "../fonts";
import { Eyebrow } from "../components/Eyebrow";
import { SlideIn } from "../components/PopIn";
import { Marquee } from "../components/Marquee";

const brands = [
  "DIMEXOI",
  "BOIS D'ORIENT",
  "CŒUR D'ACIER",
  "CHR DISCOUNT OI",
  "ADDARIO CUISINES",
  "STAR LITERIE",
];

export const Scene4Experience: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: colors.dark,
        justifyContent: "center",
        padding: "0 80px",
        gap: 30,
      }}
    >
      <Eyebrow delay={0} color={colors.frost}>
        2018 — Aujourd&apos;hui
      </Eyebrow>

      <SlideIn delay={8} direction="left">
        <div
          style={{
            fontFamily: outfitFontFamily,
            fontWeight: 800,
            fontSize: 66,
            color: colors.cream,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Responsable Marketing &amp; Communication Groupe
        </div>
      </SlideIn>

      <SlideIn delay={16} direction="left">
        <div
          style={{
            fontFamily: outfitFontFamily,
            fontWeight: 700,
            fontSize: 38,
            color: colors.burnt,
          }}
        >
          DIMEXOI / Groupe ALDAM
        </div>
      </SlideIn>

      <div style={{ marginTop: 30 }}>
        <Marquee items={brands} color={colors.buttercup} speed={3.6} />
      </div>
    </AbsoluteFill>
  );
};
