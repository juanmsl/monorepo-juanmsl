import { SectionLayout } from '@components/layouts';
import styled from 'styled-components';

type HeaderStyleProps = {
  $background: string;
};

export const HeaderStyle = styled(SectionLayout).attrs<HeaderStyleProps>((props) => props)`
  display: grid;
  position: relative;
  color: ${(props) => props.theme.colors.primary};
  transition: all 300ms ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.$background}) center center / cover no-repeat
      ${(props) => props.theme.colors.secondary}B3;
    background-blend-mode: soft-light;
    filter: opacity(40%) grayscale(50%);
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
    color: ${(props) => props.theme.colors.text};
    transition: all 300ms ease;

    .user-label {
      transition: all 0.3s ease;
      line-height: 1em;
      padding: 0.2em 0.5em;
      border-radius: 5px;
      font-weight: 500;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => props.theme.colors.primaryContrast};
      }
    }
  }
`;
