import moment from 'moment';
import { EVENT_ADD_NEW, EVENT_CLEAR_EVENT, EVENT_DELETED, EVENT_LIST, EVENT_SET_ACTIVE, EVENT_UPDATED } from '../types/calendar'

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: "Cumpleaños",
        start: moment().toDate(),
        end: moment().add(2, "hours").toDate(),
        bgcolor: "#fafafa",
        notes: "Comprar el pastel",
        user: {
        _id: "123",
        name: "John Doe",
        },
    }],
    activeEvent: null
}
export const calendarReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case EVENT_LIST:
            return {
                ...state,
                events: payload
            }
        case EVENT_ADD_NEW:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case EVENT_SET_ACTIVE:
            return {
                ...state,
                activeEvent: payload
            }
        case EVENT_CLEAR_EVENT:
            return {
                ...state,
                activeEvent: null
            }
        case EVENT_UPDATED:
            return {
                ...state,
                events: state.events.map(event => (event.id === payload.id) ? payload : event)
            }
        case EVENT_DELETED:
            return {
                ...state,
                events: state.events.filter(event => (event.id !== state.activeEvent.id)),
                activeEvent: null
            }
        default:
            return state
    }
}