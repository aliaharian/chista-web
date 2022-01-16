import React, { memo } from "react";
import { InputLabel, InputAdornment, Input } from "@material-ui/core";
import useStyles from "./Styles";
import clsx from "clsx";
import errorIcon from "../../../../assets/images/warning.svg";
import { numberFormat } from "../../../../utilities";

const InputFormMultiline = ({
    name,
    icon,
    label,
    formik,
    normalize,
    className,
    constValue = "",
    characterNumber,
    maxCharacter,
    errorClass,
    rowsMax,
    rows,
    placeholder,
    disabled,
    required = false,
}) => {
    const { values, touched, errors, setFieldValue } = formik;
    const classes = useStyles();

    const customOnchange = (e) => {
        if (e.target.value.length > maxCharacter) return;
        if (normalize) {
            setFieldValue(e.target.name, `${constValue}${normalize(e.target.value)}`);
            return;
        }
        setFieldValue(e.target.name, e.target.value);
    };

    return (
        <div
            className={clsx(
                classes.inputWrapper,
                classes.inputWrapperTextarea,
                className ? className : "",
                errors[name] && classes.errorWrapper
            )}
        >
            <div className={classes.labelWrapper}>
                <InputLabel
                    htmlFor={name}
                    className={clsx(required ? classes.inputLabelRequired : "")}
                >
                    {label}
                </InputLabel>
                {characterNumber && (
                    <p>
                        حداکثر تعداد کاراکتر
                        <span>
                        {" "}
                            {numberFormat.toPersianDigits(
                                values[name] ? values[name].length : 0
                            )}{" "}
                        </span>
                        <span>
                            /{" "}
                            {numberFormat.toPersianDigits(maxCharacter)}
                        </span>
                        {/* <span>کاراکتر</span> */}
                    </p>
                )}
            </div>

            <Input
                value={values[name]}
                multiline
                rowsMax={rowsMax}
                rows={rows}
                disabled={disabled}
                onChange={customOnchange}
                name={name}
                disableUnderline={true}
                id={name}
                placeholder={placeholder}
                classes={{ root: classes.inputRoot }}
                startAdornment={
                    <InputAdornment position="start">
                        {icon && <img src={icon} alt="user icon" />}
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

export default memo(InputFormMultiline);
