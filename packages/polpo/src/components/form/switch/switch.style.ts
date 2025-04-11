import styled, { css } from 'styled-components';

export type SwitchColorStyles = {
  $color: string;
  $colorDark: string;
  $colorContrast: string;
};

type SwitchStyleProps = SwitchColorStyles & {
  $padding: number;
  $width: number;
  $dotSize: number;
};

export const SwitchStyle = styled.section<SwitchStyleProps>(
  ({ $width, $dotSize, $padding, theme, $color, $colorDark, $colorContrast }) => css`
    width: ${$width + $padding * 2}em;
    border-radius: 100em;
    background: ${theme.colors.background.paper};
    padding: ${$padding}em;
    transition: all 300ms ease;
    position: relative;

    .switch-dot {
      width: ${$dotSize}em;
      height: ${$dotSize}em;
      border-radius: 100em;
      background: ${$color};
      display: block;
      transition: all 300ms ease;
      margin-left: 0;
      position: relative;
      z-index: 1;
    }

    .switch-icon {
      cursor: pointer;
      display: block;
    }

    .switch-internal-left-icon,
    .switch-internal-right-icon {
      width: ${$dotSize}em;
      height: ${$dotSize}em;
      position: absolute;
      top: ${$padding}em;
      display: grid;
      place-content: center;
      color: ${$colorContrast};
      transition: all 300ms ease;
    }

    .switch-internal-left-icon {
      left: ${$padding}em;
    }

    .switch-internal-right-icon {
      right: ${$padding}em;
    }

    &.is-checked {
      background: ${$color};

      .switch-dot {
        margin-left: ${$width - $dotSize}em;
        background: color-mix(in srgb, ${$color}, ${$colorContrast} 75%);
      }
    }

    &:not(.is-readonly):has(input:disabled) {
      background: ${theme.colors.background.disabled};

      .switch-dot {
        background: ${theme.colors.text.disabled};
      }

      .switch-internal-left-icon,
      .switch-internal-right-icon {
        color: ${theme.colors.text.disabled};
      }

      &.is-checked {
        background: ${$colorDark};
      }
    }

    .switch-checkbox {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 3;
    }
  `,
);

type SwitchContainerStyle = Omit<SwitchColorStyles, '$colorDark'> & {
  $width: number;
  $dotHoverSize: number;
  $dotSize: number;
};

export const SwitchContainerStyle = styled.section<SwitchContainerStyle>(
  ({ $width, $dotHoverSize, $dotSize, $color, $colorContrast }) => css`
    display: flex;
    align-items: center;
    gap: 0.5em;
    width: fit-content;

    .switch-label {
      cursor: pointer;
      user-select: none;
      padding: 0 0.5em;
    }

    ${SwitchStyle}:not(:has(.is-readonly, input:disabled)):hover .switch-dot,
    &:has(.switch-icon:hover) ${SwitchStyle}:not(:has(.is-readonly, input:disabled)) .switch-dot,
    &:has(.switch-label:hover) ${SwitchStyle}:not(:has(.is-readonly, input:disabled)) .switch-dot {
      box-shadow: 0 0 0 ${0.3 * $dotSize}em color-mix(in srgb, ${$color} 50%, ${$colorContrast});
    }

    ${SwitchStyle}:not(:has(.is-readonly, input:disabled)):active .switch-dot,
    &:has(.switch-icon:active) ${SwitchStyle}:not(:has(.is-readonly, input:disabled)) .switch-dot,
    &:has(.switch-label:active) ${SwitchStyle}:not(:has(.is-readonly, input:disabled)) .switch-dot {
      width: ${$dotHoverSize}em;
    }

    ${SwitchStyle}:not(:has(.is-readonly, input:disabled)).is-checked:active .switch-dot,
    &:has(.switch-icon:active) ${SwitchStyle}:not(:has(.is-readonly, input:disabled)).is-checked .switch-dot,
    &:has(.switch-label:active) ${SwitchStyle}:not(:has(.is-readonly, input:disabled)).is-checked .switch-dot {
      margin-left: ${$width - $dotHoverSize}em;
    }
  `,
);
