import { reactLocalStorage } from 'reactjs-localstorage';

const initialState = {
    categories_list: localStorage.getItem('b'),
    sub_categories_list: localStorage.getItem('c')
}

import axios from 'axios'
// import MuhalikConfig from '../sdk/muhalik.config'


// async function initialState() {
//     const url = MuhalikConfig.PATH + '/api/categories/categories';
//     await axios.get(url).then((response) => {
//         console.log('res:', response.data)
//         return {
//             categories_list: response.data.category.docs,
//             sub_categories_list: response.data.sub_category.docs
//         }
//     }).catch((error) => {
//     })
// }

export default function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            state = {
                ...state,
                categories_list: action.value.category.docs,
                sub_categories_list: action.value.sub_category.docs,
            }
            break;
    }
    return state;
}





