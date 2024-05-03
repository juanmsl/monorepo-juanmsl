import styled from 'styled-components';

export const TextShadowStyle = styled.section`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 20px;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }
`;
