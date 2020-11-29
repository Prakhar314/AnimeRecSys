import React from 'react'
import Autosuggest from "react-autosuggest";
import debounce from 'lodash.debounce'
import axios from 'axios'
import { Jumbotron, Container, Spinner } from 'react-bootstrap';
import { Link ,withRouter} from 'react-router-dom';

function getSuggestionValue(suggestion) {
    return suggestion.id;
}

function renderSuggestion(suggestion) {
    return (
        <Link to={"/anime/" + suggestion.id}>{suggestion.title}</Link>
    );
}

class SearchSection extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };
        this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 1000); // 1000ms is chosen for demo purposes only.
    }

    loadSuggestions(value) {
        this.setState({
            isLoading: true
        });

        axios.get(`https://animerecsys.glitch.me/search/${value}`).then((res) => {
            if (value === this.state.value) {
                this.setState({
                    isLoading: false,
                    suggestions: res.data
                });
            } else { // Ignore suggestions if input value changed
                this.setState({
                    isLoading: false
                });
            }
        })
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.debouncedLoadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions, isLoading } = this.state;
        const inputProps = {
            placeholder: "Search..",
            value,
            onChange: this.onChange
        };

        return (
            <Jumbotron style={{ minHeight: "40vh" }}>
                <Container style={{display:"flex",alignItems:"center"}}>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionSelected = {(event, { suggestionValue})=> {this.props.history.push(`/anime/${suggestionValue}`)}}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps} />
                    {isLoading&&<Spinner style={{marginLeft:"1rem"}}animation="grow"/>}
                </Container>
            </Jumbotron>
        );
    }
}

export default withRouter(SearchSection)