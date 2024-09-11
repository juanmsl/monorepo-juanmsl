import styled from 'styled-components';

export const TagStyle = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  background: ${props => props.theme.colors.text.main}11;
  color: ${props => props.theme.colors.text.main};
  transition: all 300ms ease;
  display: inline-block;

  &:hover,
  &.tag-selected {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.main};
  }
`;
