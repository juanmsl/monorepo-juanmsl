import styled from 'styled-components';

export const SandboxLayoutStyle = styled.section`
  display: grid;
  grid-template: 1fr / auto 1fr;
  height: 100%;
  overflow: auto;
`;

export const SandboxAccordionHeader = styled.section`
  display: grid;

  .header-subtitle {
    font-family: monospace;
    display: none;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: inline-block;
    }
  }
`;
