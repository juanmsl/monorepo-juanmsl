import styled from 'styled-components';

export const ProfilePictureStyle = styled.section`
  width: 100%;
  max-width: 400px;
  color: ${props => props.theme.colors.primary};
  transition: all 300ms ease;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    width: 400px;
    max-width: unset;
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
    width: 496px;
  }

  svg {
    transition: all 150ms ease-out;
    width: 100%;
  }

  #background {
    transition: all 300ms ease;
  }

  &:hover svg {
    filter: drop-shadow(0 5px 15px ${props => props.theme.colors.text}55);
  }
`;
