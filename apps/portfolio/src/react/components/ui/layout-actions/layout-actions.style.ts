import styled from 'styled-components';

export const LayoutActionsStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
  z-index: 6;
  display: none;
  grid-auto-flow: row;
  gap: 20px;
  justify-items: end;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
    display: grid;
  }
`;
