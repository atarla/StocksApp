import React from 'react';
import { withRouter } from "react-router-dom";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }


    handleSubmit(event) {
        event.preventDefault();
        const s= this.state.searchQuery;
        this.props.history.push(`/stock/${s}/quote`);

    }

    handleChange(event) {
        const inputValue = event.target.value;

        this.setState({ searchQuery: inputValue });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="Search">
                <span className="Search-icon"><i class="fas fa-search"></i></span>
                <input className="Search-input" name="searchQuery" type="search" onChange={this.handleChange} placeholder="Enter Stock Symbol" aria-label="Search" />
            </form>  
        );
    }
}

export default withRouter(SearchBar);
