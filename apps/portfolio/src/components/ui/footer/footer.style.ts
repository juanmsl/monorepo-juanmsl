import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  position: relative;
  padding-top: 100px;
  transition: all 300ms ease;

  .name {
    color: ${props => props.theme.colors.primary};
  }

  .layout-content {
    display: grid;
    gap: 20px;
  }

  .footer-logo {
    width: 50px;
    height: 50px;
  }

  .copyright {
    text-align: center;
  }

  .footer-content {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 100px;
    margin-bottom: 350px;
  }

  .location {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .columns {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;
