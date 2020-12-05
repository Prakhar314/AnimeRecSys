import { React, useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import AnimeGrid from './AnimeGrid';
import LoadingShar from './LoadingShar';
import SearchSection from './SearchSection';
import NavBar from './NavBar';

function BrowsePage() {
    const [anime, setAnime] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const pingServer = useCallback(
        () => {
            axios.get('https://animerecsys.glitch.me/', { timeout: 5000 }).then((res) => {
                // console.log(res.data)
                setAnime(res.data)
            }).catch(err => {
                // console.log(err.code)
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
            {anime.length === 0 ? <LoadingShar height="calc( 100vh - 56px)" /> :
                <>
                    <SearchSection onSuggest={(res) => { setSuggestions(res) }} />
                    <Container>
                        <h3 style={{ marginBottom: "2rem" }}>{suggestions.length === 0 ? "Popular Shows" : "Search Results"}</h3>
                    </Container></>}
            {suggestions.length === 0 && anime.length !== 0 && <AnimeGrid anime={anime} />}
            {suggestions.length !== 0 && <AnimeGrid anime={suggestions} />}
        </>
    )
}

export default BrowsePage
