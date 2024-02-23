import { SectionLayout } from '@components/layouts';
import styled from 'styled-components';

export const MyExperienceStyle = styled(SectionLayout)`
  .layout-content {
    align-content: start;
    gap: 40px;
  }

  .my-experience-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-content: start;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      grid-template-columns: minmax(300px, auto) 1fr;
    }
  }

  .companies-list {
    display: grid;
    gap: 20px;
    align-content: start;
  }

  .company-details {
    display: none;
    align-content: start;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: grid;
    }
  }

  .companies-list-line-separator {
    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: none;
    }
  }
`;

export const CompaniesListItemStyle = styled.div`
  display: grid;
  transition:
    padding 50ms ease,
    all 300ms ease;

  .company-item-header {
    cursor: pointer;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .header-left {
    display: grid;
    gap: 4px;
  }

  .header-right {
    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: none;
    }
  }

  &:not(.selected) .company-item-body {
    display: none;
  }

  &.selected .company-item-body {
    display: grid;
    align-content: start;
    margin-top: 20px;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: none;
    }
  }

  label {
    cursor: pointer;
  }

  &:hover,
  &.selected {
    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      color: ${props => props.theme.colors.primary};
      border-left: 3px solid;
      padding-left: 10px;
    }
  }

  .company-item-position {
    display: none;
    color: ${props => props.theme.colors.primary};
  }

  &.selected .company-item-position {
    display: inline-block;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: none;
    }
  }
`;

export const CompanyDetailsStyle = styled.div`
  display: grid;
  gap: 40px;
  align-content: start;
  color: ${props => props.theme.colors.text};

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
      color: ${props => props.theme.colors.primary};
    }

    .company-logo {
      border-radius: 50%;
      padding: 5px;
      background: ${props => props.theme.colors.white};
      transition: all 300ms ease;
      width: 72px;
      height: 72px;
      display: none;

      @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
        display: block;
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
`;
