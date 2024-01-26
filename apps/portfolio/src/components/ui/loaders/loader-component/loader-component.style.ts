import styled from "styled-components";

export const LoaderComponentStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;

  .loader-icon {
    animation: rotate 750ms linear infinite, colors 1s linear infinite;
    font-size: 2.5em;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes colors {
    0%, 100% {
      color: ${props => props.theme.colors.text};
    }
    50% {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
