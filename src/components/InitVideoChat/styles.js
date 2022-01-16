import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    modalHead: {
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    containerModalIcon: {
        width: '69px',
        height: '67px',
        borderRadius: '21px',
        backgroundColor: 'rgba(22, 65, 255, 0.04)',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalIcon: {
        fontSize: 47,
        color: "#1641ff",
    },
    modalTitle: {
        fontWeight: 900,
        fontSize: 19,
        color: "#1641ff",
        lineHeight: '29px',
    },
    containerButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '32px',
    },
    dialogBtn: {
        width: 140,
        height: 49,
        borderRadius: 12,
        color: '#536b88',
        backgroundColor: 'rgba(213, 223, 235, 0.35)',
        fontSize: 16,
        margin: '10px',
        '&:hover':{
            backgroundColor: '#1641ff',
            color: '#fff',
            boxShadow:' 0 6px 19px 0 rgba(9, 0, 255, 0.23)',
        }
    },
    loadingBox: {
        margin: "250px auto 250px auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    modalContent:
        {
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: '30px',
            padding:"20px 35px",
            textAlign: 'center',
            color: '#536b88'
        }
}));
