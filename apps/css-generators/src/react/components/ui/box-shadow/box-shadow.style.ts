import styled from 'styled-components';

export const BoxShadowStyle = styled.section`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.tertiaryContrast};
  display: grid;
  padding: 2em;
  place-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 300ms ease;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }

  .example-text {
    opacity: 0;
    transition: all 300ms ease;
    height: 0;
  }

  &:hover {
    transform: scale(1.05);

    .example-text {
      opacity: 1;
      height: 46px;
    }
  }
`;
