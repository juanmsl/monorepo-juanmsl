import { styled } from 'styled-components';

type SectionLayoutStyleProps = {
  $padding: string;
};

export const SectionLayoutStyle = styled.section<SectionLayoutStyleProps>`
  display: grid;
  padding: ${props => props.$padding};
`;

export const SectionLayoutContentStyle = styled.section`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  margin: 0 auto;

  &.section-layout-min-height {
    min-height: ${props => props.theme.constants.sectionMinHeight};
    display: grid;
  }
`;
