import {RootState} from '../store.ts';

export const getCounter = (state: RootState) => state.counter.counter;
