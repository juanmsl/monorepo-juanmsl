'use client';
import styled from 'styled-components';

export const AsideStyle = styled.aside`
  display: grid;
  gap: 1em;
  align-content: start;
  padding: 8em 0 8em 2em;
  height: 100%;
  overflow: auto;
  mask-image: linear-gradient(
    transparent 3%,
    ${props => props.theme.colors.text.main} 10%,
    ${props => props.theme.colors.text.main} 90%,
    transparent 97%,
    transparent
  );
`;

export const AsideItemStyle = styled.section`
  display: grid;

  .aside-item-header {
    padding: 0.5em 0;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1em;

    &--line {
      color: ${props => props.theme.colors.text.main}88;
    }
  }

  .aside-item-body {
    padding-top: 0;
    display: grid;
    gap: 4px;

    .aside-accordion-item--icon {
      opacity: 0;
      transition: all 300ms ease;
      width: 0;
    }

    .aside-accordion-item--link {
      display: grid;
      grid-auto-flow: column;
      gap: 1em;
      align-items: center;
      justify-content: start;
      transition: all 300ms ease;
      border-radius: 4px;
      padding: 0.5em 2em;
      position: relative;
      color: ${props => props.theme.colors.text.main}88;

      &::before {
        content: '';
        transition: all 300ms ease;
        position: absolute;
        left: 1em;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 1em;
        background: ${props => props.theme.colors.text.main}88;
        opacity: 1;
      }

      &.active,
      &:hover {
        padding: 0.5em 2em 0.5em 1em;
        background: ${props => props.theme.colors.text.main}0A;
        color: ${props => props.theme.colors.text.main};

        .aside-accordion-item--icon {
          opacity: 1;
          width: 1em;
        }

        &::before {
          opacity: 0;
        }
      }

      &.active {
        background: ${props => props.theme.colors.text.main}22;
      }
    }
  }
`;
