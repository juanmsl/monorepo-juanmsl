import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  display: grid;
  position: relative;
  transition: all 300ms ease;
  grid-template-rows: auto 1fr;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 5px;
    height: 100%;
    z-index: 5;
    background: ${props => props.theme.colors.primary};
    transition: background 300ms ease;
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

  .main-layout-content {
    display: grid;
  }

  .layout-content {
    width: 100%;
    max-width: ${props => props.theme.constants.breakpoints.laptopL};
    margin: 0 auto;
    padding: 50px 20px;
    min-height: ${props => props.theme.constants.sectionMinHeight};
    display: grid;
    align-content: center;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      padding: 100px 50px;
    }
  }

  .layout-actions {
    position: fixed;
    top: 0;
    right: 0;
    margin: 20px;
    z-index: 6;
    display: none;
    grid-auto-flow: row;
    gap: 20px;
    justify-items: end;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      display: grid;
    }
  }

  .layout-logo {
    position: fixed;
    top: 0;
    left: 0;
    margin: 20px;
    width: 40px;
    height: 40px;
    z-index: 6;
    border-radius: 50%;
    background: ${props => props.theme.colors.text};
    transition: all 300ms ease;
    padding: 5px;
  }
`;
