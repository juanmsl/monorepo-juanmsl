import styled from 'styled-components';

type ModalOverlayStyleProps = {
  $opacity: number;
};

export const ModalOverlayStyle = styled.section<ModalOverlayStyleProps>`
  animation: fadeIn 300ms ease;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props => props.$opacity};
`;
