import styled from 'styled-components';

export const SectionTitleStyle = styled.section`
  color: ${props => props.theme.colors.primary.main};
  display: grid;
  justify-items: start;
  gap: 0.5em;
  padding-bottom: 1em;

  &.align-center {
    justify-items: center;
  }

  .section-title {
    padding-bottom: 0;
  }

  .section-title-underline {
    width: 100px;
    height: 5px;
    display: inline-block;
    background: ${props => props.theme.colors.primary.main};
  }
`;
