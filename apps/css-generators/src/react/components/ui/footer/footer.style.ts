import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  position: relative;
  transition: all 300ms ease;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 20px;

  .layout-content {
    display: grid;
    gap: 20px;
    height: 100%;
  }

  .copyright {
    text-align: center;
  }
`;
