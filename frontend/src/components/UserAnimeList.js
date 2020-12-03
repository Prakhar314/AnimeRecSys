import { React, useState } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Container, Button } from 'react-bootstrap'
import OverlayedImage from './OverlayedImage'

function UserAnimeList({ onAddAnime, onClearAnime, anime }) {
    const [selected, setSelected] = useState(0)
    return (
        <Container fluid style={{ minHeight: "45vh", backgroundColor: "lightgrey", paddingTop: "1rem" }}>
            <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "1rem", fontWeight:300 }}>
                    Your List({anime.length})
                    </h3>
                <div style={{ marginLeft: "auto" }}>
                    <Button
                        variant="outline-dark"
                        style={{ marginRight: "5px" }}
                        onClick={onAddAnime}>
                        Add Anime
                    </Button>
                    <Button
                        variant="outline-dark"
                        style={{ marginLeft: "5px" }}
                        onClick={onClearAnime}>
                        Clear All
                    </Button>
                </div>
            </div>
            <ScrollMenu
                arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
                arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
                // onFirstItemVisible={()=>{console.log("AAAAA")}}
                arrowDisabledClass={"d-none"}
                hideSingleArrow={true}
                data={
                    anime.map((a, i) => (
                        <div key={i}
                            className="menu-item"
                            style={{ display: "grid", maxWidth: "21vh" }}>
                            <OverlayedImage id={a.id} image={a.image_path} title={a.title} score={a.score} />
                        </div>
                    ))

                }
                selected={selected}
                onSelect={(key) => setSelected(key)}
            />
        </Container>
    )
}

export default UserAnimeList
