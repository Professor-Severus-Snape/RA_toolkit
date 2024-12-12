import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  inputValue: string;
}

const initialState: IInitialState = {
  inputValue: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    clearForm: (state) => {
      state.inputValue = initialState.inputValue;
    },
    // в payload -> строка из инпут-а
    saveInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { clearForm, saveInputValue } = formSlice.actions;
export default formSlice.reducer;
