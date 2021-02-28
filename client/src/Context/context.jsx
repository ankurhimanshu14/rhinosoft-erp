// Context/context.jsx

import React from 'react';

const RegisterStateContext = React.createContext();
const RegisterDispatchContext = React.createContext();

export const useRegisterState = () => {
    const context = React.useContext(RegisterStateContext);
    if(context === undefined) {
        throw new Error('useRegisterState must be used within a RegisterProvider');
    }

    return context;
}

export const useRegisterDispatch = () => {
    const context = React.useContext(RegisterDispatchContext);
    if(context === undefined) {
        throw new Error('useRegisterDispatch must be used within a RegisterProvider');
    }

    return context;
}

export const RegisterProvider = ({children}) => {
    const [newUser, dispatch] = React.useReducer(RegisterReducer, initialState);

    return (
        <RegisterStateContext.Provider value={newUser}>
            <RegisterDispatchContext.Provider value={dispatch}>
                {children}
            </RegisterDispatchContext.Provider>
        </RegisterStateContext.Provider>
    )
};