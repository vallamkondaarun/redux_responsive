import { ADD_TO_CART} from '../actions/action-types'
const initialState=require('../products.json')
export default function reducer(state = {}, action) {
  state={...state,products:initialState,addedItem:{}}
  switch (action.type) {
    case ADD_TO_CART:
    return{
      ...state,addedItem:action.item
    }
    default:
      return state;
  }
}
