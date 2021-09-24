import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_BESTS,
  POST_PRODUCT,
  DELETE_PRODUCTS,
  PUT_PRODUCT,
  DELETE_DETAILS,
  IMPORT_PRODUCTS,
  SEARCH_PRODUCTS,
  SET_SEARCH_STRING
} from '../constants'

const initialState = {
  allProducts: [],
  productDetail: {},
  newProduct: {},
  messages: {},
  searchResult: [],
  searchString: ''
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      }
    case GET_BESTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case POST_PRODUCT:
      return {
        ...state,
        newProduct: action.payload
      }
    case DELETE_PRODUCTS:
      return {
        ...state,
        messages: action.payload
      }
    case PUT_PRODUCT:
      return {
        ...state,
        productDetail: action.payload
      }
    case DELETE_DETAILS:
      return {
        ...state,
        productDetail: {}
      }
    case IMPORT_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case SEARCH_PRODUCTS:
      return { ...state, searchResult: action.payload }

    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload }

    default:
      return state
  }
}

export default products
