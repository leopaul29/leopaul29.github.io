import {motion} from "framer-motion";
import React from "react";

export const AnimatedLinkIcon = ({
                                     href, label, icon,
                                     target = "_blank",
                                     className = "",
                                     handleClick,
                                 }) => {
    return (<motion.a
        whileHover={{scale: 1.1}}
        href={href}
        aria-label={label}
        target={target}
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
    >
        {icon}
    </motion.a>);
};
