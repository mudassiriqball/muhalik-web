import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import CategoryReducer from './reducers/category-reducer'
import ProductIdReducer from './reducers/product-id-reducer'

// const myMiddleware = (store) => (next) => (action) => {
//     console.log('Middleware msg:', action)
//     next(action)
// }
const store = createStore(
    combineReducers({ CategoryReducer, ProductIdReducer }),
)

store.subscribe(() => {
    console.log('Store Updated:', store.getState())
})

export default store