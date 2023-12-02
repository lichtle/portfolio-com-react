import { Paragrafo as ParagrafoEstilizado } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <ParagrafoEstilizado tipo={tipo}>{children}</ParagrafoEstilizado>
)

export default Paragrafo
