import styled from 'styled-components';

import { SectionLayout } from '@components/layouts';

export const HeaderContainerStyle = styled.section`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.primary.main};
`;

export const HeaderStyle = styled(SectionLayout)`
  display: grid;
  position: relative;
  transition: all 300ms ease;
  max-width: 100vw;
  overflow: hidden;

  .layout-content {
    min-height: unset;
    padding-top: 100px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      padding-top: 200px;
    }
  }

  .container {
    display: grid;
    gap: 15px;
    user-select: none;
  }

  .names {
    text-transform: uppercase;
    overflow: hidden;
  }
`;
