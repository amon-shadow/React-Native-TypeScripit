import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
import rootReducer from '../../reducers/index'


export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        middleWareEnhancer
    );

    return store;
}