// Context/actions.jsx

export const signinUser = async (dispatch, signinPayload) => {
    const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signinPayload),
    };

    try {
        dispatch({ type: 'SIGNIN_REQUEST' });
        let response = await fetch('http://localhost:5000/api/v1/users/login', requestOptions);
        let data = await response.text();

        if (data) {
            dispatch({ type: 'SIGNIN_SUCCESS', payload: data});
            return data;
        }

        dispatch({ type: 'SIGNIN_ERROR' });
        return;
    }
    catch(error) {
        dispatch({ type: 'SIGNIN_ERROR', error: error });
    }
};