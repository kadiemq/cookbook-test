import React, { useContext } from "react";
import { cookbookContext } from "../../contexts/CookbookContext";
import "./recipeViewer.css";

export default function RecipeViewer() {
    const { selectedRecipe } = useContext(cookbookContext);

    if (!selectedRecipe) {
        return <p>Loading Recipe</p>;
    }
    return (
        <div className="recipe-viewer-wrapper">
            <p className="title">{selectedRecipe.name}</p>
            <p className="author">{selectedRecipe.author}</p>
            <div className="image-wrapper">
                <img src={selectedRecipe.image} alt={"Recipe Image"} />
            </div>

            <p className="ingredients-title">Ingredients</p>
            {selectedRecipe.ingredients.map((e) => {
                return <p key={e}>- {e}</p>;
            })}

            <p className="recipe-description">{selectedRecipe.description}</p>
        </div>
    );
}
