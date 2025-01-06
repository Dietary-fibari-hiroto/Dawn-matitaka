import { useEffect } from "react";
import { useLocation } from "react-router-dom";


/**
 * ページ遷移後にｓｃｒｏｌｌ値をリセットするhook
 * 
 */


const PageScrollReset = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return null;
}

export default PageScrollReset;