import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'

import { Container, MenuSection, MenuToggle, Nav, List, ListItem } from './styles';

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
                        <ListItem open={show} onClick={() => { if (!show) toggleMenu(); }} active={location.pathname === "/"} >
                            <Link to="/" >
                                Portfólio
                            </Link>
                        </ListItem>
                        <ListItem open={show} onClick={() => { if (!show) toggleMenu(); }} active={location.pathname === "/about"}>
                            <Link to="/about" >
                                Sobre mim
                            </Link>
                        </ListItem>
                    </List>
                </Nav>
            </MenuSection>
        </Container>
    );
}

export default withRouter(Header);