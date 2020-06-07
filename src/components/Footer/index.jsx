import React from 'react';

import SocialLinks from '../SocialLinks';
import { Container, CopyWrite } from './styles';

function Footer() {
    return (
        <Container>
            <SocialLinks />
            <CopyWrite>© 2020 Designed by Caroline Coelho</CopyWrite>
        </Container >
    );
}

export default Footer;