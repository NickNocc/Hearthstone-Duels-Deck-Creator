import React, { useReducer } from "react";
// import Brann from "./Images/Brann/Hero_Brann.webp";

export const HeroGallery = React.createContext();

export const GalleryProvider = (props) => {


    const phaseReducer = (state, action) => {
        switch (action.type) {
            case "PHASE":
                return { buildPhase: !state.buildPhase };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(phaseReducer, INITIAL_STATE)



    return (
        <HeroGallery.Provider value={{state, dispatch}}>
            {props.children}
        </HeroGallery.Provider>
    )
}