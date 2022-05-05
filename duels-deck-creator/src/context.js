import React, { useReducer } from "react";
import { Navbar } from "./components/Navbar";
// import Brann from "./Images/Brann/Hero_Brann.webp";

export const heroContext = React.createContext();

export default function heroes () {
    return (
        <heroContext.Consumer>
            {(hero) => <Navbar hero={heros} />}
        </heroContext.Consumer>
    )
}