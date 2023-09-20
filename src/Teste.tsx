import styled from "styled-components"

/*
  ####################_Explicando o Básico_####################

  O Styled-Components permite criar um componente com a estilização
  já embutida, sem precisar de um arquivo css, apenas JavaScript ou
  TypeScript

  Ele funciona da seguinte forma:

  1 - variavel/constante - Para capturar o elemento
  2 - styled."EscolhaOElementoHTML" - O styled
  permite selecionar um tipo de tag
  3 - `` - Dentro dela fica o conteúdo CSS

  Exemplo:
  const Botao = styled.button`
    background-color: red;
  `

  ####################_Propriedade do Componente_####################

  Para adicionar uma propriedade ao elemento/componente,
  devemos criar um tipo com o comando type, em seguida definir
  o nome do tipo e abrir as {} e colocar o nome da propriedade e o
  tipo de dado que ela vai possuir

  Exemplo:
  type BotaoProps = {
    principal: boolean
  }

  Após criarmos o tipo, devemos colocar ele ao lado do elemento HTML
  que o styled utiliza, e ele deve estar dentro do <>, já dentro da parte
  do CSS devemos capturar o atributo/propriedade a partir do props

  Exemplo:
  const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.principal ? "green" : "red")};
  `

  No caso acima alem de utilizar um componente, está também sendo usado o
  o operador ternário

  ####################_Componente de outro Componente_####################

  Para criar um Componente a partir de outro Componente existente devemos
  abrir os () após o styled, e dentro dos () colocamos o nome do Componente
  que vai ser herdado | OBS: caso você mude o valor de alguma propriedade
  CSS que já existia no Componente herdado, vai contar apenas com o valor
  novo colocado no novo Componente que herdou o Componente já existente

  Exemplo:
  const BotaoPerigo = styled(Botao)`
    background-color: yellow;
    color: red;
  `

  O que realmente ocorreu acima, foi o efeito cascata do CSS

  ####################_Atributo "as"_####################

  O atributo as é aplicado diretamente na tag do componente, ele faz com que
  seja possível mudar o elemento HTML escolhido no styled para outro elemento
  HTML | OBS: Ele não adiciona um novo elemnto HTML, ele muda o elemento HTML

  Exemplo:
  funtcion App()
  {
    return (
      <Botao as="a" >
      Entrar
      <Botao/>
    )
  }

  No caso acima o Botão virou um link(a), literalmente

  ####################_Semelhanças com SASS_####################

  O Styled-Component permite estilizar uma tag dentro da outra como
  o SASS

  const BotaoComSpan = styled.button`
    background-color: blue;
    color: white;

    span{
      text-decoration: line-through;
    }
  `
  function App()
  {
    return <BotaoComSpan><span>Olá<span/></BotaoComSpan>
  }
*/

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "red")};
  font-size: ${(props) => props.fontSize || "16px"};
  color: white;
`
const BotaoPerigo = styled(Botao)`
  background-color: yellow;
  color: red;
`

const BotaoComSpan = styled.button`
  background-color: blue;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  // Exibito o botão criado
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="12px" principal={false}>
        Cancelar
      </Botao>
      <BotaoComSpan>
        <span>Olá</span>
      </BotaoComSpan>
    </>
  )
}

export default Teste
