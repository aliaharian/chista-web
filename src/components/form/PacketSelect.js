import React, { useEffect, useLayoutEffect, useState } from "react"
import { MenuItem, InputAdornment, Select, withStyles } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import StyledRadio from "../../utilities/styledRadio";
import expandMore from '../../assets/images/arrow-bottom.svg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "rgba(213, 223, 235, 0.22)",
        '& fieldset': { display: 'none' },
        height: 56,
        fontSize: 15,
        fontFamily: theme.font.regular,
        borderRadius: 13
    },
    disabledLabel: {
        color: theme.textColor.disabled + ' !important',
        '&:after': {
            display: 'none'
        }
    },
    formControl: {
        '&>.MuiInputBase-root': {
            '&>img': {
                transition: 'all 250ms ease',
                transform: 'rotateZ(0deg)',
            }
        }
    },
    openSelect: {
        '&>.MuiInputBase-root': {
            '&>img': {
                transform: 'rotateZ(180deg)'
            }
        }
    },
    errorInput: {
        '&>svg': {
            color: theme.textColor.error,
        },
        '&  .MuiInput-root': {
            border: '1px solid ' + theme.textColor.error,
        },
        '& .MuiSvgIcon-root': {
            color: theme.textColor.error,
        },
        '& .MuiSelect-select.MuiSelect-select': {
            color: theme.textColor.error
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.textColor.error,
        }
    },
    errorText: {
        color: theme.textColor.error,
        fontSize: 13,
        marginTop: 6,
    },
    dropDownItems: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&>input': {
            margin: 0,
            marginRight: 10
        }
    },
    selectSelect: {
        backgroundColor:'#fff !important',
        fontSize: 13,
        [theme.breakpoints.down(1800)]: {
            fontSize: 12,
        }
    }
}));

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

const PacketSelect = ({
    input,
    label,
    options,
    meta: { touched, error } = false,
    icon,
    svgIcon,
    selectedValue = null,
    defaultValue = null,
    disabled,
    errorText = '',
    shiftMenu,
    selectClassObject={},
    ...props
}) => {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
    const isDesktopSm = useMediaQuery(theme.breakpoints.down(1800));
    const [open, setOpen] = useState(false)
    const [width, height] = useWindowSize();
    useEffect(() => {
        setOpen(false)
    }, [width])
    const StyledMenuItem = withStyles((theme) => ({
        root: {
            width: '100%',
            height: 43,
            margin: '0 auto',
            backgroundColor: '#fff !important',
            fontSize: 13,
            padding: '10px 16px',
            fontFamily: theme.font.medium,
            color: theme.textColor.secondary,
            borderRadius: '8px !important',
        },
    }))(MenuItem);
    return (
        <FormControl
            style={props.style || {}}
            className={clsx(open && classes.openSelect, classes.formControl, errorText !== '' && classes.errorInput)}>
            <InputLabel className={clsx(disabled && classes.disabledLabel)} shrink
                id="demo-simple-select-placeholder-label-label">
                {label}</InputLabel>
            <Select
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                value={selectedValue}
                onChange={(e) => props.onChange(e)}

                startAdornment={
                    <InputAdornment position="start"
                        className={classes.selectAdornment}>
                        {svgIcon ? icon : <img src={icon} alt="" />}
                    </InputAdornment>
                }
                IconComponent={() => <img src={expandMore} style={{ pointerEvents: disabled ? 'none' : 'auto', cursor: 'pointer' }} onClick={() => { !disabled && setOpen(!open) }} />}
                renderValue={(value) => options.map(item => item.value == value ? (<div>{item.label}</div>) : null)}
                disabled={disabled}
                classes={{select:classes.selectSelect}}
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

                        style: {},
                        PopoverProps: {
                            classes: {
                                paper: classes.borderRadius8
                            },
                        },
                        PaperProps: {
                            style: {
                                width: isMobile ?
                                    'calc(100% - 48px)' :
                                    isDesktopSm ?
                                        332 :
                                        394,
                                border: 'none',
                                maxWidth: 394,
                                boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
                                maxHeight: 190,
                                borderRadius: '8px !important',
                                transform:
                                    shiftMenu ?
                                        isMobile ? 'translate(-8px , 14px)' : isDesktopSm ? 'translate(-48px , 14px)' : 'translate(-48px , 16px)'
                                        :
                                        isMobile ? 'translate(-8px , 14px)' : isDesktopSm ? 'translate(-40px , 14px)' : 'translate(-40px , 16px)',
                            },
                        },
                    }
                }
            >
                {options.map((item) => {
                    return (
                        <StyledMenuItem style={{ fontSize: 13 }}
                            value={item.value}>
                            <div className={classes.dropDownItems}>
                                <StyledRadio selected={item.value == selectedValue} />
                                <span style={{ marginRight: 1 }}>{item.label}</span>
                            </div>
                        </StyledMenuItem>
                    )
                })}
            </Select>
            {
                errorText !== '' &&
                <p className={classes.errorText}>{errorText}</p>
            }
        </FormControl>
    )
}

export default PacketSelect
