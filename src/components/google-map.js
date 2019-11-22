import React, { Component } from "react";
import PropTypes from "prop-types";

class GoogleMap extends Component {
    render() {
        return <div ref={map => (this.map = map)} />;
    }

    componentDidMount() {
        const { lat, lon } = this.props;

        new google.maps.Map(this.map, {
            zoom: 12,
            center: {
                lat: lat,
                lng: lon,
            },
        });
    }
}

export default GoogleMap;

GoogleMap.propTypes = {
    lat: PropTypes.number,
    lon: PropTypes.number,
};
