import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';


//this component needs class for height and borderRadius(refer to kits.module.scss line 187 to 305)

function ChistaButtonWithLabel({children, ...props}) {
    return (
        <div className={Style.chistaButtonWithLabelContainer}>
            <div className={Style.titleTexts}>
                <div>
                    <p className={props.titleClassName}>{props.title}</p>
                    {props.isRequired ? <div className={Style.requireFieldMark}/> : null}
                </div>
                {props.inError ?
                    <div>
                        <span className={clsx(props.errorTextClassName, Style.errorText)}>{props.errorText}</span>
                    </div>
                : null}
            </div>
            <button 
            className={props.disabled && props.withBgColor ? clsx(Style.disabledBtn, props.customClassName) : 
                    props.disabled && !props.withBgColor ? clsx(Style.disabledBtn, props.customClassName) : 
                    !props.disabled && props.withBgColor ? clsx(Style.disabledBtn, Style.enableWithBgColorBtn, props.customClassName) :
                    clsx(Style.disabledBtn, Style.enableWithoutBgColorBtn, props.customClassName)}
            disabled={props.loading || props.disabled}
            onClick={props.onClick}
            >
                {props.loading ? <CircularProgress color="primary" style={{ width: 20, height: 20 }}/> : children}
            </button>
        </div>
    )
}


export default ChistaButtonWithLabel;