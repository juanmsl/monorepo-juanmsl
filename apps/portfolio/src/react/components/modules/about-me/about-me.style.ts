import { SectionLayout } from '@components/layouts';
import styled from 'styled-components';

export const AboutMeStyle = styled(SectionLayout)`
  .layout-content {
    gap: 50px;
    justify-content: center;
    transition: all 300ms ease;
    text-wrap: balance;

    @media all and (min-width: ${(props) => props.theme.constants.breakpoints.laptopS}) {
      align-items: center;
      grid-auto-flow: column;
      gap: 100px;
    }

    & > .left {
      display: grid;
      justify-items: center;

      @media all and (min-width: ${(props) => props.theme.constants.breakpoints.laptopM}) {
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

    @media all and (min-width: ${(props) => props.theme.constants.breakpoints.tablet}) {
      align-items: center;
      grid-auto-flow: column;
      justify-content: start;
      gap: 20px;
    }
  }

  &:has(.technology-icon:hover) {
    .technology-icon:not(:hover) {
      filter: grayscale(100%) blur(1px);
    }
  }

  .skills-labels {
    margin-top: 40px;
    display: grid;
    width: 100%;
    gap: 10px;
    justify-content: start;
    grid-template-columns: repeat(auto-fit, 32px);
    padding-top: 20px;

    .technology-icon {
      width: 32px;
      height: 32px;
      object-fit: contain;
      display: block;
      transition: all 300ms ease;

      &.is-selected,
      &:hover {
        filter: grayscale(0) drop-shadow(0 0 4px ${props => props.theme.colors.text}33);
        transform: perspective(100px) translateZ(20px);
      }
    }
  }
`;
