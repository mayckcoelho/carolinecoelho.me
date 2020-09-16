import React from 'react';

import {
    Container,
} from './styles';

import Presentation from "./Presentation"
import Portfolio from "./Portfolio"

function Home() {
    return (
        <Container>
            <Presentation />
            <Portfolio />
        </Container>
    );
}

export default Home;