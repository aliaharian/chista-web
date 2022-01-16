import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    baseInfoContainer: {
        padding: '40px 52px 16px 35px !important',
        [theme.breakpoints.down(1800)]: {
            padding: '40px 44px 16px 27px !important',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '16px 25px !important',
        },
        '& p': {
            fontSize: 13,
            color: theme.textColor.primary
        }
    },
    baseInfoMainContainer: {
        paddingTop: 0
    },
    dialogRoot: {
        width: '464px !important',
        height: '615px !important',
        [theme.breakpoints.down(1800)]: {
            width: '386px !important',
            height: '512px !important',
        },
        [theme.breakpoints.down(480)]: {
            width: '100% !important',
            height: '100% !important',
        },
    },
    form: {
        height: '515px',
        [theme.breakpoints.down(1800)]: {
            height: '385px',
        },
        [theme.breakpoints.down(480)]: {
            height: 'calc(100vh - 70px)',
        },
        '&>div': {
            '&>div': {
                marginRight: '-17px !important',
                marginLeft: 'unset !important',
                [theme.breakpoints.down('sm')]: {
                    marginRight: '0 !important',
                },
            }
        }
    },
    stepBTN: {
        right: 35,
        width: '78px',
        zIndex: 55,
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 15,
        color: theme.buttonColor.normal,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        margin: "0",
        outline: "none",
        fontSize: 13,
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',
        },
        [theme.breakpoints.down(1800)]: {
            width: '66px',
            top: '25px !important',
            height: 26,
        },
        [theme.breakpoints.down('sm')]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
            color: theme.buttonColor.hover,
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.hover,
            },
        },
    },
    scoreContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
        position: 'relative',
        '&:after': {
            content: '""',
            width: 'calc(100% + 35px)',
            height: 1,
            position: 'absolute',
            backgroundColor: theme.textColor.border,
            bottom: 0,
            right: '-35px',
            [theme.breakpoints.down(480)]: {
                right: '-24px',
                width: 'calc(100% + 24px)',
            }
        },
        '& p': {
            color: theme.textColor.secondary,
            fontSize: 13,
        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&>p:nth-child(1)': {
                marginRight: 11
            },
            '&>p:nth-child(2)': {
                color: theme.textColor.primary,
            },
        },
        '& svg': {
            cursor: "pointer",
        }
    },
    scoreLast: {
        '&:after': {
            content: '""',
            width: 'calc(100% + 70px)',
            height: 1,
            position: 'absolute',
            backgroundColor: theme.textColor.border,
            bottom: 0,
            right: '-35px',
            [theme.breakpoints.down(480)]: {
                right: '-24px',
                width: 'calc(100% + 48px)',
            }
        },
    },
    titleText: {
        fontSize: 13,
        color: theme.textColor.primary
    },
    countModalBody: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '91px 0 0 0',
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            padding: '91px 0 0 0',
        },
        '&>div , &>button': {
            height: 56,
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            '&>span': {
                color: 'rgba(12, 11, 49, 0.3)'
            }
        },
        '&>button:nth-child(1) , &>button:nth-child(3)': {
            flexBasis: '56px',
            maxWidth: 56,
            minWidth: 56,
            color: theme.buttonColor.normal,
            fontSize: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.buttonColor.normal,
                '& svg': {
                    color: '#fff'
                }
            },
            [theme.breakpoints.down("sm")]: {
                flexBasis: '48px',
                maxWidth: 48,
                minWidth: 48,
                height: 48
            },
        },
        '&>div:nth-child(2)': {
            flexBasis: '256px',
            margin: '0 8px',
            [theme.breakpoints.down("sm")]: {
                flexBasis: '100%',
                height: 48,
            },
            '& .MuiInput-root': {
                '&:after , &:before': {
                    display: 'none !important'
                }
            },
            '& input': {
                width: 35,
                fontSize: 16,
                fontFamily: theme.font.bold,
                textAlign: 'center'
            },
            '&>span': {
                fontSize: 16,
                fontFamily: theme.font.bold
            }
        },
    },
    disableBtn: {
        pointerEvents: 'none',
        borderColor: theme.textColor.border + ' !important',
        color: theme.textColor.border + ' !important'
    },
    errorContainer: {
        width: 'calc(100%)',
        margin: '7px auto 0 auto',
        height: 30,
        padding: '0 35px',
        backgroundColor: 'rgba(255,101,117,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto 0 auto',
        },
        '& svg': {
            height: 30,
            color: '#ff6575',
            marginRight: 5
        },
        '&>p': {
            color: '#ff6575',
            fontSize: 13,
        }
    },
    durationTextField: {
        width: 50,
        '&>div': {
            '&:after , &:before': {
                display: 'none'
            }
        }
    }
}));
