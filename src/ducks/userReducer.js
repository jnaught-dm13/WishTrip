import axios from 'axios';

//INTITIAL STATE
const initialState = {
    users: [],
    trip: [],
    days: [[]]
}

//ACTION TYPES
const CREATE_USER = "CREATE_USER";
const SAVE_AGENDA = "SAVE_AGENDA";

//REDUCERS
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case `${CREATE_USER}_FULFILLED`:
            return { ...state, users: action.payload.data }
        case `${SAVE_AGENDA}`:
            let { days } = state;
            let { newDay } = action.payload;
            let currentDay = action.payload.currentDay - 1;
            let currentAgenda = action.payload.currentAgenda - 1;

            if (newDay) {
                days.push([])
            }

            days[currentDay][currentAgenda] = action.payload

            return {
                ...state,
                days: days
            }
        default: return state;
    }
}

//ACTION CREATORS
export function createUser(username, email, firstName, lastName) {
    return {
        type: CREATE_USER,
        payload: axios.post('/api/createUser', { username, email, firstName, lastName })
    }
}


export function saveAgenda(newDay, currentDay, currentAgenda, name, destination, activity, budget, notes, time) {
    return {
        type: SAVE_AGENDA,
        payload: { newDay, currentDay, currentAgenda, name, destination, activity, budget, notes, time }
    }
}