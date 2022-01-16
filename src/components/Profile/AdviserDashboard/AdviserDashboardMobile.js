import React from "react";
import useStyles from "../styles";

const AdviserDashboardMobile = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.sectionMobile}>
            {children}
        </div>
    );
};

export default AdviserDashboardMobile;
