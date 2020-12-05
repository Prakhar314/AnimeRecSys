import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Pagination } from "react-bootstrap"
import AnimeCard from "./AnimeCard"
import useWindowSize from "./UseWindowSize"

function AnimeGrid({ anime, children, fluid }) {
    const { width } = useWindowSize()

    const [currentPage, setCurrentPage] = useState(1)
    // xs
    let itemsPerPage = 6
    let contentSize = "38rem"
    if (width >= 992) {
        // lg
        itemsPerPage = 6
        contentSize = "21rem"
    }
    else if (width >= 768) {
        // md
        itemsPerPage = 4
        contentSize = "20rem"
    }
    else if(width<=480){
        contentSize = "33rem"
    }

    useEffect(() => {
        if(currentPage>numPages && numPages!==0){
            setCurrentPage(numPages)
        }
    }, [itemsPerPage])

    const numPages = Math.ceil(anime.length / itemsPerPage)
    const itemStart = (currentPage - 1) * itemsPerPage
    const itemEnd = itemStart + itemsPerPage

    return (
        <Container fluid={fluid || false}>
            {children}
            <Row style={{ flexWrap: "wrap", paddingLeft: "10px", paddingRight: "10px", minHeight: contentSize }}>
                {anime.slice(itemStart, itemEnd).map((a) => (<Col key={a.id} xs={4} md={3} lg={2} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <AnimeCard id={a.id} title={a.title} image={a.image_path} />
                </Col>))}
            </Row>
            <div style={{ display: "flex" }}>
                <Pagination className="mx-auto">
                    <Pagination.Prev onClick={() => setCurrentPage(x => x - 1)} disabled={currentPage === 1} />
                    {[...Array(numPages).keys()].map((i) =>
                        <Pagination.Item key={i + 1} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</Pagination.Item>)}
                    <Pagination.Next onClick={() => setCurrentPage(x => x + 1)} disabled={currentPage === numPages} />
                </Pagination>
            </div>
        </Container>
    )
}

export default AnimeGrid
