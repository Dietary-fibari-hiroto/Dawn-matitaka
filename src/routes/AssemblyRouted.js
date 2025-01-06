import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

import AnimatedRouteSet from "./AnimatedRouteSet";//ページ遷移時のanimationを設定してあるコンポーネント

//各ページの読み込み
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import PageScrollReset from "../hooks/PageScrollReset";


//ロート管理
const routerList = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutMe /> }
]

/**
 * ルーディングをする関数
 * @returns 
 */
const AssemblyRouted = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <PageScrollReset />{/*ページ遷移時にスクロール値をリセット */}
            <Routes location={location} key={location.pathname}>{/* 現在のlocation.pathnameに基づいてルートを切り替え */}
                {routerList.map(({ path, element }) => (
                    <Route
                        key={path} //key を指定して、ルート変更時にコンポーネントを再レンダリング
                        path={path}
                        element={<AnimatedRouteSet>{element}</AnimatedRouteSet>}// 各ページにアニメーションを適用
                    />
                ))}
            </Routes>
        </AnimatePresence>
    )
}

export default AssemblyRouted