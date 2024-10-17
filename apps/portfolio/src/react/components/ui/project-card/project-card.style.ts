import styled from 'styled-components';

export const ProjectDesktopViewStyle = styled.a`
  display: grid;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border.main};
  grid-template-rows: auto 1fr;
  box-shadow: 0 4px 10px #00000088;
  transition: all 300ms ease;
  cursor: pointer;
  position: relative;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  .project-toolbar {
    background: ${props => props.theme.colors.background.paper};
    border-bottom: 1px solid ${props => props.theme.colors.border.main};
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    padding: 0.1em 0.4em;
    gap: 0.4em;

    .toolbar-button {
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
    }

    .toolbar-button:nth-child(1) {
      background: ${props => props.theme.colors.alert.main};
    }

    .toolbar-button:nth-child(2) {
      background: ${props => props.theme.colors.warning.main};
    }

    .toolbar-button:nth-child(3) {
      background: ${props => props.theme.colors.active.main};
    }
    .site-address {
      padding: 0 0.5em;
    }
  }
`;

export const ProjectCardStyle = styled.section`
  display: grid;
  align-content: start;
  border-radius: 1em;
  background: ${props => props.theme.colors.background.paper}88;
  max-width: ${props => props.theme.constants.breakpoints.laptopS};
  grid-template-areas: 'projectCardScreen' 'projectCardContent';
  overflow: hidden;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 10px #00000088;
  border: 1px solid ${props => props.theme.colors.primary.main};
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 300ms cubic-bezier(0.4, 0, 0.2, 1);

  .project-card-content {
    grid-area: projectCardContent;
    padding: 5em 2em 2em;
  }

  .project-card-screen {
    grid-area: projectCardScreen;
    background: ${props => props.theme.colors.primary.main};
    padding: 0 1em;
    display: grid;
    align-content: end;
  }

  ${ProjectDesktopViewStyle} {
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

      ${ProjectDesktopViewStyle} {
        max-width: none;
        left: -3em;
        top: 0;
      }

      &:nth-child(odd) {
        grid-template-columns: 400px 1fr;
        grid-template-areas: 'projectCardScreen projectCardContent';

        ${ProjectDesktopViewStyle} {
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

  .project-description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    line-clamp: 5;
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

    .project-image {
      filter: contrast(100%);
    }
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

export const ProjectCardContentStyle = styled.section`
  position: relative;
  display: grid;
  aspect-ratio: 4 / 3;

  @supports not (aspect-ratio: 4 / 3) {
    min-height: 300px;
  }

  .project-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    display: block;
    background-position: center center;
    filter: contrast(60%);
    transition: all 300ms ease;
  }
`;
