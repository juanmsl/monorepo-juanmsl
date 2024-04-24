import styled from 'styled-components';

export const HomeStyle = styled.main`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  margin: 0 auto;

  .generators {
    display: grid;
    grid-template-columns: repeat(auto-fit, 280px);
    place-content: start center;
    gap: 40px;
    padding: 50px clamp(20px, 5.555%, 100px);
  }

  .home-header {
    text-align: center;
    padding: 50px clamp(20px, 5.555%, 100px);
  }

  .card {
    aspect-ratio: 4/3;
    border: 2px solid;
    background: ${props => props.theme.colors.white}88;
    display: grid;
    place-content: center;
    justify-items: center;
    padding: 1em;
    border-radius: 5px;
    transition: all 300ms ease;
    box-shadow: 0 0 16px 8px ${props => props.theme.colors.black}55 inset;
    text-decoration: none;
    color: inherit;

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      box-shadow:
        0 0 16px 8px ${props => props.theme.colors.black}55 inset,
        0 50px 100px 0 ${props => props.theme.colors.black}55,
        0 30px 60px -10px ${props => props.theme.colors.black}55;
    }
  }

  .box-shadow {
    width: 200px;
    border: 1px solid;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondaryContrast};
    padding: 10px 10px 20px;
    box-shadow:
      8px 8px 0 0 ${props => props.theme.colors.text}64,
      16px 16px 0 0 ${props => props.theme.colors.text}48,
      24px 24px 0 0 ${props => props.theme.colors.text}32;
  }

  .text-shadow {
    text-shadow:
      10px 10px 0 ${props => props.theme.colors.text}32,
      20px 20px 0 ${props => props.theme.colors.text}16,
      30px 30px 0 ${props => props.theme.colors.text}08;
  }
`;
