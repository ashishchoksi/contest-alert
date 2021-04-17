import React from 'react';
import Whatsappsvg from './Whatsappsvg'

function Table(props) {

    let index = 0;

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
        <div>
            <table className="table table-striped border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Contest</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col"> Share </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.all_contest.map(data => {
                            let start = (data.start_time.substr(0, 10) + " at " + data.start_time.substr(11, 5))

                            let end = (
                                data.end_time.substr(0, 10) + " at " + data.end_time.substr(11, 5)
                            )

                            return (
                                <tr key={index}>
                                    <th scope="row">{++index}</th>

                                    <td>

                                        {data.status === "CODING" && <span title="contest running" className="green">......</span>}

                                        {data.status !== "CODING" && <a rel="noreferrer" target="_blank" href={"https://calendar.google.com/event?action=TEMPLATE&dates=" + validateDateForUrl(data.start_time) + "/" + validateDateForUrl(data.end_time) + "&text=" + data.name + "&location=" + data.url + "https://www.codechef.com/CDMT2021?itm_campaign=contest_listing"}><i className="far fa-calendar-plus right-10"></i></a>}

                                        <a rel="noreferrer" href={data.url} target="_blank">{data.name}</a> ({data.site})

                                </td>

                                    <td> {start} </td>

                                    <td> {end} </td>

                                    <td>
                                        <a rel="noreferrer" href={"https://wa.me/?text=contest " + data.name + " from" + start + " to" + end + " \nLink = " + data.url} target="_blank">

                                            <Whatsappsvg />

                                        </a>
                                    </td>

                                </tr>

                            )
                        })

                    }
                </tbody>

            </table >
            { (props.all_contest.length == 0) && <div className="text-center lead">No Contest Found!</div>}
        </div>
    );
}

export default Table;