import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
  overflow: auto;
  background-size: 40px 40px;
  background-position:
    0 0,
    20px 20px;
  background-image: radial-gradient(${props => props.theme.colors.text.main}55 1px, transparent 1px),
    radial-gradient(${props => props.theme.colors.text.main}55 1px, transparent 1px);
`;
