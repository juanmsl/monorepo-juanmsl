import styled from 'styled-components';

export const TagStyle = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  background: ${(props) => props.theme.colors.text}11;
  color: ${(props) => props.theme.colors.text};
  transition: all 300ms ease;
  display: inline-block;

  &:hover,
  &.tag-selected {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primaryContrast};
  }
`;
