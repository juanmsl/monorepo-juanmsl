import styled, { css } from 'styled-components';

type SwitchStyleProps = {
  $padding: number;
  $width: number;
  $dotSize: number;
};

export const SwitchStyle = styled.section<SwitchStyleProps>(
  ({ $width, $dotSize, $padding, theme }) => css`
    width: ${$width}em;
    border-radius: 100em;
    background: ${theme.colors.background.paper};
    padding: ${$padding}em;
    transition: all 300ms ease;
    position: relative;

    .switch-dot {
      width: ${$dotSize}em;
      height: ${$dotSize}em;
      border-radius: 100em;
      background: ${theme.colors.white};
      display: block;
      transition: all 300ms ease;
      margin-left: 0;
      position: relative;
      z-index: 1;
    }

    .switch-left-icon,
    .switch-right-icon {
      width: ${$dotSize}em;
      height: ${$dotSize}em;
      position: absolute;
      top: ${$padding}em;
      display: grid;
      place-content: center;
      color: ${theme.colors.white};
      transition: all 300ms ease;
    }

    .switch-left-icon {
      left: ${$padding}em;
    }

    .switch-right-icon {
      right: ${$padding}em;
    }

    &.is-checked {
      background: ${theme.colors.primary.main};

      .switch-dot {
        margin-left: ${$width - $dotSize - $padding * 2}em;
      }
    }

    &:not(.is-readonly):has(input:disabled) {
      background: ${theme.colors.background.disabled};

      .switch-dot {
        background: ${theme.colors.text.disabled};
      }

      .switch-left-icon,
      .switch-right-icon {
        color: ${theme.colors.text.disabled};
      }

      &.is-checked {
        background: ${theme.colors.primary.dark};
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

type SwitchContainerStyle = {
  $padding: number;
  $width: number;
  $dotHoverSize: number;
};

export const SwitchContainerStyle = styled.section<SwitchContainerStyle>(
  ({ $padding, $width, $dotHoverSize }) => css`
    display: flex;
    align-items: center;
    gap: 1em;
    width: fit-content;

    .switch-label {
      cursor: pointer;
      user-select: none;
    }

    ${SwitchStyle}:hover .switch-dot {
      box-shadow: 0 0 0 0.4em ${props => props.theme.colors.primary.main}88;
    }

    ${SwitchStyle}:active .switch-dot,
    &:has(.switch-label:active) .switch-dot {
      width: ${$dotHoverSize}em;
    }

    ${SwitchStyle}.is-checked:active .switch-dot,
    &:has(.switch-label:active) ${SwitchStyle}.is-checked .switch-dot {
      margin-left: ${$width - $dotHoverSize - $padding * 2}em;
    }
  `,
);
