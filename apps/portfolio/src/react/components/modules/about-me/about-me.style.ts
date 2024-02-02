import styled from "styled-components";
import {SectionLayout} from "@components/layouts";

export const AboutMeStyle = styled(SectionLayout)`

  .layout-content {
    gap: 50px;
    justify-content: center;
    transition: all 300ms ease;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      align-items: center;
      grid-auto-flow: column;
      gap: 100px;
    }

    & > .left {
      display: grid;
      justify-items: center;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopM}) {
        justify-items: end;
      }
    }

    & > .right {
      display: grid;
      justify-items: start;
      max-width: 560px;
    }
  }

  .button-ctas {
    display: grid;
    margin-top: 20px;
    justify-content: center;
    gap: 10px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      align-items: center;
      grid-auto-flow: column;
      justify-content: start;
      gap: 20px;
    }
  }
`;

export const CharacteristicsStyle = styled(SectionLayout)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  transition: all 0.5s ease;
  user-select: none;
  box-shadow: inset 0 25px 20px -20px ${props => props.theme.colors.black}, inset 0 -25px 20px -20px ${props => props.theme.colors.black};
  border-top: 10px solid ${props => props.theme.colors.tertiary};
  border-bottom: 10px solid ${props => props.theme.colors.tertiary};

  .layout-content {
    place-content: center;
    min-height: auto;

    .characteristics-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }
  }
`;

export const CharacteristicStyle = styled.div`
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
    transition: all 0.5s ease;
    align-content: center;
    background: ${props => props.theme.colors.tertiaryContrast}08;
    border-radius: 50%;
    width: 150px;
    height: 150px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      width: 200px;
      height: 200px;
    }

    &:hover {
      box-shadow: 0 5px 25px ${props => props.theme.colors.text}55;
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
