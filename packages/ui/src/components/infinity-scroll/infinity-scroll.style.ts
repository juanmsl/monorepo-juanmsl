import styled from 'styled-components';

export const InfiniteScrollStyle = styled.section`
  display: grid;
  gap: 1em;
`;

export const InfinityScrollFooterStyle = styled.section`
  display: grid;
  place-content: start center;
  place-items: start center;

  .loading {
    width: 100%;
    height: 30px;
    display: grid;
    place-content: center;

    &--icon {
      animation: spin 0.5s linear infinite;
      font-size: 20px;
    }
  }

  .empty-message {
    font-size: 0.8em;
    text-align: center;
    color: #a6a6a6;
  }
`;
