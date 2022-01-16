import { makeStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

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
        borderRadius: "8px !important",
        width: "532px !important",
        height: "auto !important",
        padding: '55px 38px 0 38px',

        [theme.breakpoints.down(480)]: {
            width: "100% !important",
            margin: 0,
            height: "calc(100%) !important",
            borderRadius: "0 !important",
            padding: '47px 25px 0 25px',
        },
    },
    packetBuyDoneRoot: {
        width: '464px !important',
        minHeight: '373px !important',
        maxHeight: '481px !important',
        padding: '25px 24px 0 24px',
        height: 'auto',
        [theme.breakpoints.down(1800)]: {
            width: '386px !important',
            minHeight: '313px !important',
            maxHeight: '400px !important',
            padding: '25px 20px 59px 20px',
        },
        [theme.breakpoints.down(480)]: {
            width: '100% !important',
            minHeight: '100% !important',
            maxHeight: '100% !important',
            padding: '25px 20px 5px 20px',
        },

    },
    errorValid: {
        fontSize: '9px',
        width: '100%',
        marginTop: '-19px',
        color: 'red',
        paddingLeft: '5px',
        textAlign: 'left',
    },
    policy: {
        textDecoration: "none",
        color: theme.buttonColor.normal,
        fontFamily: theme.font.bold,
    },
    table: {
        borderCollapse: 'separate !important',
        overflow: 'hidden',
        borderRadius: 8,
        border: 'solid 1px #dadae0',
        marginTop: 16,
        [theme.breakpoints.down(1800)]: {
            marginTop: 10,
        },
        [theme.breakpoints.down(480)]: {
            marginTop: 12,
        },
    },
    tableNoBorder: {
        borderCollapse: 'separate',
        overflow: 'hidden',
        borderRadius: 8,
        marginTop: 42,
        [theme.breakpoints.down(1800)]: {
            marginTop: 32,
        },
        [theme.breakpoints.down(480)]: {
            padding: '0 5px',
            borderCollapse: 'collapse',
        },
        '& tr': {
            '&>td': {
                padding: '10px 26px',
                height: 40,
                [theme.breakpoints.down(480)]: {
                    width: 'auto'
                },
            },
            '&>td:nth-child(2n)': {
                textAlign: 'right',
                paddingRight: 0,
                fontFamily: theme.font.bold,

                [theme.breakpoints.down(1800)]: {
                    fontSize: 12,
                },
            },
            '&>td:nth-child(2n-1)': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 0,
                [theme.breakpoints.down(1800)]: {
                    fontSize: 12,
                },
                '&>svg': {
                    marginRight: 11
                }
            },
            '&:nth-child(3)': {
                [theme.breakpoints.down(480)]: {
                    borderBottom: '1px solid #ebebef'
                },
                '&>td': {
                    paddingBottom: '21px',
                    height: 51,
                    borderBottom: '1px solid #ebebef',
                    [theme.breakpoints.down(480)]: {
                        borderBottom: 'none'
                    },
                },
            },
            '&:nth-child(4)': {
                '&>td': {
                    paddingTop: '21px',
                    height: 51,
                    lineHeight: '18px',
                    [theme.breakpoints.down(1800)]: {
                        paddingTop: '15px',
                        paddingBottom: '15px',
                    },
                    '&:nth-child(2)': {
                        color: theme.buttonColor.normal,
                        fontFamily: theme.font.bold,
                        fontSize: 16,
                        '& span': {
                            fontSize: 13
                        }
                    }
                },
            }
        }
    },
    packetTypeTd: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    moonIcon: {
        borderRadius: '50%',
        backgroundColor: 'rgba(66, 100, 251, 0.1)',
        width: 27,
        height: 27,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        border: '1px solid ' + theme.buttonColor.normal,
        '&>svg': {
            width: 14,
            height: 14,
            color: theme.buttonColor.normal,
        }
    },
    factorTitle: {
        color: theme.buttonColor.normal,
        marginBottom: 0,
        marginTop: 13,
        fontWeight: 'normal',
        fontFamily: theme.font.bold,
        fontSize: 15,
        lineHeight: '21px',
        [theme.breakpoints.down(1800)]: {
            fontSize: 12,
            lineHeight: '16px',
            marginTop: 12,
        },
        [theme.breakpoints.down(480)]: {
            marginTop: 9,
            fontSize: 13
        },
        '&:before': {
            content: '""',
            marginRight: 10,
            display: 'inline-block',
            width: '5px',
            height: '5px',
            borderRadius: '10px',
            backgroundColor: theme.buttonColor.normal
        }
    },

    factorRoot: {
        borderRadius: "16px !important",
        width: "924px !important",
        height: "auto !important",
        minHeight: '663px !important',
        padding: '30px 29px',
        [theme.breakpoints.down(1800)]: {
            width: "671px !important",
            minHeight: '485px !important',
            padding: '18px 26px',

        },
        [theme.breakpoints.down(480)]: {
            width: "100% !important",
            margin: 0,
            height: "calc(100%) !important",
            borderRadius: "0 !important",
            padding: '0',
        },
    },
    upgradeHeight: {
        minHeight: '753px !important',
        [theme.breakpoints.down(480)]: {
            minHeight: '100% !important',
        },
    },
    dialog: {
        [theme.breakpoints.down(480)]: {
            alignItems: 'flex-end'
        },
    },
    modalHead: {
        marginTop: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    factorModalHead: {
        marginTop: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
        color: "#0c0b31cc",
        fontSize: 16,
        marginBottom: 14,
        paddingLeft: 8,
        fontFamily: theme.font.regular,
        '&:after': {
            content: '""',
            width: 5,
            height: 5,
            display: 'inline-block',
            borderRadius: '50%',
            left: 4,
            top: -9,
            position: 'relative',
            backgroundColor: '#f64d4d'
        }
    },
    modalTitle: {
        marginBottom: 0,
    },
    factorModalTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        fontSize: 16,
        color: theme.textColor.primary,
        fontFamily: theme.font.bold,
        lineHeight: '22px',
        [theme.breakpoints.down(1800)]: {
            fontSize: 12,
            lineHeight: '16px',
        },
        '&>img': {
            width: 17,
            marginRight: 13,
            color: theme.textColor.primary,
            [theme.breakpoints.down(1800)]: {
                width: 16,
            },
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
        top: 5,
        right: 6,
        color: theme.textColor.primary,
        cursor: 'pointer',
        [theme.breakpoints.down(480)]: {
            top: 0,
            left: 0,
            right: "unset"
        },
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
        marginBottom: 11,
    },
    factorBuyPacketContainer: {
        padding: '19px 0',
        marginBottom: 111,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 40,
        [theme.breakpoints.down(1800)]: {
            padding: '17px 0',
            paddingTop: 12,
        },
        [theme.breakpoints.down(480)]: {
            paddingTop: '9px !important',
            overflow: 'visible',
        },
    },
    BuyPacketContainer: {
        padding: '19px',
        marginBottom: 111,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.down(1800)]: {
            paddingTop: '9px',
        },
        [theme.breakpoints.down(480)]: {
            padding: '19px 24px',
        },
        '& label': {
            fontSize: 13,
            color: theme.textColor.secondary,
            fontFamily: theme.font.regular,
            transform: 'none !important',
            marginLeft: 3,
            display: 'inline-block',
            lineHeight: '25px',
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                width: 5,
                height: 5,
                backgroundColor: theme.textColor.error,
                right: -10,
                borderRadius: 8,
            }
        },
        '&>div': {
            width: '100%',
            [theme.breakpoints.down(1800)]: {
                marginBottom: 20,
            },
            [theme.breakpoints.down(480)]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 392
            },
        },
        '&>svg': {
            marginRight: 15
        },
        '&  .MuiInput-root': {
            width: '100%',
            height: '56px',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            marginTop: 33,
            padding: '16px 20px',
            paddingRight: 15,
            [theme.breakpoints.down(1800)]: {
                height: '48px',
            },
            [theme.breakpoints.down(480)]: {
                height: '48px',
                maxWidth: 392
            },
        },
        '& .MuiInputAdornment-root': {
            marginRight: 15,
            [theme.breakpoints.down(1800)]: {
                '& svg': {
                    fontSize: 20,
                }
            },
        },
        '& .Mui-disabled': {
            '& .MuiSelect-root': {
                border: 'none !important'
            }
        },
        '& .MuiInput-underline': {
            '&:before': {
                display: 'none !important',
                content: "''"
            },
            '&:after': {
                display: 'none !important',
                content: "''"
            }
        },
        '& .MuiSelect-select.MuiSelect-select': {
            backgroundColor: '#fff',
            fontSize: 13,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
            },
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.textColor.secondary,
            fontSize: 13,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
            },
        }
    },
    borderRadius8: {
        borderRadius: '8px !important'
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
        padding: "15px 11px",
        paddingBottom: 0
    },
    factorActionBtn: {
        right: 14,
        width: '294px',
        position: "absolute",
        bottom: -31,
        height: 56,
        cursor: "pointer",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        color: theme.buttonColor.normal,
        margin: "0",
        outline: "none",
        fontSize: 14,
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.regular,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',
        },
        [theme.breakpoints.down(1800)]: {
            width: 208,
            height: 40,
            fontSize: 12,
            bottom: -33,
            right: 7,
        },
        [theme.breakpoints.down(480)]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
            width: 93,
            height: 30,
            borderRadius: 15,
            padding: '10px',
            color: theme.buttonColor.normal,
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.hover,
            },
        },
    },
    actionBtn: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        color: theme.buttonColor.normal,
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
            right: 27,
            top: 26,
            width: '66px',
            height: 26,
            fontSize: 12,
            fontFamily: theme.font.regular,
        },
        [theme.breakpoints.down(480)]: {
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
    modalTitleBolder: {
        fontFamily: 'chistaYekanR',
        fontSize: 25,
        fontWight: 'bold'
    },
    policyContainer: {
        position: 'absolute',
        bottom: -29,
        '& p': {
            lineHeight: '19px',
            fontSize: 13,
            marginLeft: 7
        },
        [theme.breakpoints.down(1800)]: {
            paddingLeft: 11,
            bottom: -33,
            '&>span': {
                padding: 0,
                paddingRight: 15,
            },
            '& p': {
                fontSize: '12px',
                lineHeight: '16px',
                marginLeft: 0
            },
            '& img': {
                width: 20,
                height: 20
            }
        },

        [theme.breakpoints.down(480)]: {
            bottom: 30,
            position: 'unset',
            marginTop: 24
        },
    },
    resetBtn:
    {
        color: "#1641ff",
        fontSize: "14px !important",
        fontFamily: theme.font.regular,
        backgroundColor: 'transparent !important'
    },
    callWithMeBtn:
    {
        backgroundColor: 'transparent !important',
        color: "#536b88",
        fontSize: "14px !important",
        fontFamily: theme.font.regular,
        marginTop: 34
    },
    dialogContent:
    {
        padding: '8px 0',
        display: "flex",
        flexDirection: "column",
    },
    timer: {
        marginRight: 5,
        fontSize: 16,
    },
    addImageContainer: {
        display: 'flex',
        height: 101,
        width: '100%',
        paddingLeft: 5,
        marginBottom: 38,
        alignItems: 'center'
    },
    fieldLabel: {
        marginBottom: 7,
        marginLeft: 4,
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
        [theme.breakpoints.down(480)]: {
            width: 166,
        },
    },
    modalBody: {
        padding: '8px 0',
        [theme.breakpoints.down(480)]: {
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
        width: "108px",
        height: "108px",
        borderRadius: "50%",
        border: "1px solid #92A4BB",
        position: "relative",
        marginRight: "33px",
        overflow: 'hidden',
        '&:hover': {
            '&>div:last-child': {
                opacity: 1,
            },
        }
    },
    profileOverlay: {
        position: 'absolute',
        opacity: 0,
        backgroundColor: 'rgba(12,11,49,0.5)',
        width: '100%',
        height: '100%',
        top: 0,
        right: 0,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
        cursor: "pointer",
    },
    profileAvatar:
    {
        width: "100% !important",
        height: "100% !important",
        border: '3px solid #fff',
        backgroundColor: "rgba(189, 200, 214, 0.45) !important",
        cursor: "pointer",
    },
    doneIcon: {
        width: 80,
        height: 80,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
        marginTop: 0,
        [theme.breakpoints.down(1800)]: {
            marginTop: 0,
            width: 67,
            height: 67,
            marginBottom: 20,
            '& img': {
                width: '32px !important',
                height: '32px !important',
            }
        },
        [theme.breakpoints.down(480)]: {
            width: 75,
            height: 75,
            '& img': {
                width: '50px !important',
                height: '50px !important',
            }
        },
    },
    successTop: {
        marginTop: 0,
        [theme.breakpoints.down(1800)]: {
            marginTop: 0,
        },
        [theme.breakpoints.down(480)]: {
            marginTop: 90,
        }
    },
    errorTop: {
        marginTop: 0,
        [theme.breakpoints.down(1800)]: {
            marginTop: 0,
        },
        [theme.breakpoints.down(480)]: {
            marginTop: 90,
        }
    },
    DoneContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: '30px 0 80px 0',
        [theme.breakpoints.down(1800)]: {
            padding: '20px 0 0px 0',
            height: '100%'
        },
        [theme.breakpoints.down(480)]: {
            padding: '0',
            height: 'calc(100vh - 60px)',
            position: 'relative'
        },
    },
    doneText: {
        fontFamily: theme.font.bold,
        fontSize: 14,
        lineHeight: '16px',
        [theme.breakpoints.down(1800)]: {
            fontSize: 13,
            marginBottom: 10
        },
        [theme.breakpoints.down(480)]: {
            fontSize: 14
        },
    },
    doneFooterText: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        marginTop: 19,
        '&>div:nth-child(1)': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            '&>img': {
                marginRight: 10
            },
            '&>p': {
                marginBottom: 8,
                marginTop: 8
            }
        },
        '&>div:nth-child(2)': {
            color: theme.buttonColor.normal,
            fontFamily: theme.font.bold
        }
    },
    actionBTN: {
        all: "unset",
        backgroundColor: "#f5f8fa",
        borderRadius: 8,
        color: "#aab8c1",
        fontFamily: theme.font.bold,
        fontSize: 13,
        textAlign: "center",
        margin: 0,
        pointerEvents: "none",
        position: 'absolute',
        width: 384,
        height: 52,
        bottom: -42,
        right: 'unset',
        [theme.breakpoints.down(1800)]: {
            width: 332,
            height: 48,
            right: 'unset',
            bottom: -105,
        },
        [theme.breakpoints.down(480)]: {
            right: 4,
            width: 'calc(100vw - 48px)',
            height: 48,
            bottom: 4,
        },
    },
    actionActiveBTN: {
        cursor: "pointer",
        pointerEvents: "unset",
        backgroundColor: theme.buttonColor.normal,
        color: "white",
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
        }
    },
    bankWaiting: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: -25,
        right: -30,
        width: 'calc(100% + 60px)',
        height: 'calc(100% + 117px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& p': {
            color: '#fff',
            fontSize: 18,
            fontFamily: theme.font.bold,
            marginBottom: 40
        },
        [theme.breakpoints.down(480)]: {
            top: 0,
            right: 0,
            width: 'calc(100%)',
            height: 'calc(100%)',
        },
    },
    upgradeNote: {
        fontSize: 13,
        width: '100%',
        marginTop: -6,
        [theme.breakpoints.down(1800)]: {
            fontSize: 12,
            marginTop: 0
        },
    },
    loadingProgress: {
        position: 'absolute !important',
        top: '89px !important',
        width: '100% !important',
        right: '0 !important',
        height: '2px !important',
        [theme.breakpoints.down(1800)]: {
            top: '74px !important',
        },
        [theme.breakpoints.down(480)]: {
            top: '63px !important',
        },
        '& div': {
            backgroundColor: theme.buttonColor.normal + '!important'
        }
    },
    loadingProgressFactor: {
        position: 'absolute !important',
        top: '-30px !important',
        width: 'calc(100% + 60px) !important',
        right: '-30px !important',
        height: '2px',
        [theme.breakpoints.down(1800)]: {
            top: '-17px !important',
        },
        [theme.breakpoints.down(480)]: {
            top: '64px !important',
        },
        '& div': {
            backgroundColor: theme.buttonColor.normal + '!important'
        }
    }
}));
