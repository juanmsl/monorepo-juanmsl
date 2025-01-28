import { SectionLayout } from 'polpo/ui';
import styled, { css } from 'styled-components';

export const HomeHeaderContainer = styled.section`
  position: relative;

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: ${props => props.theme.colors.primary.main};
    transform-origin: 0;
  }

  @keyframes title {
    0% {
      line-height: 0%;
      letter-spacing: 0.25em;
      opacity: 0;
    }

    25% {
      line-height: 0%;
      opacity: 0;
    }

    80% {
      opacity: 100%;
    }

    to {
      line-height: 100%;
      opacity: 100%;
      padding: 15px 0;
    }
  }

  .animate-title {
    animation: title 3s ease-out forwards;
  }
`;

type HeaderStyleProps = {
  $background: string;
};

export const HomeHeaderStyle = styled(SectionLayout).attrs<HeaderStyleProps, HeaderStyleProps>(props => props)`
  display: grid;
  position: relative;
  color: ${props => props.theme.colors.primary.main};
  transition: all 300ms ease;
  height: 100%;

  .home-header-svg {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    top: unset;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ theme, $background }) => {
      if (theme.name === 'dark') {
        return css`
          background: url(${$background}) center center / cover no-repeat ${theme.colors.background.paper}B3;
        `;
      }

      return css`
        background: url(${$background}) center center / cover no-repeat ${theme.colors.primary.main}88;
      `;
    }}
    background-attachment: fixed;
    background-blend-mode: soft-light;
    filter: opacity(40%);
    transition: all 300ms ease;
  }

  .container {
    display: grid;
    place-content: center;
    gap: 15px;
    user-select: none;
    position: relative;
  }

  .names {
    text-align: center;
    text-transform: uppercase;
  }

  .user-labels {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px 20px;
    padding: 0 1rem;
    color: ${props => props.theme.colors.text.main};
    transition: all 300ms ease;

    .user-label {
      transition: all 0.3s ease;
      line-height: 1em;
      padding: 0.2em 0.5em;
      border-radius: 5px;
      font-weight: 500;

      &:hover {
        color: ${props => props.theme.colors.primary.main};
        background: ${props => props.theme.colors.primary.contrast};
      }
    }
  }
`;
