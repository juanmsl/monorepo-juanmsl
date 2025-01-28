import { SectionLayout } from 'polpo/ui';
import styled, { css } from 'styled-components';

export const AboutMeStyle = styled(SectionLayout)`
  position: relative;

  ${({ theme }) =>
    theme.name === 'dark' &&
    css`
      &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          ${props => props.theme.colors.secondary.main}88,
          ${props => props.theme.colors.background.main}88,
          transparent
        );
        z-index: -10;
        top: 75%;
        left: 25%;
        width: 1000px;
        height: 1000px;
        transform: translate(-50%, -50%);
      }
    `}

  .layout-content {
    gap: 50px;
    justify-content: center;
    transition: all 300ms ease;
    text-wrap: balance;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      align-items: center;
      grid-auto-flow: column;
      gap: 100px;
    }

    & > .left {
      display: grid;
      justify-items: center;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
        justify-items: end;
      }
    }

    & > .right {
      display: grid;
      justify-items: start;
      max-width: 560px;
    }
  }

  .button-ctas {
    display: grid;
    margin-top: 20px;
    justify-content: center;
    gap: 10px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      align-items: center;
      grid-auto-flow: column;
      justify-content: start;
      gap: 20px;
    }
  }
`;
