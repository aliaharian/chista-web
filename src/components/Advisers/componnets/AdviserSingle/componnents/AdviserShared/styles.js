import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    modalHead: {
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    modalTitle: {
        fontSize: 20,
        color: "#536b88",
        fontFamily: "chistaYekanB",
        lineHeight: '31px',
        padding:11,
    },
    modalSubTitle: {
        fontSize: 14,
        color: "#536b88",
        fontFamily: "yekanLight",
        lineHeight: '24px',
        padding: 15,
    },
    dialogBtn: {
        width: 140,
        height: 48,
        borderRadius: 12,
        color: '#536b88',
        backgroundColor: 'rgba(213, 223, 235, 0.35)',
        fontSize: 16,
        margin: '10px'
    },
    copyBtn:{
        backgroundColor: '#1641ff',
        color: '#fff',
        width: 70,
        height: 42,
        borderRadius: 6,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: "chistaYekanB",
        '&:hover': {
            backgroundColor: '#1641ff',
            color: '#fff',
            boxShadow: ' 0 6px 19px 0 rgba(9, 0, 255, 0.23)',
        }
    },

    modalContent:
    {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: '30px',
        padding: "20px 35px",
        textAlign: 'center',
        color: '#536b88',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    socialWhatsapp: {
        background: "#1bd741",
        border: "1px solid #1bd741",
    },
    socialTelegram: {
        background: "#33ABDF",
        border: "1px solid #33ABDF",
    },
    shareSocial: {
        width: "42px",
        height: "42px",
        borderRadius: "5px",
        marginLeft: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    actionContainerLeft:{
        display:"flex",
        justifyContent:"flex-end",
    },
}));
