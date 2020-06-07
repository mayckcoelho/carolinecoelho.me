import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 50px; 
    margin: auto;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.h4`
    font-family: 'Bree Serif', serif;
    font-size: 2rem;
    color: #555555;
`

export const Subtitle = styled.p`
    font-size: 1.6rem;
    margin: 3rem 0;
    color: #555555;
`

export const Thumbnail = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 4px;
    transition-duration: 0.3s;

    &:hover {
        box-shadow: 1px 2px 20px 1px rgba(0, 0, 0, .15);
        -webkit-transform: translate(0px, -5px);
        -ms-transform: translate(0px, -5px);
        transform: translate(0px, -5px);
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
`