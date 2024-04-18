import styled from 'styled-components';

type InputRangeStyleProps = {
  $isFocus: boolean;
};

export const InputRangeStyle = styled.section<InputRangeStyleProps>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'minRangeLimit inputRange maxRangeLimit';

  .min-range-limit,
  .max-range-limit {
    color: ${props => (props.$isFocus ? props.theme.colors.primary : 'inherit')};
    text-align: center;
    width: 30px;
  }

  .min-range-limit {
    grid-area: minRangeLimit;
    margin-right: 10px;
  }

  .max-range-limit {
    grid-area: maxRangeLimit;
    margin-left: 10px;
  }

  .input-range {
    grid-area: inputRange;
    accent-color: ${props => (props.$isFocus ? props.theme.colors.primary : 'inherit')};
  }
`;
