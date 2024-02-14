import {increment, decrement} from '../../redux/counter/counter.slice.ts';
import counterReducer, {
  initialState,
} from '../../redux/counter/counter.slice.ts';
import {describe, it, expect} from '@jest/globals';
import {UnknownAction} from '@reduxjs/toolkit';

describe('counter slice', () => {
  describe('action creators', () => {
    it('creates an action to increment the counter', () => {
      const expectedAction = {type: 'counter/increment'};
      expect(increment()).toEqual(expectedAction);
    });
    it('creates an action to decrement the counter', () => {
      const expectedAction = {type: 'counter/decrement'};
      expect(decrement()).toEqual(expectedAction);
    });
  });
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(counterReducer(undefined, {} as UnknownAction)).toEqual(
        initialState,
      );
    });
    it('should handle increment action', () => {
      const prevState = {counter: 2};
      const action = {type: 'counter/increment'};
      const nextState = counterReducer(prevState, action);
      expect(nextState).toEqual({counter: 3});
    });
    it('should handle decrement action', () => {
      const prevState = {counter: 2};
      const action = {type: 'counter/decrement'};
      const nextState = counterReducer(prevState, action);
      expect(nextState).toEqual({counter: 1});
    });
  });
});
