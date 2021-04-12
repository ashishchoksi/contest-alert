import React, { Component } from 'react';
import './AllContest.css';
import axios from 'axios';

class AllContest extends Component {

    filterArea = ["All", "CodeChef", "CodeForces", "Kick Start"];

    state = {
        all_contest: [],
        contest: [],
        activeOption: "All",
        get_data: {}
    };

    componentDidMount() {
        axios.get(`https://www.kontests.net/api/v1/all`)
            .then(res => {
                this.setState({ all_contest: res.data, contest: res.data }, () => {
                    let cur_data = {};
                    for (let i = 0; i < this.filterArea.length; i++) {
                        let cur = this.filterArea[i];
                        cur_data[cur] = [];
                    }
                    cur_data["All"] = [...res.data];

                    for (let i = 0; i < this.state.contest.length; i++) {
                        let cur = this.state.contest[i];
                        if (cur_data[cur.site]) {
                            cur_data[cur.site].push(cur);
                        }
                    }
                    this.setState({ get_data: cur_data });
                });
            })
    }

    onOptionClickHandler = (e) => {
        let curText = e.target.innerText;
        if (curText === this.state.activeOption) return;
        this.setState({ activeOption: curText });
        let filteredData = [...this.state.get_data[curText]];
        this.setState({ all_contest: filteredData });
    }

    render() {

        let index = 0;
        let Table = (
            <p className="text-center lead"> Loading... </p>
        );
        if (this.state.all_contest.length > 0) {
            Table = <table class="table table-striped border">
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
                        this.state.all_contest.map(data => {
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
        }

        return (
            <div className="table-holder">
                <div className="option-holder">
                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "All" ? "option active" : "option")}> All </div>

                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "CodeChef" ? "option active" : "option")}> CodeChef </div>

                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "CodeForces" ? "option active" : "option")}> CodeForces </div>

                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "Kick Start" ? "option active" : "option")}> Kick Start </div>
                </div>
                {Table}
            </div>
        )
    }
}

export default AllContest;