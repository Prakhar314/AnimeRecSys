import React from 'react'

function CenterDiv({children}) {
    return (
        <div style={{ display: "flex", justifyContent: "center", height:"100%", alignItems:"center" }}>
            {children}
        </div>
    )
}

export default CenterDiv
