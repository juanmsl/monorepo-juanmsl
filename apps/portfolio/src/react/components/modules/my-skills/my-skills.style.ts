import { SectionLayout } from '@components/layouts';
import styled from 'styled-components';

export const MySkillsStyle = styled(SectionLayout)`
  user-select: none;

  .layout-content {
    min-height: unset;
    justify-content: center;
    justify-items: center;
    gap: 20px;
    padding-top: 0;
  }

  &:has(.skill-category:hover) {
    .technology-icon:not(.is-selected) {
      filter: grayscale(100%) blur(5px);
    }
  }

  &:has(.technology-icon:hover) {
    .technology-icon:not(:hover) {
      filter: grayscale(100%) blur(1px);
    }
  }

  .technology-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    display: block;
    transition: all 300ms ease;

    &.is-selected,
    &:hover {
      filter: grayscale(0) drop-shadow(0 0 4px ${props => props.theme.colors.text}33);
      transform: perspective(100px) translateZ(20px);
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
        color: ${props => props.theme.colors.primary};

        &::before {
          background: ${props => props.theme.colors.primary};
          width: 5px;
          height: 5px;
        }
      }
    }
  }

  .skills-labels {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 20px;
  }
`;
