import styled from 'styled-components';

export const HeaderBottomStyle = styled.svg`
  position: absolute;
  width: 100%;
  z-index: 1;
  bottom: 0;
  left: 0;
  aspect-ratio: 8.73 / 1;
  transition: all 300ms ease;

  #backgroundColor {
    fill: ${(props) => props.theme.colors.background};
    transition: all 300ms ease;
  }

  #line {
    fill: ${(props) => props.theme.colors.tertiary};
    transition: all 300ms ease;
  }
`;
