import * as actionType from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionType.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, {count: action.result, id: (new Date()).getTime()}]
      }
      case actionType.DELETE_RESULT:
      console.log('delete results: ',action.id,)
      const results = state.results.filter(r => r.id !== action.id);
      return {
        ...state,
        results
      }
    default:
      return state
    }

}

export default reducer;