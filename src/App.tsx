import React from "react"
import EstiloGlobal, { Container } from "./styles"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import Projetos from "./containers/Projetos"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
