import styled from 'styled-components';

export const SandboxLayoutStyle = styled.section`
  display: grid;
  grid-template: 1fr / auto 1fr;
  height: 100%;
  overflow: auto;

  .sandbox-layout-content {
    height: 100%;
    overflow: auto;
    display: grid;
  }
`;
