import { createGlobalStyle } from 'styled-components';

export const GlobalAnimations = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes slideIn-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slideIn-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes slideIn-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut-top {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

  @keyframes slideIn-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut-bottom {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }

    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }

  @keyframes headShake {
    0% {
      transform: translateX(0);
    }

    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }

    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }

    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }

    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }

    50% {
      transform: translateX(0);
    }
  }
`;
