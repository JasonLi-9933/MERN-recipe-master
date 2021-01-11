import axios from 'axios';

const app_id = "5b8642f3";
const app_key = "58a1750acb9fa5785e137dcde4e95377";
export const recipeAPI = axios.create({
    baseURL: "https://api.edamam.com/search",
    params:{
        app_id,
        app_key,
        from: 0,
        to: 2
    }
})

export const dbAPI = axios.create({
    baseURL: "http://localhost:5000"
})