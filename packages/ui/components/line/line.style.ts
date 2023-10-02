import styled from "styled-components";

export type LineStyleProps = {
  color?: string;
  size?: string;
}
export const LineStyle = styled.span.attrs<LineStyleProps>(attrs => ({
  color: attrs.color ?? 'currentColor',
  size: attrs.size ?? '1px',
}))`
  &.horizontal, &.vertical {
    background: ${props => props.color};
    display: inline-block;
  }

  &.horizontal {
    width: 100%;
    height: ${props => props.size};
  }

  &.vertical {
    height: 100%;
    width: ${props => props.size};
  }
`;
