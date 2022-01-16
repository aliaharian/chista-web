import React, { useState } from 'react';
import { makeStyles, useMediaQuery, useTheme, Button } from '@material-ui/core';
import ArrowTop from "../../../assets/images/ArrowTop";

const useStyles = makeStyles(theme => ({
    arrowTopBox: {
        position: 'inherit',
        display:'flex',
        justifyContent:'end'
    }
}))

export default function ScrollButton(props) {
    const classes = useStyles();
    const [topFromPage, setTopFromPage] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    return (
        <div 
            ref={el => {
                if (!el) 
                    return;
                else 
                    setTopFromPage(window.pageYOffset + el.getBoundingClientRect().top);
            }} 
            className={classes.arrowTopBox} 
          >
            {(!isMobile && topFromPage > 1350) || (isMobile && props.count > 10) ?
                <Button onClick={props.onClick}>
                    <ArrowTop  className={props.customClass} />
                </Button> : null}
        </div>
    )
}
