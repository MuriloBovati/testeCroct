import { ContainerStyledFeedBack, CardFeedback } from "./styled"
const FeedBack = () =>{
    return(
        <ContainerStyledFeedBack>
                <h1>FeedBack</h1>
            <CardFeedback>
                <h2>QuickStart</h2>
                <p>
                    Muito simplificado recomendo fazer primeiro o JS pra depois ir para o react. <br/> 
                    Um acaba complementando o outro e deixando a curva de aprendizado do croct maior.
                </p>
            </CardFeedback>
            <CardFeedback>
                <h2>Meu projeto de teste</h2>
                <p>
                Enquanto estava fazendo o QuickStart, fui testando croct com algumas coisas simples, por exemplo, Dados de sessão, controle de renderização dentro do React.
                </p>
            </CardFeedback>
            <CardFeedback>
                <h2>Projeto utilizando os CQL</h2>
                <p>
                Achei interessante a facilidade na personalização do projeto.<br/>
                    Conhecendo um pouco do croct percebi que ele facilita algumas partes do projeto.
                </p>
            </CardFeedback>
            <CardFeedback>
                <h2>Contrucao web dev</h2>
                <p>
                    Facilidade na parte de construção de paginas personalizadas.
                <br/>
                    O fato de ter os dados em qualquer componente com fácil acesso facilita a construção de novos componentes personalizados.
                </p>
            </CardFeedback>
            <CardFeedback>
                <h2>Utilizacao</h2>
                <p>
                    Muito simplificada deixando simples até mesmo para uma pessoa que não e dev, com um pouco de inglês e um pouco de dedicação da para fazer muita coisa.
                </p>
            </CardFeedback>
            <CardFeedback>
                <h2>Obs:</h2>
                <p>
                    Nesses 7 dias de uso acredito que não utilizei nem 1% do croct, dei uma olhada nas funções e realmente existe muita coisa para facilitar a construção do projeto
                </p>
            </CardFeedback>
        </ContainerStyledFeedBack>
        
    )
}

export default FeedBack