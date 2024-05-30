import{q as e,S as a}from"./index-D0ZE4UeQ.js";const o=e(a)`
  .layout-content {
    gap: 50px;
    justify-content: center;
    transition: all 300ms ease;
    text-wrap: balance;

    @media all and (min-width: ${t=>t.theme.constants.breakpoints.laptopS}) {
      align-items: center;
      grid-auto-flow: column;
      gap: 100px;
    }

    & > .left {
      display: grid;
      justify-items: center;

      @media all and (min-width: ${t=>t.theme.constants.breakpoints.laptopM}) {
        justify-items: end;
      }
    }

    & > .right {
      display: grid;
      justify-items: start;
      max-width: 560px;
    }
  }

  .button-ctas {
    display: grid;
    margin-top: 20px;
    justify-content: center;
    gap: 10px;

    @media all and (min-width: ${t=>t.theme.constants.breakpoints.tablet}) {
      align-items: center;
      grid-auto-flow: column;
      justify-content: start;
      gap: 20px;
    }
  }
`,n=e.section`
  border: 1px solid ${t=>t.theme.colors.background};
  transition: all 300ms ease;
  display: grid;
  justify-items: center;
  gap: 40px;

  .loader {
    min-height: 500px;
  }

  .document-container {
    outline: 4px solid ${t=>t.theme.colors.primary};
    width: 100%;
    max-width: 750px;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      box-shadow: 0 20px 100px -10px ${t=>t.theme.colors.black};
    }
  }
`,s=e(a)`
  user-select: none;

  .layout-content {
    min-height: unset;
    justify-content: center;
    justify-items: center;
    gap: 20px;
    padding-top: 0;
  }

  &:has(.skill-category:hover) {
    .technology-icon:not(.is-selected) {
      filter: grayscale(100%) blur(5px);
    }
  }

  &:has(.technology-icon:hover) {
    .technology-icon:not(:hover) {
      filter: grayscale(100%) blur(1px);
    }
  }

  .technology-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    display: block;
    transition: all 300ms ease;

    &.is-selected,
    &:hover {
      filter: grayscale(0) drop-shadow(0 0 4px ${t=>t.theme.colors.text}33);
      transform: perspective(100px) translateZ(20px);
    }
  }

  .skills-categories {
    display: flex;
    gap: 10px 40px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .skill-category {
      transition: all 300ms ease;
      position: relative;
      font-weight: bold;

      &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        width: 0;
        height: 0;
        transition: all 300ms ease;
      }

      &:hover {
        color: ${t=>t.theme.colors.primary};

        &::before {
          background: ${t=>t.theme.colors.primary};
          width: 5px;
          height: 5px;
        }
      }
    }
  }

  .skills-labels {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 20px;
  }
`,l=e(a)`
  .layout-content {
    align-content: start;
    gap: 40px;
  }

  .mobile-experience {
    @media all and (min-width: ${t=>t.theme.constants.breakpoints.laptopS}) {
      display: none;
    }

    .accordion-header-content {
      display: grid;
      gap: 2px;
    }

    .position {
      color: ${t=>t.theme.colors.primary};
    }
  }

  .laptop-experience {
    display: none;
    grid-template-columns: minmax(300px, auto) 1fr;
    gap: 40px;
    align-content: start;

    @media all and (min-width: ${t=>t.theme.constants.breakpoints.laptopS}) {
      display: grid;
    }

    .companies-list {
      display: grid;
      gap: 20px;
      align-content: start;
    }

    .company-details {
      display: grid;
      align-content: start;
    }
  }

  .company-logo {
    border-radius: 50%;
    background: ${t=>t.theme.colors.white};
    transition: all 300ms ease;
    width: 42px;
    height: 42px;
    display: block;
    align-self: start;

    @media all and (min-width: ${t=>t.theme.constants.breakpoints.laptopS}) {
      width: 72px;
      height: 72px;
      padding: 5px;
    }

    img {
      background: ${t=>t.theme.colors.white}55;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      transition: all 300ms ease;
      padding: 5px;
      border-radius: 50%;
    }

    &:hover img {
      border-radius: 50%;
    }
  }
`,r=e.section`
  cursor: pointer;
  display: grid;
  gap: 4px;
  transition:
    padding 50ms ease,
    all 300ms ease;

  &:hover,
  &.selected {
    color: ${t=>t.theme.colors.primary};
    border-left: 3px solid;
    padding-left: 10px;
  }
`,p=e.section`
  display: grid;
  gap: 40px;
  align-content: start;
  color: ${t=>t.theme.colors.text};

  .company-details-header {
    display: none;
    gap: 20px;
    grid-auto-flow: column;
    align-content: center;
    justify-content: start;

    @media all and (min-width: ${t=>t.theme.constants.breakpoints.laptopS}) {
      display: grid;
    }

    &--content {
      display: grid;
      gap: 5px;
    }

    .header4 {
      color: ${t=>t.theme.colors.primary};
    }
  }

  .company-details-description {
    display: grid;
    gap: 10px;
    margin: 0;
  }

  .company-details-labels {
    display: flex;
    gap: 10px 15px;
    justify-content: start;
    flex-wrap: wrap;
  }
`;export{o as A,p as C,n as D,s as M,r as a,l as b};
