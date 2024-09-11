import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.secondary.main};
  color: ${props => props.theme.colors.secondary.contrast};
  position: relative;
  transition: all 300ms ease;
  display: grid;
  grid-template-rows: auto 1fr;

  .name {
    color: ${props => props.theme.colors.primary.main};
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
