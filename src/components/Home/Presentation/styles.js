import styled from 'styled-components'

import BorderBottom from '../../../assets/images/border-bottom.png'

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Name = styled.h2`
    font-family: 'Bree Serif', serif;
    font-size: 3.6rem;
    color: #B9B5B5;
    margin-right: 1rem;
    margin-bottom: .7rem;

    & a {
        border-bottom: 1px dashed #B9B5B5;
        color: #B9B5B5;
        text-decoration: none;

        :hover {
            color: rgba(92, 92, 92, 0.57);
            border-color: #F3A68C;
        }
    }
`

export const Description = styled.h3`
    font-family: 'Bree Serif', serif;
    font-size: 4.8rem;
    color: #555555;
    line-height: 7rem;
    letter-spacing: .3rem;

    @media (max-width: 768px) {
        font-size: 4.2rem;
        line-height: 6rem;
    }
`

export const People = styled.span`
    color: #F3A68C;
    padding: 0 .8rem 2.5rem .8rem;
    background-image: url(${BorderBottom});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 20.7rem 2.4rem;
`