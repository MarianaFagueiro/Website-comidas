import logo from "../../imagens/logo.png"
import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    width: 320;
    height:205;
`
const LogoImage = styled.img`
  margin-right: 10px;
`


function Logo() {
    return (
        <LogoContainer>
        <LogoImage
        source={logo}
        alt="Logo da página principal"
        />
        <p><strong>Rêvo</strong></p>
      </LogoContainer> 
    )
}

export default Logo