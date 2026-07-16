import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../colors";
import { Eyebrow } from "../components/Eyebrow";
import { Pill } from "../components/Pill";

const tools: { label: string; delay: number; bg: string }[] = [
  { label: "Claude", delay: 4, bg: colors.dark },
  { label: "Claude Code", delay: 10, bg: colors.burnt },
  { label: "ChatGPT", delay: 16, bg: colors.dark },
  { label: "Canva", delay: 22, bg: colors.burnt },
  { label: "CapCut", delay: 28, bg: colors.dark },
  { label: "WooCommerce", delay: 34, bg: colors.burnt },
  { label: "Meta Business", delay: 40, bg: colors.dark },
  { label: "Google Ads", delay: 46, bg: colors.burnt },
  { label: "Zapier", delay: 52, bg: colors.dark },
  { label: "Glide", delay: 58, bg: colors.burnt },
];

export const Scene6Tools: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: colors.frost,
        padding: "70px 80px",
        justifyContent: "center",
      }}
    >
      <Eyebrow delay={0} color={colors.dark}>
        Mes outils
      </Eyebrow>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          marginTop: 40,
        }}
      >
        {tools.map((t) => (
          <Pill key={t.label} delay={t.delay} bg={t.bg} color={colors.cream}>
            {t.label}
          </Pill>
        ))}
      </div>
    </AbsoluteFill>
  );
};
