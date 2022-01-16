import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';

//this component needs class for height and borderRadius(refer to kits.module.scss line 187 to 265)
function ChistaButton({children, ...props}) {
    return (
        <button 
        onClick={props.onClick}
        className={props.disabled && props.withBgColor ? clsx(Style.disabledBtn, props.customClassName) : 
                props.disabled && !props.withBgColor ? clsx(Style.disabledBtn, props.customClassName) : 
                !props.disabled && props.withBgColor ? clsx(Style.disabledBtn, Style.enableWithBgColorBtn, props.customClassName) :
                clsx(Style.disabledBtn, Style.enableWithoutBgColorBtn, props.customClassName)}
        disabled={props.loading || props.disabled}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        >
            {props.loading ? <CircularProgress color="primary" style={{ width: 20, height: 20 }}/> : children}
        </button>
    )
}

export default ChistaButton;