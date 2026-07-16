import React from "react";
import { spaceMonoFontFamily } from "../fonts";
import { PopIn } from "./PopIn";

export const Eyebrow: React.FC<{
  children: React.ReactNode;
  color?: string;
  delay?: number;
}> = ({ children, color = "#ea6903", delay = 0 }) => {
  return (
    <PopIn delay={delay} from={0.7}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: spaceMonoFontFamily,
          fontSize: 26,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color,
        }}
      >
        <span style={{ width: 44, height: 3, background: color }} />
        {children}
      </div>
    </PopIn>
  );
};
