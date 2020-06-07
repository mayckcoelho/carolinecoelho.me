import styled from 'styled-components'

export const Container = styled.main`
    grid-area: content;
    max-width: 70%;
    max-height: 90%;
    margin: 8rem auto;
    padding-top: 8rem;
`

export const BioSection = styled.section`
    display: flex;
    align-items: center;

    margin: 10rem 0;

    @media (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
    color: #555555;
    line-height: 3.2rem;
    margin: 10px 0px 0px;
`

export const BioImage = styled.img`
    width: 40rem;
    height: auto;
    margin-left: 6rem;

    @media (max-width: 1024px) {
        margin-left: 0;
        order: -1;
    }
`