export type TextShadowLine = {
  x: number;
  y: number;
  blur: number;
  color: string;
};

export type BoxShadowLine = {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  isInset: boolean;
};

export type GradientLine = {
  color: string;
  percentage?: number;
};
