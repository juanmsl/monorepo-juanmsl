import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  place-content: center;
  z-index: 999999;
  padding: 10vh 10vh;
`;

export const ModalWrapper = styled.div<{ width?: string; height?: string }>`
  padding: 30.5px 0 28px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  background: white;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  max-width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: auto;
  gap: 1em;

  .modal-header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;

    .modal-title {
      margin: 0;
      font-size: 16px;
      line-height: 18.75px;
      font-weight: 700;
      color: #2196f3;
    }

    .modal-close {
      cursor: pointer;
      background: transparent;
      border: 0;
    }
  }

  .modal-body {
    overflow: auto;
    height: 100%;

    &--content {
      padding: 0 28px;
    }
  }
`;
