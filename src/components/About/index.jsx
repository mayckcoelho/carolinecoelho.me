import React from 'react';

import {
    Container,
    BioSection,
    Text,
    BioImage
} from './styles';

import Bio from "../../assets/images/bio.png";

function About() {
    return (
        <Container>
            <BioSection>
                <Text>
                    Oi! Sou a Carol. Uma estudante de UX design. <br /><br />
                    Trabalhei bastante tempo com atendimento ao cliente e e como Design
                    Gráfico. Tinha 24 anos, e ainda não tinha encontrado o que me fazia
                    feliz profissionalmente. No final de 2017 eu recebi o meu maior presente,
                    minha filha Maju, enfim encontrei meu objetivo de vida.
                    Por um tempo me dediquei 100% à ela e para esse momento me descobrindo mãe.
                    Mas durou pouco tempo, um ano depois, lá estava eu procurando algo que me preenchece
                    profissionalmente, depois de muito pensar, entrar em crise na meia idade algumas vezes,
                    me veio uma luz (que eu também chamo de marido) e me questionou o motivo para eu
                    não estudar e me dedicar ao UX Design e é aqui que começa a minha saga. <br /><br />
                    Comecei a estudar UX no início de 2020 e venho desbravando esse mundo novo desde então.
                    No começo eu ja achei que iria sair por ai fazendo telas bonitas para aplicativos
                    e sites, afinal, eu já fazia artes legais quando trabalhava como design gráfico
                    “vou tirar de letra" pensei no meu leve engano. Ao longo desses meses, eu comecei a
                    entender que é muito, mais muito maior que isso, não quero de forma alguma desmerecer o
                    trabalho de UI que tem um lugar especial no meu coração. Mas UX é sobre resolver problemas,
                    é sobre fazer a diferença no dia a dia das pessoas, sobre dar o máximo para sanar qualquer
                    dificuldade, por menor que ela pareça. E foi por isso que eu me encantei e é isso que
                    me motiva a estudar, pesquisar, consumir o máximo de contúdo sobre metodologias.
                    Finalmente encontrei algo que me faz feliz. Espero poder contribuir muito com o mundo como UX Designer.
                </Text>
                <BioImage src={Bio} />
            </BioSection>
        </Container>
    );
}

export default About;