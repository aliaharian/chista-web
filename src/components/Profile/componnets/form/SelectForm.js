import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import {
    InputLabel,
    InputAdornment,
    Input,
    Select,
    MenuItem,
    withStyles,
    useTheme,
    useMediaQuery,
    Typography,
} from "@material-ui/core";
import errorIcon from "../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import clsx from "clsx";
import chevronDownIcon from "../../../../assets/images/profile/registerOstad/ChevronDown.svg";
import StyledRadio from "../../../../utilities/styledRadio";
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const SelectForm = ({
    name,
    icon,
    svgIcon,
    label,
    formik,
    options,
    className = "",
    handleChange,
    required = false,
    shiftMenu,
    disabled,
    errorClass,
    selectedValue = null,
    renderValue = false,
    activityStyle = false

}) => {
    const classes = useStyles();
    const { values, touched, errors, setFieldValue } = formik;
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isMobileLg = useMediaQuery(theme.breakpoints.down(416));
    const [width, height] = useWindowSize();

    const customOnchange = (e) => {
        handleChange && handleChange(e);
        // console.log(e.target.name, e.target.value);
        setFieldValue(e.target.name, e.target.value);
    };
    // console.log(name,values[name])

    const StyledMenuItem = withStyles((theme) => ({
        root: {
            width: 392,
            height: 43,
            margin: '0 auto',
            backgroundColor: '#fff !important',
            fontSize: 13,
            padding: '13px 20px',
            fontFamily: theme.font.medium,
            color: theme.textColor.secondary,
            borderRadius: '8px !important',
            border: 'none !important',
            '& p': {
                fontFamily: theme.font.medium,
                color: theme.textColor.secondary,
                fontSize: 13,
            },
            '&:hover': {
                color: theme.textColor.primary,
                // color: theme.buttonColor.normal,
                backgroundColor: '#f5f8fa !important'
            }
        },



    }))(MenuItem);

    useEffect(() => {
        setOpen(false)
    }, [width])
    return (
        <div className={clsx(
            classes.inputWrapper,
            errors[name] && classes.errorWrapper,
            className
        )}>
            <InputLabel
                htmlFor={name}
                className={clsx(
                    required ? classes.inputLabelRequired : "",
                    classes.selectForm
                )}
            >
                {label}
            </InputLabel>
            <Select
                disabled={disabled}
                renderValue={renderValue}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "left"
                    },
                    getContentAnchorEl: null,
                    className: classes.SelectOption
                }}
                labelId={name}
                id={name}
                value={values[name]}
                name={name}
                className={classes.selectInput}
                open={open}
                onOpen={() => setOpen(options.length !== 0)}
                onClose={() => setOpen(false)}
                onChange={customOnchange}
                renderValue={(value) => options.map(item => item.value == value ? (<div className={classes.selectedInSelectFormView}>{item.title}</div>) : null)}
                IconComponent={() => <ChevronDown open={false} />}
                startAdornment={
                    <InputAdornment position="start">
                        {
                            svgIcon ?
                                icon
                                :
                                <img src={icon} alt="user icon" />
                        }
                    </InputAdornment>
                }
                MenuProps={
                    {
                        classes: {paper: classes.menuPaper},
                        // anchorOrigin: {
                        //     vertical: 'bottom',
                        //     horizontal: 'right',
                        // },
                        // anchorEl:selectRef.current,
                        // transformOrigin: {
                        //     vertical: 'bottom',
                        //     horizontal: 'right',
                        // },
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null,

                        PopoverProps: {
                            classes: {
                                paper: classes.borderRadius8
                            },
                        },
                        PaperProps: {
                            style: {
                                width: isMobile ?
                                    'calc(100% - 48px)' :
                                    activityStyle ?
                                        394 :
                                        392,
                                border: 'none',
                                maxWidth: activityStyle ? 394 : 392,
                                minWidth: isMobile ? 10 : activityStyle ? 394 : 392,
                                boxShadow: '0 3px 10px #191a3212',
                                borderRadius: '8px !important',
                                transform: (activityStyle && !isMobile) ? 'translate(-34px,8px)' : 'translate(-8px,8px)'
                                // shiftMenu ?
                                //     isMobileLg ? 'translate(-8px , 14px)' : isMobile ? 'translate(-48px , 14px)' : 'translate(-48px , 22px)'
                                //     :
                                //     isMobileLg ? 'translate(-8px , 14px)' : isMobile ? 'translate(-40px , 14px)' : 'translate(-40px , 22px)',

                                // backgroundColor:'red',
                            },
                        },
                    }
                }
            >
                {options?.length > 0 &&
                    options.map((item, index) => (
                        <StyledMenuItem disabled={index == 0 ? true : false} style={{ fontSize: 13 }}
                            value={item.value}>
                                <div className={clsx(classes.dropDownItems, classes.selectedInSelectFormView)}>
                                    {index > 0 && <StyledRadio selected={item.value == selectedValue || item.value == values[name]} />}
                                    <span>{item.title}</span>
                                </div>
                        </StyledMenuItem>
                    ))}
            </Select>
            {errors[name] && touched[name] && (
                <p className={errorClass || classes.errorMessage}>
                    {/*<img src={errorIcon} alt=""/>*/}
                    <span>{errors[name]}</span>
                </p>
            )}
        </div>
    );
};

const ChevronDown = ({ open }) => {
    const classes = useStyles();
    // console.log('open', open)
    return (
        <img style={open ? { transform: 'rotateZ(180deg)' } : {}} className={classes.SelectChevron}
            src={chevronDownIcon} />
    )
}

export default memo(SelectForm);
