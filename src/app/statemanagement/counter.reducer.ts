import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { addvalue, decrement, increment, reset } from './counter.action';
import { Action } from 'rxjs/internal/scheduler/Action';

const _counterreducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(addvalue,(state,action)=>{
    return {
        ...state,
        counter:state.counter+action.value
    }
  })
);
export function counterReducer(state: any, action: any) {
  return _counterreducer(state, action);
}
