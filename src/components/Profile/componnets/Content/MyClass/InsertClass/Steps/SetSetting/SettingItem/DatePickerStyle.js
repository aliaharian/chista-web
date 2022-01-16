import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: '17px 0',
        borderRadius:16,
        height: '706px',
        width:'464px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '&>div:nth-child(2)':{
          paddingTop:0
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0',
            maxWidth: '100%'

        },
        '& .MuiIconButton-root': {
            [theme.breakpoints.down('sm')]: {
                padding: '12px 0',
            },
        },

        '&>.MuiPickersStaticWrapper-staticWrapperRoot': {
            width: '100%'
        },
        '& .MuiPickersBasePicker-pickerView': {
            maxWidth: '100%',
            width: '100%',
            minHeight: '495px',
            justifyContent: 'flex-start',
            '&>div:nth-child(1)': {
                display: 'flex',
                flexDirection: 'column',
                '& .MuiPickersCalendarHeader-switchHeader': {
                    order: 2,
                    marginTop: 21,
                    justifyContent: 'space-between',
                    padding: '0 28px',
                    '& svg': {
                        color: theme.textColor.primary,
                    },
                    [theme.breakpoints.down('sm')]: {
                        padding: '0 15px',
                    },
                }
            }
        },
        '& .MuiPickersDay-day': {
            margin: '0 7px',
            width: 45,
            height: 45,
            [theme.breakpoints.down('sm')]: {
                width: 35,
                height: 35,
                marginBottom: 10
            },
            '& p': {
                color: theme.textColor.primary,
                fontFamily: theme.font.regular
            },

        },
        '& .MuiPickersDay-daySelected': {
            backgroundColor: '#fff',
            border: '1px solid ' + theme.textColor.primary,
            color: theme.textColor.primary
        },
        '& .MuiPickersCalendarHeader-daysHeader': {
            maxHeight: 45,
            position: 'relative',
            borderTop: '1px solid ' + theme.textColor.border,
            borderBottom: '1px solid ' + theme.textColor.border,
            '&>span': {
                width: 45,
                height: 41,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 7px',
                fontSize: 13,
                fontFamily: theme.font.medium,
                color: theme.textColor.primary
            }
        },
        '& .MuiPickersCalendarHeader-transitionContainer': {
            width: 110,
            '&>p': {
                fontFamily: 'iranYekanFaNumRegular',
                color: theme.textColor.primary
            }
        },
        '& .Mui-disabled': {
            border: 'none !important',
            '& svg': {
                color: theme.textColor.disabled + '!important'
            }
            // visibility:'hidden'
        }
    },

    renderDay: {
        width: 45,
        maxWidth: 45,
        minWidth: 45,
        margin: '5px 7px',
        height: 45,
        borderRadius: '50%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            margin: '5px 4px',

        },
        '& span': {
            fontFamily: theme.font.medium,
            color: theme.textColor.primary,
            fontSize: 13
        }
    },
    renderDaySelected: {
        backgroundColor: theme.buttonColor.normal,
        color: '#fff',
        '& span': {
            color: '#fff',
        },
        '&:hover': {
            backgroundColor: theme.buttonColor.normal,
        }
    },
    renderDayDisabled: {
        '& span': {
            color: theme.textColor.disabled,
        },
        pointerEvents: 'none'
    },
    renderDayDisNone: {
        visibility: 'hidden'
    },
    stepBTN: {
        right: 35,
        width: '394px',
        position: "absolute",
        bottom: 15,
        height: 56,
        cursor: "pointer",
        backgroundColor: theme.buttonColor.normal,
        borderRadius: 8,
        color: "white",
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "block",
        margin: "32px 0 0 auto",
        outline: "none",
        border: "none",
        fontFamily: theme.font.bold,
        '&:hover': {
            backgroundColor: theme.buttonColor.hover
        },
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 50px)',
            right: 25,
            height: 48,
            bottom: 20
        },
    },
    selectTime: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30
    },
    timeFromToContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        '&>div': {
            flex: 1,
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            margin: '0 4px',
            height: 70,
            padding: '0 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: theme.font.bold,
        }
    },

    selectTimeInput: {
        backgroundColor: 'white !important',
        fontFamily: theme.font.bold,

        '&>div': {
            backgroundColor: 'white !important',
            padding: '0 !important',
            fontFamily: theme.font.bold,
        },
        '&:before': {
            content: "''",
            display: 'none'
        },
        '&:after': {
            content: "''",
            display: 'none'
        },
        '&>svg': {
            display: 'none'
        }
    },

    errorTxt: {
        margin: 0,
        paddingLeft: 20,
        width: '100%',
        color: theme.textColor.error,
        fontSize: 13
    },
    errorBorder: {
        borderColor: theme.textColor.error + ' !important'
    }
}))