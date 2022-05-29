import {
    GET_CARS, CREATE_CARS, EDIT_CARS, DELETE_CARS
} from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: null
};

const carsReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case `${GET_CARS}_LOADING`:
            return {
                ...state
            };
        case `${GET_CARS}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_CARS}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
                    
        case `${CREATE_CARS}_LOADING`:
            return {
                ...state,
                isLoading: true,
            };
            case `${CREATE_CARS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
            };
            case `${CREATE_CARS}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error,
            };
        
            case `${EDIT_CARS}_LOADING`:
            return {
                ...state,
                isLoading: true,
            };
            case `${EDIT_CARS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
            };
            case `${EDIT_CARS}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error,
            };
        
            case `${DELETE_CARS}_LOADING`:
            return {
                ...state,
                isLoading: true,
            };
            case `${DELETE_CARS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
            };
            case `${DELETE_CARS}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error,
            };
        
            default:
            return {
                ...state,
            };
    }
}

export default carsReducer;