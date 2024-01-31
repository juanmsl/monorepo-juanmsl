import styled from "styled-components";

export const DocumentStyle = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.background};
  transition: all 300ms ease;
  width: 100%;
  aspect-ratio: 3 / 4;
  padding: 4em;
  margin: 3rem 0;

  &:hover {
    box-shadow: 0 20px 100px -10px ${props => props.theme.colors.black};
  }
`;
