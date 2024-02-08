import styled from 'styled-components';

export const DocumentStyle = styled.div`
  border: 1px solid ${(props) => props.theme.colors.background};
  transition: all 300ms ease;
  width: 100%;
  aspect-ratio: 3 / 4;
  max-height: 90vh;
  margin: 3rem 0;

  &:hover {
    box-shadow: 0 20px 100px -10px ${(props) => props.theme.colors.black};
  }
`;
