import { uiOpenModal, uiCloseModal } from '../types/modal'

const initialState = { openModal: false };


export const uiReducer = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case uiOpenModal:
            return {
                ...state,
                openModal: true
            }
        case uiCloseModal:
            return {
                ...state,
                openModal: false
            }
        default:
            return state
    }
}