import React from 'react';

import { Container, Card, Title, Subtitle, Thumbnail } from './styles';

import ThumbnailImg from "../../../assets/thumbnails/thumbnail.png"

function Portfolio() {

    const cards = [{
        title: "Any+: Projeto MVP",
        subtitle: "Facilitador de agendamentos de serviço em Pet Shop.",
        link: "https://brasil.uxdesign.cc/any-primeiro-estudo-de-caso-ux-ui-204291526615",
        thumbnail: ThumbnailImg
    }]

    return (
        <Container>
            {cards.map((item, index) => (
                <Card key={index}>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                        <Thumbnail src={item.thumbnail} alt={item.title} />
                    </a>
                    <Title>{item.title}</Title>
                    <Subtitle>{item.subtitle}</Subtitle>
                </Card>
            ))}

        </Container>
    )
}

export default Portfolio;