import React from 'react';

import { Container, Card, Title, Subtitle, Thumbnail } from './styles';

import ThumbnailImg from "../../../assets/thumbnails/thumbnail.png"

function Portfolio() {

    const cards = [{
        title: "Any+: Projeto MVP",
        subtitle: "Facilitador de agendamentos de serviço em Pet Shop.",
        link: "https://medium.com/@caroline_coelho",
        thumbnail: ThumbnailImg
    }, {
        title: "Any+: Projeto MVP",
        subtitle: "Facilitador de agendamentos de serviço em Pet Shop.",
        link: "https://medium.com/@caroline_coelho",
        thumbnail: ThumbnailImg
    }]

    return (
        <Container>
            {cards.map((item, index) => (
                <Card key={index}>
                    <Title>{item.title}</Title>
                    <Subtitle>{item.subtitle}</Subtitle>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                        <Thumbnail src={item.thumbnail} />
                    </a>
                </Card>
            ))}

        </Container>
    )
}

export default Portfolio;