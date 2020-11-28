import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function AnimeCard({ id, title, image }) {
    console.log(id)
    return (
        <Card style={{ border:"none"}}>
            <Link style={{ textDecoration: "none" }} to = {`/anime/${id}`}>
                <Card.Img variant="top" src={image} style={{ objectFit: "fit", width: "100%", borderRadius: "10px"}} />
            </Link>
            <Card.Body style={{padding:"10px",textAlign:"center",marginLeft:"-10%",marginRight:"-10%"}}>
                <Card.Subtitle style={{ fontSize: "1rem", fontWeight: "bold", overflowWrap: "normal" }}>{title}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default AnimeCard
