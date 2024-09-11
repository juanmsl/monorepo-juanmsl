import styled from 'styled-components';

export const DocumentStyle = styled.section`
  border: 1px solid ${props => props.theme.colors.background.main};
  transition: all 300ms ease;
  display: grid;
  justify-items: center;
  gap: 40px;

  .loader {
    min-height: 500px;
  }

  .document-container {
    outline: 4px solid ${props => props.theme.colors.primary.main};
    width: 100%;
    max-width: 750px;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      box-shadow: 0 20px 100px -10px ${props => props.theme.colors.black};
    }
  }
`;
