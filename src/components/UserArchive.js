import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {deleteRecipe, fetchRecipes} from '../actions';
import RecipeCard from './utils/RecipeCard';

const UserArchive = (props) => {
    // console.log(props);
    const userId = props.match.params.id;
    
    useEffect(() => {
        props.fetchRecipes(props.match.params.id);
        console.log("Recipes: ");
        console.log(props.recipes);
    }, []);

    const renderRecipes = () => {
        if (props.recipes.length === 0) {
            return (
                <div className="my-40 text-3xl">
                    Oops, looks like you haven't archived any recipes yet!
                </div>
            )
        };
        return props.recipes.map((recipe) => {
                var isDisabled = false;
                const clickHandler = () => {
                    props.deleteRecipe(recipe.title);
                }
                return (
                    <RecipeCard imgURL={recipe.imgURL} yield={recipe.yield} buttonText="Delete"
                                title={recipe.title} insURL={recipe.insURL} buttonColor="bg-red-400"
                                clickHandler={clickHandler} key={recipe.title} isDisabled={isDisabled} />
                )
            })
        
    }

    return ( 
        <div className="flex flex-col items-center">
            {renderRecipes()}
        </div>
     );
}

const mapStateToProps = state => {
    return {
        recipes: Object.values(state.recipes)
    }
}

const mapDispatchToProps = {
    deleteRecipe, fetchRecipes
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserArchive);