
import { combineReducers } from 'redux';
import store from '../store';
const initialState = {
    category_id: ''
}
export default function ProductIdReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_Product_ID':
            state = {
                ...state,
                category_id: action.value,
            }
            break;
    }
    return state;
}

