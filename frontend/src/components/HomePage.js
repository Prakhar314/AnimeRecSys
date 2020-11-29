import { React, useEffect, useState, useCallback } from 'react'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import axios from 'axios'
import AnimeGrid from './AnimeGrid';
import LoadingShar from './LoadingShar';
import SearchSection from './SearchSection';
import NavBar from './NavBar';

function HomePage() {
    const [anime, setAnime] = useState([])
    const pingServer = useCallback(
        () => {
            axios.get('https://animerecsys.glitch.me/', { timeout: 5000 }).then((res) => {
                // console.log(res.data)
                setAnime(res.data)
            }).catch(err => {
                console.log(err.code)
                if (err.message.includes('timeout')) {
                    setTimeout(pingServer, 1000)
                }
            })
        },
        [],
    )

    useEffect(() => {
        pingServer()
    }, [pingServer])
    return (
        <>
            <NavBar />
            {anime.length === 0 && <LoadingShar height={100} />}
            <SearchSection/>
            <Container>
                <h3>Popular Shows</h3>
            </Container>
            <AnimeGrid anime={anime} />
        </>
    )
}

export default HomePage
