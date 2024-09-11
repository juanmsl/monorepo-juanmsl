import styled from 'styled-components';

export const LoaderComponentStyle = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;

  .loader-icon {
    animation: rotate 750ms linear infinite;
    font-size: 2.5em;
  }
`;
