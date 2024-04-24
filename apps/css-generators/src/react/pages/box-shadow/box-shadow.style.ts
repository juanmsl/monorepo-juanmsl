import styled from 'styled-components';

export const BoxShadowStyle = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;

  .box-shadow-examples {
    display: grid;
    grid-template: auto / none;
    grid-auto-flow: column;
    gap: 80px;
    overflow: auto;
    place-content: start;
    padding: 60px;
    max-height: 60dvh;
    max-width: 1000px;
    border: 1px solid;
    border-radius: 25px;
    justify-items: center;

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.laptopL}) {
      grid-template: auto / repeat(auto-fit, minmax(150px, 1fr));
      grid-auto-flow: unset;
    }
  }

  .box-shadow-body {
    display: grid;
    grid-template: 1fr auto / 1fr;
    gap: 50px;
    padding: 50px clamp(20px, 5.555%, 100px);

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.laptopL}) {
      grid-template: auto / auto 1fr;
    }
  }
`;
