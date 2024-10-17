import { SectionLayout } from '@juanmsl/ui';
import styled from 'styled-components';

export const MyProjectsStyle = styled(SectionLayout)`
  .layout-content {
    display: grid;
    align-content: start;
    gap: 40px;
  }

  .see-all-projects-button {
    justify-self: center;
  }

  .layout-projects-grid {
    display: grid;
    gap: 2em;
    justify-items: center;
    grid-template-areas: 'child1' 'child2' 'child3';
    grid-template-columns: 1fr;
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
    .layout-projects-grid {
      grid-template-areas: 'child1 child3' 'child2 child3';
      grid-template-columns: 2fr 1fr;
    }
  }

  .project-card:nth-child(1) {
    grid-area: child1;
  }

  .project-card:nth-child(2) {
    grid-area: child2;
  }

  .project-card:nth-child(3) {
    grid-area: child3;
  }
`;
