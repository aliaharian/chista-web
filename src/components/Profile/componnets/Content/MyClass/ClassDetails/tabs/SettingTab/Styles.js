import {makeStyles} from "@material-ui/styles";
import {unset} from "lodash";


export default makeStyles((theme) => ({
    settingItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 15px",
        height: 82,
        // padding: "0 50px 25px 50px",
        borderBottom: "1px solid #e7ecf0",
        [theme.breakpoints.down(1800)]: {
            padding: "0 10.5px"
        },
        [theme.breakpoints.down(800)]: {
            padding: "22.5px 0",
            height: 86,
            borderBottom: "none",
            position: "relative",
            '&:after': {
                content: '""',
                backgroundColor: theme.textColor.border,
                height: 1,
                position: 'absolute',
                bottom: 0,
                width: '100%'
            }

        },
        [theme.breakpoints.down(480)]: {
            padding: "22.5px 0",
            height: 86,
            borderBottom: "none",
            position: "relative",
            '&:after': {
                content: '""',
                backgroundColor: theme.textColor.border,
                height: 1,
                position: 'absolute',
                right: -25,
                bottom: 0,
                width: 'calc(100% - 14px)'
            }

        },
        '&>p': {
            color: theme.textColor.primary,
            fontSize: 13,
            fontFamily: theme.font.medium,
        },
        "& svg:first-child": {
            marginRight: 15,
        },
        "& svg:last-child": {
            cursor: "pointer",
            color: theme.textColor.primary
        },
        "& img:first-child": {
            marginRight: 15,
        },
        "& img:last-child": {
            cursor: "pointer",
        },
        "& > div:first-child": {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
        },
    },
    switch: {
        transform: 'translateX(11px)'
    },
    settingInput: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        "& > span:first-child": {
            color: '#0c0b31 !important',
            fontSize: 13,
            fontFamily: theme.font.medium,
            '@media (max-width: 1800px)': {
                fontSize: 12
            }
        },
        "& > span:last-child": {
            color: 'rgba(12, 11, 49, 0.5)',
            fontSize: 13,
            fontFamily: theme.font.regular,
        },
    },
    countInputWrapper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 27,

        '& input': {
            fontSize: 13,
            fontFamily: theme.font.medium,
        },
        "& > span": {
            marginLeft: 5,
        },
    },
    countInput: {
        width: "100%",
        "& .MuiInput-underline::before ": {
            content: "",
            border: "none !important",
        },
        "& .MuiInput-underline::after ": {
            content: "",
            border: "none !important",
        },
    },
    countAction: {
        display: "flex",
        "& > div": {
            width: 24,
            height: 24,
            borderRadius: 5,
            border: "1px solid",
            cursor: "pointer",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

        },
        '& svg': {
            width: 20,
            height: 20,
            marginRight: '0 !important'
        }
    },
    countActionClose: {
        borderColor: "#e7ecf0 !important",
        marginRight: 10,
    },
    countActionCheck: {
        borderColor: `${theme.buttonColor.normal} !important`,
        color: theme.buttonColor.normal + ' !important',
        '& svg': {
            color: theme.buttonColor.normal + ' !important',
        }

    },
    validationMessage: {
        color: "#f64d4d",
    },
    settingWrapper: {
        marginTop: 20,
        justifyContent: 'space-between',
        // '&>div:nth-child(2n-1)': {
        //     paddingRight: '77px !important'
        // }
        [theme.breakpoints.down("sm")]: {
            marginBottom: 24

        },
        '&>div': {
            padding: '0 16px !important',
            maxWidth: 516
        }
    },
    settingShareLink: {
        whiteSpace: "nowrap",
        width: "100%",
        maxWidth: 290,
        fontFamily: theme.font.regular,
        color: 'rgba(12, 11, 49, 0.5)',
        border: 'none !important',
        direction: 'rtl',
        '&:focus': {
            border: 'none !important',
            outline: 'none !important',
        }
    },
    ShareLinkWrapper: {
        '&>span': {
            fontSize: '13px !important',
            overflow: "auto",
        }
    },
    deactiveWrapper: {
        backgroundColor: "#f5f8fa",
        padding: 20,
    },
    modalWrapper: {
        width: 464,
        height: 373,
        borderRadius: 16,
        padding: '40px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            height: 387,
            borderRadius: '16px 16px 0 0',
            padding: '20px 25px 36px 25px',
        },
    },
    resNone: {
        padding: 0,
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    modalScrollPaper: {
        [theme.breakpoints.down("sm")]: {
            alignItems: 'flex-end',
        },
    },
    countModalWrapper: {
        height: '373px !important',
        width: '464px !important',
        padding: '17px 0',
        borderRadius: '16px !important',
        [theme.breakpoints.down("sm")]: {
            width: '100% !important',
            paddingTop: 0,
            borderRadius: '25px 25px 0 0  !important'
        },
    },
    countModalBody: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '91px 40px 0 40px',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            padding: '91px 24px 0 24px',

        },

        '&>div , &>button': {
            height: 56,
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px'
        },
        '&>button:nth-child(1) , &>button:nth-child(3)': {
            flexBasis: '56px',
            maxWidth: 56,
            minWidth: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.buttonColor.normal,
            fontSize: 28,
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
                height:48
            },

        },
        '&>div:nth-child(2)': {
            flexBasis: '256px',
            margin: '0 8px',
            [theme.breakpoints.down("sm")]: {
                flexBasis: '100%',
                height:48
            },
            '& .MuiInput-root': {
                '&:after , &:before': {
                    display: 'none !important'
                }
            },
            '& input': {
                width: 35,
                fontSize: 14,
                textAlign: 'center',
                fontFamily: theme.font.medium,
            },
            '&>span': {
                fontSize: 13,
                fontFamily: theme.font.regular,
                color: 'rgba(12, 11, 49, 0.3)'
            }
        },

    },

    closeModalIcon: {
        position: 'absolute',
        top: 30,
        right: 30,
        [theme.breakpoints.down("sm")]: {
            display: 'none'

        },
    },


    warningImageWrapper: {
        width: 80,
        height: 80,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff657529',
        marginBottom: 30,
        '& img': {
            width: 40
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
    dialogContent: {
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    warningText: {
        color: '#0c0b31',
        fontSize: 14,
        fontFamily: theme.font.bold,
        margin: 0,
        marginBottom: 6,
    },
    warningSubtext: {
        color: '#rgba(12, 11, 49, 0.7)',
        fontSize: 13,
        fontFamily: theme.font.bold,
        margin: 0,
    },
    deleteActionBtnContainer: {
        display: "flex",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
        '&>button': {
            height: 52,
            borderRadius: 8,
            outline: 'none',
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: theme.font.bold,
        },

        '&>button:first-child': {
            width: 238,
            backgroundColor: theme.buttonColor.normal,
            marginRight: 8,
            border: 'none',
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,

            }
        },
        '&>button:last-child': {
            width: 138,
            backgroundColor: '#fff',
            border: '1px solid ' + theme.buttonColor.normal,
            color: theme.buttonColor.normal,
            '&:hover': {
                border: '1px solid ' + theme.buttonColor.hover,
                color: theme.buttonColor.hover,
            }
        }

    },


}));
