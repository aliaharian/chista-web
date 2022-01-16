import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
        logoBox:{
            marginBottom: 57,
            marginTop: 56,
        },
    modalLogoIcon: {
        width: "69px",
        height: "69px",
    },
    checkIcon: {},
    walletIcon: {
        width: "17px",
        height: "17px",
    },
    walletLabel: {
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "36px",
        color: "#1a172d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modalTitle: {
        fontWeight: 900,
        fontSize: 18,
        color: "#1a172d",
        lineHeight: "22px",
        textAlign: 'right',
        marginLeft: "14px",
    },
    title: {
        fontSize: "16px",
        color: '#536b88',
    },
    dialogBtn: {
        height: 59,
        borderRadius: 18,
        backgroundColor: '#1641ff',
        color: '#fff',
        boxShadow: ' 0 6px 19px 0 rgba(9, 0, 255, 0.23)',
        fontSize: 16,
        margin: '10px 0',
        '&:hover': {
            backgroundColor: '#1641ff',
            color: '#fff',
            boxShadow: ' 0 6px 19px 0 rgba(9, 0, 255, 0.23)',
        }
    },
    contentWrapper: {
        padding: "0 34px 34px"
    },
        creditBox:{
            fontWeight: 900,
            fontSize: "22px",
            lineHeight: "34px",
            color: "#1641ff",
        },
    contentTitle:{
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 28,
        color: "#536b88",
        marginBottom: "38px",
        "span":{
            fontWeight: 900,
            color: "#1641ff"
        }
    },
    modalContent:
        {
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    blueText:{
        color: "#1641ff"
    }
}));
