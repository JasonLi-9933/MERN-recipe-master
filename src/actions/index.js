import history from '../history';
import axios from 'axios';
import {dbAPI} from '../api';

export const signIn = (id) => {
    return {
        type: 'SIGN_IN',
        payload: id
    }
}

export const signOut = () => {
    history.push('/');
    return {
        type: 'SIGN_OUT'
    }
}

export const addRecipe = (recipe) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        await axios.post(`/api/add/${userId}`, {userId,...recipe});
        dispatch({
            type: 'ADD_RECIPE',
            payload: {userId, ...recipe}
        })

    }
}

export const deleteRecipe = (title) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        await axios.post(`/api/delete/${userId}`, {title: title});
        dispatch({
            type: 'DELETE_RECIPE',
            payload: title
        })
    }
}

export const fetchRecipes = (userId) => {
    return async (dispatch, getState) => {
        const response = await axios.get(`/api/fetch-recipes/${userId}`);
        console.log("response.data: ");
        console.log(response.data);
        dispatch({
            type: "FETCH_RECIPES",
            payload: response.data
        })
    }
}