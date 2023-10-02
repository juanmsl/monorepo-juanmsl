import styled from "styled-components";

export const LanguageSelectorStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;

  .language-item {
    position: relative;
    filter: grayscale(100%);
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid transparent;
    transition: all 500ms ease;
    padding: 4px;
    display: block;
    background: transparent;

    &:hover, &.selected {
      border-color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primaryContrast};
    }

    &.selected {
      filter: grayscale(0);
    }

    .language-image {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      transition: all 300ms ease;
      display: block;
    }
  }
`;
