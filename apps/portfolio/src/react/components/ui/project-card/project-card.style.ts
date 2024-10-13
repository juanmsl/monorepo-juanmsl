import { Link } from 'react-router-dom';
import styled from 'styled-components';

const spacing = 0.5;

export const ProjectCardStyle = styled.section`
  display: grid;
  gap: 1em;

  .project-title {
    transition: all 300ms ease;
  }

  &:hover {
    .project-title {
      color: ${props => props.theme.colors.primary.main};
    }

    .project-image {
      filter: contrast(120%);
    }
  }
`;

export const ProjectDesktopViewStyle = styled(Link)`
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
    padding: 4px;
    gap: 4px;

    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    span:nth-child(1) {
      background: ${props => props.theme.colors.alert.main};
    }

    span:nth-child(2) {
      background: ${props => props.theme.colors.warning.main};
    }

    span:nth-child(3) {
      background: ${props => props.theme.colors.active.main};
    }
  }

  .project-container {
    position: absolute;
    transition: all 300ms ease;
    bottom: -${spacing}em;
    opacity: 0;
    left: ${spacing}em;
    width: calc(100% - ${spacing * 2}em);
    border-radius: 5px;
    padding: 0.5em;
    display: grid;
    background: ${props => props.theme.colors.background.paper};
    color: ${props => props.theme.colors.text.main};
    border: 1px solid ${props => props.theme.colors.border.main};
  }

  &:hover {
    .project-container {
      bottom: ${spacing}em;
      opacity: 1;
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
    background: ${props => props.theme.colors.background.paper};
    transition: all 300ms ease;

    &:hover,
    &.is-image-dot-selected {
      background: ${props => props.theme.colors.primary.main};
    }
  }
`;

export const ProjectCardContentStyle = styled.section`
  position: relative;
  display: grid;
  height: 300px;

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
    filter: contrast(80%);
    transition: all 300ms ease;
  }
`;
