import * as actionType from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionType.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { count: action.payload, id: (new Date()).getTime() }]
      }
    case actionType.DELETE_RESULT:
      console.log('delete results: ', action.payload, )
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