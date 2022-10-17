import React from "react";
import Cookbook from "./components/cookbook/Cookbook";
import { CookbookContextProvider } from "./contexts/CookbookContext";
import "./app.css";

// const recipes = [
//     {
//         author: "Jim",
//         name: "Chicken Curry",
//         description: "Delicious spicy chicken curry",
//     },
//     {
//         author: "Aravind",
//         name: "Hamburger",
//         description: "Juicy burger with toppings and a soft bun",
//     },
// ];

function App() {
    return (
        <CookbookContextProvider>
            <Cookbook />
        </CookbookContextProvider>
    );
}

export default App;
