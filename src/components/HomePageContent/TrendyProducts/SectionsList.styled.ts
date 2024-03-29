import { Breakpoints, MQ } from "../../../common";
import styled from "styled-components";

export const ProductSectionsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 40px;
  }
`;

export const SectionButton = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  line-height: 30px;
  color: #767676;

  background-color: transparent;
  border: none;

  ${MQ(Breakpoints.md)} {
    font-size: 16px;
    line-height: 22px;
  }

  &.accent {
    color: black;
    position: relative;

    ::after {
      content: "";
      display: inline-block;
      background-color: black;
      width: 50px;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -2px;
    }
  }
`;

export const SectionName = styled.li`
  margin-left: 25px;
  margin-right: 25px;
`;
