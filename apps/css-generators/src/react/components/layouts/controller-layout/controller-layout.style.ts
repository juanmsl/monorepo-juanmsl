import styled from 'styled-components';

export const ControllerLayoutStyle = styled.section`
  display: grid;
  height: 100%;
  overflow: auto;
  padding: 10px;
  gap: 10px;
  grid-template:
    'sandbox' auto
    'controller' 1fr
    'examples' auto
    / 1fr;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    grid-template:
      'sandbox controller' 1fr
      'examples css' 270px
      / 1fr 450px;
  }
`;

export const ControllerStyle = styled.section`
  grid-area: controller;
  display: grid;
  grid-template:
    'tabs' auto
    'controls' 1fr
    'actions' auto / 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;
  height: 100%;
  overflow: auto;

  .controller-tabs {
    grid-area: tabs;
    display: grid;
    grid-template-columns: 1fr 1fr;

    &--tab {
      cursor: pointer;
      text-align: center;
      padding: 0.5em 1em;
      background: transparent;
      border-radius: 5px 5px 0 0;
      transition: all 300ms ease;

      &:hover {
        letter-spacing: 1px;
      }

      &.is-open {
        background: ${props => props.theme.colors.text}11;
        color: ${props => props.theme.colors.primary};
        backdrop-filter: blur(2px);
      }
    }
  }

  .controller-controls {
    grid-area: controls;
    height: 100%;
    overflow: auto;
    align-content: start;
    background: ${props => props.theme.colors.text}11;
    backdrop-filter: blur(2px);
    padding: 1em 0;
  }

  .controller-actions {
    grid-area: actions;
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
    grid-auto-columns: 1fr;
    padding: 10px;
    background: ${props => props.theme.colors.text}11;
    backdrop-filter: blur(2px);

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      grid-auto-flow: column;
    }
  }
`;

export const CSSStyle = styled.section`
  grid-area: css;
  width: 100%;
  height: 100%;
  overflow: auto;
  border: 2px solid;
  background: ${props => props.theme.colors.gray2};
  color: ${props => props.theme.colors.white};
  display: none;
  position: relative;
  cursor: pointer;

  .code {
    height: 100%;
    overflow: auto;
  }

  pre.shiki {
    height: 100%;
    padding: 1em;
    margin: 0;
    user-select: none;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    background: ${props => props.theme.colors.gray2};
    color: ${props => props.theme.colors.white};
    border-top: 2px solid;
    border-left: 2px solid;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 0.5em 1em;
    opacity: 0;
    transition: opacity 300ms ease;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    display: grid;
  }
`;

export const SandboxStyle = styled.section`
  grid-area: sandbox;
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-content: center;
  padding: 1em;
`;

export const ExamplesStyle = styled.section`
  grid-area: examples;
  display: grid;
  grid-template: 1fr / 1fr;
  grid-auto-flow: column;
  gap: 80px;
  height: 100%;
  overflow-x: auto;
  place-content: start;
  min-height: 100%;
  padding: 60px;
  justify-items: center;
  background: ${props => props.theme.colors.text}11;
  backdrop-filter: blur(2px);
`;
