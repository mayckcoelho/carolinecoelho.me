import styled from 'styled-components'

export const Container = styled.main`
    grid-area: content;
    max-width: 70%;
    max-height: 90%;
    margin: 8rem auto;
    padding-top: 8rem;
`

export const BioSection = styled.section`
    margin: 10rem 0;
`

export const Title = styled.h6`
    font-size: 2.4rem;
    color: #555555;
    line-height: 3.6rem;
`

export const Text = styled.p`
    font-size: 1.8rem;
    color: #555555;
    line-height: 2.7rem;
    margin: 10px 0px 0px;
`

export const ResumeButton = styled.button`
    border: 2px solid #F3A68C;
    border-radius: 7px;
    font-size: 1.6rem;
    color: #F3A68C;
    padding: .5rem 1rem;
    margin-top: 4.2rem;
    background-color: #fff;
    cursor: pointer;
`