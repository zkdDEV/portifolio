import { Titulo as TituloEstilo } from "./styles"

export type Props = {
  /*
    A propriedade children é do React e faz com que seja possível
    adicionar conteúdo dentro de uma tag | O conteúdo que eu falo
    não é um atributo na tag, mas sim aquele conteúdo que fica no
    meio da abertura e fechamento de uma tag <Titulo>Conteúdo</Titulo>
  */
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
