import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./routes/Dasboard";

const RoutesTree = () => {
    return(
        <div>
            <Routes>
                <Route
                    path={"/"}
                    element={<Dashboard/>}
                />
            </Routes>
        </div>
    )
}
export default RoutesTree;