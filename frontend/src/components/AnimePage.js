import {
    useParams
} from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function AnimePage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const [anime, setAnime] = useState({})
    const [coverImage, setCoverImage] = useState('')
    const [bannerImage, setBannerImage] = useState('')

    useEffect(() => {
        axios.get(`https://animerecsys.glitch.me/anime/${id}`).then((val) => {
            // console.log(val.data.details);
            setAnime(val.data);
        });
        // This is the GraphQL query
        const query = `
            query ($id: Int) {
                Media(idMal: $id, type: ANIME) {
                    coverImage {
                    large
                    }
                    bannerImage
                }
            }
            `;

        // These variables are optional, leave empty for now
        const variables = { "id": id };
        axios.post('https://graphql.anilist.co', {
            query,
            variables
        }).then((result) => {
            setBannerImage(result.data.data.Media.bannerImage);
            setCoverImage(result.data.data.Media.coverImage.large);
        });
    }, [id])
    return (
        <>
            {anime.details &&
                <div>
                    <h3>{anime.details.title}</h3>
                    <img src={bannerImage} alt={anime.details.title} style={{ height: "min(500px,60vw)", width: "100%", objectFit: "cover" }}></img>
                    <img src={coverImage} alt={anime.details.title} style={{marginTop: "-120px", boxShadow: "0px 0px 68px -19px black"}}></img>
                    <p>{anime.details.mpaa_rating}</p>
                    <p>{anime.details.title_japanese}, {anime.details.title_english}</p>
                    <p>{anime.details.genre}</p>
                    <p>{anime.details.synopsis}</p>
                    <ul>
                        {anime.recommendations.map((x) => {
                            return (<li key={x.id}><Link to={"/anime/" + x.id}>{x.title}</Link></li>);
                        })}
                    </ul>
                </div>}
            {anime.details == null && <div>
                <h3>Loading</h3>
            </div>}
        </>
    );
}