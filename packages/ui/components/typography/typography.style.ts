import {createGlobalStyle, css} from "styled-components";

export const TypographyStyle = createGlobalStyle(({ theme: { constants } }) => (
  Object.entries(constants.typography).map(([key, { breakpoints, fontSize, lineHeight, defaultWeight, weights}]) => css`
    .${key} {
      font-size: ${fontSize};
      line-height: ${lineHeight};
      font-weight: ${defaultWeight};
      margin: 0;
      padding: 0.5em 0 0.4em;

      &.no-padding {
        padding: 0;
      }

      &.nowrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      ${Object.entries(weights).map(([fontWeight, weight]) => css`
        &.${fontWeight} {
          font-weight: ${weight};
        }
      `)}

      ${breakpoints.map(({ fontSize, lineHeight, from }) => css`
        @media all and (min-width: ${constants.breakpoints[from as keyof typeof constants.breakpoints]}) {
          font-size: ${fontSize};
          line-height: ${lineHeight};
        }
      `)}
    }
  `)
));
