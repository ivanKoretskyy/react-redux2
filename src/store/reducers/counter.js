import * as actionType from '../actions/actions';

const initialState = {
  counter: 1
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state
  }

}

export default reducer;