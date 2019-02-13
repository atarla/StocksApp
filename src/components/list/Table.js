import React from 'react';
import Proptypes from 'prop-types';

const Table = (props) => {
    const { mostActive, renderChangePercent } = props;
    return (
        <div className="card bg-dark">
            <div className="card-header text-info"><h5>Most Active Stocks Right Now</h5> </div>
            <div className="card-body">
                <table className="table table-striped table-hover table-dark"><thead>
                <tr><th scope="col">Name</th><th scope="col">Latest Price</th>
                    <th scope="col">Sector</th><th>Change Percent</th></tr></thead>

                    <tbody>{mostActive.map((result) => (
                        <tr key={result['companyName']}><td>{result['companyName']}</td>
                            <td>{result['latestPrice']}</td><td>{result['sector']}</td>
                            <td>{renderChangePercent(result.changePercent)}</td></tr>
                    ))}</tbody></table>
            </div>
        </div>
    )
};

export default Table;
