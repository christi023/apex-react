import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#f4f4f4',
          foreColor: '#333',
        },
        xaxis: {
          categories: [
            'Stockholm',
            'Gothenburg',
            'Malmö',
            'Uppsala',
            'Västerås',
            'Örebro',
            'Linköping',
            'Helsingborg',
            'Jönköping',
            'Norrköping',
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ['#f44336'],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Largest Swedish Cities by Population',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '25px',
          },
        },
      },
      series: [
        {
          name: 'Population',
          data: [1515017, 572799, 301706, 149245, 117746, 115765, 106502, 104250, 93797, 93765],
        },
      ],
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Change</button>
      </React.Fragment>
    );
  }
}

export default PopChart;
