import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    disableBtn: {
        pointerEvents: 'none',
        borderColor: theme.textColor.border + ' !important',
        color: theme.textColor.border + ' !important'
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
        borderRadius: 4,
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
    formError: {
        top: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.regular,
        '&>span': {
            color: '#f64d4d',
            fontSize: '13px',
            marginRight: 5
        }
    },
    form:{
        padding:'0 24px',
    },
}));
