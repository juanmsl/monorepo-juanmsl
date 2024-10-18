import styled from 'styled-components';

export const ScreenImageStyle = styled.section`
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

  .screen-toolbar {
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

export const ScreenImageContentStyle = styled.section`
  position: relative;
  display: grid;
  aspect-ratio: 4 / 3;

  @supports not (aspect-ratio: 4 / 3) {
    min-height: 300px;
  }

  .screen-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    display: block;
    background-position: center center;
    transition: all 300ms ease;
  }
`;
