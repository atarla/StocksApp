import React from 'react';
import {handleResponse, renderChangePercent} from "../../helpers";
import {API_ROOT_URL} from "../../config";
import Loading from "../common/Loading";
import Table from './Table';

const API_KEY_ALPHA = 'LIREEOH9D5ZW2BAC';
// var symbol = data['Meta Data']['2. Symbol'];

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            mostActive: [],
            error: null,
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(`${API_ROOT_URL}/stock/market/list/mostactive`)
            .then(handleResponse)
            .then((data) => {
                this.setState({
                    mostActive: data,
                    loading: false });
            })
            .catch((error) => {

                this.setState({
                    error: error.errorMessage,
                    loading: false
                });
            });
    }



    render() {
        const { loading, error, mostActive } = this.state;

        // render only loading component, if loading state is set to true
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }

        // render only error message, if error occured while fetching data
        if (error) {
            return <div className="error">{ error}</div>
        }
        return (
            <Table
                mostActive={mostActive}
                renderChangePercent={renderChangePercent}
            />
        );
    }
}

export default List;