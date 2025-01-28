import { styled } from 'styled-components';

export const SmartTableContainerStyle = styled.section`
  border: 1px solid ${props => props.theme.colors.primary.main};
  border-radius: 10px;
  overflow: auto;
  height: 100%;
  width: 100%;
  margin: auto;
`;

export const SmartTableStyle = styled.table`
  border-collapse: collapse;
  position: relative;

  &.layout-fixed {
    table-layout: fixed;
  }

  &.layout-scrollable {
    table-layout: auto;
  }
`;

export const SmartHeaderStyle = styled.thead`
  position: sticky;
  z-index: 10;
  top: 0;
  box-shadow:
    0 3px 5px 0 rgba(0, 0, 0, 0.2),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const SmartBodyStyle = styled.tbody``;

export const SmartColumnStyle = styled.th`
  padding: 0.8em 1.2em;
  user-select: none;

  &.sort-on-click {
    cursor: pointer;
  }

  .sort-icon {
    width: 1em;
    display: block;
  }

  svg {
    animation: fadeIn 300ms ease;
  }

  path {
    transition: all 300ms ease;
  }

  &:first-child {
    padding-left: 2em;
  }

  &:last-child {
    padding-right: 2em;
  }
`;

export const SmartHeaderRowStyle = styled.tr`
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.primary.contrast};
  transition: all 300ms ease;
`;

export const SmartRowStyle = styled.tr`
  background: ${props => props.theme.colors.background.main};
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.primary.main};
  transition: box-shadow 300ms ease;

  &.row-selected,
  &:hover {
    background: ${props => props.theme.colors.background.paper};
  }

  &.row-selected {
    box-shadow: inset 10px 0 0 -5px ${props => props.theme.colors.primary.main};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.border.main};
  }
`;

export const SmartCellStyle = styled.td`
  transition: all 300ms ease;
  padding: 0.6em 1em;

  &:first-child {
    padding-left: 2em;
  }

  &:last-child {
    padding-right: 2em;
  }
`;
