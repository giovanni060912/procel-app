import { getPercentageSizeWidth, getRelativeSize } from "../../utils";
import styled, { css } from 'styled-components'



export const ButtonPrimary = styled.TouchableOpacity`
color: ${g => g.theme.color.general.whitePure};
width: ${getPercentageSizeWidth(90)};
border-radius: ${g => g.theme.radius.large};
background-color: ${g => g.theme.color.general.primary};
padding: ${getRelativeSize(15)};
align-items: center;
${({mTop})=>
mTop && css`
margin-top: ${getRelativeSize(mTop)};
`}

`