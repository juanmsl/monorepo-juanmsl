import { Typography } from '@juanmsl/ui';
import styled from 'styled-components';

export const SectionTitleStyle = styled(Typography)`
  color: ${props => props.theme.colors.primary.main};
  position: relative;
  margin-bottom: 0.5em !important;
  padding-bottom: 0.3em !important;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 5px;
    background: ${props => props.theme.colors.primary.main};
  }
`;
