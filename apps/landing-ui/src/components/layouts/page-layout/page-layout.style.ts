'use client';
import styled from 'styled-components';

export const PageLayoutStyle = styled.section`
  display: grid;
  padding: 1em 2em 1em 0;
  align-content: start;
  gap: 1em;
  height: 100dvh;

  .page-line {
    color: ${props => props.theme.colors.text}88;
    margin: 2em 0;
    width: 50%;
  }
`;
