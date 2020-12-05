import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Fade, Collapse } from 'react-bootstrap'

function HomePage() {
    const [aboutVisible, setAboutVisible] = useState(false)
    return (
        <div position="relative">
            <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                <Button
                    onClick={() => setAboutVisible(state => !state)}
                    aria-controls="fade-nav-buttons fade-description fade-git-link fade-subtitle"
                    aria-expanded={aboutVisible}
                    variant="outline-light"
                    style={{ borderRadius: "50%" }}
                >
                    <i className={aboutVisible ? "fa fa-home" : "fa fa-info-circle"}></i>
                </Button>
            </div>

            <img src={process.env.PUBLIC_URL+"/AttackOnJojo.gif"} style={{ position: "absolute", zIndex: "-1", width: "100vw", height: "100vh", objectFit: "cover" }} />

            <div className="brand" style={{ color: "lightgray", margin: "auto", position: "absolute", top: "28%", left: "50%", transform: "translate(-50%, 0%)", textAlign: "center" }}>
                <h1 style={{ fontSize: "min(13vw,100px)" }}>AnimeRecSys</h1>
                <Fade in={!aboutVisible}>
                    <p id="fade-subtitle">There couldn't be a better name...</p>
                </Fade>
                <Collapse in={aboutVisible}>
                    <div id="fade-description">
                        <p>This project uses a <InlineLink href={"https://arxiv.org/abs/1708.05031"} text="collaborative filtering" /> based recommender system, built using Tensorflow 2.0, on  <InlineLink href={"https://www.kaggle.com/qvinhdo/myanimelist"} text="this Kaggle" /> dataset. The webapp is built using React, Express and Bull.</p>
                    </div>
                </Collapse>
            </div>

            <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translate(-50%,0)", display: "inline-block", textAlign: "center" }}>
                <Collapse in={aboutVisible}>
                    <div id="fade-git-link">
                        <a rel="noreferrer" target="_blank" className="btn btn-outline-light" href="https://github.com/Prakhar314/AnimeRecSys" style={{ margin: "0.5rem" }}><i className="fa fa-github" /> View on Github</a>
                    </div>
                </Collapse>
                <Collapse in={!aboutVisible}>
                    <div id="fade-nav-buttons">
                        <Link className="btn btn-outline-light" to="/browse" style={{ margin: "0.5rem" }}>Browse Animes</Link>
                        <Link className="btn btn-outline-light" to="/recommend" style={{ margin: "0.5rem" }}>Get Recommendations</Link>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

function InlineLink({ href, text }) {
    return (
        <span className="inline-link" onClick={() => window.open(href)}>
            {text}
        </span>
    )
}


export default HomePage
