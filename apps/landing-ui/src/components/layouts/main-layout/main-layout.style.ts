'use client';
import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow: auto;

  .main-layout-container {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
    overflow: auto;
    gap: 2em;
    width: 100%;
    max-width: ${props => props.theme.constants.breakpoints.laptopL};
    margin: 0 auto;
  }

  .main-layout-content {
    display: grid;
    height: 100%;
    overflow: auto;
    gap: 2em;
  }
`;
