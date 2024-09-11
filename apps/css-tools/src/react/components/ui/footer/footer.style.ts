import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.secondary.main};
  color: ${props => props.theme.colors.secondary.contrast};
  position: relative;
  transition: all 300ms ease;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 10px;

  .copyright {
    text-align: center;
  }
`;
