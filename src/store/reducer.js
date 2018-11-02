import  {combineReducers} from 'redux';
import counterReducer from './reducers/counter';
import resultsReducer from './reducers/result';

const reducer = combineReducers({
  counter: counterReducer,
  results: resultsReducer
})

export default reducer;