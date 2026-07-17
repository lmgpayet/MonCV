import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../colors";
import { Eyebrow } from "../components/Eyebrow";
import { Pill } from "../components/Pill";

const tools: { label: string; delay: number; bg: string; color: string }[] = [
  { label: "Claude", delay: 4, bg: colors.ink, color: colors.cream },
  { label: "Claude Code", delay: 10, bg: colors.raspberry, color: colors.ink },
  { label: "ChatGPT", delay: 16, bg: colors.ink, color: colors.cream },
  { label: "Canva", delay: 22, bg: colors.raspberry, color: colors.ink },
  { label: "CapCut", delay: 28, bg: colors.ink, color: colors.cream },
  { label: "WooCommerce", delay: 34, bg: colors.raspberry, color: colors.ink },
  { label: "Meta Business", delay: 40, bg: colors.ink, color: colors.cream },
  { label: "Google Ads", delay: 46, bg: colors.raspberry, color: colors.ink },
  { label: "Zapier", delay: 52, bg: colors.ink, color: colors.cream },
  { label: "Glide", delay: 58, bg: colors.raspberry, color: colors.ink },
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
          <Pill key={t.label} delay={t.delay} bg={t.bg} color={t.color}>
            {t.label}
          </Pill>
        ))}
      </div>
    </AbsoluteFill>
  );
};
