import styled from 'styled-components'
import { Paragrafo } from '../../components/Paragrafo/styles'

export const Descricao = styled(Paragrafo)`
  margin: 24px 0 40px;
`

export const BotaoTema = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  border-radius: 12px;
  border: none;
  font-size: 10px;
  color: ${(props) => props.theme.corDeFundo};
  font-weight: bold;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
