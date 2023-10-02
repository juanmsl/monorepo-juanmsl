import styled from "styled-components";

export const MyExperienceStyle = styled.section`
  .layout-content {
    align-content: start;
  }

  .my-experience-content {
    display: grid;
    grid-template-columns: minmax(300px, auto) 1fr;
    gap: 40px;
    align-content: start;
  }

  .companies-list {
    display: grid;
    gap: 20px;
    align-content: start;
  }
`;

export const CompaniesListItemStyle = styled.div`
  display: grid;
  gap: 4px;
  transition: padding 50ms ease, all 300ms ease;
  cursor: pointer;

  label {
    cursor: pointer;
  }

  &:hover, &.selected {
    border-left: 3px solid;
    color: ${props => props.theme.colors.primary};
    padding-left: 10px;
  }
`;

export const CompanyDetailsStyle = styled.div`
  display: grid;
  gap: 40px;
  align-content: start;

  .company-details-header {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    align-content: center;
    justify-content: start;

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
      background: ${props => props.theme.colors.primary};
      transition: all 300ms ease;
      width: 72px;
      height: 72px;

      img {
        background: ${props => props.theme.colors.text};
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: all 300ms ease;
        border-radius: 50%;
      }

      &:hover img {
        transform: perspective(100px) translateZ(40px);
        border-radius: 5px;
        padding: 5px;
      }
    }

    .company-logo-1 {
      padding: .5em;
      background: ${props => props.theme.colors.text};
      width: 72px;
      height: 72px;
      display: block;
      object-fit: cover;
      transition: all 300ms ease;
      border-radius: 50%;

      &:hover {
        transform: perspective(100px) translateZ(25px);
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
