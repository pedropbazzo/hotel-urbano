import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {
    render() {
        const { weather } = this.props;
        return (
            <table className="table table-bordered table-hover weather-table">
                <thead className="thead-light">
                    <tr>
                        <th>City</th>
                        <th>Temperature (C°)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>{weather.map(this.renderWeather)}</tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const { city, list } = cityData;
        const { name, coord } = city;
        const temps = list.map(({ main }) => main.temp - 273.15);
        const pressures = list.map(({ main }) => main.pressure);
        const humidities = list.map(({ main }) => main.humidity);

        return (
            <tr key={name}>
                <td className="city-map">
                    <GoogleMap lat={coord.lat} lon={coord.lon} />
                </td>
                <td>
                    <Chart data={temps} units="C°" color="orange" />
                </td>
                <td>
                    <Chart data={pressures} units="hPa" color="gray" />
                </td>
                <td>
                    <Chart data={humidities} units="%" color="blue" />
                </td>
            </tr>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);

WeatherList.propTypes = {
    weather: PropTypes.array,
};
