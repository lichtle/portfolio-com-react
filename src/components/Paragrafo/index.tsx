import { Paragrafo as ParagrafoEstilizado } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <ParagrafoEstilizado tipo={tipo} fontSize={fontSize}>
    {children}
  </ParagrafoEstilizado>
)

export default Paragrafo
