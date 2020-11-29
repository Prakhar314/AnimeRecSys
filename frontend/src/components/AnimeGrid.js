import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import AnimeCard from "./AnimeCard";
function AnimeGrid({ anime, children }) {
    return (
        <Container>
            {children}
            <Row style={{ flexWrap: "wrap", paddingLeft: "10px", paddingRight: "10px" }}>
                {anime.map((a) => (<Col key={a.id} xs={4} md={3} lg={2} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <AnimeCard id={a.id} title={a.title} image={a.image_path} />
                </Col>))}
            </Row>
        </Container>
    )
}

export default AnimeGrid
