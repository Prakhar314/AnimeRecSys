import { React, useState, useCallback, useRef, useEffect } from 'react'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { Jumbotron, Container, Spinner, InputGroup, FormControl, Button } from 'react-bootstrap';
import {tags,popularTags} from './tags'
import ColoredSwitch from './ColoredSwitch';

export default function SearchSection({ onSuggest }) {
    const [loading, setLoading] = useState(false)
    const [expandTags, setExpandTags] = useState(false)
    const [incTags, setIncTags] = useState([])
    const [excTags, setExcTags] = useState([])
    const [value, setValue] = useState('')
    const valueRef = useRef(value)
    useEffect(() => {
        valueRef.current = value
    }, [value])
    const loadSuggestions = (query) => {
        console.log("fetching " + query)
        console.log(incTags)
        console.log(excTags)
        setLoading(true)
        axios({
            method: 'post',
            url: `https://animerecsys.glitch.me/search/${query}/18`,
            data: {
                "incgenre": incTags,
                "excgenre": excTags
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log("fetching " + query + " " + valueRef.current)
            if (query === valueRef.current) {
                setLoading(false)
                onSuggest(res.data)
                // console.log(res.data)
            } else { // Ignore suggestions if input value changed
                setLoading(true)
            }
        })
    }

    const onChange = (event) => {
        setValue(event.target.value)
        fetchSuggestions(event.target.value)
    };

    const clearInput =()=>{
        setValue('')
    }

    const changeTags = (i, k) => {
        console.log(incTags)
        const tagStore = (expandTags?tags:popularTags)
        if (k === 0) {
            const list = excTags.filter((item) => item !== tagStore[i])
            setExcTags(list)
        }
        if (k === 2) {
            const list = incTags.filter((item) => item !== tagStore[i])
            setIncTags(list)
        }
        if (k === 1) {
            setIncTags([...incTags, tagStore[i]])
        }
        if (k === 3) {
            setExcTags([...excTags, tagStore[i]])
        }
    }

    const fetchSuggestions = (value) => {
        debouncedLoadSuggestions(value);
    };

    const debouncedLoadSuggestions = useCallback(debounce(loadSuggestions, 1000), [excTags, incTags]);

    return (

        <Jumbotron style={{ minHeight: "40vh" }}>
            <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                <InputGroup size="lg" style={{ maxWidth: "400px" }}>
                    <FormControl
                        placeholder="Jojo"
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                        onChange={onChange}
                        value={value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={()=>clearInput()}> X </Button>
                    </InputGroup.Append>
                </InputGroup>
                {loading && <Spinner style={{ marginLeft: "1rem" }} animation="grow" />}
            </Container>
            <Container style={{ width: "80%", display: "block", textAlign: "center" }}>
                <h5 style={{ fontWeight: 700, color: "grey", marginTop: "1rem" }}>Tags</h5>
                {(expandTags?tags:popularTags).map((item, i) => <ColoredSwitch text={item} key={i} onTap={(k) => changeTags(i, k)} />)}
                <Button style={{display:"block",marginTop:"1rem",marginLeft:"auto",marginRight:"auto"}} variant="outline-dark" size="sm" onClick={()=>setExpandTags(x=>!x)}>{expandTags?"Less":"More"}</Button>
            </Container>

        </Jumbotron>
    )
}

