import {createSlice} from '@reduxjs/toolkit';

interface IState {
  counter: number;
}

export const initialState: IState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
