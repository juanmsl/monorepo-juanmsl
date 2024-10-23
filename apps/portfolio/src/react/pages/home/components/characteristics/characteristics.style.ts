import { SectionLayout } from 'juanmsl/ui';
import styled from 'styled-components';

export const CharacteristicsContainerStyle = styled.section`
  position: relative;

  .particles-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export const CharacteristicsStyle = styled(SectionLayout)`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};
  user-select: none;
  box-shadow:
    inset 0 25px 20px -20px ${props => props.theme.colors.black},
    inset 0 -25px 20px -20px ${props => props.theme.colors.black};

  .layout-content {
    place-content: center;
    position: relative;
    z-index: 1;

    .characteristics-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }
  }
`;

export const CharacteristicStyle = styled.section`
  width: 150px;
  height: 150px;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    width: 200px;
    height: 200px;
  }

  .characteristic-container {
    padding: 20px;
    display: grid;
    gap: 10px;
    justify-items: center;
    border: 1px solid;
    align-content: center;
    background: ${props => props.theme.colors.background.main};
    color: ${props => props.theme.colors.text.main};
    border-radius: 50%;
    width: 150px;
    height: 150px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      width: 200px;
      height: 200px;
    }

    &:hover {
      box-shadow: 0 5px 25px ${props => props.theme.colors.text.main}55;
    }
  }

  .characteristic-icon {
    font-size: 3em;
  }

  .characteristic-title {
    text-align: center;
  }

  .characteristic-line {
    width: 2em;
  }
`;
