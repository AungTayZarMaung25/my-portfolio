import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './Navbar/Navbar'
import { GiSamuraiHelmet } from 'react-icons/gi'
import { FaFacebook, FaGithub, FaFacebookMessenger } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Profile from '../../assets/profile.jpg'

const Home = () => {

    const screenSize = window.screen.width;

    const birthDate = new Date(2001, 3, 25, 0, 0, 0, 0);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    const day = currentDate.getDay() - currentDate.getDay();

    useEffect(() => {
        if ((month < 0) || (month === 0 && day < 0))
            age--;
    }, [age, day, month])

    if (screenSize < 760)
        return (
            <React.Fragment>
                <Navbar />
                <div className="px-2">
                    <Container className="border-box-small mt-5">
                        <center>
                            <img src={Profile} width="50%" alt="Profile" style={{ borderRadius: "50%", margin: "2.5rem 0" }} />
                        </center>

                        <center>
                            <h1 style={{ margin: "-1rem 0 1.2rem 0" }}>Hi<span style={{ color: "tomato" }}> !</span></h1>
                            <p>I am Aung Tay Zar Maung.</p>
                            <p>
                                Software Developer at
                                <span style={{ color: "tomato" }}> Yangon </span>
                                <GiSamuraiHelmet style={{ color: "teal", margin: "0 5px 5px 0" }} />
                                .
                            </p>
                            <p>
                                <FaFacebookMessenger className="icons-small" />
                                <FaFacebook className="icons-small" />
                                <FaGithub className="icons-small" />
                                <HiMail className="icons-small" style={{ fontSize: "10vmin" }} />
                            </p>
                        </center>
                    </Container>
                </div>
            </React.Fragment>
        )

    return (
        <React.Fragment>
            <Navbar />
            <Container className="border-box pb-5">
                <img src={Profile} width="15%" alt="Profile" style={{ float: "left", borderRadius: "50%", margin: "2.5rem 0 0 5rem" }} />

                <h1>Hi<span style={{ color: "tomato" }}> !</span></h1>
                <p>I am Aung Tay Zar Maung.</p>
                <p>
                    Software Developer at
                    <span style={{ color: "tomato" }}> Yangon </span>
                    <GiSamuraiHelmet style={{ color: "teal", margin: "0 5px 5px 0" }} />
                    .
                </p>
                <p>
                    <FaFacebookMessenger className="icons" />
                    <FaFacebook className="icons" />
                    <FaGithub className="icons" />
                    <HiMail className="icons" style={{ fontSize: "5vmin" }} />
                </p>
            </Container>

            <Container className="border-box-second p-5 mb-5 text-left">
                <h1>More about me<span style={{ color: "tomato" }}> !</span></h1>
                <p>
                    Currently I am <span style={{color: "tomato"}}>{age}</span> years old.
                    I am a self-taught programmer. I learned only from the web. I enjoy playing games and listening to metalcore songs.
                </p>
                <p>
                    That's all about me....
                </p>
            </Container>
        </React.Fragment>
    )
}

export default Home
