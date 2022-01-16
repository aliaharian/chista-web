import React, { memo } from "react";
import { InputLabel, InputAdornment, Input } from "@material-ui/core";
import useStyles from "./Styles";
import clsx from "clsx";
import errorIcon from "../../../../assets/images/warning.svg";
import { numberFormat } from "../../../../utilities";

const InputForm = ({
    name,
    icon,
    label,
    svgIcon,
    formik,
    errorClass,
    normalize,
    numberOnly,
    className,
    errorWrapperClass,
    constValue = "",
    required = false,
    placeholder = '',
    onChange,
    disabled,
    maxLength = 1000000,
    decimalNumberOnly,
}) => {
    const { values, handleChange, touched, errors, setFieldValue } = formik;
    const classes = useStyles();

    const customOnchange = (e) => {
        console.log(e.target.value)
        if (maxLength && e.target.value.length <= maxLength) {
            if (numberOnly) {
                const regex = /[1234567890۱۲۳۴۵۶۷۸۹۰]$/;
                if (regex.test(e.target.value.toString()) || e.target.value === '') {
                    setFieldValue(e.target.name, `${numberFormat.toEnglishDigits(e.target.value)}`);
                } else {
                    setFieldValue(e.target.name, `${e.target.value.substring(0, e.target.value.length - 1)}`);
                    return;
                }
            } else if (decimalNumberOnly) {
                const regex = /^[1234567890۱۲۳۴۵۶۷۸۹۰]{1,2}([,.][1234567890۱۲۳۴۵۶۷۸۹۰]{1,2})?$/;
                let value = e.target.value
                if (!isNaN(parseFloat(numberFormat.toEnglishDigits(value))) || value === '') {
                    if (regex.test(value.substr(value.length - 1)) || value === '' || (value.substr(value.length - 1) === '.' && value.match(/\./g).length === 1)) {
                        setFieldValue(e.target.name, `${numberFormat.toEnglishDigits(e.target.value)}`);

                    }
                }

            }


            else {
                if (name === "sheba" && e.target.value.length > 29) return;
                if (normalize) {
                    setFieldValue(e.target.name, `${normalize(e.target.value)}`);
                    return;
                }
                setFieldValue(e.target.name, numberFormat.toPersianDigits(e.target.value));
            }

            onChange && onChange(e);
        }
    };

    return (
        <div
            className={clsx(
                classes.inputWrapper,
                (numberOnly || decimalNumberOnly) && classes.montaFont,
                className ? className : "",
                constValue ? classes.constValueWrapper : "",
                errors[name] && touched[name] && (errorWrapperClass || classes.errorWrapper)
            )}
        >
            <InputLabel
                htmlFor={name}
                className={clsx(required ? classes.inputLabelRequired : "")}
            >
                {label}
            </InputLabel>
            <Input
                value={values[name]}
                onChange={customOnchange}
                name={name}
                disableUnderline={true}
                id={name}
                disabled={disabled}
                autoComplete='off'
                placeholder={placeholder || ''}
                classes={{ root: classes.inputRoot }}
                startAdornment={
                    <InputAdornment position="start">
                        <span className={classes.constValue}>{constValue}</span>
                        {
                            svgIcon ?
                                icon
                                :
                                <img src={icon} alt="user icon" />
                        }
                    </InputAdornment>
                }
            />
            {errors[name] && touched[name] && (
                <p className={errorClass || classes.errorMessage}>
                    {/*<img src={errorIcon} alt="" />*/}
                    <span>{errors[name]}</span>
                </p>
            )}
        </div>
    );
};


export default memo(InputForm);
