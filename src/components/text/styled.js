import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const TextNew = styled.Text`
  color: ${(g) => g.theme.color.general.whitePure};
  font-size: 20;

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


${({ color }) =>
    color &&
    css`
      color: ${(g) => g.theme.color.general.whitePure};
    `}

    ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}

    ${({ align }) =>
    align &&
    css`
      align-items: ${aling};
    `}

${({ size }) =>
    size &&
    css`
      font-size: ${(g) => g.theme.text[size]};
    `}
`;
