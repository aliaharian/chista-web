import { makeStyles, MenuItem, Select, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import ArrowBottom from '../../../assets/kit/icons/arrowBottom.svg';
import ArrowTop from '../../../assets/kit/icons/arrowTop.svg';
import RadioButton from '../Checkbox/RadioButton';

//note: need to change

//component styles:
const useStyles = makeStyles(theme => ({
    dropdownContainer: {
        width: '394px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.down(1800)]: {
            width: '326px',
        },
        [theme.breakpoints.down(480)]: {
            width: '100%',
        },
        '&>.MuiInputBase-root': {
            width: '100%'
        },
        '&>.Mui-disabled': {
            border: 'none !important'
        }
    },
    titleText: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        '&>p': {
            margin: '0px 0px 14px',
            fontSize: 13,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
            },
            [theme.breakpoints.down(480)]: {
                fontSize: 13,
            }
        },
    },
    requireFieldMark: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: '#FF6575',
        marginRight: '5px',
    },
    errorText: {
        margin: '10px 0px 0px',
        color: '#FF6575',
        fontSize: 13,
        [theme.breakpoints.down(1800)]: {
            fontSize: 12,
        },
        [theme.breakpoints.down(480)]: {
            fontSize: 13,
        }
    },
    root: {
        width: '100%',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px' + ' !important',
        border: '1px solid rgba(12, 11, 49, 0.15) !important',
        borderRadius: 8,
        [theme.breakpoints.down(1800)]: {
            height: '46px',
        },
        '&:focus': {
            outline: 'none',
            backgroundColor: 'white',
            borderRadius: 8,
            border: '1px solid rgba(12, 11, 49, 0.15) !important',
        },
    },
    rootError: {
        width: '100%',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px' + ' !important',
        border: '1px solid #FF6575 !important',
        borderRadius: 8,
        [theme.breakpoints.down(1800)]: {
            height: '46px',
        },
        '&:focus': {
            outline: 'none',
            backgroundColor: 'white',
            borderRadius: 8,
            border: '1px solid #FF6575 !important',
        },
    },
    selectIcon: {
        width: 24,
        height: 24,
        [theme.breakpoints.down(1800)]: {
            width: 20,
            height: 20,
        },
        [theme.breakpoints.down(480)]: {
            width: 24,
            height: 24,
        },
    },
    selectedView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    selectedViewTextAndIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&>img': {
            width: 24,
            height: 24,
            [theme.breakpoints.down(1800)]: {
                width: 20,
                height: 20,
            },
            [theme.breakpoints.down(480)]: {
                width: 24,
                height: 24,
            },
        },
        '&>span': {
            fontSize: 13,
            fontFamily: theme.font.regular,
            lineHeight: '24px',
            marginLeft: 10,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
                lineHeight: '20px',
            },
            [theme.breakpoints.down(480)]: {
                fontSize: 13,
                lineHeight: '24px',
            },
        }
    }
}))

//dropdown component:
function MultiSelectChistaDropdown({...props}) {
    const classes = useStyles();

    //dropdown items styles:
    const StyledMenuItem = withStyles((theme) => ({
        root: {
            width: '100%',
            height: 43,
            margin: '0 auto',
            backgroundColor: '#fff !important',
            fontSize: 13,
            padding: '13px 20px',
            fontFamily: theme.font.medium,
            color: theme.textColor.secondary,
            borderRadius: '8px !important',
            border: 'none !important',
            '&>div': {
                display: 'flex',
                '&>span': {
                    marginLeft: 10,
                    fontSize: 13,
                    fontFamily: theme.font.medium,
                    [theme.breakpoints.down(1800)]: {
                        fontSize: 12,
                    },
                    [theme.breakpoints.down(480)]: {
                        fontSize: 13,
                    },
                }
            },
        },
    }))(MenuItem);

    const [open, setOpen] = useState(false)

    return (
        <div className={clsx(classes.dropdownContainer, props.dropdownCustomContainer)}>
            <div className={classes.titleText}>
                <p className={props.titleClassName}>{props.title}</p>
                {props.isRequired ? <div className={classes.requireFieldMark}/> : null}
            </div>
            <Select
            disabled={props.disabled}
            disableUnderline={true}
            classes={{
                root: props.inError ? classes.rootError : classes.root,
            }}
            value={props.selectedValue}
            className={props.customClassName}
            onOpen={() => setOpen(props.options.length !== 0)}
            onClose={() => setOpen(false)}
            onChange={props.handleChange}
            IconComponent={() => null}
            renderValue={(value) => props.options.map(item => item.value == value ? 
                (
                    <div className={classes.selectedView}>
                        <div className={classes.selectedViewTextAndIcon}>
                            {props.errorIcon && props.icon && <img src={props.inError ? props.errorIcon : props.icon}/>}
                            <span>{item.title}</span>
                        </div>
                        {props.disabled ? null : open ? <img className={classes.selectIcon} src={ArrowTop}/> : <img className={classes.selectIcon} src={ArrowBottom}/>}
                    </div>
                ) : 
            null)}
            MenuProps={
                {
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "left"
                    },
                    getContentAnchorEl: null,
                    PaperProps: {
                        style: {
                            border: 'none',
                            boxShadow: '0 3px 6px rgba(12, 11, 49, 0.16)',
                            borderRadius: '8px !important',
                            marginTop: '8px',
                            maxHeight: '190px'
                        },
                    },
                }
            }
            >
                {props.options?.length > 0 &&
                    props.options.map((item, index) => (
                        <StyledMenuItem disabled={index == 0 ? true : false} style={{ fontSize: 13 }}
                            value={item.value}>
                                <div className={clsx(classes.dropDownItems, classes.selectedInSelectFormView)}>
                                    {index > 0 && <RadioButton isChecked={item.value == props.selectedValue}/>}
                                    <span>{item.title}</span>
                                </div>
                        </StyledMenuItem>
                    ))}
            </Select>
            {props.inError ? <p className={clsx(classes.errorText, props.errorTextClassName)}>{props.errorText}</p> : null}
        </div>
    )
}

export default MultiSelectChistaDropdown;