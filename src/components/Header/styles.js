import styled from 'styled-components'

export const Container = styled.header`
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 1000;

    grid-area: header;
    background-color: #F3A68C;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => props.scroll < 30} {
        z-index: 1000;
        height: 8rem;
        box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
        transition-duration: .5s, .2s;
        transition-property: height, box-shadow;
    }

    ${props => props.scroll > 30} {
        height: 10rem;
        box-shadow: none;
        transition-duration: .2s, .2s;
        transition-property: height, box-shadow;
    }
`

export const MenuSection = styled.div`
    @media (max-width: 768px) {
        ${props => props.open} {
            position: absolute;
            top:0;
            left:0;
            
            width: 100vw;
            height: 100vh;

            background-color: #F3A68C;
            
            z-index: 10;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const MenuToggle = styled.div`
    @media (max-width: 768px) {
        width: 40px;
        height: 30px;
        margin-left: 20px;

        .one,
        .two,
        .three {
            background-color: #fff;
            height: 5px;
            width: 100%;
            margin: 6px auto;

            transition-duration: 0.3s;
        }

        .one {
            ${props => props.open} {
                transform: rotate(45deg) translate(7px, 7px);
            }
        }

        .two {
            ${props => props.open} {
                opacity: 0;
            }
        }

        .three {
            ${props => props.open} {
                transform: rotate(-45deg) translate(8px, -9px);
            }
        }

        ${props => props.open} {
            position: absolute;
            left: 0px;
            top: 15px;
        }
    }
`

export const Nav = styled.nav`
    @media (max-width: 768px) {
        display: none;

        ${props => props.open} {
            display: block;
        }
    }
`

export const List = styled.ul`
    display: flex;
    @media (max-width: 768px) {
        ${props => props.open} {
            text-align: center;
            display: block;
        }
    }
`

export const ListItem = styled.li`
    list-style: none;
`

export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.active ? "#555555" : "#FFF"};
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.6rem;
    padding: 4.2rem 2.3rem;
    transition: all 250ms linear 0s;

    :hover {
        background: rgba(255, 255, 255, 0.15)
    }

    @media (max-width: 768px) {
        ${props => props.open} {
            transition-duration: 0.5s;
            font-size: 3rem;
            line-height: 4rem;
            display: block;
        }
    }
`

export const Title = styled.h1`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    font-size: 3.6rem;
    color: white;
    font-family: 'Satisfy', cursive;
`