/*
É importado essa propriedade do styled-components para criar uma
configuração global
*/
import { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

export default EstiloGlobal
