import React from 'react';
import PlusIcon from '../../../assets/kit/icons/plusIcon.svg';
import MinusIcon from '../../../assets/kit/icons/minusIcon.svg';
import Style from '../Style/kits.module.scss';
import Warning from '../../../assets/kit/icons/warning.svg';
import { convertNumberToLetter, getNumber } from '../Utils';
import clsx from 'clsx'

function IncreaseAndDecrease({ ...props }) {
    return (

        <div className={clsx(Style.textFieldContainer, props.customClassContainer)}>

            <div className={Style.increaseAndDecreaseContainer}>
                <button style={props.hideAction ? { display: 'none' } : { marginLeft: '8px' }}>
                    <img onClick={props.plusValue} src={PlusIcon} alt={'Plus'} />
                </button>
                <div className={props.inError ? clsx(Style.inputContainerWithError, props.inputWrapperClass) : clsx(Style.inputContainerWithoutError, props.inputWrapperClass)}>

                    <input
                         onInput={e => {
                            e.target.value = getNumber(e.target.value);
                        }}
                        onPaste={e => {
                            e.target.value = getNumber(e.target.value);
                        }}
                        onChange={e => {
                            props.onChange(e)
                        }}
                        placeholder={props.placeholder}
                        value={convertNumberToLetter(props.inputValue)}
                        max={props.max}
                        min={props.min}
                        maxLength={props.maxLength}
                        minLength={props.minLength}
                        className={props.inputClassName}
                    />
                    <span className={props.unitCustomClassName}>{props.unit}</span>

                </div>
                <button style={props.hideAction ? { display: 'none' } : { marginRight: '8px' }}>
                    <img onClick={props.minusValue} src={MinusIcon} alt={'Minus'} />
                </button>
            </div>
            <div className={Style.footerText}>

                {props.inError ?
                    <div>
                        <Warning className={clsx(props.errorTextClassName, Style.errorText)} />
                        <span className={clsx(props.errorTextClassName, Style.errorText)}>{props.errorText}</span>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default IncreaseAndDecrease;