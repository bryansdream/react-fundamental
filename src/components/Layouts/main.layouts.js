
import React from "react"
import Navigation from "./navigation.layouts"
import Hero from "./hero.layouts"

const MainLayouts = ({ children }) => {
    return(
        <React.Fragment>
            <div>
            <Navigation />
            {children}
            </div>
        </React.Fragment>
    )
}

export default MainLayouts