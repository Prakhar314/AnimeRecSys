import {React,useState} from 'react'

import NavBar from '../SharedComponents/NavBar'
import AddAnimeModal from '../Modals/AddAnimeModal'
import UserAnimeList from './UserAnimeList'
import UserRecs from './UserRecs'

function RecPage() {
    const [addAnimeModal,setAddAnimeModal] = useState(false)

    return (
        <>
            <NavBar />
            <UserAnimeList onAddAnime={()=>setAddAnimeModal(true)}/>
            <AddAnimeModal show={addAnimeModal} handleClose={()=>setAddAnimeModal(false)}/>
            <UserRecs/>
        </>
    )
}

export default RecPage
