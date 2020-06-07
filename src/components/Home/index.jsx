import React from 'react';

import {
    Container,
    BioSection,
    Text,
    BioImage
} from './styles';

import Presentarion from "./Presentation"
import Portfolio from "./Portfolio"
import MobileWireframe from '../../assets/images/mobile-wireframe.png'

function Home() {
    return (
        <Container>
            <Presentarion />
            <BioSection>
                <Text>
                    Depois de entender que o que realmente importa é como as pessoas
                    se sentem em relação ao meu produto. Eu pude entender o que é
                    Experiência do Usuário, e isso me possibilitou buscar ao máximo
                    conhecimento para apresentar soluções mais valiosas e que realmente
                    faça a diferença na vida das pessoas. Afinal, não é disso que se trata?
                    Criar a melhor experiencia para as pessoas?
                </Text>
                <BioImage src={MobileWireframe} />
            </BioSection>
            <Portfolio />
        </Container>
    );
}

export default Home;