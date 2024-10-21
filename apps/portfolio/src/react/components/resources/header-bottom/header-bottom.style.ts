import styled from 'styled-components';

export const HeaderBottomStyle = styled.svg`
  width: 100%;
  aspect-ratio: 8.73 / 1;
  transition: all 300ms ease;
  position: relative;
  top: 4px;
  max-height: 206px;

  #backgroundColor {
    fill: ${props => props.theme.colors.background.main};
    transform: translate(0, 20px);
  }

  #line {
    fill: ${props => props.theme.colors.tertiary.main};
    transform: translate(0, 20px);
  }
`;
