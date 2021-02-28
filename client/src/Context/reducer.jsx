// Context/reducer.jsx

export const initialState={
    fullName: '',
    email: '',
    username: '',
    password: '',
    errorMessage: null
};

export const RegisterReducer = (initialState, action) => {
    switch(action.type) {
        case "SIGNUP_REQUEST":
            return {
                ...initialState,
                [action.name]: action.value
            };
        case "SIGNUP_SUCCESS":
            return {
                ...action.payload
            };
        case "SIGNUP_ERROR":
            return {
                ...initialState,
                errorMessage: action.error
            };
        case "RESET":
            return {
                ...action.payload
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
  