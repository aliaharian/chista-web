import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';

function ChistaTextarea({...props}) {
    return (
        <div className={Style.textareaContainer}>
            <div className={Style.titleTexts}>
                <div>
                    <p className={props.titleClassName}>{props.title}</p>
                    {props.isRequired ? <div className={Style.requireFieldMark}/> : null}
                </div>
                {props.inError ?
                    <div>
                        <span className={clsx(props.errorTextClassName, Style.errorText)}>{props.errorText}</span>
                    </div>
                : 
                    <div>
                        <span className={Style.hintText}>
                            {props.hintText}
                        </span>
                    </div>
                }
            </div>
            <textarea 
            className={props.inError ? clsx(Style.textareaWithError, props.inputClassName) : clsx(Style.textareaWithoutError, props.inputClassName)}
            rows={props.rows}
            onChange={e => props.onChange(e)}
            placeholder={props.placeholder}
            value={props.inputValue}
            minLength={props.minLength}
            maxLength={props.maxLength}
            />
        </div>
    )
}
export default ChistaTextarea;