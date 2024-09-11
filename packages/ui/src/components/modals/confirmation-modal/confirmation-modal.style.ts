import { styled } from 'styled-components';

export const ConfirmationModalStyle = styled.section`
  display: grid;
  max-width: 450px;
  gap: 1em;
  place-content: center;
  justify-items: center;
  text-align: center;

  .confirmation-modal-actions {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 1em;
  }
`;
