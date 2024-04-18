import styled from 'styled-components';

export const BoxShadowStyle = styled.section`
  display: grid;
  grid-template-areas: 'card' 'controls';
  grid-template-columns: 1fr;
  gap: 50px;
  align-content: start;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
    grid-template-areas: 'card controls';
    grid-template-columns: 300px 450px;
  }

  .box-shadow-controls {
    display: grid;
    gap: 20px;
    grid-template-rows: auto 1fr;
    align-items: start;
    grid-area: controls;
    max-width: 450px;

    &--actions {
      display: grid;
      grid-auto-flow: row;
      gap: 20px;
      padding: 0 10px 10px;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
        justify-content: center;
        grid-auto-flow: column;
      }
    }
  }

  .shadows-item-header {
    padding: 20px;
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

export const BoxShadowSandBoxStyle = styled.section`
  display: grid;
  gap: 20px;
  grid-area: card;
  grid-auto-flow: row;
  align-content: start;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
    grid-auto-flow: column;
    align-items: center;
    width: fit-content;
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
    grid-auto-flow: row;
    align-content: start;
  }

  .box-shadow-container {
    width: 100%;
    height: 250px;
    border-radius: 25px;
    display: grid;
    place-content: center;
    padding: 1em;
    box-shadow: 0 0 20px 0 ${props => props.theme.colors.black} inset;
    border: 5px solid ${props => props.theme.colors.white};

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      width: 300px;
      height: 300px;
    }
  }

  .box-shadow-box {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 20px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      width: 150px;
      height: 150px;
    }
  }

  .box-shadow-container-controls {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    justify-content: center;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      grid-auto-flow: row;
    }

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
      grid-auto-flow: column;
    }
  }
`;

export const AccordionHeader = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 20px;

  .accordion-text {
    display: grid;
  }

  .accordion-actions {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    align-items: center;
  }

  .delete-shadow-icon {
    transition: all 100ms ease;
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    border: 1px solid;
    padding: 4px;
    font-size: 1em;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  .box-shadow-css {
    font-family: monospace;
    display: none;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      display: inline-block;
    }
  }
`;
