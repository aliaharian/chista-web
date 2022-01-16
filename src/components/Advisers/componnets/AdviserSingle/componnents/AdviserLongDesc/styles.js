import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    longDescWrapper:
    {
        display: "flex",
        margin: "23px 30px",
        flexDirection: "column",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            margin: "0 0 30px 0",
        },
    },
    longDesc:
    {
        fontSize: 16,
        fontFamily: theme.font.regular,
        textAlign: "justify",
        whiteSpace: 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: "#314351",
        lineHeight: "38px",
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
            lineHeight: "26px",
        },
    },
    longDescTitle: {
        color: "#2a2f33",
        fontFamily: "chistaYekanB",
        fontSize: 22,
        display: "flex",
        alignItems: "center",
        margin: "37px 0",
    },
    info: {
        paddingRight: 7,
    },
    itemLocContainer: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "flex-end",
    },
    itemLocText: {
        color: "#aab8c2",
        fontSize: 18,
        fontFamily: theme.font.regular,
    },
    descMoreWrapper:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 95,
        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6390756131554185) 20%, rgb(255, 255, 255) 66%, rgb(255, 255, 255) 100%)',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    readMoreBtn:
    {
        height: "25px",
        color: "#1641FF"
    }
}));
