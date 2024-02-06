import styled from 'styled-components';

type LabelStyleProps = {
  isFocus: boolean;
};
export const LabelStyle = styled.label<LabelStyleProps>`
  font-size: 0.8em;
  color: ${(props) => (props.isFocus ? props.theme.colors.primary : 'inherit')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
