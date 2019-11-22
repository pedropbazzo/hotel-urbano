import React, { Component } from "react";

import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather-list";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="page-title">Descubra a temperatura, digite sua cidade! ( example "Rio de Janeiro" </h1>
                </div>
                <div className="row">
                    <SearchBar />
                    <WeatherList />
                </div>
            </div>
        );
    }
}
