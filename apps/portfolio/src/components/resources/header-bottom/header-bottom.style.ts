import styled from "styled-components";

export const HeaderBottomStyle = styled.svg`
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 0;
  left: 0;
  height: 250px;

  #backgroundColor {
    fill: ${props => props.theme.colors.background};
    transform: translate(0, 10px);
  }

  #line {
    fill: ${props => props.theme.colors.tertiary};
    transform: translate(0, 10px);
  }
`;
