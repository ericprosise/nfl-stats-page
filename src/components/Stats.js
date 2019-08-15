import React from 'react';

function Stats(props) {
    console.log(props.stats);
    return (
        <div>
            <table>
                <tbody>
                    {props.stats.stats.map((year) => {
                        return (
                            <tr key={year.year}>
                                <td>{year.year}</td>
                                <td>{year.age}</td>
                                <td>{year.g}</td>
                                <td>{year.gs}</td>
                                <td>{year.qb_rec}</td>
                                <td>{year.pass_cmp}</td>
                                <td>{year.pass_yds}</td>
                                <td>{year.pass_tds}</td>
                                <td>{year.pass_int}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Stats;