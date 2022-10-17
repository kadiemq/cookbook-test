import React, { useContext } from "react";
import { cookbookContext } from "../../contexts/CookbookContext";
import RecipeSelector from "../recipeSelector/RecipeSelector";
import RecipeViewer from "../recipeViewer/RecipeViewer";
import "./cookbook.css";

export default function Cookbook() {
    const { recipes } = useContext(cookbookContext);

    if (!recipes) {
        return <p>Loading Recipes</p>;
    }

    return (
        <div className="cookbook-wrapper">
            <RecipeSelector />
            <RecipeViewer />
        </div>
    );
}
