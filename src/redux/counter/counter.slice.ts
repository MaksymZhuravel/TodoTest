import {createSlice} from '@reduxjs/toolkit';

interface IState {
  counter: number;
}

const initialState: IState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    count: (state,action) => {},
  },
});

export const {count} = counterSlice.actions;

export default counterSlice.reducer;
