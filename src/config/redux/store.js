// untuk membuat state secara global

const { createStore } = require("redux");

const initialState = {
    dataBlogs: [],
    name: 'Dewaning'
}

// reducer = function yang mengirimkan sebuah value yang disebut dengan state yg akan diterima oleh store
    // state = value dari state global yg digunakan diseluruh halaman yg default valuenya initialState
const reducer = (state = initialState, action) => {
    // memisahkan state global berdasarkan action
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            // penamaan payload dibawah ini bebas
            dataBlogs: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Dewaning Daily'
        }
    }
    // pastikan reducer me-return sebuah state yg telah kita buat
    return state;
}

const store = createStore(reducer);

export default store;