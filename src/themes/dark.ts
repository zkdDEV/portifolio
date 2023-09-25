const temaDark = {
  corPrincipal: "white",
  corSecundaria: "#eee",
  corDeFundo: "#282A35",
  corDeFundoBotao: "white",
  corDaBorda: "#c1c1c1"
}
export default temaDark

/*
Devemos criar um tipo Theme, devido a existir a
propriedade DefaultTheme, que impede que possamos
usar o nosso tema
*/
export type Theme = {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDeFundoBotao: string
  corDaBorda: string
}
