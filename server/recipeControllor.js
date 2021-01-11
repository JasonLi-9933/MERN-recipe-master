const Recipe = require("./RecipeModel");

module.exports = {
    addRecipe: (req, res) => {
        const recipeData = req.body;
        const userId = req.params.id;
        const newRecipe = new Recipe({
            userId,
            title: recipeData.title,
            imgURL: recipeData.imgURL,
            yield: recipeData.yield,
            insURL: recipeData.insURL
        });
        newRecipe.save((err) => {
            if(err) {
                res.status(400).send({
                    message: "Your data format could be wrong!"
                })
            } else {
                res.status(200).send({
                    message: "New recipe saved!"
                })
            }
        });
    },
    
    deleteRecipe: (req, res) => {
        const userId = req.params.id;
        const title = req.body.title;
        Recipe.deleteMany({userId: userId, title: title}, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        })
    },

    getRecipes: async (req, res) => {
        const userId = req.params.id;
        await Recipe.find({userId: userId}, (err, recipes) => {
            if (err) {
                res.status(404).send({
                    message: "No data found"
                })
            } else {
                console.log("findings: ");
                res.status(200).send(recipes);
            }
        });
    }
}

