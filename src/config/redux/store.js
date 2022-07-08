// untuk membuat state secara global
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from "./reducer/reducer";


// const { createStore, combineReducers } = require("redux");

// const initialStateHome = {
//     dataBlog: [],
// }
// const HomeReducer = (state = initialStateHome, action) => {
//     // memisahkan state global berdasarkan action
//     if(action.type === 'UPDATE_DATA_BLOG') {
//         return {
//             ...state,
//             // penamaan payload dibawah ini bebas
//             dataBlog: action.payload
//         }
//     }

//     return state;
// }

// const initialState = {
//     name: 'Dewaning'
// }
// // reducer global selain home page, detail page, dll
// const GlobalReducer = (state = initialState, action) => {
//     // memisahkan state global berdasarkan action
//     if(action.type === 'UPDATE_NAME') {
//         return {
//             ...state,
//             name: 'Dewaning Daily'
//         }
//     }
//     // pastikan reducer me-return sebuah state yg telah kita buat
//     return state;
// }

// // reducer = function yang mengirimkan sebuah value yang disebut dengan state yg akan diterima oleh store
//     // state = value dari state global yg digunakan diseluruh halaman yg default valuenya initialState
//         // mmenggabungkan HomeReducer dan GlobalReducer
// const reducer = combineReducers({HomeReducer, GlobalReducer})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;