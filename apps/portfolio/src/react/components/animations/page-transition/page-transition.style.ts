import { createGlobalStyle } from 'styled-components';

export const PageTransitionStyle = createGlobalStyle`
  .slide-in {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    transform-origin: left;
    z-index: 100;
  }

  .slide-out {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    transform-origin: right;
    z-index: 100;
  }
`;
