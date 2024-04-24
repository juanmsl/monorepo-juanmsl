import styled from 'styled-components';

export const RouterStyle = styled.main`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100dvh;
  background-image: radial-gradient(${props => props.theme.colors.text}33 1px, transparent 1px),
    radial-gradient(${props => props.theme.colors.text}33 1px, transparent 1px);
  background-size: 40px 40px;
  background-position:
    0 0,
    20px 20px;
`;
