import React, { useState, useContext } from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Container, Button } from 'react-bootstrap'
import debounce from 'lodash.debounce'

import { store, actionTypes } from '../store'
import OverlayedImage from './OverlayedImage'
import EditAnimeModal from './EditAnimeModal'

function UserAnimeList({ onAddAnime }) {

    const { state, dispatch } = useContext(store)

    const onClearAnime = () => {
        dispatch({ type: actionTypes.CLEAR })
    }

    const [selected, setSelected] = useState({
        key: 0,
        showModal: false
    })

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
                    arrowLeft={<div style={{ fontSize: "30px", margin: "1rem", fontWeight: 700}}>{" < "}</div>}
                    arrowRight={<div style={{ fontSize: "30px", margin: "1rem", fontWeight: 700}}>{" > "}</div>}
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
                    selected={selected.key}
                    onSelect={(key) => {
                        setSelected({ key: key, showModal: true })
                    }}
                />
            </Container>
            {selected.showModal &&
                <EditAnimeModal anime={{ ...state.userAnimeList[selected.key] }} show={selected.showModal} handleClose={() => setSelected(prevState => { return { ...prevState, showModal: false } })} />
            }
        </div>
    )
}

export default UserAnimeList
