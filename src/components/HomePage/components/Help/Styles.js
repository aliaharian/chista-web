import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    root: {
        borderRadius: "16px !important",
        width: "650px !important",
        height: "631px !important",
        padding: '48px 0',
        [theme.breakpoints.down('sm')]: {
            width: "100% !important",
            margin: 0,
            padding:0,
            paddingTop:64,
            borderRadius: "25px 25px 0 0 !important",
            height: '450px !important'
        },
    },
    dialog: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end'
        },
    },
    closeModalIcon: {
        cursor: "pointer",
        position: 'absolute',
        right: 16,
        top: 16,
         [theme.breakpoints.down('sm')]: {
             right: 24,
             top: 24,
        },
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
        marginTop: 0,
        fontFamily: theme.font.bold,
        color: theme.textColor.primary,
        [theme.breakpoints.down("sm")]: {
        marginBottom: 20,
            fontSize: 14,
        },
    },
    gif: {
        marginBottom: 15,
        objectFit: 'cover',
        height: 366,
        [theme.breakpoints.down("sm")]: {
            height: 'unset',
            width: '100%'
        },
    },
    text: {
        padding: '0 52px',
        fontSize: 14,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
            marginTop:5,
            padding: '0 24px',
        },
    }
}));
