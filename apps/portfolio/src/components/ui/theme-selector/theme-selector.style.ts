import styled from "styled-components";


export const ThemeSelectorStyle = styled.span`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  cursor: pointer;
  position: relative;
  font-size: 1.5em;
  padding: 10px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 100px;
    border: 3px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
    transition: all 0.3s ease;
  }

  .dark-icon, .light-icon {
    color: ${props => props.theme.colors.text};
  }

  .light-icon {
    color: ${props => props.theme.colors.text};
  }

  &.light {
    &::before {
      left: 100%;
      transform: translateX(-100%);
    }
  }

  &:hover {
    &::before {
      aspect-ratio: 1.3/1;
    }
  }
`;
