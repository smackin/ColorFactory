import React, {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function Routes() {
const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000", 
    green: "#00FF00", 
    blue: "0000FF"
}

const [colors, updateColors] = useState(initialColors);
    return(
        <BrowserRouter>
        <Switch>
            <Route>

            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes; 