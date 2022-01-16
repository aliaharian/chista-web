import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
    modalHead: {
        marginTop: 39,
        display: "flex",
        alignItems: "center",
        marginBottom: 71,
    },
    backIcon: {
        width: 51,
        height: 51,
        cursor: "pointer",
    },
    modalIcon: {
        fontSize: 60,
        color: "#607d8b",
        marginBottom: 10,
    },
    modalTitle: {
        fontWeight: 900,
        fontSize: 18,
        color: "#1a172d",
        lineHeight: "22px",
        textAlign: 'right',
        marginLeft: "14px",
    },
    logoBox: {
        marginBottom: "57px",
        marginTop: "96px",
        display: "flex",
        alignItems: "center",
    },
    contentTitle: {
        lineHeight: "28px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: 500,
        color: "#536b88",
        marginBottom: 38,
        "&:span": {
            fontWeight: 900,
            color: "#1641ff",
        }
    },
    title: {
        fontSize: "16px",
        color: '#536b88',
    },
    dialogBtn: {
        height: 49,
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
    submitBox: {
        padding: "0 34px 34px"
    },
    loadingBox: {
        margin: "250px auto 250px auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    modalContent:
        {
            padding: 0
        },
    priceWrapperList: {
        padding: 0,
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    priceListItem: {
        fontName: theme.font.regular,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2px",
        width: "96px",
        height: "38px",
        borderRadius: "14px",
        backgroundColor: "rgba(146, 164, 187, 0.1)",
        color: "#536b88",
        fontSize: "13px",
        cursor: 'pointer',
        '&:hover': {
            border: "solid 1px #1641ff",
            color: "#1641ff",
            backgroundColor: "#fff",
        }
    },
    activePrice: {
        border: "solid 1px #1641ff",
        color: "#1641ff",
        backgroundColor: "#fff",
    },
    iconButton: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    inputBox: {
        textAlign: "center",
        "&:focused": {
            border: 0
        }
    }
}));
