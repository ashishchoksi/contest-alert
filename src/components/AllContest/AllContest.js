import React, { Component } from 'react';
import './AllContest.css';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import Table from '../Table/Table';

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
        let table = <Spinner />;
        let TableOption = null;
        if (this.state.all_contest.length > 0) {
            table = <Table all_contest={this.state.all_contest} />;

            TableOption = (
                <div className="option-holder">
                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "All" ? "option active" : "option")}> All </div>

                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "CodeChef" ? "option active" : "option")}> CodeChef </div>

                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "CodeForces" ? "option active" : "option")}> CodeForces </div>

                    <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "Kick Start" ? "option active" : "option")}> Kick Start </div>
                </div>
            )
        }

        return (
            <div className="table-holder">
                {TableOption}
                {table}
            </div>
        )
    }
}

export default AllContest;