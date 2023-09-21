import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar = () => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Matheus Reichemback Stang</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          zkdDEV
        </Paragrafo>
        <Descricao fontSize={12} tipo="principal">
          Full Stack - Java
        </Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
