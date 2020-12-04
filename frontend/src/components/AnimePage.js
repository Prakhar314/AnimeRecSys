import {
    useParams
} from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import NavBar from "./NavBar"
import { Col, Row, Container, Button } from 'react-bootstrap'
import AnimeGrid from "./AnimeGrid"
import AnimeInfo from "./AnimeInfo"
import LoadingShar from "./LoadingShar"

export default function AnimePage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const defaultImages = useMemo(()=>{return{ cover: '/coverPlaceholder.png', banner: '/bannerPlaceholder.png' }},[])
    let { id } = useParams();
    const [anime, setAnime] = useState({})
    const [images, setImages] = useState(defaultImages)
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    useEffect(() => {
        setImages(defaultImages)
        axios.get(`https://animerecsys.glitch.me/anime/${id}/18`).then((val) => {
            // console.log(val.data.details);
            setAnime(val.data)
        })
        // This is the GraphQL query
        const query = `
            query ($id: Int) {
                Media(idMal: $id, type: ANIME) {
                    coverImage {
                    large
                    }
                    bannerImage
                }
            }
            `;

        // These variables are optional, leave empty for now
        const variables = { "id": id };
        axios.post('https://graphql.anilist.co', {
            query,
            variables
        }).then((result) => {
            setImages({
                banner: result.data.data.Media.bannerImage || defaultImages.banner,
                cover: result.data.data.Media.coverImage.large || defaultImages.cover
            });
        });
    }, [id,defaultImages])
    return (
        <>
            <NavBar />
            {anime.details &&
                <div>
                    <img src={images.banner} alt={anime.details.title} style={{ height: "min(500px,60vw)", width: "100%", objectFit: "cover" }}></img>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} style={{ paddingRight: width > 768 ? "0px" : "15px", textAlign: width > 768 ? "left" : "center" }}>
                                <div style={{ display: "flex" }}>
                                    <img src={images.cover} alt={anime.details.title} style={{ marginTop: "-120px", boxShadow: "0px 0px 68px -19px black", marginLeft: width > 768 ? "unset" : "auto", marginRight: width > 768 ? "unset" : "auto" }}></img>
                                </div>
                                <h5 style={{ color: "rgb(108, 117, 125)", fontWeight: "300", marginTop: "2rem" }}>{anime.details.title_japanese}, {anime.details.title_english}</h5>
                                <AnimeInfo {...anime.details} />
                            </Col>
                            <Col xs={12} md={8} style={{ marginLeft: width > 768 ? "15px" : "0px", marginRight: "-15px" }}>
                                <h2 style={{ marginTop: "2rem", marginBottom: "1rem", textAlign: width > 768 ? "left" : "center" }}>{anime.details.title}</h2>
                                <p>{anime.details.synopsis}</p>
                                <div className="text-center text-sm-left">
                                    <Button variant="outline-dark m-1">Rate this Anime</Button>
                                    <a rel="noreferrer" target="_blank" href={`https://www.myanimelist.net/anime/${id}`} className="btn btn-outline-dark m-1">Open in MyAnimeList</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <AnimeGrid anime={anime.recommendations}>
                        <h3 style={{ marginTop: "2rem", marginBottom: "1rem", textAlign: width > 768 ? "left" : "center" }}>Recommendations</h3>
                    </AnimeGrid>
                </div>}
            {anime.details == null && <LoadingShar />}
        </>
    );
}