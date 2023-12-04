import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { SecaoEstatistica } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Olá! Meu nome é Leticia, tenho 24 anos e sou natural de São Lourenço - MG.
      Sou estudante de programação, metalhead e amante de gatinhos. Meu foco é o
      Front-end pois quero trabalhar com isso. Me formei em Gastronomia pelo
      Centro Universitário Senac - Campos do Jordão (2021), mas não me encontrei
      na área e estou em transição de carreira. As coisas que mais gosto de
      fazer são cozinhar, ouvir música, jogar e viajar!
    </Paragrafo>
    <SecaoEstatistica>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lichtle&layout=compact&hide_progress=true&bg_color=10002b&title_color=e0aaff&text_color=e0aaff&border_radius=10&border_color=e0aaff&locale=pt-br" />
    </SecaoEstatistica>
  </section>
)

export default Sobre
