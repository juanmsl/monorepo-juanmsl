import styled from 'styled-components';

export const AsideModalStyle = styled.section`
  position: absolute;
  background: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};
  overflow: auto;
  height: 100%;

  .aside-modal-content {
    overflow: auto;
    height: 100%;
    padding: 2em;
  }

  .close-modal-button {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;
    margin-left: auto;
    display: grid;
    place-content: center;
    margin-bottom: 2em;
    background: ${props => props.theme.colors.background.main};
    box-shadow: 0 0 0 4px ${props => props.theme.colors.background.main};

    &.button-fixed {
      position: absolute;
      top: 0;
      right: 0;
      margin: 2em;
    }
  }

  &.left {
    height: 100%;
    top: 0;
    left: 0;
    width: 700px;
    border-right: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-left 300ms ease;
    }

    &.close-animation {
      animation: slideOut-left 300ms ease;
    }
  }

  &.right {
    height: 100%;
    top: 0;
    right: 0;
    width: 700px;
    border-left: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-right 300ms ease;
    }

    &.close-animation {
      animation: slideOut-right 300ms ease;
    }
  }

  &.top {
    height: 300px;
    top: 0;
    right: 0;
    width: 100%;
    border-bottom: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-top 300ms ease;
    }

    &.close-animation {
      animation: slideOut-top 300ms ease;
    }
  }

  &.bottom {
    height: 300px;
    bottom: 0;
    right: 0;
    width: 100%;
    border-top: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-bottom 300ms ease;
    }

    &.close-animation {
      animation: slideOut-bottom 300ms ease;
    }
  }
`;
