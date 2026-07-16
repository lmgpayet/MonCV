import React from "react";
import { useCurrentFrame } from "remotion";
import { outfitFontFamily } from "../fonts";

export const Marquee: React.FC<{
  items: string[];
  speed?: number;
  color?: string;
  separator?: string;
}> = ({ items, speed = 3.4, color = "#FFFFFF", separator = "///" }) => {
  const frame = useCurrentFrame();
  const loopText = [...items, ...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          transform: `translateX(-${frame * speed}px)`,
        }}
      >
        {loopText.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: outfitFontFamily,
              fontWeight: 800,
              fontSize: 46,
              color,
              marginRight: 28,
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            {item}
            <span style={{ opacity: 0.5, fontWeight: 400 }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
