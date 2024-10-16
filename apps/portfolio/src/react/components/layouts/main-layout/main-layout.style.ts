import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr;

  &.lines {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 5px;
      height: 100%;
      z-index: 5;
      background: ${props => props.theme.colors.primary.main};
      transition: background 300ms ease;
      display: none;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
        display: block;
      }
    }

    &::before {
      left: 0;

      @media all and (min-width: calc(${props => props.theme.constants.breakpoints.laptopL} + 5px)) {
        left: 50%;
        transform: translateX(calc(${props => props.theme.constants.breakpoints.laptopL} / -2 + 2px));
      }
    }

    &::after {
      right: 0;

      @media all and (min-width: calc(${props => props.theme.constants.breakpoints.laptopL} + 5px)) {
        right: 50%;
        transform: translateX(calc(${props => props.theme.constants.breakpoints.laptopL} / 2 - 1px));
      }
    }
  }

  .main-layout-content {
    display: grid;
  }

  .layout-content {
    padding: 50px 0;
    align-content: center;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      padding: 100px 0;
    }
  }

  .layout-logo {
    position: fixed;
    top: 20px;
    left: 50%;
    width: 40px;
    height: 40px;
    z-index: 6;
    border-radius: 50%;
    background: ${props => props.theme.colors.text.main};
    transition: all 300ms ease;
    transform: translateX(-50%);
    padding: 5px;
    display: none;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      display: block;
    }
  }
`;
