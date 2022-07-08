const initalState = {
    form: {
        title: '',
        body: '',
        image: ''
    },
    imgPreview: null
}

const createBlogReducer = (state = initalState, action) => {
    if(action.type === 'SET_FORM_DATA') {
        return {
            ...state,
            form: {
                // jika tidak semua data diubah
                    // copy form lama lalu diubah
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }
    if(action.type === 'SET_IMG_PREVIEW') {
        return {
            ...state,
            imgPreview: action.payload
        }
    }

    return state;
}

export default createBlogReducer;