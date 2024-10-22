import styled from 'styled-components';

export const ProjectCardStyle = styled.section`
  display: grid;
  align-content: start;
  border-radius: 1em;
  background: ${props => props.theme.colors.background.paper};
  max-width: ${props => props.theme.constants.breakpoints.laptopS};
  grid-template-areas: 'projectCardScreen' 'projectCardContent';
  overflow: hidden;
  grid-template-rows: auto auto;
  box-shadow: 0 4px 10px #00000088;
  transition:
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 300ms cubic-bezier(0.4, 0, 0.2, 1);

  .project-card-content {
    grid-area: projectCardContent;
    padding: 5em 2em 2em;
  }

  .project-card-screen {
    grid-area: projectCardScreen;
    background: radial-gradient(
      circle at 0 30%,
      ${props => props.theme.colors.primary.main}88,
      ${props => props.theme.colors.secondary.main}88,
      ${props => props.theme.colors.tertiary.main}88
    );
    padding: 0 1em;
    display: grid;
    align-content: end;
  }

  .screen-image-desktop {
    top: 3em;
  }

  &:not(.vertical-mode) {
    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      grid-template-columns: 1fr 400px;
      grid-template-rows: 1fr;
      grid-template-areas: 'projectCardContent projectCardScreen';

      .project-card-content {
        padding: 2em 5em 2em 2em;
      }

      .project-card-screen {
        padding: 2em 0;
        align-content: center;
      }

      .screen-image-desktop {
        max-width: none;
        left: -3em;
        top: 0;
      }

      &:nth-child(odd) {
        grid-template-columns: 400px 1fr;
        grid-template-areas: 'projectCardScreen projectCardContent';

        .screen-image-desktop {
          left: 3em;
        }

        .project-card-content {
          padding: 2em 2em 2em 5em;
        }
      }
    }
  }

  .project-title {
    color: ${props => props.theme.colors.primary.main};
  }

  .project-technologies {
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: start;
    padding: 1em 0;
    flex-wrap: wrap;

    .project-technology {
      display: flex;
      align-items: center;
      gap: 0.4em;
    }

    .project-technology-icon {
      width: 1em;
      height: 1em;
      object-fit: contain;
    }
  }

  .project-open-button {
    justify-self: start;
  }

  &:hover {
    transform: perspective(100px) translateZ(2px);
    box-shadow: 0 35px 20px -25px #00000088;
  }
`;

export const LinksContainerStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5em;
  align-items: center;
  justify-content: start;

  .link-icon {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.colors.background.main};
    transition: all 300ms ease;
    border: 1px solid ${props => props.theme.colors.primary.main};

    &:hover {
      background: ${props => props.theme.colors.primary.main};
    }
  }
`;
