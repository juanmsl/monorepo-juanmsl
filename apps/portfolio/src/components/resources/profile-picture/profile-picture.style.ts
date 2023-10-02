import styled from "styled-components";

export const ProfilePictureStyle = styled.section`

  svg {
    transition: all 150ms ease-out;
  }

  &:hover svg {
    filter: drop-shadow(0 5px 15px ${props => props.theme.colors.text}55);
  }
`;
