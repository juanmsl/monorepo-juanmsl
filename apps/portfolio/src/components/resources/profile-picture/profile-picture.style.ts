import styled from "styled-components";

export const ProfilePictureStyle = styled.section`

  svg {
    transition: all 150ms ease-out;
  }

  #background {
    transition: all 300ms ease;
  }

  &:hover svg {
    filter: drop-shadow(0 5px 15px ${props => props.theme.colors.text}55);
  }
`;
