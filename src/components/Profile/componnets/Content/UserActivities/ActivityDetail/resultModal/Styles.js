import { makeStyles } from "@material-ui/styles";
import { unset } from "lodash";

export default makeStyles((theme) => ({
    modalWrapper: {
        width: 464,
        height: 615,
        borderRadius: 16,
        padding: '0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down(480)]: {
            height: '100%',
            borderRadius: '0',
            padding: '20px 25px 36px 25px',
        },
    },
    headerDialog: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 35px',
        height: 91,
        borderBottom: '1px solid ' + theme.textColor.border,
        [theme.breakpoints.down("sm")]: {
            padding: '0',
            height: 'auto',
            paddingBottom: 11,
            borderBottom: 'none',
            position: 'relative',
            '&:after': {
                content: '""',
                width: '100vw',
                height: 1,
                backgroundColor: theme.textColor.border,
                bottom: -1,
                position: 'absolute',
                left: -24
            }



        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }
    },
    modalScrollPaper: {
        [theme.breakpoints.down("sm")]: {
            alignItems: 'flex-end',
        },
    },

    warningImageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff657529',
        marginTop: 118,
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
    dialogContent: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 40,
    },
    warningText: {
        color: theme.textColor.error,
        fontSize: 16,
        fontFamily: theme.font.bold,
        margin: 0,
        marginBottom: 6,
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
        },
    },
    warningSubtext: {
        color: theme.textColor.error,
        fontSize: 14,
        fontFamily: theme.font.bold,
        margin: 0,
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
        },
    },
    deleteActionBtnContainer: {
        display: "flex",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 53,
        '&>button': {
            height: 48,
            borderRadius: 8,
            outline: 'none',
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: theme.font.bold,
        },

        '&>button:first-child': {
            width: 260,
            backgroundColor: theme.buttonColor.normal,
            marginRight: 8,
            border: 'none',
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,

            }
        },
        '&>button:last-child': {
            width: 116,
            backgroundColor: '#fff',
            border: '1px solid ' + theme.buttonColor.normal,
            color: theme.buttonColor.normal,
            '&:hover': {
                border: '1px solid ' + theme.buttonColor.hover,
                color: theme.buttonColor.hover,
            }
        }

    },
    closeModalIcon: {
        cursor: 'pointer'
    },
    finalCheckTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'flex-start',
        // padding: '0 35px',
        // marginBottom: 40,
        width: '100%',
        '&>div': {
            '&:nth-child(1)': {
                display: "flex",
                alignItems: "center",
                justifyContent: 'flex-start',
                '& svg': {
                    marginRight: 15,
                }
            },
            '&:nth-child(2)': {
                '&>p': {
                    fontSize: 13,
                    '&:nth-child(1)': {
                        fontFamily: theme.font.bold,
                        color: theme.textColor.primary

                    },
                    '&:nth-child(2)': {
                        fontFamily: theme.font.regular,
                        color: theme.textColor.secondary
                    },
                }
            }
        }
    },
    customTable: {
        margin: '30px 40px 20px 40px',
        width: 'calc(100% - 80px) !important',
        padding: '0 !important',
        [theme.breakpoints.down("sm")]: {
            margin: '30px 0 20px 0',
            width: '100% !important',

        }

    },
    footerTable: {
        margin: '0 40px 0 40px',
        width: 'calc(100% - 80px) !important',
        padding: '0 !important',
        border: 'none !important',
        [theme.breakpoints.down("sm")]: {
            margin: '0',
            width: '100% !important',

        }
    },
    finalCheckTable: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        padding: '0 35px',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {
            padding: '0',

        },
        '&>div': {
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 21,
            '&>p': {
                fontSize: 13,
                '&:nth-child(2)': {
                    fontFamily: theme.font.bold,
                    color: theme.textColor.primary

                },
                '&:nth-child(1)': {
                    fontFamily: theme.font.regular,
                    color: theme.textColor.secondary
                },
            }
        }
    },


}));
