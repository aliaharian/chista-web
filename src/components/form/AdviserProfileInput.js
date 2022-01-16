import {Input, Typography} from "@material-ui/core";
import React from "react";
import {numberFormat} from "../../utilities";

export default function AdviserProfileInput({
                                                input,
                                                className,
                                                inputRef,
                                                disabled,
                                                label,
                                                meta: {touched, error},
                                                placeholder,
                                                icon,
                                                tal,
                                                multiline = false,
                                                maxLength,
                                                minLength,
                                                endAdropment,
                                                defaultValue,
                                                onlyNum,
                                                ...custom
                                            }) {
    const [value, setValue] = React.useState(defaultValue)
    const changevalue = (e) => {
        if (onlyNum) {
            if ((/^[0-9]+$/.test(numberFormat.toEnglishDigits(e.target.value))) || e.target.value === '') {
                setValue(numberFormat.toPersianDigits(e.target.value))
            }
        } else {
            setValue(numberFormat.toPersianDigits(e.target.value))
        }
    }
    return (<Input
            inputRef={inputRef}
            disabled={disabled}
            disableUnderline
            autoFocus
            className={className}
            defaultValue={defaultValue}
            helperText={touched && error ? error : null}
            inputProps={{maxLength: maxLength, minLength: minLength, value: value, onChange: (e) => changevalue(e)}}
            multiline={multiline}
            endAdornment={(
                endAdropment ? <Typography
                    style={{
                        fontFamily: 'chistaYekanR',
                        fontSize: 14,
                        color: '#0c0b31!important'
                    }}>{endAdropment}</Typography> : '')}
            error={touched && error !== undefined}
            {...input}
            {...custom}
        />
    )
}