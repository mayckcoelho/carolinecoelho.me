import React from 'react';

import {
    Container,
    BioSection,
    Text,
    Title,
    ResumeButton
} from './styles';

function About() {
    return (
        <Container>
            <BioSection>
                <Title>Oi! Sou a Carol. Mãe, esposa e estudante de UX design.<br /><br /></Title>
                <Text>
                    Venho de um background com atendimento ao cliente e como Designer numa gráfica.
                    Eu nem imaginava, mas aquele trabalho já estava me treinando para essa nova aventura
                    que estou iniciando.<br /><br />
                    No final de 2017 eu recebi o meu maior presente, a minha filha Maju.
                    Por um tempo me dediquei 100% a ela e a esse momento, me descobrindo mãe. Mas durou pouco tempo,
                    um ano depois, lá estava eu procurando algo que me preenchesse profissionalmente.<br /><br />
                    Depois de muito pensar e entrar em crises, me veio uma luz (que eu também chamo de marido) que me apresentou ao UX,
                    me incentivando a estudar, conhecer, experimentar essa nova carreira, e é aqui que começa a minha saga.<br /><br />
                </Text>
                <Title>A minha jornada em UX/UI Desing.<br /><br /></Title>
                <Text>
                    Comecei a estudar UX/UI no início de 2020, e desde então vi o meu ponto de vista
                    sobre o mundo mudar quando entendi que UX/UI não é sobre Apps ou Sites bonitos
                    e legais, mas sim sobre a experiência do usuário como um todo.<br /><br />
                    Nove meses depois de entrar de cabeça nesse mundo, vejo como fiquei muito mais crítica com
                    minhas próprias experiências, desde atendimento em restaurantes, embalagens, compras e
                    pós-compras e infinitas outras pequenas coisas do dia a dia. E foi assim que UX entrou no meu coração.<br /><br />
                    Hoje eu posso dizer que é isso que eu quero. Ajudar pessoas a terem as melhores experiências
                    em grandes e pequenas coisas, poder ajudar a simplificar o dia a dia dos usuários e assim
                    agregar valor para as suas vidas.
                </Text>
                <ResumeButton><a href={`${process.env.PUBLIC_URL}/curriculo.pdf`} target="_blank">Currículo</a></ResumeButton>
            </BioSection>
        </Container>
    );
}

export default About;