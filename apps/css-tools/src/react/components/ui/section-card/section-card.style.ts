import styled from 'styled-components';

export const SectionCardStyle = styled.section`
  border: 2px solid ${props => props.theme.colors.primary.main};
  background: ${props => props.theme.colors.background.paper};
  border-radius: 15px;
`;
