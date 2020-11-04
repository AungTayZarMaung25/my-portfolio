import React, { useState, useRef, useCallback } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { useHistory, useLocation } from 'react-router-dom';
import '../../../App.css'

const Navbar = () => {

    const location = useLocation();
    const history = useHistory();
    const path = location.pathname.toLocaleLowerCase() || '';
    const [mode, setMode] = useState('#eeeeee');
    const [isShrink, setIsShrink] = useState(true)
    const HOME = '/my-portfolio'
    const SKILLS = '/my-portfolio/skills'
    const EXP = '/my-portfolio/experiences'
    const ABOUT = '/my-portfolio/about-me'
    const CONTACT = '/my-portfolio/contact-me'
    const screenSize = window.screen.width;
    const box = useRef(0);

    const goTo = (PATH = '') => {
        history.push({
            pathname: PATH
        })
    }

    const expand = useCallback((e) => {
        e.preventDefault();
        if (box && box.current) {
            box.current.style.height = 200;
            box.current.style.display = "block";
        }
        setIsShrink(false)
    }, [box])

    const shrink = useCallback((e) => {
        e.preventDefault();
        if (box && box.current) {
            box.current.style.height = 0;
            box.current.style.display = "none";
        }
        setIsShrink(true)
    }, [box])


    const changeMode = (color = "") => {
        const MOON = document.getElementById("moon")
        const SUN = document.getElementById("sun")
        MOON.style.transition = "all 2s";
        SUN.style.transition = "all 2s";
        if (MOON) {
            if (color === "#424242") {
                MOON.style.transition = "all 2s";
                SUN.style.transition = "all 2s";
                document.body.style.color = "#eeeeee";
                setMode(color)
                return document.body.style.backgroundColor = color;
            }
            setMode(color)
            document.body.style.color = "#424242";
            return document.body.style.backgroundColor = color;
        }
        return null
    };


    if (screenSize > 760)
        return (
            <React.Fragment>
                <Container className="pt-5 pb-3 px-5 rounded">
                    <Row xs={12} sm={12} md={12} lg={12}>
                        <Col className="main-buttons" xs={10} sm={10} md={10} lg={10}>
                            <Row className="pt-1 text-center">
                                <Col className="nav-buttons main-buttons px-2" onClick={() => goTo('/my-portfolio')} xs={2} sm={2} md={2} lg={2}>
                                    {
                                        path === HOME
                                            ?
                                            <span className="underLine">Home</span>
                                            :
                                            <span>Home</span>
                                    }
                                </Col>
                                <Col className="nav-buttons main-buttons px-2" onClick={() => goTo('/my-portfolio/skills')} xs={2} sm={2} md={2} lg={2}>
                                    {
                                        path === SKILLS
                                            ?
                                            <span className="underLine">Skills</span>
                                            :
                                            <span>Skills</span>
                                    }
                                </Col>
                                <Col className="nav-buttons main-buttons px-2" onClick={() => goTo('/my-portfolio/experiences')} xs={2} sm={2} md={2} lg={2}>
                                    {
                                        path === EXP
                                            ?
                                            <span className="underLine">Experiences</span>
                                            :
                                            <span>Experiences</span>
                                    }
                                </Col>
                                <Col className="nav-buttons main-buttons px-2" onClick={() => goTo('/my-portfolio/about-me')} xs={2} sm={2} md={2} lg={2}>
                                    {
                                        path === ABOUT
                                            ?
                                            <span className="underLine">About Me</span>
                                            :
                                            <span>About Me</span>
                                    }
                                </Col>
                                <Col className="nav-buttons main-buttons px-2" onClick={() => goTo('/my-portfolio/contact-me')} xs={2} sm={2} md={2} lg={2}>
                                    {
                                        path === CONTACT
                                            ?
                                            <span className="underLine">Contact Me</span>
                                            :
                                            <span>Contact Me</span>
                                    }
                                </Col>
                            </Row>
                        </Col>

                        <Col className={`mode-buttons py-0 text-center`} xs={2} sm={2} md={2} lg={2}>
                            <Row className="p-0">
                                <Col id="moon" onClick={() => changeMode("#424242")} style={{ borderRadius: "25px 0 0 25px" }} className={`bg-${mode === '#eeeeee' ? 'dark' : 'powder'} px-1 text-${mode === '#eeeeee' ? 'light' : 'dark'} pt-1 pb-2`}>
                                    <FaMoon title="Change to dark mode" />
                                </Col>
                                <Col id="sun" onClick={() => changeMode("#eeeeee")} style={{ borderRadius: "0 25px 25px 0" }} className={`bg-${mode === '#eeeeee' ? 'powder' : 'dark'} pt-1 pb-2 px-1 text-${mode === '#eeeeee' ? 'dark' : 'light'}`}>
                                    <FaSun title="Change to light mode" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )

    if (screenSize < 760)
        return (
            <React.Fragment>
                <Col xs={12} sm={12} className={`bg-${mode === '#eeeeee' ? 'dark' : 'powder'} px-1 text-${mode === '#eeeeee' ? 'light' : 'dark'} pt-1 pb-2`}>
                    <AiOutlineMenu style={!isShrink ? { display: "none" } : { fontSize: "5.5vmin" }} onClick={expand} />
                    <FaTimes style={!isShrink ? { fontSize: "5.5vmin" } : { display: "none" }} onClick={shrink} />
                </Col>

                {
                    !isShrink ?
                        <div className="px-2">
                            <Container id="dropdown" ref={box} className="border-box-small">
                                {/* <Container id="dropdown" ref={box} style={{display: "none", height: 0}}> */}
                                <Row className="pt-1 text-center">
                                    <Col className="mobile-nav-buttons px-2" onClick={() => goTo('/my-portfolio')} xs={12} sm={12}>
                                        {
                                            path === HOME
                                                ?
                                                <span>Home</span>
                                                :
                                                <span>Home</span>
                                        }
                                    </Col>
                                    <Col className="mobile-nav-buttons px-2" onClick={() => goTo('/my-portfolio/skills')} xs={12} sm={12}>
                                        {
                                            path === SKILLS
                                                ?
                                                <span>Skills</span>
                                                :
                                                <span>Skills</span>
                                        }
                                    </Col>
                                    <Col className="mobile-nav-buttons px-2" onClick={() => goTo('/my-portfolio/experiences')} xs={12} sm={12}>
                                        {
                                            path === EXP
                                                ?
                                                <span>Experiences</span>
                                                :
                                                <span>Experiences</span>
                                        }
                                    </Col>
                                    <Col className="mobile-nav-buttons px-2" onClick={() => goTo('/my-portfolio/about-me')} xs={12} sm={12}>
                                        {
                                            path === ABOUT
                                                ?
                                                <span>About Me</span>
                                                :
                                                <span>About Me</span>
                                        }
                                    </Col>
                                    <Col className="mobile-nav-buttons px-2" onClick={() => goTo('/my-portfolio/contact-me')} xs={12} sm={12}>
                                        {
                                            path === CONTACT
                                                ?
                                                <span>Contact Me</span>
                                                :
                                                <span>Contact Me</span>
                                        }
                                    </Col>
                                    <Col className="mobile-nav-buttons px-2" xs={12} sm={12}>
                                        <Row className="p-3 m-3" xs={12} sm={12}>
                                            <Col id="moon" onClick={() => changeMode("#424242")} style={{ borderRadius: "25px 0 0 25px" }} className={`bg-${mode === '#eeeeee' ? 'dark' : 'powder'} px-1 text-${mode === '#eeeeee' ? 'light' : 'dark'} pt-1 pb-2`}>
                                                <FaMoon title="Change to dark mode" />
                                            </Col>
                                            <Col id="sun" onClick={() => changeMode("#eeeeee")} style={{ borderRadius: "0 25px 25px 0" }} className={`bg-${mode === '#eeeeee' ? 'powder' : 'dark'} pt-1 pb-2 px-1 text-${mode === '#eeeeee' ? 'dark' : 'light'}`}>
                                                <FaSun title="Change to light mode" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        :
                        <div></div>
                }
            </React.Fragment>
        )

    return null
}

export default Navbar
