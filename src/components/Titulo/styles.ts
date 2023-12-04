import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`

/* props (com "p" minúsculo) é usado dentro do corpo do componente para acessar as propriedades, enquanto Props (com "P" maiúsculo) é usado na definição do tipo para especificar os tipos das propriedades que o componente aceita */
