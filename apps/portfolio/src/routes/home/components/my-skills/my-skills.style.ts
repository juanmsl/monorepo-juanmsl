import styled from "styled-components";
import {SectionLayout} from "@/components/layouts";

export const MySkillsStyle = styled(SectionLayout)`
  user-select: none;

  .layout-content {
    display: grid;
    grid-template-columns: 1fr auto;
    align-content: stretch;
    align-items: center;
    gap: 100px;
  }

  .left {
    display: grid;
    gap: 20px;
    place-content: start;
  }

  .right {
    display: grid;
    place-content: center;
    width: 430px;
    height: 524px;
    background: ${props => props.theme.colors.tertiary};

    .right-content {
      display: grid;
      gap: 20px;
      justify-items: center;
      text-align: center;
    }
  }

  .skills-categories {
    display: grid;
    gap: 40px;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;

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
        color: ${props => props.theme.colors.primary};

        &::before {
          background: ${props => props.theme.colors.primary};
          width: 5px;
          height: 5px;
        }
      }
    }
  }

  .technology-icon {
    width: 150px;
    height: 150px;
    object-fit: contain;
    padding: 10px;
    background: ${props => props.theme.colors.white};
    border-radius: 10px;
  }

  .skills-labels {
    display: flex;
    gap: 15px 20px;
    justify-content: start;
    flex-wrap: wrap;
    padding-top: 20px;
  }
`;
