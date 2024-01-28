import styled from "styled-components";

export const MainLayoutStyle = styled.main`
  min-height: 100vh;
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  font-family: ${props => props.theme.constants.fontFamily};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: grid;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 5px;
    height: 100%;
    z-index: 500;
    background: ${props => props.theme.colors.primary};
  }

  &::before {
    left: 0;

    @media all and (min-width: calc(${props => props.theme.constants.breakpoints.laptopL} + 5px)) {
      left: 50%;
      transform: translateX(calc(${props => props.theme.constants.breakpoints.laptopL}/ -2 + 2px));
    }
  }

  &::after {
    right: 0;

    @media all and (min-width: calc(${props => props.theme.constants.breakpoints.laptopL} + 5px)) {
      right: 50%;
      transform: translateX(calc(${props => props.theme.constants.breakpoints.laptopL}/ 2 - 1px));
    }
  }

  .layout-content {
    width: 100%;
    max-width: ${props => props.theme.constants.breakpoints.laptopL};
    margin: 0 auto;
    position: relative;
    padding: ${props => props.theme.constants.sectionPadding};
    min-height: ${props => props.theme.constants.sectionMinHeight};
    display: grid;
    align-content: center;
  }

  .layout-actions {
    position: fixed;
    top: 0;
    right: 0;
    margin: 20px;
    z-index: 1000;
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
    align-items: center;
  }

  .layout-logo {
    position: fixed;
    top: 0;
    left: 0;
    margin: 20px;
    width: 40px;
    height: 40px;
    z-index: 1000;
    border-radius: 50%;
    background: ${props => props.theme.colors.text};
    padding: 5px;
  }
`;
