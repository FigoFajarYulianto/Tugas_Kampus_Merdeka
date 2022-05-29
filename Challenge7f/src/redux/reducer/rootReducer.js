import { combineReducers } from "redux";
import carsReducer from './carsReducer';
import carByIdReducer from './carByIdReducer';


export default combineReducers({
    cars: carsReducer,
    carById: carByIdReducer
});