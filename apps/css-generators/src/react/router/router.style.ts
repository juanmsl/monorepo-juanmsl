import styled from 'styled-components';

export const RouterStyle = styled.main`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100dvh;
  background-image: radial-gradient(${props => props.theme.colors.secondary} 2px, transparent 2px),
    radial-gradient(${props => props.theme.colors.secondary} 2px, transparent 2px);
  background-size: 30px 30px;
  background-position:
    0 0,
    15px 15px;
`;
