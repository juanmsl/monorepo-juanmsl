import styled from 'styled-components';

type InputRangeStyleProps = {
  $isFocus: boolean;
};

export const InputRangeStyle = styled.section<InputRangeStyleProps>`
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  gap: 10px;

  .input-range {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: grid;
    align-items: center;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 1em;
      background: ${props => (props.$isFocus ? props.theme.colors.primary : props.theme.colors.text)};
      box-shadow: 0 0 0 1px ${props => props.theme.colors.gray5};
      margin-top: -6px;
      transition: all 300ms ease;
      cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
      height: 8px;
      border-radius: 1em;
      background: ${props => props.theme.colors.gray6};
    }

    &:focus,
    &:hover {
      &::-webkit-slider-thumb {
        background: ${props => props.theme.colors.primary};
        box-shadow: 0 0 0 6px ${props => props.theme.colors.primary}88;
      }
    }

    &:active {
      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 12px ${props => props.theme.colors.primary}88;
      }
    }

    &:focus {
      &::-webkit-slider-runnable-track {
        background: ${props => props.theme.colors.secondary}88;
      }
    }
  }

  .input-range-number {
    transition: all 300ms ease;
    border: 1px solid;
    border-radius: 5px;
    text-align: center;
    font-size: ${props => props.theme.constants.typography.label.fontSize};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    padding: 4px 8px;
    font-weight: bold;
    color: ${props => (props.$isFocus ? props.theme.colors.primary : 'inherit')};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
