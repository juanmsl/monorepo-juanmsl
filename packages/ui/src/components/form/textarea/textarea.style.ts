import styled from 'styled-components';

export const TextareaSC = styled.textarea`
  padding: 8px 0;
  border: 0;
  border-bottom: 1px solid #555555;
  outline: 0;

  &:focus {
    border-bottom-color: ${props => props.theme.colors.primary};
  }
`;
