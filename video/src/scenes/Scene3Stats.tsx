import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../colors";
import { outfitFontFamily, spaceMonoFontFamily } from "../fonts";
import { PopIn } from "../components/PopIn";
import { Eyebrow } from "../components/Eyebrow";

const stats: { num: string; label: string; delay: number; rot: number }[] = [
  { num: "7+", label: "années d'expérience", delay: 14, rot: -4 },
  { num: "5+", label: "marques pilotées", delay: 24, rot: 3 },
  { num: "5+", label: "sites web & apps", delay: 34, rot: -3 },
  { num: "1", label: "SaaS métier interne", delay: 44, rot: 4 },
];

export const Scene3Stats: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.cream, padding: "70px 80px" }}>
      <Eyebrow delay={0} color={colors.burnt}>
        En chiffres
      </Eyebrow>

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          marginTop: 34,
        }}
      >
        {stats.map((s, i) => (
          <PopIn
            key={i}
            delay={s.delay}
            from={0.5}
            rotateFrom={s.rot}
            style={{
              background: i % 2 === 0 ? colors.dark : colors.burnt,
              borderRadius: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 10px",
            }}
          >
            <div
              style={{
                fontFamily: outfitFontFamily,
                fontWeight: 200,
                fontSize: 110,
                color: colors.cream,
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontFamily: spaceMonoFontFamily,
                fontSize: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              {s.label}
            </div>
          </PopIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};
