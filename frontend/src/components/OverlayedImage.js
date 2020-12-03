import React from 'react'
import { Card } from 'react-bootstrap'
function OverlayedImage({ id, title, image, score }) {
    return (
        <Card style={{ border: "none", margin: "0.5rem", backgroundColor: "transparent" }}>

            <Card.Img variant="top" src={image} style={{ objectFit: "cover", height: "30vh", borderRadius: "10px", display: "block" }} />
            <div style={{
                backgroundColor: "#000000a6",
                color: "white",
                fontWeight: 700,
                fontSize: "smaller",
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                borderRadius: "10px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingBottom: "1rem"
            }}>
                <h1 style={{
                    position: "absolute", top: "50%",
                    fontWeight: 800,
                    transform: "translate( 0 , -50% )"
                }}>
                    {score || 10}
                </h1>
                {title.slice(0,50)}
            </div>
        </Card>
    )
}

export default OverlayedImage
