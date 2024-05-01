import styled from 'styled-components';

export const BoxShadowStyle = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow: auto;

  .box-shadow-box {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    text-align: center;
  }

  .box-shadow-container-controls {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    justify-content: center;
  }

  .shadows-item-header {
    padding: 10px 20px;

    &.is-open {
      position: sticky;
      top: 0;
      z-index: 1;
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }
  }

  .shadows-item-body {
    padding: 10px 20px 20px;

    .input-ranges {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px 20px;
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
