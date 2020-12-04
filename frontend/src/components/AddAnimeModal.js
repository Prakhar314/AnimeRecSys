import React, { useState, useCallback, useRef, useEffect, useContext } from 'react'

import { Modal, Button, Row, Col, InputGroup, FormControl, Spinner } from 'react-bootstrap'
import debounce from 'lodash.debounce'
import axios from 'axios'
import ReactStars from "react-rating-stars-component"

import { store, actionTypes } from '../store'
import CenterDiv from './CenterDiv'

function AddAnimeModal({ show, handleClose }) {

    const { state: globalState, dispatch: globalDispatch } = useContext(store)

    function handleAdd(item) {
        globalDispatch({ type: actionTypes.ADD_ANIME, payload: { ...item } })
    }

    const [state, setState] = useState({
        loading: false,
        value: '',
        currentAnime: {},
        suggestion: []
    })
    const valueRef = useRef(state.value)

    useEffect(() => {
        valueRef.current = state.value
    }, [state.value])

    const loadSuggestions = (query) => {
        console.log("fetching " + query)
        setState(prevstate => {
            return { ...prevstate, loading: true }
        })
        axios({
            method: 'post',
            url: `https://animerecsys.glitch.me/search/${query}/5`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log("fetching " + query + " " + valueRef.current)
            if (query === valueRef.current) {
                setState(prevstate => {
                    return { ...prevstate, loading: false, suggestion: res.data }
                })
                // console.log(res.data)
            } else { // Ignore suggestions if input value changed
                setState(prevstate => {
                    return { ...prevstate, loading: true }
                })
            }
        })
    }

    const onChange = (event) => {
        setState(prevstate => {
            return { ...prevstate, value: event.target.value, currentAnime: {} }
        })
        fetchSuggestions(event.target.value)
    };

    const fetchSuggestions = (value) => {
        debouncedLoadSuggestions(value)
    };

    const setCurrentAnime = (anime) => {
        setState(prevstate => {
            return { ...prevstate, currentAnime: anime }
        })
    }

    const clearInput = () => {
        setState(prevstate => {
            return { ...prevstate, value: '' ,loading:false}
        })
    }

    const debouncedLoadSuggestions = useCallback(debounce(loadSuggestions, 1000), [])

    const searchInGlobal = globalState.userAnimeList.filter((i) => i.id === state.currentAnime.id)
    const animeAlreadyRated = searchInGlobal.length !== 0 && (state.currentAnime.score == null || state.currentAnime.score === searchInGlobal[0].score)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Rate Anime</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "0px", paddingTop: "0px" }}>
                <Row style={{ minHeight: "300px" }}>
                    <Col style={{ backgroundColor: "lightgray", paddingTop: "1rem" }}>
                        <InputGroup size="sm">
                            <FormControl
                                placeholder="Jojo"
                                aria-label="Search..."
                                aria-describedby="basic-addon2"
                                onChange={onChange}
                                value={state.value}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={() => clearInput()}> X </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {state.loading &&
                            <div style={{ display: "flex", height: "80%" }}>
                                <Spinner animation="grow" style={{ margin: "auto" }} />
                            </div>}
                        <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                            {
                                !state.loading && state.suggestion.length !== 0 &&
                                state.suggestion.map((a, i) =>
                                    <h6 key={a.id}
                                        style={{
                                            padding: "10px",
                                            borderTop: i === 0 ? "1px solid gray" : "none",
                                            borderBottom: "1px solid gray",
                                            marginBottom: "5px",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setCurrentAnime(a)}
                                    >
                                        {a.title}
                                    </h6>)
                            }
                            {
                                !state.loading && state.suggestion.length === 0 && <CenterDiv><h6 style={{ fontWeight: 200 }}>Suggestions will show up here</h6></CenterDiv>
                            }
                        </div>
                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        {!state.currentAnime.image_path && <CenterDiv><h3 style={{ fontWeight: 200 }}>Nothing Selected</h3></CenterDiv>}
                        {state.currentAnime.image_path &&
                            <>
                                <img src={state.currentAnime.image_path} alt={state.currentAnime.title} style={{ width: "80%" }} />
                                <h3 style={{ marginTop: "1rem" }}>{state.currentAnime.title}</h3>
                                <ReactStars
                                    classNames="mx-auto"
                                    size={35}
                                    count={5}
                                    isHalf={true}
                                    onChange={newValue => {
                                        state.currentAnime.score = newValue * 2
                                        setState(prevstate => { return { ...prevstate } })
                                    }
                                    } />
                            </>
                        }
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" size="sm" onClick={() => handleAdd(state.currentAnime)} disabled={state.currentAnime.score == null || animeAlreadyRated}>
                    {animeAlreadyRated ? `Rated ${searchInGlobal[0].score}` : 'Save Rating'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddAnimeModal
