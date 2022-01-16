import {makeStyles} from "@material-ui/styles";
import {fade} from "@material-ui/core/styles";


export default makeStyles(theme => ({
    avatar: {
        width: 39,
        height: 39,
        borderRadius: '50%',
        border: "#eee 1px double",
        fontSize: 18
    },
    profileArrowDown: {
        // position: 'absolute',
        width: 24,
        height: 24,
        marginRight:10,
        borderRadius: '50%',
        // border: '1px solid rgba(12,11,49,0.3)',
        // backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:-3,
        left:-3,
        '& svg': {
            width:'24px',
            height:'24px',
            color:'#0c0b31'
        }

    },

    status: {
        width: "20px",
        height: '20px',
        backgroundColor: '#34c278',
        border: "1px solid white",
        top: "-3px",
        left: "-3px",
        position: "absolute",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        justifyContent: "center"
    },

    statusOnline: {
        backgroundColor: '#34c278',
    },
    statusOffline: {
        backgroundColor: '#c5c9cc',
    },
    statusBusy: {
        backgroundColor: '#fa418d',
    },
    avatarContainer:
        {
            width: "41px",
            height: "41px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: '50%',
            border: 'solid 1px rgba(128,136,149,0.6)',
            backgroundColor: '#fff',

        },
}));
