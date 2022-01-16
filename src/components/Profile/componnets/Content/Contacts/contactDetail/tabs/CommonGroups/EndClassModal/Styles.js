import {makeStyles} from "@material-ui/styles";
import {unset} from "lodash";

export default makeStyles((theme) => ({
    modalWrapper: {
        width: 464,
        height: 560,
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
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
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
        marginTop: 10,
        marginBottom: 30,
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
        justifyContent: 'flex-start'
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
        color: theme.textColor.primary,
        fontSize: 14,
        fontFamily: theme.font.regular,
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


}));
