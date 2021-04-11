import React, { Component } from 'react';

import axios from 'axios';

class AllContest extends Component {

    state = {
        all_contest: [],
    };

    componentDidMount() {
        axios.get(`https://www.kontests.net/api/v1/all`)
            .then(res => {
                this.setState({ all_contest: res.data });
            })
    }

    render() {

        let index = 0;
        let Table = <table class="table table-striped border">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Contest</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">website</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.all_contest.map(data => {
                        return (
                            <tr key={index}>
                                <th scope="row">{++index}</th>
                                <td><a rel="noreferrer" href={data.url} target="_blank">{data.name}</a></td>
                                <td>{data.start_time}</td>
                                <td>{data.end_time}</td>
                                <td>{data.site}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        return (
            <div className="p-4">
                {Table}
            </div>
        )
    }
}

export default AllContest;