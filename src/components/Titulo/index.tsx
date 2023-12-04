import { Titulo as TituloEstilizado } from './styles'

export type Props = {
  children: string
  fontSize?: number
} // props (com "p" minúsculo) é usado dentro do corpo do componente para acessar as propriedades, enquanto Props (com "P" maiúsculo) é usado na definição do tipo para especificar os tipos das propriedades que o componente aceita

const Titulo = (props: Props) => (
  <TituloEstilizado fontSize={props.fontSize}>
    {props.children}
  </TituloEstilizado>
)

export default Titulo
