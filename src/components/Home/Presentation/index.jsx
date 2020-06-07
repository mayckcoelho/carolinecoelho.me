import React from 'react';

import SocialLinks from '../../SocialLinks'
import {
    Title,
    Name,
    Description,
    People
} from './styles';

function Presentation() {
    return (
        <section>
            <Title>
                <Name>Olá! Eu sou a <a href="https://www.linkedin.com/in/carolinefcoelho/" rel="noopener noreferrer" target="_blank" >Caroline</a>.</Name>
                <SocialLinks />
            </Title>
            <Description>
                Busco aprender e criar as melhores experiências para <People>pessoas</People>.
            </Description>
        </section >
    );
}

export default Presentation;