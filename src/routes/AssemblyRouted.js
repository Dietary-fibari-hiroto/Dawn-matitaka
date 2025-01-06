import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import AnimatedRouteSet from "./AnimatedRouteSet";

import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import PageScrollReset from "../hooks/PageScrollReset";


const routerList = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutMe /> }
]

const AssemblyRouted = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <PageScrollReset />
            <Routes location={location} key={location.pathname}>
                {routerList.map(({ path, element }) => (
                    <Route
                        key={path} // key を指定
                        path={path}
                        element={<AnimatedRouteSet>{element}</AnimatedRouteSet>}
                    />
                ))}
            </Routes>
        </AnimatePresence>
    )
}

export default AssemblyRouted