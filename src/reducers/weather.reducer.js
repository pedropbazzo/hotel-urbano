import { FETCH_WEATHER } from "../actions";

export default function(state = [], { type, payload }) {
    switch (type) {
        case FETCH_WEATHER:
            if (payload instanceof Error) return state;
            return [payload.data, ...state];
    }

    return state;
}
