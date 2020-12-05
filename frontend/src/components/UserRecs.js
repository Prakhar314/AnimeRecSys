import { React, useReducer, useContext, useEffect } from 'react'

import { Container, Button, ProgressBar, Spinner } from 'react-bootstrap'
import axios from 'axios'

import { store, actionTypes } from '../store'
import AnimeGrid from './AnimeGrid'

const initialState = {
    loading: false,
    recommendations: [],
    error: false,
    errorMessage: '',
    progress: 0,
    queue: 0
};


function reducer(state, action) {
    switch (action.type) {
        case 'REQ_SENT':
            return {
                loading: true,
                recommendations: [],
                error: false,
                errorMessage: '',
                progress: 0,
                queue: action.payload.numWait || (-2) + 1
            }
        case 'PROGRESS':
            return {
                ...state,
                progress: action.payload.progress
            }
        case 'FINISH':
            return {
                loading: false,
                recommendations: action.payload.result,
                error: false,
                errorMessage: '',
                progress: 0,
                queue: 0,
            }
        case 'ERROR':
            return {
                loading: false,
                recommendations: [],
                error: true,
                errorMessage: action.payload.error,
                progress: 0,
                queue: 0
            }
        default:
            return initialState
    }
}

function UserRecs() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { state: globalState, dispatch: globalDispatch } = useContext(store)
    const userAnimeList = globalState.userAnimeList

    function getRecs() {
        dispatch({ type: 'REQ_SENT', payload: {} })
        axios({
            method: 'post',
            url: 'https://animerecsys.glitch.me/recommendations/18',
            data: {
                "animes": [...userAnimeList.map((x) => x.id)],
                "scores": [...userAnimeList.map((x) => x.score)]
            },
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }).then((res) => {
            dispatch({ type: 'REQ_SENT', payload: res.data })
            globalDispatch({ type: actionTypes.SYNC })
            setTimeout(() => {
                pingForProgress(0)
            }, 5000)
        }).catch((err) => {
            if (err.response.data.err === 'ACTIVE_JOB') {
                pingForProgress(0)
                return
            }
            dispatch({ type: 'ERROR', payload: { error: err.response.data.error } })
        })
    }

    function pingForProgress(tries) {
        if (tries > 30) {
            dispatch({ type: 'ERROR', payload: { error: "Job didn't finish in time" } })
        }
        axios.get('https://animerecsys.glitch.me/job/',
            { withCredentials: true }).then((res) => {
                if (res.data.state === 'failed' || res.data.reason) {
                    dispatch({ type: 'ERROR', payload: { error: 'Failed' } })
                    return
                }
                if (res.data.result != null) {
                    dispatch({ type: 'FINISH', payload: { result: res.data.result } })
                }
                else {
                    dispatch({ type: 'PROGRESS', payload: { progress: res.data.progress } })
                    setTimeout(() => {
                        pingForProgress(tries + 1)
                    }, 5000);
                }
            }).catch((err) => {
                dispatch({ type: 'ERROR', payload: { error: err.response.data.error } })
            })
    }

    useEffect(() => {
        if (globalState.recsInSync) {
            dispatch({ type: 'REQ_SENT', payload: {} })
            axios.get('https://animerecsys.glitch.me/job/', {
                withCredentials: true,
            }).then((res) => {
                if (res.data.state === 'failed') {
                    dispatch({ type: 'reset' })
                    return
                }
                if (res.data.result != null) {
                    dispatch({ type: 'FINISH', payload: { result: res.data.result } })
                }
                else {
                    dispatch({ type: 'PROGRESS', payload: { progress: res.data.progress } })
                    setTimeout(() => {
                        pingForProgress(0)
                    }, 5000);
                }
            }).catch((err) => {
                dispatch({ type: 'reset' })
                // console.log(err)
            })
        }
    }, [])

    return <div style={{ minHeight: "45vh", position: "relative", paddingBottom: "3rem" }}>
        <div style={{ textAlign: "center", position: "absolute", left: "50%", top: "50%", transform: "translate(-50% , -50%)" }}>
            {state.loading && (state.progress > 0 ?
                <ProgressBar variant="info" now={state.progress} animated style={{ minWidth: "200px" }} /> :
                <Spinner animation="grow" variant="info" />)}
            {state.loading && (state.queue > 0 &&
                <h6 className="text-muted" style={{ marginTop: "1rem" }}>Wait Time...{state.queue * 30}s</h6>
            )}
            {state.error &&
                <h6 className="text-danger">{state.errorMessage}</h6>
            }
        </div>
        {state.recommendations.length !== 0 &&
            <AnimeGrid anime={state.recommendations} style={{ margin: "3rem" }}>
                <Container fluid>
                    <h3 style={{ marginBottom: "2rem", marginTop: "2rem" }}>{"Recommended"}</h3>
                </Container>
            </AnimeGrid>}
        {!state.loading &&
            <Button variant="outline-dark" onClick={getRecs} disabled={userAnimeList.length < 10} style={{ position: "absolute", left: "50%", transform: "translate(-50%,0)", bottom: "1rem" }}>
                {userAnimeList.length < 10 ? "Add " + (10 - userAnimeList.length) + " more" : "Get Recommendations"}
            </Button>}
    </div>
}

export default UserRecs
