import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: #000080;
  align-items: center;
  justify-content: flex-start;
  padding: ${getRelativeSize(40)};
  width: ${getPercentageSizeWidth(100)};
`;
export const ViewSpecialties = styled.View`
  width: ${getPercentageSizeWidth(90)};
  background-color: #4169e1;
  padding: ${getRelativeSize(5)};
  border-radius: ${(g) => g.theme.radius.medium};
`;
export const ResumeRow = styled.View`
  flex-direction: row;
  width: ${getPercentageSizeWidth(85)};
  justify-content: space-around;
  padding: ${getRelativeSize(10)};
`;
