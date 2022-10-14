import {useCroct} from "@croct/plug-react"
import { ContainerDadosBase } from "./styled"
import { useState } from "react"


const DadosBase = () => {

    const [retornou, setRetornou] = useState()
    const [local, setLocal] = useState()
    const [tempsession, settempsession] = useState()
    const [returnCamp, setReturnCamp] = useState()

    const crock = useCroct()
    crock.evaluate('user is returning').then(resp => setRetornou(resp) )
    crock.evaluate("location's city").then(resp => setLocal(resp) )

    crock.evaluate("session's duration").then(resp => settempsession(resp) )

    crock.evaluate("campaign's name").then(resp => setReturnCamp(resp) )

    const resp = (crock) =>{
        let resp = "não"
        if(crock){
            resp = "Sim"
        }
        return resp
    }

    
    return(
        <ContainerDadosBase>
            <h1>Dados automático Crock</h1>

            <h2>Este visitante ja foi visto antes?</h2>
            <h3>Resposta: {resp(retornou)}</h3>

            <h2>Qual é a localização aproximada do vistiando?</h2>
            <h3>Resposta: {local}</h3>

            <h2>O visitante veio através de uma campanha de marketing?</h2>
            <h3>Resposta: {resp(returnCamp)}</h3>
        </ContainerDadosBase>
    )
}

export default DadosBase