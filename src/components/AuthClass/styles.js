import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        maxWidth: 432,
        minWidth: 432,
        minHeight: 516,
        flexBasis: 432,
        borderRadius: 8,
        border: '1px solid ' + theme.textColor.border,
        backgroundColor: '#fff',
        margin: '0 auto',
        display: "flex",
        flexDirection: "column",
        paddingBottom: 40,
        position: 'relative',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '100%',
            minWidth: '100%',
            minHeight: 'calc(100vh - 121px)',
            maxHeight: 'calc(100vh - 121px)',
            paddingBottom: 0,
            flexBasis: '100%',
            border: 'none',
        },
    },
    Toolbar: {
        justifyContent: "center",
        minHeight: 30,
        marginBottom: 40,
        fontSize: 16,
        fontFamily: theme.font.bold,
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
        },
        '&>svg': {
            marginRight: 5,
            marginTop: 2,
            color: theme.textColor.primary
        }
    },
    dialogRoot: {
        width: '470px !important',
        height: '615px !important',
        [theme.breakpoints.down("sm")]: {
            width: '100% !important',
            height: '100% !important',
        },
        '&>div:last-child': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        }
    },
    borderNone: {
        border: 'none!important'
    },

    browserErrorContainer: {
        padding: '0 40px 0',
        bottom: 40,
        position: 'absolute',
        right: 0,
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            padding: '0 8px'
        },

        '& p': {
            fontFamily: theme.font.bold,
            color: theme.textColor.error,
            textAlign: 'center',
            marginBottom: 20,
            fontSize: 13,
            lineHeight: 2.14,
            '& a': {
                color: theme.buttonColor.normal,
                marginLeft: 2
            }
        }
    },
    warningImageWrapper: {
        width: 110,
        height: 110,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff657529',
        marginTop: 83,
        marginBottom: 39,
        '& img': {
            width: 58
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 67,
            marginBottom: 26,
            width: 75,
            height: 75,
            '& img': {
                width: 40
            },
        },
    },
    guestAvatarContainer: {
        marginTop: 19,
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        position: "relative",
        '& svg': {
            fontSize: 24
        },
        [theme.breakpoints.down("sm")]: {
            width: "75px",
            height: "75px",
        },
    },
    avatarContainer:
        {
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            position: "relative",
            [theme.breakpoints.down("sm")]: {
                width: "75px",
                height: "75px",
            },
        },
    userAvatarContainer:
        {
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            position: "relative",
        },
    avatar: {
        width: "100% !important",
        height: "100% !important",
        fontSize: 14
    },
    actionButton: {
        width: "100%",
        height: "56px",
        borderRadius: "8px",
        backgroundColor: theme.buttonColor.normal,
        fontSize: "13px",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            height: "48px",
        },
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
        }
    },
    actionButtonWhite: {
        marginTop: 16,
        width: "100%",
        height: "56px",
        border: "solid 1px " + theme.buttonColor.normal,
        fontSize: "13px",
        borderRadius: 8,
        color: theme.buttonColor.normal,
        marginLeft: '0 !important',
        [theme.breakpoints.down("sm")]: {
            height: "48px",
        },
        '&:hover': {
            color: '#fff',
            backgroundColor: theme.buttonColor.normal,
        },
        '&:disabled': {
            border: "solid 1px " + theme.textColor.border,
            color: theme.textColor.disabled,
        }
    },
    cardAction: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: '0 5px !important',
    },
    cardTitle: {
        flexDirection: "column",
        padding: "56px 30px 71px 30px",
        [theme.breakpoints.down("sm")]: {
            padding: "0 30px 71px 30px",
        },
        '& .MuiCardHeader-avatar': {
            marginRight: 0
        },
        '& .MuiCardHeader-title': {
            color: theme.textColor.primary,
            fontSize: 14,
            textAlign: 'center',
            fontFamily: theme.font.regular,
            lineHeight: "27px",
            marginTop: "19px",
            [theme.breakpoints.down("sm")]: {
                marginTop: 20,
                fontSize: 13,
                lineHeight: "13px",
            },
        },
        '& .MuiCardHeader-subheader': {
            color: theme.textColor.secondary,
            fontSize: 13,
            fontFamily: theme.font.regular,
            textAlign: 'center',
            marginTop: "8px",
        }
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: "30px 35px",
        paddingBottom: 0,
        [theme.breakpoints.down("sm")]: {
            height: "auto",
            position: 'absolute',
            padding: "68px 3px",
            paddingBottom: 0,
            bottom: 40
        },
        '&>div:nth-child(1)': {
            padding: '16px 5px 6px 5px'
        }
    },
    customForm: {
        padding: "68px 35px",
        paddingBottom: 0,
        [theme.breakpoints.down("sm")]: {
            position: 'absolute',
            padding: "68px 3px",
            paddingBottom: 0,
            bottom: 40
        },
    },
    guestForm: {
        padding: '36px 19px 38px 19px',
        [theme.breakpoints.down("sm")]: {
            position: 'unset !important',
        },
    },
    fieldLabelRequired: {
        position: 'relative',
        '&:after': {
            content: '""',
            width: 5,
            height: 5,
            position: 'absolute',
            display: 'inline-block',
            borderRadius: '50%',
            left: 20,
            top: 5,
            backgroundColor: '#f64d4d'
        }
    },
    loginGuestBtn: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: -66,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 4,
        color: theme.buttonColor.normal,
        margin: "0",
        outline: "none",
        fontSize: 13,
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',
        },
        [theme.breakpoints.down('sm')]: {
            top: -59,
            right: 24
        },
    },
    addContactInput: {
        '& input': {
            fontSize: 13
        },
        '& .MuiInputAdornment-positionStart': {
            marginRight: 11
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 0,
            marginTop: 10,
            color: '#ff6575'
        },
        '& .Mui-focused': {
            '& fieldset': {
                outline: 'none !important',
                border: '1px solid ' + theme.textColor.primary + ' !important'
            }
        },
        '& .MuiOutlinedInput-root.Mui-error': {
            borderColor: theme.textColor.error + ' !important'
        },
        '& .Mui-error': {
            '& svg': {
                color: theme.textColor.error,
            }
        }
    },

    fieldLabel: {
        marginBottom: 0,
        marginLeft: 4,
        color: theme.textColor.primary,
        fontSize: 13,
        '&>span': {
            color: theme.textColor.secondary,
            marginLeft: 15,
            fontSize: 13
        }
    },
    userTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    changeUser: {
        cursor: 'pointer',
        fontFamily: theme.font.regular,
        color: theme.buttonColor.normal,
        fontSize: 13,
        paddingTop: 25,
        paddingBottom: 14,
        lineHeight: '48px'
    },
    userTitle: {
        borderRadius: 8,
        backgroundColor: "#fff",
        padding: '25px 0 14px 0',
        '& .MuiCardHeader-title': {
            color: theme.textColor.primary,
            fontSize: 13,
            fontFamily: theme.font.medium,
            lineHeight: '24px',
        },
        '& .MuiCardHeader-avatar': {
            marginRight: 11
        },
        '& .MuiCardHeader-subheader': {
            color: theme.textColor.secondary,
            fontSize: 13,
            fontFamily: theme.font.regular,
            lineHeight: '24px'

        },
    }
}));