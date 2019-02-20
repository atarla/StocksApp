import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }


    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const inputValue = event.target.value;

        this.setState({ searchQuery: inputValue });
    }

    render() {
        return (
            <form>
                <input name="searchQuery" onChange={this.handleChange}/>
            </form>  
        );
    }
}

export default SearchBar;
