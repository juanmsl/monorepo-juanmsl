import styled from "styled-components";
import {THEME} from "@juanmsl/ui";

type ThemeSelectorStyleProps = {
  selected: `${THEME}`;
}

export const ThemeSelectorStyle = styled.span<ThemeSelectorStyleProps>`
  padding: 4px;
  border-radius: 100px;
  border: 3px solid ${props => props.theme.colors.primary};
  background: #FFFFFF55;
  width: 56px;
  display: flex;
  flex-direction: ${props => props.selected === 'light' ? 'row' : 'row-reverse'};
  filter: blur(.5);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  .dot {
    width: 24px;
    height: 24px;
    border-radius: 100px;
    border: 3px solid ${props => props.theme.colors.primary};
    transition: all 0.3s ease;
    display: block;
    background: ${props => props.selected === 'light' ? props.theme.colors.gray1 : props.theme.colors.gray9};
  }
`;
