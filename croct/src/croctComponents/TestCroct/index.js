import { ContainerTestCroct, ContainerButtonTesteCrock,ContainerComandoCrock } from "./styled"
import { useState } from 'react';
import {useCroct} from '@croct/plug-react';

const TestCroct = () => {
    const [respCroct, setRespCroct] = useState()
    const [askCroct, setaskCroct] = useState()
    const croct = useCroct()

    const handleClick = () =>{
        croct.evaluate(askCroct).then(resp => setRespCroct(resp))
    }
    return(
        <ContainerTestCroct>
            <h1>Teste de comando Crock</h1>
            <ContainerComandoCrock>
                <span>Codigo Crock: </span>
                <input
                    type="text"
                    placeholder='Croct Ativo'
                    onChange={(e) => setaskCroct(e.target.value)}/>
            </ContainerComandoCrock>

            <ContainerButtonTesteCrock>
                <button onClick={handleClick}>Testar Comando</button>
            </ContainerButtonTesteCrock>
            {
                respCroct !== null &&
                <h2>Respota do croct: {respCroct}</h2>
            }
        </ContainerTestCroct>
    )
}

export default TestCroct
