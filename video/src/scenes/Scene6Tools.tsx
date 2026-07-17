import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../colors";
import { Eyebrow } from "../components/Eyebrow";
import { Pill } from "../components/Pill";

const tools: { label: string; delay: number; bg: string }[] = [
  { label: "Claude", delay: 4, bg: colors.ink },
  { label: "Claude Code", delay: 10, bg: colors.raspberry },
  { label: "ChatGPT", delay: 16, bg: colors.ink },
  { label: "Canva", delay: 22, bg: colors.raspberry },
  { label: "CapCut", delay: 28, bg: colors.ink },
  { label: "WooCommerce", delay: 34, bg: colors.raspberry },
  { label: "Meta Business", delay: 40, bg: colors.ink },
  { label: "Google Ads", delay: 46, bg: colors.raspberry },
  { label: "Zapier", delay: 52, bg: colors.ink },
  { label: "Glide", delay: 58, bg: colors.raspberry },
];

export const Scene6Tools: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: colors.grapefruit,
        padding: "70px 80px",
        justifyContent: "center",
      }}
    >
      <Eyebrow delay={0} color={colors.ink}>
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
