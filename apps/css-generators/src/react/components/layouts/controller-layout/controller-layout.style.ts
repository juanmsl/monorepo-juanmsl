import styled from 'styled-components';

export const ControllerLayoutStyle = styled.section`
  display: grid;
  gap: 50px;
  align-content: start;
  padding: 50px clamp(20px, 5.555%, 100px);
  height: 100%;
  overflow: auto;
  grid-template:
    'controller' 1fr
    'examples' 222px
    / 1fr;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    grid-template:
      'examples controller' auto
      / auto 1fr;
  }

  .shadows-item-header {
    padding: 20px;

    &.is-open {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }
  }

  .shadows-item-body {
    padding: 10px 20px 20px;

    .input-ranges {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 20px;
    }
  }
`;

export const ControllerStyle = styled.section`
  grid-area: controller;
  display: grid;
  grid-template-areas: 'controller-sandbox' 'controller-controls';
  gap: 20px;
  align-content: start;

  .controller-controls {
    grid-area: controller-controls;
    display: grid;
    gap: 20px;
    grid-template-rows: auto 1fr;
    align-items: start;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      max-width: 450px;
    }

    &--actions {
      display: grid;
      grid-auto-flow: row;
      gap: 20px;
      padding: 0 10px 10px;
      grid-auto-columns: 1fr;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
        grid-auto-flow: column;
      }
    }
  }

  .controller-sandbox {
    grid-area: controller-sandbox;
    display: grid;
    gap: 20px;
    grid-auto-flow: row;
    align-content: start;

    &--container {
      background: white;
      width: 100%;
      height: 300px;
      border-radius: 5px;
      display: grid;
      place-content: center;
      padding: 1em;
      box-shadow: 0 0 15px 0 ${props => props.theme.colors.black}88 inset;
      border: 1px solid ${props => props.theme.colors.text};
    }
  }
`;

export const ExamplesStyle = styled.section`
  grid-area: examples;
  display: grid;
  grid-template: auto / none;
  grid-auto-flow: column;
  gap: 80px;
  height: 100%;
  overflow: auto;
  place-content: start;
  padding: 50px;
  max-height: 100%;
  border: 1px solid;
  border-radius: 25px;
  justify-items: center;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    grid-template: 150px / 150px;
    grid-auto-flow: unset;
  }
`;
