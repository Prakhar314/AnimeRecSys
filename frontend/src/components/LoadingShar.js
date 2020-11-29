import React from 'react'

function LoadingShar({height}) {
    // console.log(height)
    return (
        <div style={{
            textAlign: "center",
            height: `${height||50}vh`,
            padding: "calc(25% - 50px)"
        }}>
            <img src="/sharingan.gif" alt="Loading" style={{borderRadius:"100%"}}></img>
        </div>
    )
}

export default LoadingShar
