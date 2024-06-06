import styled, { css } from 'styled-components';

export type LineStyleProps = {
  $color: string;
  $size: number;
  $spacing: number;
  $dashSize: number;
};

export const LineStyle = styled.span<LineStyleProps>`
  &.horizontal,
  &.vertical {
    background: ${props => props.color ?? 'currentColor'};
    display: inline-block;
  }

  &.horizontal {
    width: 100%;
    height: ${props => props.$size}px;
    ${({ $size: sz, $spacing: sp, $color: cl, $dashSize: ds }) => css`
      &.dotted {
        background: radial-gradient(${sz / 2}px ${sz / 2}px, ${cl} 100%, transparent) 0 0 / ${sp + sz}px 100%;
      }

      &.dashed {
        background: repeating-linear-gradient(
          90deg,
          ${cl},
          ${cl} ${ds}px,
          transparent ${ds}px,
          transparent ${sp + ds}px
        );
      }
    `}
  }

  &.vertical {
    height: 100%;
    width: ${props => props.$size}px;
    ${({ $size: sz, $spacing: sp, $color: cl, $dashSize: ds }) => css`
      &.dotted {
        background: radial-gradient(${sz / 2}px ${sz / 2}px, ${cl} 100%, transparent) 0 0 / 100% ${sp + sz}px;
      }

      &.dashed {
        background: repeating-linear-gradient(
          0deg,
          ${cl},
          ${cl} ${ds}px,
          transparent ${ds}px,
          transparent ${sp + ds}px
        );
      }
    `}
  }
`;
