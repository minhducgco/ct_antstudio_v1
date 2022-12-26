import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  SET_ORDER_LINE,
  SET_LIST_MONTH,
  SET_VALUE_SEARCH,
  SET_LIST_APPROVER,
} from '../actions/type';

const initialState = {
  loading: false,
  error: null,
  data: null,
  orderLine: [],
  saleProduct: [],
  listMonth: [],
  listApprover: [],
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_DATA_SUCCESS: {
      return {
        loading: false,
        data: action.payload.data,
        error: null,
      };
    }
    case FETCH_DATA_FAILED: {
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      };
    }
    case SET_ORDER_LINE: {
      if (action.isUpdate) {
        return {
          ...state,
          orderLine: action.payload,
        };
      } else {
        const newArr = [...state.orderLine];
        const indexItem = newArr.findIndex(it => it.id === action.payload.id);
        if (indexItem >= 0) {
          if (action.payload.product_uom_qty === 0) {
            newArr.splice(indexItem, 1);
          } else {
            newArr[indexItem].product_uom_qty = action.payload.product_uom_qty;
          }
        } else {
          newArr.push(action.payload);
        }
        return {
          ...state,
          orderLine: newArr,
        };
      }
    }
    case SET_LIST_MONTH: {
      return {
        ...state,
        listMonth: action.payload,
      };
    }
    case SET_VALUE_SEARCH: {
      return {
        ...state,
        valueSearch: action.payload,
      };
    }
    case SET_LIST_APPROVER: {
      return {
        ...state,
        listApprover: action.payload,
      };
    }
    default:
      return state;
  }
};
