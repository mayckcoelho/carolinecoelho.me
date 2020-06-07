import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import { Container, MenuSection, MenuToggle, Nav, List, Link, ListItem, Title } from './styles';

function Header({ location }) {
    const [show, setShow] = useState(true)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const debounce = (fn) => {

            let frame;
            return (...params) => {

                if (frame) {
                    cancelAnimationFrame(frame);
                }

                frame = requestAnimationFrame(() => {
                    fn(...params);
                });
            }
        };

        const storeScroll = () => {
            setScroll(window.scrollY)
        };

        document.addEventListener('scroll', debounce(storeScroll), { passive: true })

        storeScroll();
    }, [])

    const toggleMenu = () => {
        document.body.style.overflow = show ? "hidden" : "initial";

        setShow(!show)
    }

    return (
        <Container scroll={scroll}>
            <MenuSection open={show}>
                <MenuToggle open={show} onClick={toggleMenu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </MenuToggle>
                <Nav open={show}>
                    <List open={show}>
                        <ListItem>
                            <Link open={show} href="/" active={location.pathname === "/"}>
                                Portifólio
                                </Link>
                        </ListItem>
                        <ListItem>
                            <Link open={show} href="/about" active={location.pathname === "/about"}>
                                Sobre mim
                                </Link>
                        </ListItem>
                    </List>
                </Nav>
            </MenuSection>
            <Title>Caroline Coelho</Title>
        </Container>
    );
}

export default withRouter(Header);