// import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  products: [],
  variantId: '',

}

const MainReducer =  (state = initialState, action) => {

  switch (action.type) {
    case 'SELECT_PROD':
      return {...state, products: [...action.payload]}
    case 'GET_ID':
      return {...state, variantId: action.payload}
    default:
      return state
  }
}
export default MainReducer;
