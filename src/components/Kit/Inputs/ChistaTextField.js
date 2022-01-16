import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';

function ChistaTextField({...props}) {
    return (
        <div className={clsx(Style.textFieldContainer, props.customClassContainer)}>
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
            <div className={props.inError ? Style.inputContainerWithError : Style.inputContainerWithoutError}>
                {props.startIconComponent}
                {props.icon && <img src={props.inError ? props.errorIcon : props.icon}/>}
                <input 
                onChange={e => props.onChange(e)}
                placeholder={props.placeholder}
                value={props.inputValue}
                className={props.inputClassName}
                maxLength={props.maxLength}
                minLength={props.minLength}
                />
                {props.endIconComponent}
                {props.lastIcon && <img src={props.lastIcon}/>}
                {props.lastLabel && <span>{props.lastLabel}</span>}
            </div>
        </div>
    )
}

export default ChistaTextField;