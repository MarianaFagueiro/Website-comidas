import "./estilo.css"
const textoOpcoes=["ENTRADAS", "PRATO PRINCIPAL", "PIZZA"]

function OpcoesHeader () {
    return (
        <ul className="opcoes">
            {textoOpcoes.map ( (texto) => (
                <li className="opcao"><p>{texto}</p></li>
             ) ) }
         </ul>
    )
}

export default OpcoesHeader 