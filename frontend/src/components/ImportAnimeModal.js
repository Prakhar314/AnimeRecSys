import React, { useState, useContext } from 'react'
import { InputGroup, Modal, Button, FormControl, Spinner } from 'react-bootstrap'
import axios from 'axios'

import { store, actionTypes } from '../store'

function ImportAnimeModal({ show, handleClose }) {

    const { dispatch: globalDispatch } = useContext(store)
    const [state, setState] = useState({
        loading: false,
        error: '',
        value: ''
    })

    const onChange = (event) => {
        setState(prevState => ({
            ...prevState, value: event.target.value
        }))
    }

    const importAnime = () => {
        setState(prevState => ({
            ...prevState, loading: true, error: ''
        }))
        axios.get(`https://animerecsys.glitch.me/import/${state.value}`).then((res) => {
            // console.log(res.data)
            setState(prevState => ({
                ...prevState, loading: false, error: ''
            }))
            globalDispatch({ type: actionTypes.IMPORT, payload: res.data })
            handleClose()
        }).catch((err) => {
            console.log(err)
            setState(prevState => ({
                ...prevState, loading: false, error: 'Couldn\'t fetch MAL'
            }))
        })
    }

    return (
        <Modal show={show} onHide={handleClose} id={"edit-anime-modal"}>
            <Modal.Header closeButton>
                <Modal.Title>Import Anime</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
                <InputGroup>
                    <FormControl
                        placeholder="Enter your MAL id"
                        aria-label="MAL ID"
                        aria-describedby="basic-addon2"
                        onChange={onChange}
                        value={state.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={importAnime}> Import </Button>
                    </InputGroup.Append>
                </InputGroup>
                {state.loading && <Spinner variant="secondary" animation="grow" className="m-1"/>}
                <p style={{color:"red"}}>{state.error}</p>
            </Modal.Body>
        </Modal>
    )
}

export default ImportAnimeModal
