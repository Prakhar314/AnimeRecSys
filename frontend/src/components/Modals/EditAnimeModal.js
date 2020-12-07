import React, { useContext } from 'react'

import { Modal, Button } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

import { store, actionTypes } from '../../store'
import CenterDiv from '../SharedComponents/CenterDiv'

function EditAnimeModal({ anime, handleClose, show, editing }) {

    const {dispatch: globalDispatch } = useContext(store)

    const updateAnime = () => {
        handleClose()
        globalDispatch({ type: actionTypes.ADD_ANIME, payload: anime })
    }

    const deleteAnime = () => {
        handleClose()
        globalDispatch({ type: actionTypes.REMOVE_ANIME, payload: anime })
    }

    return (
        <Modal show={show} onHide={handleClose} id={"edit-anime-modal"}>
            <Modal.Header closeButton>
                <Modal.Title>{editing!==false?'Edit Rating':'Add Rating'}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
                {!anime.image_path && <CenterDiv><h3 style={{ fontWeight: 200 }}>Nothing Selected</h3></CenterDiv>}
                {anime.image_path &&
                    <>
                        <img src={anime.image_path} alt={anime.title} style={{ width: "80%" }} />
                        <h3 style={{ marginTop: "1rem" }}>{anime.title}</h3>
                        <ReactStars
                            classNames="mx-auto"
                            size={35}
                            count={5}
                            isHalf={true}
                            onChange={newValue => {
                                anime.score = newValue * 2
                            }
                            } />
                    </>
                }
                {/* {JSON.stringify(anime)} */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={handleClose}>
                    Close
                </Button>
                {editing!==false &&
                <Button variant="danger" size="sm" onClick={deleteAnime}>
                    Remove
                </Button>}
                <Button variant="primary" size="sm" onClick={updateAnime}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditAnimeModal
