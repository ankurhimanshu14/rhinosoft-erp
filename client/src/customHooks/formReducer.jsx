module.exports = {
    initialValue: {
        fullName: '',
        email: '',
        username: '',
        password: ''
    },

    formReducer: (state, action) => {
        switch (action.type) {
            case 'inputChange':
                console.log(state)
                return {
                    ...state,
                    [action.field]: action.payload,
                    value: action.value
                };
            default:
                return state;
        }
    }
};