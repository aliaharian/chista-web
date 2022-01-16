import {makeStyles} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});

export default makeStyles(theme => ({
    root: {
        borderRadius: "16px !important",
        width: "464px !important",
        height: "615px !important",
        [theme.breakpoints.down('sm')]: {
            width: "100% !important",
            margin: 0,
            height: "calc(100% - 0px) !important",
            borderRadius: "0 !important",
        },
    },
    verifyActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 296,
        margin: '0 auto',
        marginTop: 12,
        '& .Mui-disabled': {
            border: 'none !important',
            '& span': {
                color: theme.textColor.primary
            }
        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }
    },
    resendCodeBtn: {
        backgroundColor: '#fff',
        color: theme.buttonColor.normal,
        border: 'none',
        width: 'auto',
        height: 'auto',
        fontSize: 13,
        paddingRight: 0,
        paddingLeft: 0,
        '&:hover': {
            backgroundColor: '#fff',
            color: theme.buttonColor.normal,
            border: 'none',
            width: 'auto',
            height: 'auto',
        },
        '& p': {
            fontSize: 13,
            marginLeft: 4,
            margin: 0,
            color: theme.buttonColor.normal,
        },
        '& img': {
            width: 24,
            height: 24
        }
    },
    initiableTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 13,
        color: theme.textColor.primary,
        marginBottom: 35
    },
    dialog: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end'
        },
    },
    modalHead: {
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    modalIcon: {
        fontSize: 60,
        color: "#607d8b",
        marginBottom: 10,
        height: '76px !important',
    },
    profileAvatarDemo: {
        '&>img': {
            width: '40%',
            height: 'unset'
        }
    },
    phoneInputLabel: {
        color: theme.textColor.secondary,
        fontSize: 13,
        fontFamily: theme.font.medium,
        position: 'relative',
        marginLeft: 5,
        display: 'inline-block',
        '&:after': {
            content: '""',
            width: 5,
            height: 5,
            position: 'absolute',
            display: 'inline-block',
            borderRadius: '50%',
            right: -7,
            backgroundColor: '#f64d4d'
        }
    },
    modalTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 86,
        '& p': {
            fontFamily: 'chistaYekanB',
            fontSize: 18,
            color: "#0c0b31",
            marginBottom: 0,
            marginTop: 2,
            marginLeft: 9
        }
    },
    completeModalTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 38,
        '& p': {
            fontFamily: 'chistaYekanB',
            fontSize: 18,
            color: "#0c0b31",
            marginBottom: 0,
            marginTop: 2,
            marginLeft: 9
        }
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 31,
        color: '#000',
        cursor: 'pointer'
    },
    modalTitleDesc: {

        fontSize: 16,
        color: "#0c0b31",
        marginBottom: 81,
        marginTop: 0
    },
    completeModalTitleDesc: {

        fontSize: 16,
        color: "#0c0b31",
        marginTop: 0,
        marginLeft: 10
    },
    verifyModalTitleDesc: {
        marginBottom: 19,
        fontSize: 13,
        fontFamily: theme.font.regular
    },
    loginFormContainer: {
        padding: '0 0 8px 0 !important',
        '& .MuiFormHelperText-root': {
            marginLeft: 0,
            color: theme.textColor.error
        },
        '& .MuiButton-contained.Mui-disabled': {
            borderColor: theme.textColor.border + ' !important',
            color: theme.textColor.disabled
        },
        '& fieldset': {
            border: '1px solid ' + theme.textColor.border + ' !important'
        },
        '& .Mui-focused': {
            '& fieldset': {
                outline: 'none !important',
                border: '1px solid ' + theme.textColor.primary + ' !important'
            }
        },
        '& .Mui-error': {
            '& fieldset': {
                border: '1px solid ' + theme.textColor.error + ' !important'
            },
            '& svg': {
                color: theme.textColor.error
            }
        }
    },
    dialogBtn: {
        borderRadius: "0 !important",
    },
    submitBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "10px",
    },
    loadingBox: {
        margin: "250px auto 250px auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    modalContent:
        {
            position: "relative",
            padding: "14px 19px 15px 19px",
            paddingBottom: 0,
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                padding: "14px 24px 15px 24px",
            }
        },
    actionBtn: {
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
        },
    },
    loadingContainer: {
        marginTop: 45,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        height: 70,
        justifyContent: 'center'
    },
    modalTitleBolder: {
        fontFamily: 'chistaYekanR',
        fontSize: 25,
        fontWight: 'bold'
    },
    resetBtn:
        {
            color: theme.buttonColor.normal,
            fontSize: "13px !important",
            fontFamily: theme.font.regular,
            backgroundColor: 'transparent !important'
        },
    callWithMeBtn:
        {
            backgroundColor: 'transparent !important',
            color: theme.buttonColor.normal,
            fontSize: "13px !important",
            fontFamily: theme.font.regular,
            paddingRight: 0,
            paddingLeft: 0,
            '& img': {
                width: 24,
                height: 24
            }
        },
    dialogContent:
        {
            padding: '8px 0',
            display: "flex",
            flexDirection: "column",
        },
    timer: {
        marginLeft: 5,
        fontSize: 13,
        '&>span': {
            fontSize: 13,
            color: theme.textColor.secondary,
            marginLeft: 5
        }
    },
    timerNote: {
        margin: 0,
        fontSize: 13
    },
    addImageContainer: {
        display: 'flex',
        width: '100%',
        paddingLeft: 5,
        marginBottom: 28,
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0,
        },
    },
    avatarEditIcon: {
        position: 'absolute',
        opacity: 1,
        backgroundColor: '#e6e5ea',
        width: '24px',
        height: '24px',
        bottom: 0,
        border: '2px solid #fff',
        left: 0,
        zIndex: 999999,
        borderRadius: '50%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
        cursor: "pointer",
    },
    fieldLabel: {
        marginBottom: 7,
        marginLeft: 4,
        fontSize: 13
    },
    addImageBtn: {
        width: 308,
        height: 48,
        borderRadius: 8,
        border: 'solid 1px #ccd7dd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: 166,
        },
    },
    modalBody: {
        padding: '8px 0',
        '& input': {
            fontSize: 13
        },
        '& .MuiInputAdornment-positionStart': {
            marginRight: 11
        },
        '& .MuiFormHelperText-root.Mui-error': {
            marginLeft: 0,
            color: theme.textColor.error
        },
        '& .MuiButton-contained.Mui-disabled': {
            borderColor: theme.textColor.border + ' !important',
            color: theme.textColor.disabled
        },
        '& fieldset': {
            border: '1px solid ' + theme.textColor.border + ' !important'
        },
        '& .Mui-focused': {
            '& fieldset': {
                outline: 'none !important',
                border: '1px solid ' + theme.textColor.primary + ' !important'
            }
        },
        '& .Mui-error': {
            '& fieldset': {
                border: '1px solid ' + theme.textColor.error + ' !important'
            },
            '& svg': {
                color: theme.textColor.error
            }
        },
        [theme.breakpoints.down('sm')]: {
            padding: '8px 0'
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
            right: -9,
            top: 0,
            backgroundColor: '#f64d4d'
        }
    },
    profileAvatarContainer:
        {
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "1px solid "+theme.textColor.avatarBorder,
            position: "relative",
            marginRight: "33px",
            overflow: 'visible',
            '&:hover': {
                '&>div:last-child': {
                    opacity: 1,
                },
            },
            [theme.breakpoints.down("sm")]: {
                width: "75px",
                height: "75px",
                marginRight: "0",
            },
        },
    profileOverlay: {
        position: 'absolute',
        opacity: 0,
        backgroundColor: '#0c0b31b3',
        width: '90px',
        height: '90px',
        top: 0,
        right: 0,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
        cursor: "pointer",
        borderRadius: '50%',
        '&>img': {
            width: 30
        },
        '&:hover': {
            opacity: 1,
        },
        [theme.breakpoints.down("sm")]: {
            width: "73px",
            height: "73px",
            opacity: 1,
        },
    },
    profileAvatar:
        {
            width: "100% !important",
            height: "100% !important",
            border: '0px solid #fff',
            backgroundColor: "#0c0b310d !important",
            cursor: "pointer",
        },
}));
