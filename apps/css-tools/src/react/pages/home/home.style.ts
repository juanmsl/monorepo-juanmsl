import styled from 'styled-components';

export const HomeStyle = styled.main`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  margin: 0 auto;

  .generators {
    display: grid;
    grid-template-columns: repeat(auto-fit, 280px);
    place-content: start center;
    gap: 40px;
    padding: 50px clamp(20px, 5.555%, 100px);
  }

  .home-header {
    text-align: center;
    padding: 50px clamp(20px, 5.555%, 100px);
  }

  .header-link {
    padding: 0.5em 1em 0.5em 0.5em;
    display: inline-block;
    transition: all 300ms ease;
    animation: pulse 1s ease infinite alternate;
    border-radius: 5px;
    color: ${props => props.theme.colors.primaryContrast};
    filter: drop-shadow(0 0 2px ${props => props.theme.colors.primary});
    text-shadow:
      1px 1px 1px ${props => props.theme.colors.primary},
      2px 2px 1px ${props => props.theme.colors.primary},
      3px 3px 1px ${props => props.theme.colors.primary};
  }

  .card-container {
    .card {
      background-size: 20px 20px;
      background-image: repeating-linear-gradient(
        45deg,
        ${props => props.theme.colors.text}33 0,
        ${props => props.theme.colors.text}33 1px,
        transparent 0,
        transparent 50%
      );
    }

    &:nth-child(even) .card {
      background-image: repeating-linear-gradient(
        -45deg,
        ${props => props.theme.colors.text}33 0,
        ${props => props.theme.colors.text}33 1px,
        transparent 0,
        transparent 50%
      );
    }
  }

  .card {
    aspect-ratio: 4/3;
    border: 2px solid;
    background: ${props => props.theme.colors.background};
    display: grid;
    place-content: center;
    justify-items: center;
    padding: 1em;
    border-radius: 5px;
    transition: all 300ms ease;
    box-shadow: 0 0 16px 8px ${props => props.theme.colors.black}55 inset;

    &:hover {
      animation:
        cardPulse 1s ease infinite alternate,
        CardBG 2s ease infinite alternate;
      border-color: ${props => props.theme.colors.primary};
      box-shadow:
        0 0 0 0 ${props => props.theme.colors.black}55 inset,
        0 50px 100px 10px ${props => props.theme.colors.black}55,
        0 30px 60px 0 ${props => props.theme.colors.black}55;
    }
  }

  .box-shadow {
    width: 200px;
    border: 1px solid;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    padding: 10px 10px 20px;
    box-shadow:
      8px 8px 0 0 ${props => props.theme.colors.primary}96,
      16px 16px 0 0 ${props => props.theme.colors.primary}70,
      24px 24px 0 0 ${props => props.theme.colors.primary}48;
  }

  .text-shadow {
    color: ${props => props.theme.colors.primaryContrast};
    filter: drop-shadow(0 0 5px ${props => props.theme.colors.primary});
    text-shadow:
      1px 1px 1px ${props => props.theme.colors.primary},
      2px 2px 1px ${props => props.theme.colors.primary},
      3px 3px 1px ${props => props.theme.colors.primary},
      4px 4px 1px ${props => props.theme.colors.primary},
      5px 5px 1px ${props => props.theme.colors.primary},
      6px 6px 1px ${props => props.theme.colors.primary},
      7px 7px 1px ${props => props.theme.colors.primary},
      8px 8px 1px ${props => props.theme.colors.primary},
      9px 9px 1px ${props => props.theme.colors.primary};
  }

  @keyframes cardPulse {
    from {
      transform: scale(0.98);
    }
    to {
      transform: scale(1.02);
    }
  }

  @keyframes pulse {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1.05);
    }
  }

  @keyframes CardBG {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50% 0;
    }
  }
`;
