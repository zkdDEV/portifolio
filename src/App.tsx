import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import EstiloGlobal, { Container } from "./styles"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import Projetos from "./containers/Projetos"
// import temaLight from "./themes/light"
import temaDark from "./themes/dark"
import temaLight from "./themes/light"

function App() {
  const [estaUsandoOTemaDark, setEstaUsandoOTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoOTemaDark(!estaUsandoOTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoOTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
