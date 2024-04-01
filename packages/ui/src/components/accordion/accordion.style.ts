import styled from 'styled-components';

export const AccordionStyle = styled.section`
  display: grid;
  gap: 20px;
`;

export const AccordionItemStyle = styled.section`
  display: grid;

  .accordion-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    &.has-start-content {
      grid-template-columns: auto 1fr auto;
    }
  }

  .accordion-header-content {
    display: grid;
    gap: 5px;
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
    padding: 20px 0;
  }
`;
