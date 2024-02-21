import styled from 'styled-components';

export const LoaderLogoStyle = styled.section`
  height: 100%;
  min-height: 100vh;
  font-family: ${(props) => props.theme.constants.fontFamily};
  display: grid;
  place-content: center;
  justify-items: center;
  text-align: center;
  gap: 40px;
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );

  .loader-icon {
    animation:
      rotate 750ms linear infinite,
      colors 1s linear infinite;
    font-size: 2em;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
