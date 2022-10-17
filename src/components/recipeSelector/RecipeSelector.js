import React, { useContext, useEffect } from "react";
import { cookbookContext } from "../../contexts/CookbookContext";
import "./recipeSelector.css";

export default function RecipeSelector() {
    const { recipes, selectedRecipe, setSelectedRecipe } =
        useContext(cookbookContext);

    useEffect(() => {
        if (!selectedRecipe) {
            setSelectedRecipe(recipes[0]);
        }
    }, []);

    const onSelectRecipe = (e) => {
        setSelectedRecipe(e);
    };

    return (
        <div className="recipe-selector-wrapper">
            <p className="selector-title">Recipes</p>
            <div className="recipes-scroll">
                {recipes.map((e) => {
                    return (
                        <p
                            className={
                                selectedRecipe && e.name === selectedRecipe.name
                                    ? "selected-recipe"
                                    : ""
                            }
                            key={e.name}
                            onClick={() => {
                                onSelectRecipe(e);
                            }}
                        >
                            {e.name}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
