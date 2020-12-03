import {React,useState,useEffect} from 'react'
import NavBar from './NavBar'
import AddAnimeModal from './AddAnimeModal'
import UserAnimeList from './UserAnimeList'
import UserRecs from './UserRecs'

function RecPage() {
    const [anime, setAnime] = useState([])
    const [addAnimeModal,setAddAnimeModal] = useState(false)

    useEffect(() => {
        setAnime(JSON.parse(localStorage.getItem('userAnimeList') || '[]'))
    }, [])

    useEffect(() => {
        localStorage.setItem('userAnimeList', JSON.stringify(anime))
    }, [anime])

    function handleAdd(a){
        setAddAnimeModal(false)
        setAnime(animeList=>[a,...animeList.filter((x)=>x.id!==a.id)])
        // console.log(anime)
    }

    // useEffect(() => {
    //     axios.get('https://animerecsys.glitch.me/').then((res) => {
    //         // console.log(res.data)
    //         setAnime(res.data)
    //     })
    // }, [])

    return (
        <>
            <NavBar />
            <UserAnimeList anime={anime} onAddAnime={()=>setAddAnimeModal(true)} onClearAnime={()=>setAnime([])}/>
            <AddAnimeModal show={addAnimeModal} handleClose={()=>setAddAnimeModal(false)} handleAdd={handleAdd}/>
            <UserRecs anime={anime}/>
        </>
    )
}

export default RecPage
