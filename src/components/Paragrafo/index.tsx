import { P } from "./styles"

export type Props = {
  children: string
  // É possível definir os únicos valores que um atributo pode receber
  tipo?: "principal" | "secundario"
  fontSize?: number
}

const Paragrafo = ({ children, tipo = "principal", fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
