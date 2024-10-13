import styled from 'styled-components';

const spacing = 1;

export const ProjectCardStyle = styled.a`
  display: grid;
  border-radius: 1em;
  position: relative;
  height: 300px;
  cursor: pointer;
  overflow: hidden;

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
  }

  .project-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0 0 10px 10px;
    transition: all 500ms ease;
    background: linear-gradient(
      35deg,
      ${props => props.theme.colors.primary.main},
      ${props => props.theme.colors.secondary.main},
      ${props => props.theme.colors.tertiary.main}
    );
  }

  .project-content {
    background: ${props => props.theme.colors.background.paper};
    color: ${props => props.theme.colors.text.main};
    padding: 1em;
    border-radius: 0 0 10px 10px;
    transition: all 500ms ease;
  }

  &:hover {
    .project-container {
      padding: 4px;
      bottom: ${spacing}em;
      left: ${spacing}em;
      width: calc(100% - ${spacing * 2}em);
      border-radius: 10px;
    }

    .project-content {
      background: ${props => props.theme.colors.background.paper}AA;
      border-radius: 6px;
    }
  }
`;
