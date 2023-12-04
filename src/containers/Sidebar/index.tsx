import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void // O valor da prop trocaTema será a função criada no App.jsx. A princípio, ela não deve ter valor (() => void)
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Leticia Fernandes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        lichtle
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedora Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
