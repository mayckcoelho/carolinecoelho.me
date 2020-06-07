import React from 'react';

import { Container, Image } from './styles';

import LinkedIn from "../../assets/images/linkedin.png"
import Medium from "../../assets/images/medium.png"
import Email from "../../assets/images/email.png"

function SocialLinks() {
    return (
        <Container>
            <a href="https://www.linkedin.com/in/carolinefcoelho/" rel="noopener noreferrer" target="_blank">
                <Image src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://medium.com/@caroline_coelho" rel="noopener noreferrer" target="_blank">
                <Image src={Medium} alt="Medium" />
            </a>
            <a href="mailto:cafernanda05@gmail.com">
                <Image src={Email} alt="Email" />
            </a>
        </Container>
    );
}

export default SocialLinks;