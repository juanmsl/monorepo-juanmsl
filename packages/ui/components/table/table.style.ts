import styled from 'styled-components';

type TableStyleProps = {
  height: string;
  fullWidth: boolean;
};

export const TableStyle = styled.section<TableStyleProps>`
  height: ${(props) => props.height};
  overflow: auto;

  table {
    position: relative;
    border-spacing: 0;
    user-select: none;
    max-width: 100%;
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  }

  thead {
    font-weight: bold;
    line-height: 2.5em;
  }

  tr {
    transition: all 0.3s ease;

    .edit-cell {
      opacity: 0;
      transition: all 0.3s ease-in;
      cursor: pointer;

      &.edit-mode {
        opacity: 1;
      }
    }

    &:hover {
      background: #acd2ff;

      .edit-cell {
        opacity: 1;
      }
    }

    &.selected {
      background: #d6d6d6;
    }
  }

  th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: white;
    padding: 0 10px;
  }

  td,
  th {
    white-space: nowrap;
    horiz-align: center;
    vertical-align: center;
  }

  td {
    line-height: 1.5em;
    padding: 5px 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .field-input-editable {
    border: 0;
    background: transparent;
    border-bottom: 1px solid;
    font-size: 1em;
    padding-bottom: 2px;
    font-family: inherit;
    outline: 0;
  }
`;
