// Context/actions.jsx

export const signupUser = async (dispatch, signupPayload) => {
    const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupPayload),
    };

    try {
        dispatch({ type: 'SIGNUP_REQUEST' });
        let response = await fetch('http://localhost:5000/api/v1/users/register', requestOptions);
        let data = await response.text();

        if (data) {
            dispatch({ type: 'SIGNUP_SUCCESS', payload: data});
            return data;
        }

        dispatch({ type: 'SIGNUP_ERROR' });
        return;
    }
    catch(error) {
        dispatch({ type: 'SIGNUP_ERROR', error: error });
    }
};