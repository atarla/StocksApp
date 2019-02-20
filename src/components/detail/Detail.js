import React from 'react';
import {API_ROOT_URL} from "../../config";
import Loading from '../common/Loading';
import {handleResponse, renderChangePercent} from "../../helpers";
import './Detail.css';

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            result: [],
            news: [{}],
            peers: [],
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        const stocksSymbol = this.props.match.params.symbol;

        this.setState({loading: true});

        Promise.all([fetch(`${API_ROOT_URL}/stock/${stocksSymbol}/quote`),
            fetch(`${API_ROOT_URL}/stock/${stocksSymbol}/news`),fetch(`${API_ROOT_URL}/stock/${stocksSymbol}/peers`)])
            // .then(handleResponse)
            .then( ([result,news,peers]) => Promise.all([result.json(),news.json(),peers.json()]))
            .then(([result, news,peers]) => {
                console.log(news);
                this.setState({
                    result: result,
                    news: news,
                    peers: peers,
                    loading: false,
                    error: null,
                })
            })

    }

    render() {
        const {loading, error, result, news, peers } = this.state;

        const items = this.state.news.map((item, key) =>
            <a href={item.url} rel="noreferrer noopener" target="_blank">
                <li className="list-group-item list-group-item-success" key={item.headline}>{item.headline} - {item.source}</li></a>);

        const related = this.state.peers.map((item, index) =>
                <span className="badge badge-pill badge-info" key={index}>{item}</span>);

        // Render only loading component if loading state is set to True
        if (loading) {
            return <div className="loading-container">
                <Loading/>
            </div>
        }

        // Render only error message, if error occured while fetching data
        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div className="row">
            <div className="card bg-dark text-white m-3 col-md-4 mx-auto">
                <div className="card-header"><h5>{result.companyName} ({result.symbol})</h5></div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-dark"><b>Market Cap</b>: {result.marketCap}</li>
                        <li className="list-group-item list-group-item-dark"><b>Latest Price</b>: {result.latestPrice}</li>
                        <li className="list-group-item list-group-item-dark"><b>YTDChange</b>: {result.ytdChange}</li>
                        <li className="list-group-item list-group-item-dark"><b>Change%</b>: {renderChangePercent(result.changePercent)}</li>
                        <li className="list-group-item list-group-item-dark"><b>Sector</b>: {result.sector}</li>
                        <li className="list-group-item list-group-item-dark"><b>Related ...</b>: {related}</li>
                    </ul>
                </div>
            </div>

            <div className="card bg-success text-white m-3 col-md-5 mx-auto">
            <div className="card-header"><h5>News</h5></div>
        <div className="card-body">
            <ul className="list-group">{items}</ul>
        </div>
        </div>

            </div>
        );
    }
}

export default Detail;
