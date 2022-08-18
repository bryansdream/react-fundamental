
import React from "react"
import Navigation from "./navigation.layouts"
import Hero from "./hero.layouts"

const MainLayouts = ({ children }) => {
    return(
        <React.Fragment>
            <div className="bg-dark min-vh-100">
            <Navigation />
            < Hero />
            {children}
            </div>
        </React.Fragment>
    )
}

export default MainLayouts