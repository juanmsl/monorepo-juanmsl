import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};
  position: relative;
  transition: all 300ms ease;
  display: grid;
  grid-template-rows: auto 1fr;

  .name {
    color: ${props => props.theme.colors.primary.main};
  }

  .footer-layout-content {
    display: grid;
    gap: 20px;
    padding-bottom: 100px;
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

  .footer-heart {
    animation: pulse 1s infinite;
    display: inline-block;
  }

  .footer-label {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
  }

  .footer-link {
    color: ${props => props.theme.colors.primary.main};
    transition: color 300ms ease;
    position: relative;
    display: inline-block;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: ${props => props.theme.colors.primary.main};
      transition: all 300ms ease;
      z-index: 0;
    }

    &:hover {
      color: ${props => props.theme.colors.text.main};
    }
  }
`;
