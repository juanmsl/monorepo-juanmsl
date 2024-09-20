import styled from 'styled-components';

export const AccordionStyle = styled.section`
  display: grid;
`;

export const AccordionItemStyle = styled.section`
  display: grid;
  position: relative;

  .accordion-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    position: sticky;
    top: 0;
    padding: 20px 0;
    background: ${props => props.theme.colors.background.main};

    &.has-start-content {
      grid-template-columns: auto 1fr auto;
    }
  }

  .accordion-header-content {
    display: grid;
  }

  .accordion-toggle-icon {
    transition: all 300ms ease;

    &.isOpen {
      transform: rotate(-90deg);
    }
  }

  .accordion-body {
    overflow: hidden;
  }

  .accordion-body-content {
    padding: 10px 0 20px;
  }
`;
