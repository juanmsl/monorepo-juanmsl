import styled from 'styled-components';

export const SimpleLoaderStyle = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;

  .simple-loader-spinner {
    animation: spin linear infinite;
    font-size: 3em;
  }
`;
