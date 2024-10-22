import styled, { css } from 'styled-components';

export const ProfilePictureStyle = styled.section`
  width: 80%;
  max-width: 350px;
  color: ${props => props.theme.colors.primary.main};

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    width: 400px;
    max-width: unset;
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
    width: 496px;
  }

  svg {
    width: 100%;
  }

  &:hover svg {
    filter: drop-shadow(0 5px 15px ${props => props.theme.colors.text.main}55);
  }

  ${({ theme }) =>
    theme.name === 'dark' &&
    css`
      #profilePicture {
        filter: grayscale(100%);
        transition: all 300ms ease;
      }

      &:hover {
        #profilePicture {
          filter: grayscale(0);
        }
      }
    `}
`;
