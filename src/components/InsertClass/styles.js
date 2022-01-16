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
        height: "373px !important",
        [theme.breakpoints.down(480)]: {
            width: "100% !important",
            margin: 0,
            height: "auto !important",
            borderRadius: "8px 8px 0 0 !important",
        },    
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(0, 219, 181, 0.1)',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        '&>img': {
            width: 45,
            height: 45
        }
    },
    welcomeToChista: {
        fontSize: 14,
        color: '#0c0b31',
        fontFamily: 'chistaYekanB',
        textAlign: 'center',
        marginTop: 30
    },
    giftDet: {
        fontSize: 13,
        color: '#0c0b31',
        textAlign: 'center'
    },
    btnContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 52,
    },
    createClassBtn: {
        width: '56%',
        backgroundColor: '#3f53d9',
        color: 'white',
        fontSize: 13,
        height: '100%',
        border: 'none',
        borderRadius: 8,
        fontFamily: 'chistaYekanR',
        cursor: 'pointer',
    },
    closeBtn: {
        width: '40%',
        cursor: 'pointer',
        backgroundColor: 'white',
        color: '#3f53d9',
        fontSize: 13,
        height: '100%',
        border: 'solid 1px #3f53d9',
        borderRadius: 8,
        fontFamily: 'chistaYekanR'
    }
}));
