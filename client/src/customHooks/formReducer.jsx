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
                    ...state.current,
                    [action.field]: action.payload,
                };
            default:
                return null;
        }
    }
};