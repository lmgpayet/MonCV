import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../colors";
import { outfitFontFamily, spaceMonoFontFamily } from "../fonts";
import { Eyebrow } from "../components/Eyebrow";
import { SlideIn } from "../components/PopIn";

const skills: {
  num: string;
  title: string;
  desc: string;
  delay: number;
  dir: "left" | "right";
}[] = [
  {
    num: "01",
    title: "Stratégie & Marque",
    desc: "Communication multimarques, storytelling, positionnement",
    delay: 10,
    dir: "left",
  },
  {
    num: "02",
    title: "Création & Digital",
    desc: "Photo, vidéo, montage, réseaux sociaux, web",
    delay: 26,
    dir: "right",
  },
  {
    num: "03",
    title: "No Code & IA",
    desc: "Claude, ChatGPT, automatisation, workflows",
    delay: 42,
    dir: "left",
  },
];

export const Scene5Skills: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.buttercup, padding: "70px 80px" }}>
      <Eyebrow delay={0} color={colors.dark}>
        Mes compétences
      </Eyebrow>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 22,
          marginTop: 20,
        }}
      >
        {skills.map((s) => (
          <SlideIn key={s.num} delay={s.delay} direction={s.dir} distance={120}>
            <div
              style={{
                background: colors.dark,
                borderRadius: 22,
                padding: "28px 36px",
                display: "flex",
                alignItems: "center",
                gap: 26,
              }}
            >
              <div
                style={{
                  fontFamily: spaceMonoFontFamily,
                  fontSize: 30,
                  color: colors.burnt,
                  fontWeight: 700,
                }}
              >
                {s.num}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: outfitFontFamily,
                    fontWeight: 800,
                    fontSize: 42,
                    color: colors.cream,
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontFamily: outfitFontFamily,
                    fontWeight: 400,
                    fontSize: 22,
                    color: "rgba(255,255,255,0.65)",
                    marginTop: 6,
                  }}
                >
                  {s.desc}
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};
