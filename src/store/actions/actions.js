export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


export const increment = () => {
    return {
        type: INCREMENT
    };
}

export const decrement = () => {
    return {
        type: DECREMENT
    };
}

export const add = (payload) => {
    return {
        type: ADD,
        payload
    };
}

export const subtract = (payload) => {
    return {
        type: SUBTRACT,
        payload
    };
}

export const save_result = (payload) => {
    return {
        type: STORE_RESULT,
        payload
    };
}

export const store_result = (payload) => {
    const asyncResult = (dispatch) => {
        setTimeout((payload) => {
            dispatch(save_result(payload))
        }, 2000);
    }
    return asyncResult;
}

export const delete_result = (payload) => {
    return {
        type: DELETE_RESULT,
        payload
    };
}