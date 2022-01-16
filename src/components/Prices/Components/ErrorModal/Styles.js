import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    modalWrapper: {
        width: 464,
        height: 373,
        borderRadius: 16,
        padding: '50px 40px 40px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down(1800)]: {
            width: 386,
            height: 313,
            padding: '40px 27px 27px',
        },
        [theme.breakpoints.down(480)]: {
            width:'100%',
            height: 'auto',
            borderRadius: '25px 25px 0 0',
            padding: '60px 25px 36px 25px',
        },
    },
    resNone: {
        [theme.breakpoints.down(480)]: {
            display: 'none'
        },
    },
    modalScrollPaper: {
        [theme.breakpoints.down(480)]: {
            alignItems: 'flex-end',
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
        [theme.breakpoints.down(1800)]: {
            width: 67,
            height: 67,
            marginBottom: 20,
            '& img': {
                width: 34
            },
        },
        [theme.breakpoints.down(480)]: {
            width: 74,
            height: 74,
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
        paddingTop: 10
    },
    warningText: {
        color: theme.textColor.primary,
        fontSize: 14,
        fontFamily: theme.font.bold,
        textAlign: 'center',
        margin: 0,
        marginBottom: 6,
        [theme.breakpoints.down(1800)]: {
            fontSize: 13,
            marginBottom: 2
        },
    },
    warningSubtext: {
        color: theme.textColor.error,
        fontSize: 14,
        fontFamily: theme.font.bold,
        margin: 0,
        [theme.breakpoints.down("480")]: {
            fontSize: 13,
        },
    },
    deleteActionBtnContainer: {
        display: "flex",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35,
        '&>button': {
            height: 52,
            borderRadius: 8,
            outline: 'none',
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: 'chistayekanR',
            [theme.breakpoints.down(1800)]: {
                height: 48,
            }
        },
        '&>button:first-child': {
            width: 238,
            backgroundColor: theme.buttonColor.normal,
            marginRight: 8,
            border: 'none',
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,
            },
            [theme.breakpoints.down(1800)]: {
                width: 203,
            },
            [theme.breakpoints.down(480)]: {
                width: 263,
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
            },
            [theme.breakpoints.down(1800)]: {
                width: 121,
            },
            [theme.breakpoints.down(480)]: {
                width: 160,
            }
        }
    },
}));
