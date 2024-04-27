import styled from 'styled-components';

export const ControllerLayoutStyle = styled.section`
  display: grid;
  padding: 20px;
  height: 100%;
  overflow: auto;
  gap: 20px;
  grid-template:
    'sandbox' auto
    'controller' 1fr
    'examples' 222px
    / 1fr;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    grid-template:
      'sandbox controller' 1fr
      'examples examples' auto
      / 1fr auto;
  }
`;

export const ControllerStyle = styled.section`
  grid-area: controller;
  display: grid;
  gap: 20px;
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
  }

  .controller-controls {
    grid-area: controls;
    height: 100%;
    overflow: auto;
    align-content: start;
    background: ${props => props.theme.colors.text}11;
    backdrop-filter: blur(2px);
    border: 1px solid ${props => props.theme.colors.text};
  }

  .controller-actions {
    grid-area: actions;
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
    grid-auto-columns: 1fr;
    padding: 0 4px 4px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      grid-auto-flow: column;
    }
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
  background: ${props => props.theme.colors.text}11;
  backdrop-filter: blur(2px) opacity(0.5);
  border: 1px solid ${props => props.theme.colors.text};
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
  border: 1px solid ${props => props.theme.colors.text};
`;
