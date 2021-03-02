// Context/context.jsx

import React from 'react';
import { SignInReducer, initialState } from './SignInReducer';

const SignInStateContext = React.createContext();
const SignInDispatchContext = React.createContext();

export const useSignInState = () => {
    const context = React.useContext(SignInStateContext);
    if(context === undefined) {
        throw new Error('useSignInState must be used within a SignInProvider');
    }

    return context;
}

export const useSignInDispatch = () => {
    const context = React.useContext(SignInDispatchContext);
    if(context === undefined) {
        throw new Error('useSignInDispatch must be used within a SignInProvider');
    }

    return context;
}

export const SignInProvider = ({children}) => {
    const [user, dispatch] = React.useReducer(SignInReducer, initialState);

    return (
        <SignInStateContext.Provider value={user}>
            <SignInDispatchContext.Provider value={dispatch}>
                {children}
            </SignInDispatchContext.Provider>
        </SignInStateContext.Provider>
    )
};