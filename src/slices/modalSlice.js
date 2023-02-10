import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    type: "none", // "none", "SidebarMoreOption", etc
    location: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    props: {}
  }
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: {
      reducer(state, action) {
        state.modal = action.payload
      }
    },
    closeModal: {
      reducer(state, action) {
        state.modal = initialState.modal
      }
    }
  }
})

export const getModalState = (state) => state.modal.modal;

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;