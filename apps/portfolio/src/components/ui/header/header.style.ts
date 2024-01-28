import styled from "styled-components";

type HeaderStyleProps = {
  $background: string;
}

export const HeaderStyle = styled.header<HeaderStyleProps>`
  display: grid;
  position: relative;
  color: ${props => props.theme.colors.primary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.$background}) center center / cover no-repeat fixed ${props => props.theme.colors.secondary}B3;
    background-blend-mode: soft-light;
    filter: opacity(50%) grayscale(15%);
  }

  .container {
    padding: 5rem 100px;
    display: grid;
    place-content: center;
    gap: 15px;
    user-select: none;
  }

  .names {
    text-align: center;
    text-transform: uppercase;
  }

  .user-labels {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 2rem;
    color: ${props => props.theme.colors.text};

    .user-label {
      transition: all 0.3s ease;
      line-height: 1em;
      padding: .2em .5em;
      border-radius: 5px;
      font-weight: 500;

      &:hover {
        color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primaryContrast};
      }
    }
  }
`;
