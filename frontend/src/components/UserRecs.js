import { React, useReducer } from 'react'
import { Container, Button, ProgressBar, Spinner } from 'react-bootstrap'
import axios from 'axios'
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
            };
        case 'PROGRESS':
            return {
                ...state,
                progress: action.payload.progress
            };
        case 'FINISH':
            return {
                loading: false,
                recommendations: action.payload.result,
                error: false,
                errorMessage: '',
                progress: 0,
                queue: 0,
            };
        case 'ERROR':
            return {
                loading: false,
                recommendations: [],
                error: true,
                errorMessage: action.payload.error,
                progress: 0,
                queue: 0
            };
        default:
            throw new Error();
    }
}

function UserRecs({ anime }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function getRecs() {
        dispatch({ type: 'REQ_SENT', payload: {} })
        axios({
            method: 'post',
            url: `https://animerecsys.glitch.me/recommendations/10`,
            data: {
                "animes": [...anime.map((x) => x.id)],
                "scores": [...anime.map((x) => x.score)]
            },
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }).then((res) => {
            dispatch({ type: 'REQ_SENT', payload: res.data })
            setTimeout(() => {
                pingForProgress()
            }, 5000)
        }).catch((err) => {
            if (err.response.data.err === 'ACTIVE_JOB') {
                pingForProgress()
                return
            }
            dispatch({ type: 'ERROR', payload: { error: err.response.data.error } })
        })
    }

    function pingForProgress() {
        axios.get('https://animerecsys.glitch.me/job/',
            { withCredentials: true }).then((res) => {
                if (res.data.status === 'failed') {
                    dispatch({ type: 'ERROR', payload: { error: 'Failed' } })
                    return
                }
                if (res.data.result != null) {
                    dispatch({ type: 'FINISH', payload: { result: res.data.result } })
                }
                else {
                    dispatch({ type: 'PROGRESS', payload: { progress: res.data.progress } })
                    setTimeout(() => {
                        pingForProgress()
                    }, 2000);
                }
            }).catch((err) => {
                dispatch({ type: 'ERROR', payload: { error: err.response.data.error } })
            })
    }

    return <div style={{ minHeight: "45vh", position: "relative" }}>
        <div style={{ textAlign: "center", position: "absolute", left: "50%", top: "50%", transform: "translate(-50% , -50%)" }}>
            {state.loading && (state.progress > 0 ?
                <ProgressBar now={state.progress} animated style={{ minWidth: "200px" }} /> :
                <Spinner animation="grow" variant="danger" />)}
            {state.loading && (state.queue > 0 && <h6 className="text-muted" style={{ marginTop: "1rem" }}>Wait Time...{state.queue * 30}s</h6>)}
            {state.error && <h6 className="text-danger">{state.errorMessage}</h6>}
        </div>
        {state.recommendations.length !== 0 && <AnimeGrid anime={state.recommendations} fluid>
            <Container fluid>
                <h3 style={{ marginBottom: "2rem", marginTop: "2rem" }}>{"Recommended"}</h3>
            </Container></AnimeGrid>}
        {!state.loading && <Button variant="outline-dark" onClick={getRecs} disabled={anime.length < 10} style={{ position: "absolute", right: "1rem", bottom: "1rem" }}>
            {anime.length < 10 ? "Add " + (10 - anime.length) + " more" : "Get Recommendations"}
        </Button>}
    </div>
}

export default UserRecs
