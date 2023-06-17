import { createGlobalStyle } from 'styled-components';

export const InfiniteScrollStyle = createGlobalStyle`
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

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;
