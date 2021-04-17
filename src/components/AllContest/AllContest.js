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
        get_data: {},
        offLoad: false,
        searchText: ""
    };

    componentDidMount() {
        this.setState({ offLoad: false });
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
                    this.setState({ offLoad: true });
                });
            })
    }

    onOptionClickHandler = (e) => {
        this.setState({ searchText: "" });
        let curText = e.target.innerText;
        if (curText === this.state.activeOption) return;
        this.setState({ activeOption: curText });
        let filteredData = [...this.state.get_data[curText]];
        this.setState({ all_contest: filteredData });
    }

    filterData = (text) => {
        let cur_data = [...this.state.get_data[this.state.activeOption]];
        let newData = [];
        if (text === undefined || text === "") {
            this.setState({ all_contest: cur_data });
            return;
        } else {
            newData = cur_data.filter(data => (data.name.toLowerCase().indexOf(text) !== -1) || (data.site.toLowerCase().indexOf(text) !== -1));
        }
        this.setState({ all_contest: newData });
    }

    onSearch = (e) => {
        // after searchText assigned call function
        this.setState({ searchText: e.target.value },
            () => {
                this.filterData(e.target.value.toLowerCase().trim());
            });
    }

    render() {

        let table = <Spinner />;
        let TableOption = null;
        if (this.state.offLoad || this.state.all_contest.length > 0) {
            table = <Table all_contest={this.state.all_contest} />;

            TableOption = (
                <div className="option-holder container-fluid">
                    <div className="row">
                        <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "All" ? "option active" : "option")}> All </div>

                        <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "CodeChef" ? "option active" : "option")}> CodeChef </div>

                        <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "CodeForces" ? "option active" : "option")}> CodeForces </div>

                        <div onClick={this.onOptionClickHandler} className={(this.state.activeOption === "Kick Start" ? "option active" : "option")}> Kick Start </div>

                        <input value={this.state.searchText} onChange={this.onSearch} placeholder="Search contest" className="col-lg-3 col-md-4 col-sm-12 form-control" type="text" />

                    </div>

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