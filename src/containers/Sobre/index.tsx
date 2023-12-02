import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { SecaoEstatistica } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia labore
      eum optio excepturi perspiciatis temporibus soluta animi dignissimos
      facere cumque, sunt, dolores et. Quisquam incidunt dolor est nihil
      voluptate sed?
    </Paragrafo>
    <SecaoEstatistica>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lichtle&layout=compact&hide_progress=true&bg_color=10002b&title_color=e0aaff&text_color=e0aaff&border_radius=10&border_color=e0aaff&locale=pt-br" />
    </SecaoEstatistica>
  </section>
)

export default Sobre
