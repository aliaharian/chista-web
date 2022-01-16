import React from 'react';
import { MenuItem } from "@material-ui/core";
import Style from '../Style/kits.module.scss';

function ChistaMenuItem({ children, ...props }) {
    let classes = [Style.menuItem];
    if(props.customClass) {
        classes.push(props.customClass);
    }
    return (
        <MenuItem
            className={classes.join(' ')}
            onClick={props.onClick}>
            {children}
        </MenuItem>

    )
}

export default ChistaMenuItem;