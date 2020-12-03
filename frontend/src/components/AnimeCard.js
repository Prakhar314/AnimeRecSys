import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function AnimeCard({ id, title, image }) {
    // console.log(id)
    return (
        <Card style={{ border: "none" }}>
            <Link style={{ textDecoration: "none" }} to={`/anime/${id}`}>
                <Card.Img variant="top" src={image} style={{ objectFit: "cover", width: "100%", borderRadius: "5px" }} />
            </Link>
            <Card.Body style={{ padding: "10px", textAlign: "center", marginLeft: "-10%", marginRight: "-10%" }}>
                <Card.Subtitle style={{
                    fontSize: "1rem", fontWeight: "bold", overflowWrap: "normal", overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box"
                }}>{title}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default AnimeCard
