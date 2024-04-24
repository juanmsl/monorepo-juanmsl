import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  position: relative;
  transition: all 300ms ease;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 50px 20px;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
    padding: 100px 50px;
  }

  .name {
    color: ${props => props.theme.colors.primary};
  }

  .layout-content {
    display: grid;
    gap: 20px;
    padding-top: 0 !important;
    min-height: unset !important;
    height: 100%;
    align-content: unset;
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
    min-height: 50px;
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
