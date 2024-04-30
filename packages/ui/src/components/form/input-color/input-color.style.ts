import styled from 'styled-components';

export const InputColorStyle = styled.section`
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
`;

export const InputColorSelectorStyle = styled.section`
  position: fixed;
  z-index: 1;
  display: grid;
  gap: 10px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 10px;
  border-radius: 0 18px 18px 18px;
  border: 1px solid;
  box-shadow: 0 5px 30px -5px ${props => props.theme.colors.gray1};

  .react-colorful__pointer {
    width: 1em;
    height: 1em;
    border-radius: 50%;
  }

  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer {
    width: 8px;
    height: 100%;
    border-radius: 4px;
    border-width: 2px;
  }

  .color-input {
    padding: 0.5em 1.5em;
    border-radius: 8px;
    border: 1px solid;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    width: 100%;
    font-size: ${props => props.theme.constants.typography.label.fontSize};
    font-family: ${props => props.theme.constants.fontFamily};
    letter-spacing: 2px;
    text-align: center;
  }
`;
