import React from 'react';
import Style from '../assets/stylesheet/index.module.scss';

function ChistaInput({label, icon, required, inputValue, onChangeInput, placeholder, isError, maxLength}) {
    return (
        <div className={Style.chistaInputContainer}>
            <div className={Style.chistaInputLabel}>
                {label}
                {required ? <div/> : null}
            </div>
            <div className={isError ? Style.chistaErrorInput : Style.chistaInput }>
                <img
                src={icon}
                className={Style.chistaInputImg}
                />
                <input
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => onChangeInput(e.target.value)}
                maxLength={maxLength}
                />
            </div>
            {isError ? <span>این فیلد اجباری است</span> : null}
        </div>
    )
}

export default ChistaInput;