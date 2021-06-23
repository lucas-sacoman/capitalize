import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export function Header() {
   return (
      <Container>
         <Content>
            <div className="logo">
               <img src={logoImg} alt="" />
               <strong>Capitalize</strong>
            </div>
            <button>Nova Transação</button>
         </Content>
      </Container>
   )
}