import { motion } from "framer-motion"

const AnimatedRouteSet = ({ children }) => {
    //animationのプロパティ設定
    const animation = {
        initial: { opacity: 0, filter: "blur(50px)" },
        animate: { opacity: 1, filter: "blur(0px)" },
        exit: { opacity: 0, filter: "blur(50px)" },
        transition: { duration: 1 },
    }

    return (
        <motion.div {...animation}>
            {children}
        </motion.div>
    )
}

export default AnimatedRouteSet;