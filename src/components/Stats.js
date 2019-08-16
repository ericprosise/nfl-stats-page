import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartSeriesLabels,
    ChartSeriesLabelsFrom,
    ChartSeriesLabelsTo
} from '@progress/kendo-react-charts';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(rows, stats) {
    stats.forEach((stat) => {
        rows.push({
            year: stat.year_id.substr(0, 4),
            age: parseInt(stat.age),
            g: parseInt(stat.g),
            gs: parseInt(stat.gs),
            pass_cmp: parseInt(stat.pass_cmp),
            pass_att: parseInt(stat.pass_att),
            pass_cmp_perc: parseInt(stat.pass_cmp_perc),
            pass_yds: parseInt(stat.pass_yds),
            pass_td: parseInt(stat.pass_td),
            pass_int: parseInt(stat.pass_int),
            pass_rating: parseInt(stat.pass_rating)
        })
    });
    return rows;
}

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            showStatTable: false
        };
    }

    toggleTable = () => {
        this.setState({ showStatTable: !this.state.showStatTable });
    }

    tooltipRender = ({ point = {} }) => (<div>
        Yards per Att : {point.value && point.value.from}
        <br />
        Adj Yards per Att : {point.value && point.value.to}
    </div>);

    labelContentFrom = (e) => (`${e.value.from}`);
    labelContentTo = (e) => (`${e.value.to}`);

    render() {
        const years = []
        this.props.passingStats.forEach((stat) => {
            years.push(stat.year_id.substr(0, 4));
        });
        const passYds = []
        this.props.passingStats.forEach((stat) => {
            passYds.push(parseInt(stat.pass_yds));
        });

        const passTds = [];
        this.props.passingStats.forEach((stat) => {
            passTds.push(parseInt(stat.pass_td));
        });

        const passInts = [];
        this.props.passingStats.forEach((stat) => {
            passInts.push(parseInt(stat.pass_int));
        });

        var rows = [];
        createData(rows, this.props.passingStats);


        var rangeData = [];
        this.props.passingStats.forEach((stat) => {
            rangeData.push({
                year: stat.year_id.substr(0, 4),
                pass_yd_per_att: parseFloat(stat.pass_yds_per_att),
                pass_adj_yds_per_att: parseFloat(stat.pass_adj_yds_per_att)
            });
        });

        console.log('rangeData', rangeData);

        var radarData = [];
        this.props.passingStats.forEach((stat) => {
            radarData.push({
                year: stat.year_id.substr(0, 4),
                rating: parseFloat(stat.pass_rating),
                yds_per_att: parseFloat(stat.pass_yds_per_att)
            });
        });

        return (
            <div>
                <Button
                    style={{ backgroundImage: 'none', backgroundColor: '#FFB612' }}
                    onClick={() => this.toggleTable()}>
                    {!this.state.showStatTable ? 'Show Stat Table' : 'Show Charts'}
                </Button>
                {!this.state.showStatTable &&
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ flex: '0 1 50%' }}>

                            <Chart>
                                <ChartTitle text="Passing Yards" />
                                <ChartTooltip format="{0}" />
                                <ChartCategoryAxis>
                                    <ChartCategoryAxisItem title={{ text: 'Years' }} categories={years} />
                                </ChartCategoryAxis>
                                <ChartSeries>
                                    <ChartSeriesItem type="line" data={passYds} color={'#203731'} />
                                </ChartSeries>
                            </Chart>
                        </div>
                        <div style={{ flex: '0 1 50%' }}>

                            <Chart>
                                <ChartTitle text="Passing Touchdowns" />
                                <ChartTooltip format="{0}" />
                                <ChartCategoryAxis>
                                    <ChartCategoryAxisItem title={{ text: 'Years' }} categories={years} />
                                </ChartCategoryAxis>
                                <ChartSeries>
                                    <ChartSeriesItem type="line" data={passTds} color={'#203731'} />
                                </ChartSeries>
                            </Chart>
                        </div>
                        <div style={{ flex: '0 1 50%' }}>
                            <Chart>
                                <ChartTitle text="Touchdowns and Interceptions" />
                                <ChartCategoryAxis>
                                    <ChartCategoryAxisItem title={{ text: 'Years' }} categories={years} />
                                </ChartCategoryAxis>
                                <ChartSeries>
                                    <ChartSeriesItem type="column" stack={true} data={passTds} color={'green'} />
                                    <ChartSeriesItem type="column" data={passInts} color={'red'} />
                                </ChartSeries>
                            </Chart>
                        </div>
                        <div style={{ flex: '0 1 50%' }}>
                            <Chart>
                                <ChartTitle text="Yards Per Attempt vs Adjusted Yards Per Attempt" />
                                <ChartSeries>
                                    <ChartSeriesItem
                                        type="rangeArea"
                                        data={rangeData}
                                        fromField="pass_yd_per_att"
                                        toField="pass_adj_yds_per_att"
                                        categoryField="year"
                                    >
                                    </ChartSeriesItem>
                                </ChartSeries>
                                <ChartCategoryAxis>
                                    <ChartCategoryAxisItem labels={{ rotation: 'auto' }} />
                                </ChartCategoryAxis>
                                <ChartTooltip render={this.tooltipRender} />
                            </Chart>
                        </div>
                    </div>
                }
                {this.state.showStatTable &&
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Year</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>G</TableCell>
                                    <TableCell>GS</TableCell>
                                    <TableCell>Cmp</TableCell>
                                    <TableCell>Att</TableCell>
                                    <TableCell>Cmp%</TableCell>
                                    <TableCell>Yds</TableCell>
                                    <TableCell>TD</TableCell>
                                    <TableCell>Int</TableCell>
                                    <TableCell>Rating</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.year}>
                                        <TableCell>{row.year}</TableCell>
                                        <TableCell>{row.age}</TableCell>
                                        <TableCell>{row.g}</TableCell>
                                        <TableCell>{row.gs}</TableCell>
                                        <TableCell>{row.pass_cmp}</TableCell>
                                        <TableCell>{row.pass_att}</TableCell>
                                        <TableCell>{row.pass_cmp_perc}</TableCell>
                                        <TableCell>{row.pass_yds}</TableCell>
                                        <TableCell>{row.pass_td}</TableCell>
                                        <TableCell>{row.pass_int}</TableCell>
                                        <TableCell>{row.pass_rating}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                }

            </div>
        )
    }
}

export default Stats;