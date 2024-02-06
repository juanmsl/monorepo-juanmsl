import styled from 'styled-components';

export type LineStyleProps = {
  color?: string;
  size?: string;
};

export const LineStyle = styled.span<LineStyleProps>`
  &.horizontal,
  &.vertical {
    background: ${(props) => props.color ?? 'currentColor'};
    display: inline-block;
  }

  &.horizontal {
    width: 100%;
    height: ${(props) => props.size ?? '1px'};
  }

  &.vertical {
    height: 100%;
    width: ${(props) => props.size ?? '1px'};
  }
`;
