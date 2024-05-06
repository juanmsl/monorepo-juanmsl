import { BoxShadowLine, TextShadowLine } from '@core/constants/entities';

export const TextShadowList: Array<Array<TextShadowLine>> = [
  [{ x: 0, y: 2, blur: 6, color: '#000000' }],
  [{ x: 0, y: 5, blur: 15, color: '#000000' }],
  [
    { x: 0, y: 3, blur: 60, color: '#000000' },
    { x: 0, y: 8, blur: 36, color: '#000000' },
  ],
  [
    { x: 0, y: 1, blur: 2, color: '#0040ff' },
    { x: 0, y: 2, blur: 2, color: '#00fffb' },
    { x: 0, y: 3, blur: 2, color: '#99ff00' },
    { x: 0, y: 4, blur: 2, color: '#ffd500' },
    { x: 0, y: 5, blur: 2, color: '#ff4d00' },
    { x: 0, y: 6, blur: 2, color: '#ff0000' },
  ],
  [
    { x: -1, y: 1, blur: 0, color: '#1FC11B' },
    { x: -2, y: 2, blur: 0, color: '#FFD913' },
    { x: -3, y: 3, blur: 0, color: '#FF9C55' },
    { x: -4, y: 4, blur: 0, color: '#FF5555' },
    { x: -5, y: 5, blur: 0, color: '#9f4fff' },
  ],
  [
    { x: 1, y: 1, blur: 1, color: '#1FC11B' },
    { x: 2, y: 2, blur: 1, color: '#FFD913' },
    { x: 3, y: 3, blur: 1, color: '#FF9C55' },
    { x: 4, y: 4, blur: 1, color: '#FF5555' },
    { x: 5, y: 5, blur: 1, color: '#9f4fff' },
  ],
  [
    { x: 0, y: 1, blur: 2, color: '#1FC11B' },
    { x: 0, y: 3, blur: 2, color: '#FFD913' },
    { x: 0, y: 5, blur: 2, color: '#FF9C55' },
    { x: 0, y: 7, blur: 2, color: '#FF5555' },
    { x: 0, y: 9, blur: 2, color: '#9f4fff' },
  ],
  [
    { x: 1, y: -1, blur: 1, color: '#1FC11B' },
    { x: 2, y: -2, blur: 2, color: '#FFD913' },
    { x: 3, y: -3, blur: 3, color: '#FF9C55' },
    { x: 4, y: -4, blur: 4, color: '#FF5555' },
  ],
] as const;

export const BoxShadowList: Array<Array<BoxShadowLine>> = [
  [
    { x: 0, y: 0, blur: 10, spread: 0, color: '#c3b3ff', isInset: true },
    { x: 0, y: 0, blur: 60, spread: 0, color: '#4601D0CC', isInset: false },
    { x: 25, y: -25, blur: 43, spread: 20, color: '#08070799', isInset: true },
    { x: 0, y: 0, blur: 40, spread: 10, color: '#3D14F589', isInset: false },
  ],
  [
    { x: 0, y: 0, blur: 0, spread: 1, color: '#c3b3ff', isInset: true },
    { x: 0, y: 0, blur: 0, spread: 1, color: '#4601D0CC', isInset: false },
    { x: 25, y: -25, blur: 0, spread: 20, color: '#08070799', isInset: true },
    { x: 0, y: 0, blur: 0, spread: 10, color: '#3D14F589', isInset: false },
  ],
  [
    { x: 15, y: 15, blur: 30, spread: 17, color: '#000000D1', isInset: false },
    { x: 0, y: 0, blur: 5, spread: 6, color: '#5600d6', isInset: false },
    { x: 0, y: 0, blur: 5, spread: 12, color: '#7752ff', isInset: false },
    { x: 0, y: 0, blur: 5, spread: 18, color: '#8e81ff', isInset: false },
    { x: 23, y: -35, blur: 35, spread: -10, color: '#00000088', isInset: true },
  ],
  [
    { x: 15, y: 15, blur: 30, spread: 17, color: '#000000D1', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 6, color: '#5600d6', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 12, color: '#7752ff', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 18, color: '#8e81ff', isInset: false },
    { x: 23, y: -35, blur: 0, spread: -10, color: '#00000088', isInset: true },
  ],
  [{ x: 0, y: 8, blur: 24, spread: 0, color: '#CCCCCC', isInset: false }],
  [
    { x: 0, y: 50, blur: 100, spread: -20, color: '#CCCCCC', isInset: false },
    { x: 0, y: 30, blur: 60, spread: -30, color: '#CCCCCC', isInset: false },
    { x: 0, y: -2, blur: 6, spread: 0, color: '#CCCCCC', isInset: true },
  ],
  [
    { x: 0, y: 30, blur: 60, spread: -12, color: '#333333', isInset: true },
    { x: 0, y: 18, blur: 36, spread: -18, color: '#333333', isInset: true },
    { x: 0, y: 0, blur: 5, spread: 1, color: '#cccccc', isInset: false },
  ],
  [
    { x: 0, y: -30, blur: 60, spread: -12, color: '#333333', isInset: true },
    { x: 0, y: -6, blur: 36, spread: 8, color: '#333333', isInset: true },
    { x: 0, y: 0, blur: 15, spread: 1, color: '#cccccc88', isInset: false },
  ],
  [
    { x: 0, y: 1, blur: 2, spread: 0, color: '#0040ff', isInset: false },
    { x: 0, y: 2, blur: 4, spread: 0, color: '#00fffb', isInset: false },
    { x: 0, y: 4, blur: 8, spread: 0, color: '#99ff00', isInset: false },
    { x: 0, y: 8, blur: 16, spread: 0, color: '#ffd500', isInset: false },
    { x: 0, y: 16, blur: 20, spread: 0, color: '#ff4d00', isInset: false },
    { x: 0, y: 20, blur: 24, spread: 0, color: '#ff0000', isInset: false },
  ],
  [
    { x: -10, y: 10, blur: 0, spread: 0, color: '#660EAF64', isInset: false },
    { x: -20, y: 20, blur: 0, spread: 0, color: '#660EAF48', isInset: false },
    { x: -30, y: 30, blur: 0, spread: 0, color: '#660EAF32', isInset: false },
    { x: -40, y: 40, blur: 0, spread: 0, color: '#660EAF16', isInset: false },
    { x: -50, y: 50, blur: 0, spread: 0, color: '#660EAF08', isInset: false },
  ],
  [
    { x: 0, y: 4, blur: 0, spread: 10, color: '#0C41DF64', isInset: false },
    { x: 0, y: 7, blur: 0, spread: 20, color: '#0C41DF48', isInset: false },
    { x: 0, y: 12, blur: 0, spread: 30, color: '#0C41DF32', isInset: false },
    { x: 0, y: 17, blur: 0, spread: 40, color: '#0C41DF16', isInset: false },
    { x: 0, y: 22, blur: 0, spread: 50, color: '#0C41DF08', isInset: false },
  ],
  [
    { x: 5, y: -5, blur: 0, spread: 0, color: '#8ac11b', isInset: false },
    { x: 10, y: -10, blur: 0, spread: 0, color: '#FFD913', isInset: false },
    { x: 15, y: -15, blur: 0, spread: 0, color: '#FF9C55', isInset: false },
    { x: 20, y: -20, blur: 0, spread: 0, color: '#FF5555', isInset: false },
  ],
] as const;
