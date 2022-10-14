import { ContainerHomeStyled } from './styled';
import TestCroct from '../../croctComponents/TestCroct';
import DadosBase from '../../croctComponents/DadosBase'

const Home = () => {
    return(
        <ContainerHomeStyled>
            <TestCroct/>
            <DadosBase/>
        </ContainerHomeStyled>
    )
}

export default Home