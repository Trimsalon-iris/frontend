import { EXAMPLE_ACTION } from '../actions/example';

let defaultState = {
  exampleProp: 0
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        exampleProp: state.exampleProp + action.payload
      };
    default:
      return state;
  }
};

export default reducers;
