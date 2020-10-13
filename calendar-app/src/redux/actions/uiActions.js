import { uiCloseModal, uiOpenModal } from '../types/modal'

export const openModal = () => ({ type: uiOpenModal })
export const closeModal = () => ({ type: uiCloseModal})