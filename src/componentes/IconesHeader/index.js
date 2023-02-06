import "./estilo.css"

const icones = ["entrada", "principal"]

function IconesHeader() {
    return (
        <ul className="icones">
        { icones.map( (icone) => (
          <li className="icone"><img scr={icone} alt="imagem"></img></li>
        ) ) }
      </ul>
    )
}

export default IconesHeader 
