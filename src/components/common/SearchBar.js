import React from 'react';
import Detail from '../../components/detail/Detail';
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
            <form onSubmit={this.handleSubmit}>
                <input name="searchQuery" onChange={this.handleChange}/>
            </form>  
        );
    }
}

export default withRouter(SearchBar);
