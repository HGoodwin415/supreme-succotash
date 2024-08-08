import { useReducer } from "react";


const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00 PM');
        }
        if (random() < 0.5) {
            result.push(i + ':30 PM');
        }
    }
    return result;
};

const initialState = { availableTimes: fetchAPI(new Date()) };

function updateTimes(state, action) {
    return { availableTimes: fetchAPI(new Date()) };
}

function AvailableTimes() {
    const [state, dispatch] = useReducer(updateTimes, initialState);

    return (
        <div>
            <h1>Available Times</h1>
            <ul>
                {state.availableTimes.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: 'UPDATE_TIMES' })}>Refresh Times</button>
        </div>
    );
}

export default AvailableTimes;