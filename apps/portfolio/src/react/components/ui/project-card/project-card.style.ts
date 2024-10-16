import styled from 'styled-components';

export const ProjectCardStyle = styled.section`
  display: grid;
  gap: 1em;
  align-content: start;
  padding: 2em;
  border-radius: 1em;
  background: ${props => props.theme.colors.background.paper}88;
  border: 1px solid ${props => props.theme.colors.primary.main};
  max-width: ${props => props.theme.constants.breakpoints.laptopS};
  grid-template-areas: 'projectCardScreen' 'projectCardContent';

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    grid-template-columns: 1fr 350px;
    align-items: center;
    grid-template-areas: 'projectCardContent projectCardScreen';
  }

  .project-card-content {
    grid-area: projectCardContent;
  }

  .project-card-screen {
    grid-area: projectCardScreen;
  }

  .project-title {
    transition: all 300ms ease;
  }

  .project-technologies {
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: start;
    padding: 1em 0;
    flex-wrap: wrap;
  }

  .project-open-button {
    justify-self: start;
  }

  &:hover {
    background: ${props => props.theme.colors.primary.light}11;

    .project-title {
      color: ${props => props.theme.colors.primary.main};
    }

    .project-image {
      filter: contrast(100%);
    }
  }
`;

export const ProjectDesktopViewStyle = styled.a`
  display: grid;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border.main};
  grid-template-rows: auto 1fr;
  box-shadow: 0 4px 10px #00000088;
  transition: all 300ms ease;
  cursor: pointer;

  .project-toolbar {
    background: ${props => props.theme.colors.background.paper};
    border-bottom: 1px solid ${props => props.theme.colors.border.main};
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    padding: 0.25em 0.5em;
    gap: 0.25em;

    .toolbar-button {
      width: ${props => props.theme.constants.typography.small.fontSize};
      height: ${props => props.theme.constants.typography.small.fontSize};
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

export const ImageDotsStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5em;
  align-items: center;
  justify-content: center;

  .image-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.colors.background.main};
    transition: all 300ms ease;
    border: 1px solid ${props => props.theme.colors.primary.main};

    &:hover,
    &.is-image-dot-selected {
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
