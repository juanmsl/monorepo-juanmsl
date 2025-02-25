import styled from 'styled-components';

export const CheckboxFillStyle = styled.section`
  transition: all 200ms ease-out;
  border-radius: inherit;
  margin: auto;
  width: 0;
  height: 0;
  overflow: hidden;
  position: relative;
  display: grid;
  place-content: center;
  place-items: center;

  .checkbox-icon {
    font-size: 0.7em;
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms ease;
  }
`;

export const CheckboxStyle = styled.section`
  border-radius: 40%;
  background: ${props => props.theme.colors.background.paper};
  transition: all 300ms ease;
  width: 1em;
  height: 1em;
  margin: 2px;
  outline: 1px solid;
  display: flex;
  position: relative;

  .checkbox-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
`;

type CheckboxContainerStyleProps = {
  $color: string;
  $colorIcon: string;
};

export const CheckboxContainerStyle = styled.section<CheckboxContainerStyleProps>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr;
  align-items: center;
  gap: 0.5em;
  width: fit-content;

  .checkbox-label {
    cursor: pointer;
    user-select: none;
    width: 100%;
  }

  ${CheckboxStyle} {
    color: ${props => props.$color};

    &.is-checked {
      ${CheckboxFillStyle} {
        width: 100%;
        height: 100%;
        background: ${props => props.$color};
        color: ${props => props.$colorIcon};
      }

      .checkbox-icon {
        opacity: 1;
      }
    }
  }

  ${CheckboxStyle}:hover,
  &:has(.checkbox-label:hover) ${CheckboxStyle} {
    box-shadow: 0 0 0 0.3em ${props => props.$color}88;
    padding: 2px;

    ${CheckboxFillStyle} {
      width: 20%;
      height: 20%;
      border-radius: 20%;
      background: ${props => props.$color}88;
      color: ${props => props.$colorIcon};
    }

    &:is(.is-checked) {
      ${CheckboxFillStyle} {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: ${props => props.$color};
      }
    }
  }

  ${CheckboxStyle}:focus,
  &:has(.checkbox-input:focus) ${CheckboxStyle},
  &:has(.checkbox-label:focus) ${CheckboxStyle} {
    box-shadow: 0 0 0 0.3em ${props => props.$color}88;
    padding: 2px;
  }
`;
