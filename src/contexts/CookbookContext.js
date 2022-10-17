import React, { createContext, useEffect, useState } from "react";
import data from "../utils/MOCK_DATA.json";

const cookbookContext = createContext();

const CookbookContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState();
    const [selectedRecipe, setSelectedRecipe] = useState();

    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <cookbookContext.Provider
            value={{ recipes, selectedRecipe, setSelectedRecipe }}
        >
            {children}
        </cookbookContext.Provider>
    );
};

export { cookbookContext, CookbookContextProvider };
