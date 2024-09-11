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
    transition: all 300ms ease;
  }

  #line {
    fill: ${props => props.theme.colors.tertiary.main};
    transition: all 300ms ease;
  }
`;
