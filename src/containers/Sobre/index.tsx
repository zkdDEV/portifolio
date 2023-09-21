import { GithubSecao } from "./styles"
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
      velit nihil, delectus nostrum assumenda laboriosam numquam maiores
      consectetur, voluptas ad iusto ea quia alias harum molestias sequi! Eius,
      voluptate dicta.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=zkddev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zkddev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
