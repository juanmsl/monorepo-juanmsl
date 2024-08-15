import styled from 'styled-components';

export const ControllerLayoutStyle = styled.section`
  display: grid;
  height: 100%;
  padding: 10px;
  gap: 10px;
  grid-template:
    'sandbox' auto
    'controller' 1fr
    'examples' auto
    / 1fr;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    overflow: auto;
    grid-template:
      'sandbox controller' 1fr
      'examples css' 270px
      / 1fr 350px;
  }

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    grid-template:
      'sandbox controller' 1fr
      'examples css' 270px
      / 1fr 450px;
  }

  .shadows-item {
    border-radius: 15px;
    border: 1px solid ${props => props.theme.colors.primary};

    &-header {
      padding: 10px 20px;
      border-radius: 14px 14px 0 0;

      &:hover {
        background: ${props => props.theme.colors.primary}22;
      }

      &.is-open {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primaryContrast};
      }

      &--subtitle {
        font-family: monospace;
        display: none;

        @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
          display: inline-block;
        }
      }
    }

    &-body {
      padding: 10px 20px 20px;
    }
  }

  .delete-shadow-icon {
    transition: all 100ms ease;
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    border: 1px solid;
    padding: 4px;
    font-size: 1em;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primaryContrast};

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }
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
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 15px;

  .controller-tabs {
    grid-area: tabs;
    display: grid;
    grid-template-columns: 1fr 1fr;

    &--tab {
      cursor: pointer;
      text-align: center;
      padding: 1em;
      background: transparent;
      border-radius: 13px 13px 0 0;
      transition: all 300ms ease;

      &:hover {
        letter-spacing: 1px;
        background: ${props => props.theme.colors.text}11;
      }

      &.is-open {
        background: ${props => props.theme.colors.secondary};
        backdrop-filter: blur(2px);
      }
    }
  }

  .controller-controls {
    grid-area: controls;
    height: 100%;
    overflow: auto;
    background: ${props => props.theme.colors.secondary};
    backdrop-filter: blur(2px);
    padding: 10px;

    &--accordeon {
      height: 100%;
      overflow: auto;
      gap: 10px;
      align-content: start;
    }

    &--content {
      display: grid;
      gap: 20px;
      padding: 10px 20px 20px;
    }
  }

  .controller-actions {
    grid-area: actions;
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
    grid-auto-columns: 1fr;
    padding: 10px;
    background: ${props => props.theme.colors.text}22;
    backdrop-filter: blur(2px);
    border-radius: 0 0 15px 15px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      grid-auto-flow: column;
    }
  }
`;

export const CSSStyle = styled.section`
  grid-area: css;
  width: 100%;
  height: 100%;
  overflow: auto;
  border: 2px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  display: none;
  position: relative;
  cursor: pointer;
  border-radius: 15px;

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
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border-top: 2px solid ${props => props.theme.colors.gray5};
    border-left: 2px solid ${props => props.theme.colors.gray5};
    display: grid;
    place-content: center;
    text-align: center;
    padding: 0.5em 1em;
    opacity: 0;
    transition: opacity 300ms ease;
    border-radius: 13px 0;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
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
  border-radius: 15px;
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
  background: ${props => props.theme.colors.secondary};
  backdrop-filter: blur(2px);
  border-radius: 15px;
  border: 2px solid ${props => props.theme.colors.primary};
`;
