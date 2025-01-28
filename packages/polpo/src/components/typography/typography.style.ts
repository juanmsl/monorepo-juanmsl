import { createGlobalStyle, css } from 'styled-components';

export const TypographyStyle = createGlobalStyle(({ theme: { constants } }) =>
  Object.entries(constants.typography).map(
    ([key, { breakpoints, fontSize, lineHeight, defaultWeight, weights }]) => css`
      .${key} {
        font-size: ${fontSize};
        line-height: ${lineHeight};
        font-weight: ${defaultWeight};
        margin: 0;
        padding: 0.5em 0 0.4em;

        &.recommended-width {
          max-width: 70ch;
        }

        &.code-family {
          font-family: monospace;
        }

        &.no-padding {
          padding: 0;
        }

        &.nowrap {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &.nowrap-max-lines {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        &.nowrap-max-lines-2 {
          -webkit-line-clamp: 2;
          line-clamp: 2;
        }

        &.nowrap-max-lines-3 {
          -webkit-line-clamp: 3;
          line-clamp: 3;
        }

        &.nowrap-max-lines-4 {
          -webkit-line-clamp: 4;
          line-clamp: 4;
        }

        &.nowrap-max-lines-5 {
          -webkit-line-clamp: 5;
          line-clamp: 5;
        }

        ${Object.entries(weights).map(
          ([fontWeight, weight]) => css`
            &.${fontWeight} {
              font-weight: ${weight};
            }
          `,
        )}

        ${breakpoints.map(
          ({ fontSize, lineHeight, from }) => css`
            @media all and (min-width: ${constants.breakpoints[from as keyof typeof constants.breakpoints]}) {
              font-size: ${fontSize};
              line-height: ${lineHeight};
            }
          `,
        )}
      }
    `,
  ),
);
