import Style from "../../../../assets/stylesheet/index.module.scss";
import {motion} from "framer-motion";
import React from "react";

export default function FeaturesDesc({desc}) {
    return (
           <motion.div
               animate={{opacity: 1}}
               transition={{duration: 0.5}}
               className={Style.featuresDesc}>
               {desc}
           </motion.div>
    )
}