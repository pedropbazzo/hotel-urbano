import React from "react";
import PropTypes from "prop-types";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

export default function Chart(props) {
    const { data, color, units } = props;

    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div className="text-center">{`${average(data)} ${units}`}</div>
        </div>
    );
}

function average(data) {
    return Math.round(data.reduce((sum, value) => sum + value, 0) / data.length);
}

Chart.propTypes = {
    data: PropTypes.array,
    color: PropTypes.string,
    units: PropTypes.string,
};
