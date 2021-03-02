// Context/SignInReducer.jsx

export const initialState={
    username: '',
    password: '',
    errorMessage: null
};

export const SignInReducer = (initialState, action) => {
    switch(action.type) {
        case "SIGNIN_REQUEST":
            return {
                ...initialState,
                [action.name]: action.value
            };
        case "SIGNIN_SUCCESS":
            return {
                ...action.payload
            };
        case "SIGNIN_ERROR":
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
  