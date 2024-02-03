import styled from 'styled-components';

export const FooterTopStyle = styled.svg`
  width: 100%;
  aspect-ratio: 7.79 / 1;
  transition: all 300ms ease;

  #backgroundColor {
    fill: ${(props) => props.theme.colors.background};
    transform: translate(0, -10px);
    transition: all 300ms ease;
  }

  #line {
    fill: ${(props) => props.theme.colors.tertiary};
    transform: translate(0, -10px);
    transition: all 300ms ease;
  }
`;
