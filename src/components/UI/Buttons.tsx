import React, { MouseEvent, ReactNode } from "react";
import { Button, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  type?: "link" | "text" | "primary" | "default" | "dashed";
  size?: "large" | "middle" | "small";
  group?: "1" | "2";
  block?: boolean;
}

export const ButtonGradient: React.FC<Props> = ({
  children,
  className = "",
  onClick = () => {},
  type = "primary",
  size = "large",
  group = "1",
  block = true,
}) => {
  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <ConfigProvider
      theme={{
        components: {
          Button:
            group === "1"
              ? {
                  colorPrimary: `linear-gradient(135deg, #6253e1, #04befe)`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors([
                    "#6253e1",
                    "#04befe",
                  ]).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                    ["#6253e1", "#04befe"]
                  ).join(", ")})`,
                  lineWidth: 0,
                }
              : group === "2"
              ? {
                  colorPrimary: `linear-gradient(90deg,  ${[
                    "#fc6076",
                    "#ff9a44",
                    "#ef9d43",
                    "#e75516",
                  ].join(", ")})`,
                  colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors([
                    "#fc6076",
                    "#ff9a44",
                    "#ef9d43",
                    "#e75516",
                  ]).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                    ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"]
                  ).join(", ")})`,
                  lineWidth: 0,
                }
              : {},
        },
      }}
    >
      <Button
        onClick={onClick}
        type={type}
        size={size}
        className={className}
        block={block}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};
