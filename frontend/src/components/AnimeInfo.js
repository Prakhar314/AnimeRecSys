import React from 'react'
import Chip from "./Chip"

function getMPAA(mpaa) {
    switch (mpaa) {
        case 'R - 17+ (violence & profanity)':
            return { text: 'R-17+', tooltip: "Violence & Profanity", color: "#fc1303" }
        case 'PG-13 - Teens 13 or older':
            return { text: 'PG-13', tooltip: "Teens 13 or Older", color: "#e7f03c" }
        case 'PG - Children':
            return { text: 'PG', tooltip: "Children", color: "#31d65d" }
        case 'R+ - Mild Nudity':
            return { text: 'R+', tooltip: "Mild Nudity", color: "#fc1303" }
        case 'G - All Ages':
            return { text: 'G', tooltip: "All Ages", color: "#31d65d" }
        default:
            return { text: mpaa }
    }
}

function getGenre(genre) {
    return (<>{genre.split(",").map((g) => <Chip text={g} color="#e1e3e3" />)}</>)
}

function AnimeInfo({ mpaa_rating, score, genre }) {
    return (
        <>
            <p style={{marginBottom:"0.2rem"}}><Chip {...getMPAA(mpaa_rating)} /> <Chip text={score} color="#46ebda" /></p>
            <p>{getGenre(genre)}</p>
        </>
    )
}

export default AnimeInfo
