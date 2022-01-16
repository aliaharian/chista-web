import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';

//this component needs container for width and you should use one of classes in kits.module.scss(lines 495-633)
function ChistaSearchInput(props) {
    return (
        <div className={clsx(Style.chistaSearchInputContainer, props.customClassContainer)}>
            {props.startIconComponent}
            {props.icon && <img src={props.icon} onClick={props.onClickFirstIcon}/>}
            <input 
            onChange={e => props.onChange(e)}
            onFocus={props.onFocus ? props.onFocus : null}
            placeholder={props.placeholder}
            value={props.inputValue}
            className={props.inputClassName}
            />
            {props.endIconComponent && 
                <div onClick={props.onClickLastIcon}>
                    {props.showLastIcon && props.endIconComponent}
                </div>
            }
            {props.lastIcon && 
                <div onClick={props.onClickLastIcon}>
                {props.showLastIcon && <img src={props.lastIcon}/>}
                </div>
            }
            {(props.searchIcon && props.showSearchIcon) &&
                <div>
                    <img src={props.searchIcon}/>
                </div>
            }
        </div>
    )
}

export default ChistaSearchInput;