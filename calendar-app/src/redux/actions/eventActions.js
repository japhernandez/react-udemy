import { EVENT_ADD_NEW, EVENT_CLEAR_EVENT, EVENT_DELETED, EVENT_LIST, EVENT_SET_ACTIVE, EVENT_UPDATED } from '../types/calendar'

export const eventList = (event) => ({
    type: EVENT_LIST,
    payload: event
});

export const eventAddNew = (event) => ({
    type: EVENT_ADD_NEW,
    payload: event
});

export const eventSetActive = (event) => ({
    type: EVENT_SET_ACTIVE,
    payload: event
});

export const eventClearActive = () => ({
    type: EVENT_CLEAR_EVENT
});

export const eventUpdate = (event) => ({
    type: EVENT_UPDATED,
    payload: event
});

export const eventDelete = () => ({
    type: EVENT_DELETED
});