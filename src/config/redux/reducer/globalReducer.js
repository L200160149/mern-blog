const initialState = {
    name: 'Dewaning'
}
// reducer global selain home page, detail page, dll
const globalReducer = (state = initialState, action) => {
    // memisahkan state global berdasarkan action
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Dewaning Daily'
        }
    }
    // pastikan reducer me-return sebuah state yg telah kita buat
    return state;
}

export default globalReducer