import styled from 'styled-components';

export const DistanceSelectorContainerStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1em;

  .distance-selector-controls {
    display: grid;
    gap: 1em;
  }
`;

export const DistanceSelectorStyle = styled.section`
  position: relative;
  user-select: none;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 1em;
  background: radial-gradient(
      circle at center,
      transparent calc(70% - 1px),
      ${props => props.theme.colors.primary.main} calc(70% - 1px),
      ${props => props.theme.colors.primary.main} calc(70% + 1px),
      transparent calc(70% + 1px)
    ),
    repeating-radial-gradient(
      circle,
      ${props => props.theme.colors.background.paper}55,
      ${props => props.theme.colors.background.paper}55 1px,
      transparent 1px,
      transparent 12px
    ),
    linear-gradient(
      to right,
      transparent calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      45deg,
      transparent calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      -45deg,
      transparent calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      transparent calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% - 1px),
      ${props => props.theme.colors.background.paper}55 calc(50% + 1px),
      transparent calc(50% + 1px)
    );

  .distance-selector-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary.main};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition:
      width 300ms ease,
      height 300ms ease;

    &:hover {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    .distance-selector-dot {
      width: 20px;
      height: 20px;
    }
  }
`;
