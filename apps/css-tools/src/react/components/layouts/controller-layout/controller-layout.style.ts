import styled from 'styled-components';

import { SectionCard } from '@components/ui';

export const ControllerLayoutStyle = styled.section`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 450px;
  overflow: auto;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    overflow: auto;
    grid-template-columns: 1fr 470px;
    grid-template-rows: 1fr;
  }

  .controller-layout-content {
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .controller-layout-controls {
    display: grid;
    gap: 10px;
    grid-template-rows: 1fr;
    padding: 0 10px 10px 10px;
    height: 100%;
    overflow: auto;

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      grid-template-rows: 1fr 270px;
      padding: 10px 10px 10px 0;
    }
  }

  .shadows-item {
    border-radius: 15px;
    border: 1px solid ${props => props.theme.colors.primary.main};

    &-header {
      padding: 10px 20px;
      border-radius: 14px;
      transition: all 300ms ease;

      &:hover {
        background: ${props => props.theme.colors.primary.light}22;
      }

      &.is-open {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${props => props.theme.colors.primary.main};
        color: ${props => props.theme.colors.primary.contrast};
        border-radius: 14px 14px 0 0;
      }

      &--subtitle {
        display: none;

        @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
          display: inline-block;
        }
      }
    }

    &-body {
      padding: 20px;
      display: grid;
      background: ${props => props.theme.colors.background.main};
      gap: 1em;
      border-radius: 0 0 14px 14px;
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
    color: ${props => props.theme.colors.primary.main};
    background: ${props => props.theme.colors.primary.contrast};

    &:hover {
      background: ${props => props.theme.colors.primary.main};
      color: ${props => props.theme.colors.primary.contrast};
    }
  }
`;

export const ControllerStyle = styled(SectionCard)`
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
    border-radius: 13px 13px 0 0;
    padding: 0.5em;

    &--tab {
      cursor: pointer;
      text-align: center;
      padding: 1em;
      background: transparent;
      border-radius: 13px 13px 0 0;
      transition: all 300ms ease;

      &:hover {
        letter-spacing: 1px;
        background: ${props => props.theme.colors.text.main}11;
      }

      &.is-open {
        background: ${props => props.theme.colors.background.paper};
        backdrop-filter: blur(2px);
      }
    }
  }

  .controller-controls {
    grid-area: controls;
    height: 100%;
    overflow: auto;
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
    border-radius: 0 0 15px 15px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      grid-auto-flow: column;
    }
  }
`;

export const CSSStyle = styled(SectionCard)`
  width: 100%;
  height: 100%;
  overflow: auto;
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
    background: ${props => props.theme.colors.primary.main};
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

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    display: grid;
  }
`;

export const SandboxStyle = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
  height: 100%;
`;

export const ExampleTriggerStyle = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.colors.background.paper};
  width: 2em;
  height: 2em;
  padding: 1em;
  border-radius: 50%;
  margin: 1em;
  cursor: pointer;
  display: grid;
  place-content: center;
  transition: all 300ms ease;
  font-size: 1.5em;
  zindex: 200;

  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
  }
`;

export const ExamplesStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  padding: 4em 2em;
  place-content: center;
  zip-index: 100;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.background.paper}AA,
    ${props => props.theme.colors.background.paper}
  );

  &.is-open {
    top: 0;
  }
`;
