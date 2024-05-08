import styled from 'styled-components';

export const ModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.black}AA;
  display: grid;
  place-content: center;
  z-index: 1;
`;
