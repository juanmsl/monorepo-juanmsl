import styled from 'styled-components';

export const TagStyle = styled.span`
  padding: 0.4em 0.8em;
  border-radius: 0.3em;
  border: 1px solid;
  background: ${props => props.theme.colors.text.main}11;
  color: ${props => props.theme.colors.text.main};
  transition: all 300ms ease;
  display: inline-block;
  font-size: ${props => props.theme.constants.typography.label.fontSize};
  user-select: none;

  &.small-size {
    font-size: ${props => props.theme.constants.typography.small.fontSize};
  }

  &.large-size {
    font-size: ${props => props.theme.constants.typography.body.fontSize};
  }

  &.rounded {
    border-radius: 500px;
  }

  &:hover,
  &.tag-selected {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
  }
`;
