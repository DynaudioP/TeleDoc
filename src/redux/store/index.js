import { combineReducers, createStore } from "redux";
import isLoginReducer from "../reducer/isLoginReducer"

const allReducer = combineReducers({
    login_key: isLoginReducer
})

const store = createStore(allReducer)

export default store