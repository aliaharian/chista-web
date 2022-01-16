import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root:{
        borderRadius:"15px !important",
        minHeight:"360px"
    },
    modalContent:
    {
        padding:"15px"
    },
    modalHead: {
        margin: "22px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    modalTitle: {
        fontSize: 16,
        color: "#536b88",
    },
    reasonTextContainer:{
      display:"flex",
      alignItems:"center",
        marginTop:"15px",
        marginBottom:"10px"
    },
    reasonTextImg:{
        width:24,
        height:24,
    },
    reasonTextP1:{
        fontFamily:"chistaYekanB",
        fontSize:18,
        color:"#536B88"
    },
    reasonTextP2:{
        fontFamily:"yekanLight",
        fontSize:14,
        color:"#536B88"
    },
    actionContainer:{
        display:"flex",
        alignItems:"start",
        flexDirection: "column",       
        '& span':{
             fontSize: 13,
        }
    },
    actionContainerRight:{
        display:"flex"
    },
    actionContainerLeft:{
        display:"flex",
        justifyContent:"space-between",
        width: "100%",
        marginTop: 40,
    },
    actionBtn:
    {
        fontSize:16,
        fontFamily:'yekan',
        height:53,
        borderRadius:12,
        width:160,
        marginRight:18
    }
}));
