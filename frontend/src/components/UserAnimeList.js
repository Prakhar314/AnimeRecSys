import React, { useState , useContext} from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Container, Button } from 'react-bootstrap'

import { store, actionTypes } from '../store'
import OverlayedImage from './OverlayedImage'

function UserAnimeList({ onAddAnime }) {

    const {state,dispatch} = useContext(store)

    const onClearAnime=()=>{
        dispatch({type:actionTypes.CLEAR})
    }

    const [selected, setSelected] = useState(0)
    return (
        <div style={{ minHeight: "45vh", backgroundColor: "lightgrey", paddingTop: "1rem" }}>
            <Container style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "1rem", fontWeight: 300 }}>
                    Your List({state.userAnimeList.length})
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
            </Container>
            <Container>
                <ScrollMenu
                    arrowLeft={<div style={{ fontSize: "30px",margin:"1rem",fontWeight:700 }}>{" < "}</div>}
                    arrowRight={<div style={{ fontSize: "30px",margin:"1rem",fontWeight:700 }}>{" > "}</div>}
                    // onFirstItemVisible={()=>{console.log("AAAAA")}}
                    arrowDisabledClass={"d-none"}
                    hideSingleArrow={true}
                    data={
                        state.userAnimeList.map((a, i) => (
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
        </div>
    )
}

export default UserAnimeList
