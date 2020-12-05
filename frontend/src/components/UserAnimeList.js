import React, { useState, useContext } from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Container, Button } from 'react-bootstrap'

import { store, actionTypes } from '../store'
import OverlayedImage from './OverlayedImage'
import EditAnimeModal from './EditAnimeModal'
import ImportAnimeModal from './ImportAnimeModal'
import useWindowSize from './UseWindowSize'

function ListEditButtons({ text, style, onClick, width }) {
    return (
        <Button
            variant="outline-dark"
            size={width > 600 ? "md" : "sm"}
            style={style}
            onClick={onClick}>
            {text}
        </Button>
    )
}

function UserAnimeList({ onAddAnime }) {

    const { state, dispatch } = useContext(store)
    const { width } = useWindowSize()
    const [showImportModal, setShowImportModal] = useState(false)

    const onClearAnime = () => {
        dispatch({ type: actionTypes.CLEAR })
    }

    const [selected, setSelected] = useState({
        key: 0,
        showModal: false
    })

    return (
        <div className="gradient-section" style={{ minHeight: "45vh", backgroundColor: "lightgrey", paddingTop: "1rem" }}>
            <Container style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "1rem", fontWeight: 300, fontSize: width > 600 ? "" : "25px" }}>
                    Your List({state.userAnimeList.length})
                </h3>
                <div style={{ marginLeft: "auto" }}>
                    <ListEditButtons style={{ marginRight: "5px" }} text="Add Anime" onClick={onAddAnime} width={width} />
                    {state.userAnimeList.length===0?<ListEditButtons style={{ marginRight: "5px" }} text="Import MAL" onClick={()=>setShowImportModal(true)} width={width} />:
                    <ListEditButtons style={{ marginLeft: "5px" }} text="Clear All" onClick={onClearAnime} width={width} />}
                </div>
            </Container>
            <Container>
                <ScrollMenu
                    arrowLeft={<div style={{ fontSize: "30px", marginRight: "1rem", fontWeight: 700 }}>{" < "}</div>}
                    arrowRight={<div style={{ fontSize: "30px", marginLeft: "1rem", fontWeight: 700 }}>{" > "}</div>}
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
            <ImportAnimeModal show={showImportModal} handleClose={()=>setShowImportModal(false)}/>
        </div>
    )
}

export default UserAnimeList
