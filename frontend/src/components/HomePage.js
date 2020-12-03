import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div position="relative">
            <img src="/AttackOnJojo.gif" style={{ position: "absolute", zIndex: "-1", width: "100vw", height: "100vh", objectFit: "cover" }} />
            <div className="brand" style={{ color: "lightgray", margin: "auto", position: "absolute", top: "35%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
                <h1 style={{ fontSize: "min(13vw,100px)" }}>AnimeRecSys</h1>
                <p>There couldn't be a better name...</p>
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translate(-50%,0)", display: "inline-block",textAlign:"center" }}>
                <Link className="btn btn-outline-light" to="/browse" style={{ margin: "1rem" }}>Browse Animes</Link>
                <Link className="btn btn-outline-light" to="/recommend" style={{ margin: "1rem" }}>Get Recommendations</Link>
            </div>
        </div>
    )
}

export default HomePage
