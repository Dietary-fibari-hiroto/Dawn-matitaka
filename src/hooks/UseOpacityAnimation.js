
//className={`useAO ${AOStyle}`}
import { useEffect } from "react";

const UseOpacityAnimation = () => {
    const AOStyle = "opacityBefore opacityAfter"

    const handleOpacity = () => {
        const windowHeight = window.innerHeight;

        const sections = document.querySelectorAll(".useAO");
        sections.forEach((section, index) => {
            if (section) {
                const itemHeight = section.getBoundingClientRect().top;
                if (itemHeight < windowHeight * 0.6) {
                    section.classList.add("opacityAfter");
                    section.setAttribute("data-index", index);
                } else {
                    section.classList.remove("opacityAfter");
                }
            }
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleOpacity);
        return () => {
            window.removeEventListener("scroll", handleOpacity)
        }
    }, []);

    return { AOStyle }
}


export default UseOpacityAnimation
