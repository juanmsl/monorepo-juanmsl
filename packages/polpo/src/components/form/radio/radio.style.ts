import styled from 'styled-components';

export const RadioFillStyle = styled.section`
  transition: all 200ms ease-out;
  border-radius: inherit;
  margin: auto;
  width: 0;
  height: 0;
`;

export const RadioStyle = styled.section`
  border-radius: 50%;
  background: ${props => props.theme.colors.background.paper};
  transition: all 300ms ease;
  width: 1em;
  height: 1em;
  outline: 2px solid;
  display: flex;
  position: relative;
  padding: 2px;

  .radio-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 1;
  }
`;

type RadioContainerStyleProps = {
  $color: string;
};

export const RadioContainerStyle = styled.section<RadioContainerStyleProps>`
  display: flex;
  align-items: center;
  gap: 1em;
  width: fit-content;

  .radio-label {
    cursor: pointer;
    user-select: none;
  }

  ${RadioStyle} {
    color: ${props => props.$color};

    &.is-checked {
      ${RadioFillStyle} {
        width: 100%;
        height: 100%;
        background: ${props => props.$color};
      }
    }
  }

  ${RadioStyle}:hover,
  &:has(.radio-label:hover) ${RadioStyle} {
    box-shadow: 0 0 0 0.4em ${props => props.$color}88;

    ${RadioFillStyle} {
      width: 20%;
      height: 20%;
      background: ${props => props.$color}88;
    }

    &:is(.is-checked) {
      ${RadioFillStyle} {
        width: 80%;
        height: 80%;
        background: ${props => props.$color};
      }
    }
  }
`;
