import React, { Component } from 'react';

function Table(props) {

    let index = 0;
    let calender = (
        <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&dates=20210415T120000000Z/20210415T140000000Z&text=Code-MAT&location=https://www.codechef.com/CDMT2021?itm_campaign=contest_listing">Li</a>
    );

    function validateDateForUrl(str) {
        let s = "";
        for (let c of str) {
            if (c === '-' || c === ':' || c === '.')
                continue;
            else
                s += c;
        }
        return s;
    }


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

                                <td>

                                    {data.status === "CODING" && <span title="contest running" className="green">......</span>}

                                    {data.status !== "CODING" && <a target="_blank" href={"https://calendar.google.com/event?action=TEMPLATE&dates=" + validateDateForUrl(data.start_time) + "/" + validateDateForUrl(data.end_time) + "&text=" + data.name + "&location=" + data.url + "https://www.codechef.com/CDMT2021?itm_campaign=contest_listing"}><i class="far fa-calendar-plus right-10"></i></a>}

                                    <a rel="noreferrer" href={data.url} target="_blank">{data.name}</a> ({data.site})

                                </td>

                                <td>{data.start_time.substr(0, 10)} at {data.start_time.substr(11, 5)}</td>

                                <td>{data.end_time.substr(0, 10)} at {data.end_time.substr(11, 5)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    );
}

export default Table;