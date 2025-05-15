import { SectionLayout } from 'polpo/ui';
import styled, { css } from 'styled-components';

export const MyProjectsStyle = styled(SectionLayout)`
  position: relative;
  overflow: hidden;

  ${({ theme }) =>
    theme.name === 'dark' &&
    css`
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 1000px;
        height: 1000px;
        border-radius: 50%;
        z-index: -10;
      }

      &::before {
        top: 25%;
        left: 0;
        width: 1000px;
        height: 1000px;
        transform: translate(-25%, -50%);
        background: radial-gradient(
          circle,
          ${props => props.theme.colors.secondary.main}88,
          ${props => props.theme.colors.background.main}88,
          transparent
        );
      }

      &::after {
        bottom: 0;
        right: 0;
        width: 1200px;
        height: 1200px;
        transform: translate(25%, 0);
        background: radial-gradient(
          circle,
          ${props => props.theme.colors.primary.main}88,
          ${props => props.theme.colors.background.main}88,
          transparent
        );
      }
    `}

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

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    &:has(.project-card:hover) {
      .project-card:not(:hover) {
        filter: grayscale(1) blur(4px) opacity(0.5);

        @media (any-pointer: coarse) {
          filter: none;
        }
      }
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
    align-self: center;
  }
`;
