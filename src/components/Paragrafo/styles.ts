import styled from "styled-components"

import { Props } from "./index"

export const P = styled.p<Props>`
  color: ${(props) =>
    props.tipo === "principal"
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  line-height: 22px;
`
