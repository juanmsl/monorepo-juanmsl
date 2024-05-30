import styled from 'styled-components';

export const InputColorStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;

  .input-color-value {
    margin-left: 10px;
  }
`;

export const InputColorBoxStyle = styled.section`
  background: white;
  border-radius: 5px;
  border: 2px solid;
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    border-radius: inherit;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-conic-gradient(#cccccc 0% 25%, white 0% 50%) 50% / 8px 8px;
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

  .color-input-container {
    display: grid;
    grid-template-columns: 16px 1fr 16px;
    align-items: center;
    gap: 10px;
    border: 1px solid;
    border-radius: 8px;
    padding: 0.5em;
    width: 100%;
    max-width: 200px;
  }

  .color-input {
    padding: 0;
    border-radius: inherit;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    width: 100%;
    font-size: ${props => props.theme.constants.typography.label.fontSize};
    font-family: ${props => props.theme.constants.fontFamily};
    letter-spacing: 2px;
    text-align: center;
  }
`;
