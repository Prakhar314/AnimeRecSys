import { React, useEffect, useState } from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import AnimeCard from './AnimeCard'
import axios from 'axios'

function HomePage() {
    const [anime, setAnime] = useState([])

    function pingServer() {
        axios.get('https://animerecsys.glitch.me/', { timeout: 5000 }).then((res) => {
            // console.log(res.data)
            setAnime(res.data)
        }).catch(err => {
            console.log(err.code)
            if (err.message.includes('timeout')) {
                setTimeout(pingServer, 1000)
            }
        })
    }

    useEffect(() => {
        pingServer()
    }, [])
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <li>
                    <Link to="/anime/20">Yahoo</Link>
                </li>
                <Container>
                    <Row style={{ flexWrap: "wrap", paddingLeft: "10px", paddingRight: "10px" }}>
                        {anime.map((a) => (
                            <Col key={a.id} xs={4} md={3} lg={2} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <AnimeCard id={a.id} title={a.title} image={a.image_path} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default HomePage
