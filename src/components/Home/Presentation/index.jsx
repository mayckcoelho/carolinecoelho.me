import React from 'react';

import SocialLinks from '../../SocialLinks'
import {
    Title,
    Subtitle,
    Name,
    Description,
    People
} from './styles';

function Presentation() {
    return (
        <section>
            <Title>
                <Name>Olá! Eu sou a Caroline Coelho.</Name>
                <SocialLinks />
            </Title>
            <Subtitle>UX/UI Design</Subtitle>
            <Description>
                Busco aprender e criar as melhores experiências para <People>pessoas</People>.
            </Description>
        </section >
    );
}

export default Presentation;