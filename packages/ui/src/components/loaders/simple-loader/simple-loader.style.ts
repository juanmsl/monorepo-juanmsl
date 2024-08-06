import styled from 'styled-components';

export const SimpleLoaderStyle = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  padding: 1em;

  .simple-loader-spinner {
    animation: spin 300ms linear infinite;
    font-size: 3em;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;
