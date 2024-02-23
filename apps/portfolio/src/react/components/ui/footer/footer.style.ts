import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  position: relative;
  transition: all 300ms ease;
  display: grid;
  grid-template-rows: auto 1fr;

  .name {
    color: ${props => props.theme.colors.primary};
  }

  .layout-content {
    display: grid;
    gap: 20px;
    padding-top: 0 !important;
    min-height: unset;
    height: 100%;
    align-content: unset;
    grid-template-rows: auto auto 1fr auto auto auto;
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
    min-height: 350px;
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
    justify-items: center;
    gap: 20px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
