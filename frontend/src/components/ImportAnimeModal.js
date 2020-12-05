import React,{useState,useContext} from 'react'
import { InputGroup, Modal, Button, FormControl, Spinner } from 'react-bootstrap'
import axios from 'axios'

import { store, actionTypes } from '../store'

function ImportAnimeModal({ show, handleClose }) {

    const { dispatch: globalDispatch } = useContext(store)
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const importAnime = () => {
        setLoading(true)
        axios.get(`https://animerecsys.glitch.me/import/${value}`).then((res) => {
            // console.log(res.data)
            setLoading(false)
            globalDispatch({ type: actionTypes.IMPORT, payload: res.data })
            handleClose()
        }).catch((err) => {
            console.log(err)
            setLoading(false)
            setError(JSON.stringify(err))
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
                        value={value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={importAnime}> Import </Button>
                    </InputGroup.Append>
                </InputGroup>
                {loading && <Spinner variant="secondary" animation="grow" />}
                <p className="text-error">{error}</p>
            </Modal.Body>
        </Modal>
    )
}

export default ImportAnimeModal
