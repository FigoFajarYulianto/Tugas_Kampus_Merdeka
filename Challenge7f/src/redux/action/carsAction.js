import axios from "axios";
import {
    GET_CARS, CREATE_CARS, EDIT_CARS, DELETE_CARS
} from "../types";

export const getCars = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_CARS}_LOADING`
        });

        axios({
            method: 'GET',
            url: 'https://rent-car-appx.herokuapp.com/admin/car'
        }).then((res) => {
            dispatch({
                type: `${GET_CARS}_FULFILLED`,
                payload: res.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_CARS}_ERROR`,
                error: err.message
            })
        })
    }
}

export const createCars = (data) => {
    return (dispatch) => {
      dispatch({ type: `${CREATE_CARS}_LOADING` });
  
      axios({
        method: 'POST',
        url: 'https://rent-car-appx.herokuapp.com/admin/car',
        data,
      })
        .then(() => {
          dispatch({
            type: `${CREATE_CARS}_FULFILLED`,
          });
          dispatch(getCars());
        })
        .catch((error) => {
          dispatch({
            type: `${CREATE_CARS}_ERROR`,
            error: error.message,
          });
        });
    };
  };
  
export const editCars = (id, data) => {
    return (dispatch) => {
        dispatch({ type: `${EDIT_CARS}_LOADING` });

        axios({
        method: 'PUT',
        url: `https://rent-car-appx.herokuapp.com/admin/car/${id}`,
        data,
        })
        .then(() => {
            dispatch({
            type: `${EDIT_CARS}_FULFILLED`,
            });
            dispatch(getCars());
        })
        .catch((error) => {
            dispatch({
            type: `${EDIT_CARS}_ERROR`,
            error: error.message,
            });
        });
    };
};
  
export const deleteCars = (id) => {
    return(dispatch) => {
        dispatch ({ type: `${DELETE_CARS}_LOADING` });
        
        axios({
        method: 'DELETE',
        url: `https://rent-car-appx.herokuapp.com/admin/car/${id}`,
        })
        .then(() => {
        dispatch({
            type: `${DELETE_CARS}_FULFILLED`,
        });
        dispatch(getCars());
        })
        .catch((error) => {
        dispatch({
            type: `${DELETE_CARS}_ERROR`,
            error: error.message,
        });
        })
    };
};