import styled from "styled-components";

type SocialIconsStyleProps = {
  $gap: string;
}

export const SocialIconsStyle = styled.section<SocialIconsStyleProps>`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.$gap};
  font-size: 1.3em;

  .social-icon {
    color: inherit;
    border-radius: 50%;
    display: grid;
    place-content: center;
    width: 2em;
    height: 2em;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }
  }
`;
