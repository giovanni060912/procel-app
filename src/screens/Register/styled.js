import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: #000080;
  align-items: center;
  justify-content: center;
  padding: ${getRelativeSize(10)};
`;

export const Input = styled.TextInput`
  background-color: #000;
  width: ${getPercentageSizeWidth(90)};
  height: ${getPercentageSizeWidth(15)};
  border-radius: ${(g) => g.theme.radius.ball};
  background-color: ${(g) => g.theme.color.general.input};
  padding: ${getRelativeSize(10)};
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${mTop};
    `}
  ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${mBottom};
    `}
`;

export const TextWan = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(g) => g.theme.color.general.whitePure};
  width: ${getPercentageSizeWidth(90)};
`;
