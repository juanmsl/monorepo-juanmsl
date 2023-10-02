import styled from "styled-components";

export const TagStyle = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  transition: all 300ms ease;
  display: inline-block;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  }
`;
