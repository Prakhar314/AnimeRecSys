import {
    useParams
} from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";
import { Col, Row, Container } from 'react-bootstrap'
import AnimeGrid from "./AnimeGrid"
import AnimeInfo from "./AnimeInfo"
import LoadingShar from "./LoadingShar"
import Chip from "./Chip"
export default function AnimePage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const defaultBanner = '/bannerPlaceholder.png';
    const defaultCover = '/coverPlaceholder.png';
    let { id } = useParams();
    const [anime, setAnime] = useState({})
    const [coverImage, setCoverImage] = useState(defaultCover)
    const [bannerImage, setBannerImage] = useState(defaultBanner)
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    useEffect(() => {
        setBannerImage(defaultBanner);
        setCoverImage(defaultCover);
        axios.get(`https://animerecsys.glitch.me/anime/${id}`).then((val) => {
            // console.log(val.data.details);
            setAnime(val.data);
        });
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
            setBannerImage(result.data.data.Media.bannerImage||defaultBanner);
            setCoverImage(result.data.data.Media.coverImage.large||defaultCover);
        });
    }, [id])
    return (
        <>
            <NavBar />
            {anime.details &&
                <div>
                    <img src={bannerImage} alt={anime.details.title} style={{ height: "min(500px,60vw)", width: "100%", objectFit: "cover" }}></img>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} style={{paddingRight:"0px",textAlign:width > 768 ?"left":"center"}}>
                                <div style={{ display: "flex" }}>
                                    <img src={coverImage} alt={anime.details.title} style={{ marginTop: "-120px", boxShadow: "0px 0px 68px -19px black", marginLeft: width > 768 ? "unset" : "auto", marginRight: width > 768 ? "unset" : "auto" }}></img>
                                </div>
                                <h5 style={{ color: "rgb(108, 117, 125)", fontWeight: "300",marginTop: "2rem" }}>{anime.details.title_japanese}, {anime.details.title_english}</h5>
                                <AnimeInfo {...anime.details}/>
                            </Col>
                            <Col xs={12} md={8} style={{marginLeft:"15px",marginRight:"-15px"}}>
                                <h2 style={{ marginTop: "2rem", marginBottom: "1rem", textAlign: width > 768 ? "left" : "center" }}>{anime.details.title}</h2>
                                <p>{anime.details.synopsis}</p>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Container>
                        <h3 style={{ marginTop: "2rem", marginBottom: "1rem", textAlign: width > 768 ? "left" : "center" }}>Synopsis</h3>
                        <p>{anime.details.synopsis}</p>
                    </Container> */}
                    <AnimeGrid anime={anime.recommendations}>
                        <h3 style={{ marginTop: "2rem", marginBottom: "1rem", textAlign: width > 768 ? "left" : "center" }}>Recommendations</h3>
                    </AnimeGrid>
                </div>}
            {anime.details == null && <LoadingShar />}
        </>
    );
}