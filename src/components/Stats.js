import React from 'react';
import Button from '@material-ui/core/Button';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip
} from '@progress/kendo-react-charts';


function transformData(stats) {
    return stats.map((stat) => {
        return {
            x: stat.year_id.substr(0, 4),
            y: parseInt(stat.pass_yds)
        }
    });
}

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    _forgetValue = () => {
        this.setState({
            value: null
        });
    };

    _rememberValue = (e) => {
        console.log('e: ', e);
        this.setState({ value: e.value });
    };

    render() {
        const data = transformData(this.props.stats);
        const years = []
        this.props.stats.forEach((stat) => {
            years.push(stat.year_id.substr(0, 4));
        });
        const passYds = []
        this.props.stats.forEach((stat) => {
            passYds.push(parseInt(stat.pass_yds));
        });

        const passTds = [];
        this.props.stats.forEach((stat) => {
            passTds.push(parseInt(stat.pass_td));
        });

        const passInts = [];
        this.props.stats.forEach((stat) => {
            passInts.push(parseInt(stat.pass_int));
        });

        return (
            <div>
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
                            <ChartSeries>
                                <ChartSeriesItem type="bar" stack={true} data={passTds} color={'green'} />
                                <ChartSeriesItem type="bar" data={passInts} color={'red'} />
                            </ChartSeries>
                        </Chart>

                    </div>
                </div>

            </div>
        )
    }
}

export default Stats;