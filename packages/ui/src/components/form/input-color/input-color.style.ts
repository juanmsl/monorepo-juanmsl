import styled from 'styled-components';

export const InputColorStyle = styled.section`
  display: grid;

  input {
    padding: 0;
    margin: 0;
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .content {
    background: white;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.white};
    width: 25px;
    height: 25px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      border-radius: 5px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      z-index: -1;
    }
  }
`;
