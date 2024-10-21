import { SectionLayout } from '@juanmsl/ui';
import styled from 'styled-components';

export const GlassStyled = styled.section`
  width: 3.6em;
  height: 3.6em;
  position: absolute;
  top: 0.9em;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  font-size: 1rem;
  transition: all 3s ease;

  @media (any-pointer: coarse) {
    display: none;
  }

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 1.2em;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 300ms ease;
  }

  &::before {
    background: ${props => props.theme.colors.text.main}22;
    transform: perspective(6.25em) rotateX(65deg);
  }

  &::after {
    background: ${props => props.theme.colors.text.main}11;
    transform: perspective(6.25em) translateY(0.3em) rotateX(65deg);
  }
`;

export const SkillStyle = styled.section`
  position: relative;
  display: grid;
  justify-items: center;
  gap: 1.5em;
  cursor: none;
  max-width: 6em;

  @media (any-pointer: coarse) {
    gap: 0.5em;
  }

  .technology-icon {
    width: 3em;
    height: 3em;
    object-fit: contain;
    display: block;
    transition: all 300ms ease;
    filter: drop-shadow(0 0 1px ${props => props.theme.colors.text.main}55);
  }

  .skill-label {
    padding: 4px;
    border-radius: 5px;
    background: ${props => props.theme.colors.text.main}11;
    font-size: ${props => props.theme.constants.typography.small.fontSize};
    text-align: center;
  }

  &.is-selected,
  &:hover {
    ${GlassStyled}::before {
      background: ${props => props.theme.colors.primary.main};
      animation: rotate3dUp 2s linear infinite;
    }

    ${GlassStyled}::after {
      background: ${props => props.theme.colors.primary.main}55;
      transform: perspective(100px) translateY(0.3em) rotateX(65deg);
      animation: rotate3dBottom 2s linear infinite;
    }

    .technology-icon,
    .technology-icon.is-selected {
      transform: perspective(10em) translateZ(1.5em);
    }
  }

  @keyframes rotate3dUp {
    to {
      transform: perspective(100px) rotateX(65deg) rotateZ(1turn);
    }
  }

  @keyframes rotate3dBottom {
    to {
      transform: perspective(100px) translateY(0.3em) rotateX(65deg) rotateZ(1turn);
    }
  }
`;

export const MySkillsStyle = styled(SectionLayout)`
  user-select: none;
  border-bottom: 10px solid ${props => props.theme.colors.tertiary.main};

  .layout-content {
    display: grid;
    min-height: unset;
    justify-content: center;
    justify-items: center;
    gap: 40px;
    padding-top: 0;
  }

  &:has(.skill-category:hover) {
    ${SkillStyle}:not(.is-selected) {
      filter: grayscale(100%) blur(5px);
    }
  }

  .skills-categories {
    display: flex;
    gap: 10px 40px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .skill-category {
      transition: all 300ms ease;
      position: relative;
      font-weight: bold;

      &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        width: 0;
        height: 0;
        transition: all 300ms ease;
      }

      &:hover {
        color: ${props => props.theme.colors.primary.main};

        &::before {
          background: ${props => props.theme.colors.primary.main};
          width: 5px;
          height: 5px;
        }
      }
    }
  }

  .skills-labels {
    display: flex;
    gap: 2em;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 20px;
  }
`;
