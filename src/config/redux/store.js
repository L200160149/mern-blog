// untuk membuat state secara global

const { createStore } = require("redux");

const initialState = {
    dataBlog: []
}

// reducer = function yang mengirimkan sebuah value yang disebut dengan state yg akan diterima oleh store
    // state = value dari state global yg digunakan diseluruh halaman yg default valuenya initialState
const reducer = (state = initialState, action) => {
    // pastikan reducer me-return sebuah state yg telah kita buat
    return state;
}

const store = createStore(reducer);

export default store;