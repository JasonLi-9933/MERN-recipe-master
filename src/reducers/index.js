import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import _ from 'lodash';

const AUTH_INITIAL_STATE = {
    isSignedIn: false,
    userId: null
}

const authReducer = (state = AUTH_INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {...state, isSignedIn: true, userId: action.payload};
        case "SIGN_OUT":
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
}

const RECIPES_INITIAL_STATE = {
    // title : {
    //     userId,
    //     imgURL,
    //     yield,
    //     title,
    //     insURL
    // }
}

const recipesReducer = (state = RECIPES_INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return {...state, [action.payload.title]: action.payload };
        case "FETCH_RECIPES":
            return {...state, ..._.mapKeys(action.payload, "title")};
        case "DELETE_RECIPE":
            return _.omit(state, action.payload);
        default:
            return {...state};
    }
}

export default combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
    form: formReducer
})