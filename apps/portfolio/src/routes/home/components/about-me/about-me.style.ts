import styled from "styled-components";
import {SectionLayout} from "@/components/layouts";

export const AboutMeStyle = styled(SectionLayout)`

  .layout-content {
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    gap: 100px;

    .profile-picture {
      width: 496px;
      color: ${props => props.theme.colors.primary};
    }

    & > .left {
      display: grid;
      justify-items: end;
    }

    & > .right {
      display: grid;
      justify-items: start;
      max-width: 560px;
    }
  }

  .button-ctas {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
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
      display: grid;
      grid-auto-flow: column;
      align-items: stretch;
      justify-content: center;
      grid-auto-columns: 200px;
      gap: 100px;
    }
  }
`;

export const CharacteristicStyle = styled.div`
  padding: 20px 40px;
  display: grid;
  gap: 10px;
  justify-items: center;
  border: 1px solid;
  transition: all 0.5s ease;
  align-content: center;
  background: ${props => props.theme.colors.tertiaryContrast}08;
  border-radius: 50%;
  aspect-ratio: 1 / 1;

  .characteristic-icon {
    font-size: 3em;
  }

  .characteristic-title {
    text-align: center;
  }

  .characteristic-line {
    width: 2em;
  }

  &:hover {
    box-shadow: 0 5px 25px ${props => props.theme.colors.text}55;
  }
`;
