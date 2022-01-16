import { makeStyles, MenuItem, Select, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import ArrowBottom from '../../../assets/kit/icons/arrowBottom.svg';
import ArrowTop from '../../../assets/kit/icons/arrowTop.svg';
import Style from '../Style/kits.module.scss';
//this component can used with custom width but need to pass dropdownCustomContainer and customSize

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
    titleTexts: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
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
        borderRadius: `${Style.inputRadius}`,
        [theme.breakpoints.down(1800)]: {
            height: '46px',
        },
        '&:focus': {
            outline: 'none',
            backgroundColor: 'white',
            border: '1px solid rgba(12, 11, 49, 0.15) !important',
            borderRadius: `${Style.inputRadius}`,
        },
    },
    rootError: {
        width: '100%',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px' + ' !important',
        border: '1px solid #FF6575 !important',
        borderRadius: `${Style.inputRadius}`,
        [theme.breakpoints.down(1800)]: {
            height: '46px',
        },
        '&:focus': {
            outline: 'none',
            backgroundColor: 'white',
            border: '1px solid #FF6575 !important',
            borderRadius: `${Style.inputRadius}`,
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
function SingleSelectChistaDropdown({ ...props }) {
    const classes = useStyles();
    //dropdown items styles:
    const StyledMenuItem = withStyles((theme) => ({
        root: {
            width: '100%',
            height: 43,
            margin: '0 auto',
            backgroundColor: '#fff !important',
            fontSize: 13,
            padding: '0px 20px 20px',
            fontFamily: theme.font.medium,
            color: theme.textColor.secondary,
            borderRadius: `${Style.inputRadius} !important`,
            border: 'none !important',
            '&>div': {
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
            <div className={classes.titleTexts}>
                <div className={classes.titleText}>
                    {props.title && <p className={props.titleClassName}>{props.title}</p>}
                    {props.isRequired ? <div className={classes.requireFieldMark} /> : null}
                </div>
                {props.inError ?
                    <div className={classes.errorTextContainer}>
                        <span className={clsx(props.errorTextClassName, classes.errorText)}>{props.errorText}</span>
                    </div>
                    : null}
            </div>
            <Select
                disabled={props.disabled}
                disableUnderline={true}
                classes={{
                    root: props.inError ? clsx(classes.rootError, props.customClassRoot) : clsx(classes.root, props.customClassRoot),
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
                                {props.errorIconComponent && props.iconComponent && props.inError ? props.errorIconComponent :
                                    props.errorIconComponent && props.iconComponent && !props.inError ? props.iconComponent : null}
                                {props.errorIcon && props.icon && <img src={props.inError ? props.errorIcon : props.icon} />}
                                <span>{item.title}</span>
                            </div>
                            {props.disabled ? null : open ? <img className={classes.selectIcon} src={ArrowTop} /> : <img className={classes.selectIcon} src={ArrowBottom} />}
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
                            style: props.customSize !== undefined ? {
                                border: 'none',
                                boxShadow: '0 3px 6px rgba(12, 11, 49, 0.16)',
                                borderRadius: `${Style.inputRadius} !important`,
                                marginTop: '8px',
                                maxHeight: props.maxHeight || '190px',
                                paddingTop: '20px',
                                width: props.customSize,
                            } : {
                                border: 'none',
                                boxShadow: '0 3px 6px rgba(12, 11, 49, 0.16)',
                                borderRadius: `${Style.inputRadius} !important`,
                                marginTop: '8px',
                                paddingTop: '20px',
                                maxHeight: '190px',
                            },
                        },
                    }
                }
            >
                {props.options?.length > 0 &&
                    props.options.map((item, index) => (
                        <StyledMenuItem disabled={index == 0 && props.firstDisable ? true : false} style={{ fontSize: 13 }}
                            value={item.value}>
                            <div className={clsx(classes.dropDownItems, classes.selectedInSelectFormView)}>
                                <span>{item.title}</span>
                            </div>
                        </StyledMenuItem>
                    ))}
            </Select>
            {props.inError ? <p className={clsx(classes.errorText, props.errorTextClassName)}>{props.errorText}</p> : null}
        </div>
    )
}

export default SingleSelectChistaDropdown;