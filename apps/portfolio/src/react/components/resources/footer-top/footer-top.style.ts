import styled from 'styled-components';

export const FooterTopStyle = styled.svg`
  width: 100%;
  aspect-ratio: 7.79 / 1;
  transition: all 300ms ease;

  #backgroundColor {
    fill: ${props => props.theme.colors.background.main};
    transform: translate(0, -10px);
  }

  #line {
    fill: ${props => props.theme.colors.tertiary.main};
    transform: translate(0, -10px);
  }
`;
