
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {addRecipe} from '../actions';
import {recipeAPI} from '../api';
import RecipeCard from './utils/RecipeCard';

class Search extends React.Component {
    state = {
        searchResult: []
    }

    renderSearchBar({input}) {
        return (
            <div className="flex flex-col items-center mt-7 space-y-2 mt-28">
                <input {...input} className="bg-blue-200 rounded w-3/4 py-1 px-3 border-none transform hover:scale-105 duration-300" placeholder="Enter Ingredients" />
                <p className="text-sm text-gray-600">To input more than one ingredients, enter "beef and butter" for example</p>
            </div>
        );
    };

    onFormSubmit = (formValues) => {
        console.log(formValues);
        recipeAPI.get('', {
            params: {
                q: formValues.ingredients
            }
        })
        .then(res => {
            console.log(res.data.hits);
            const recipes = res.data.hits;
            const tmp = [];
            recipes.map(recipe => {
                tmp.push({
                    title: recipe.recipe.label,
                    imgURL: recipe.recipe.image,
                    yield: recipe.recipe.yield,
                    insURL: recipe.recipe.shareAs
                })
            });
            this.setState({searchResult: tmp});
            console.log(this.state.searchResult);
        });
    };

    renderRecipes = () => {
        if (this.state.searchResult.length === 0) return null;
        return this.state.searchResult.map((recipe) => {
                var isArchived = false;
                const clickHandler = () => {
                    if (!isArchived) {
                        this.props.addRecipe(recipe);
                        isArchived = true;
                    }
                    console.log(isArchived);
                }
                return (
                    <RecipeCard imgURL={recipe.imgURL} yield={recipe.yield} buttonText="Archive"
                                title={recipe.title} insURL={recipe.insURL} buttonColor="bg-yellow-500"
                                clickHandler={clickHandler} isDisabled={isArchived} key={recipe.title} />
                )
            })
        
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="flex flex-col items-center">
                    <Field component={this.renderSearchBar} name="ingredients"/>
                </form>
                <div className="flex flex-col items-center">
                    {this.renderRecipes()}
                </div>
                
            </div>

        );
    }

}

const mapStateToProps = state => {
    return  {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

const formWrappedSearch = reduxForm({
    form: 'recipeSearchForm'
})(Search)

export default connect(mapStateToProps, {addRecipe})(formWrappedSearch);