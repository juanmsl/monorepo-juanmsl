import { SectionLayout, Tabs } from '@juanmsl/ui';
import styled from 'styled-components';

export const MyExperienceStyle = styled(SectionLayout)`
  .layout-content {
    align-content: start;
    justify-content: center;
    grid-template-columns: 1fr;
    max-width: 100ch;
    gap: 40px;
  }

  .mobile-experience {
    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: none;
    }

    h4 {
      transition: color 300ms ease;
    }

    .is-open h4 {
      color: ${props => props.theme.colors.primary.main};
    }

    .accordion-header-content {
      display: grid;
      gap: 2px;
    }
  }

  .laptop-experience {
    display: none;
    grid-template-columns: minmax(300px, auto) 1fr;
    gap: 20px;
    align-content: start;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
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
    background: ${props => props.theme.colors.white};
    transition: all 300ms ease;
    width: 42px;
    height: 42px;
    display: block;
    align-self: start;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      width: 72px;
      height: 72px;
      padding: 5px;
    }

    img {
      background: ${props => props.theme.colors.white}55;
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
`;

export const CompaniesListItemStyle = styled(Tabs.Tab)`
  cursor: pointer;
  display: grid;
  gap: 4px;
  transition:
    padding 50ms ease,
    all 300ms ease;

  &:hover,
  &.is-open {
    color: ${props => props.theme.colors.primary.main};
    border-left: 3px solid;
    padding-left: 10px;
  }
`;

export const CompanyDetailsStyle = styled.section`
  display: grid;
  gap: 40px;
  align-content: start;
  color: ${props => props.theme.colors.text.main};

  .company-details-header {
    display: none;
    gap: 20px;
    grid-auto-flow: column;
    align-content: center;
    justify-content: start;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: grid;
    }

    &--content {
      display: grid;
      gap: 5px;
    }

    .header4 {
      color: ${props => props.theme.colors.primary.main};
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

    .company-details-label {
      display: flex;
      align-items: center;
      gap: 0.4em;
    }

    .company-details-labels-icon {
      width: 1em;
      height: 1em;
      object-fit: contain;
    }
  }
`;
