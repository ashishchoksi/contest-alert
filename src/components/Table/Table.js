import React, { Component } from 'react';

function Table(props) {

    let index = 0;

    return (

        <table class="table table-striped border">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Contest</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.all_contest.map(data => {
                        return (
                            <tr key={index}>
                                <th scope="row">{++index}</th>

                                <td> <span title={data.status === "CODING" ? "contest running" : "contest not started yet"} className={data.status === "CODING" ? "green" : "orange"}>......</span> <a rel="noreferrer" href={data.url} target="_blank">{data.name}</a> ({data.site})</td>

                                <td>{data.start_time.substr(0, 10)} at {data.start_time.substr(11, 5)}</td>

                                <td>{data.end_time.substr(0, 10)} at {data.end_time.substr(11, 5)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;