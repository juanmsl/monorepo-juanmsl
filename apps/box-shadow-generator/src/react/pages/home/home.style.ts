import styled from 'styled-components';

export const HomeStyle = styled.main`
  display: grid;
  height: 100dvh;
  grid-template-areas: 'homeContent' 'homeExamples';
  grid-template-rows: 1fr auto;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: unset;
    grid-template-areas: 'homeExamples homeContent';
  }

  .home-examples {
    display: grid;
    grid-area: homeExamples;
    grid-auto-flow: column;
    width: 100%;
    gap: 80px;
    overflow: auto;
    padding: 50px 100px;
    box-shadow: 0 20px 30px -10px ${props => props.theme.colors.black} inset;
    mask-image: linear-gradient(to right, transparent 2%, black 15%, black, black 85%, transparent 98%);

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      gap: 100px;
      grid-auto-flow: row;
      mask-image: linear-gradient(transparent 2%, black 15%, black, black 85%, transparent 98%);
      box-shadow: -20px 0 30px -10px ${props => props.theme.colors.black} inset;
      padding: 100px 50px;
    }

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      padding: 100px;
    }
  }

  .home-body {
    grid-area: homeContent;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondaryContrast};
    display: grid;
    grid-template-rows: auto 1fr auto;
    overflow: auto;
    border-bottom: 2px solid ${props => props.theme.colors.white};

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      border-left: 2px solid ${props => props.theme.colors.white};
      border-bottom: 0;
    }

    &--content {
      padding: 50px 20px 100px;
      display: grid;
      gap: 50px;
      align-content: start;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
        padding: 50px 50px 100px;
      }
    }
  }
`;
