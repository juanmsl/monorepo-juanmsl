import styled from "styled-components";

export const AboutMeStyle = styled.section`

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
