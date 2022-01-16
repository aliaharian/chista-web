import { makeStyles } from "@material-ui/styles";
import {fade} from "@material-ui/core/styles";


export default makeStyles(theme => ({
  root:{
    borderRadius: "8px !important",
    width: "500px !important",
    height: "auto !important",
    padding: '99px 17px 14px 17px',
    // margin:0,
        [theme.breakpoints.down('sm')]: {
          padding: '55px 17px 14px 17px',

          width: "100% !important",
  margin:0,
  height: "441px !important",
  borderRadius: "8px 8px 0 0 !important",


},
  },
  dialog:{
    [theme.breakpoints.down('sm')]: {
      alignItems:'flex-end'
    },
  },

  closeButton: {
    position: 'absolute',
    top: 40,
    right: 31,
    color: '#000',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      top: 21,
      right: 26,
    },
  },
  modalHead: {
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
   modalIcon: {
    fontSize: 60,
    color: "#607d8b",
    marginBottom: 10,
     height:'133px !important',
     borderRadius:8,
     width:135,
     backgroundColor:'rgba(246, 77, 77, 0.05)',
     padding:16,
     [theme.breakpoints.down('sm')]: {
       height:'83px !important',
       width:85,
     },

  },
  phoneInputLabel:{
    color:"#92a4bb",
    fontSize:15,
    fontFamily:theme.font.regular
  },
  modalTitle: {
    fontFamily:'chistaYekanB',
    fontSize: 16,
    color: "#607d8b",
    marginBottom: 62,
    marginTop:10,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 37,

    },

  },
  modalUserName:{
    color:'#0c0b31',
    fontFamily:'chistaYekanB',
    fontSize: 16,
  },
  modalTitleDesc: {
    fontFamily:'chistaYekanL',
    fontSize: 16,
    color: "#0c0b31",
    textAlign:'center',
    marginBottom: 50,
    marginTop:14,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },

  },
  dialogBtn: {
    borderRadius: "0 !important",
  },
  submitBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "10px",
  },
  loadingBox: {
    margin: "250px auto 250px auto",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  modalContent:
  {
    padding: "15px 4px",
    paddingBottom: 0,
    '&>.MuiDialogContent-root':{

      padding:'8px 0!important',
    }
  },
  actionBtn:{
    marginTop: 23,
    fontSize: 16,
    fontFamily: 'chistaYekanR',
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.buttonColor.normal,
    [theme.breakpoints.down('sm')]: {
      marginTop: 23,
    },
  },
  modalTitleBolder:{
    fontFamily:'yekanHeavy',
    fontSize:25,
    fontWight:'bold'
  },
  resetBtn:
  {
    color:"#1641ff",
    fontSize:"14px !important",
    fontFamily:theme.font.regular,
    backgroundColor: 'transparent !important'
  },
  callWithMeBtn:
  {
    backgroundColor: 'transparent !important',
    color:"#536b88",
    fontSize:"14px !important",
    fontFamily:theme.font.regular,
    marginTop:34
  },
  dialogContent:
  {
    display:"flex",
    flexDirection:"column",

  },
  timer:{
    marginRight:5,
    fontSize:16,
  },
  profileAvatarContainer:
  {
    width:"108px",

    height:"108px",
    borderRadius:"50%",
    border:"1px solid #92A4BB",
    position:"relative",
    marginRight:"9px",
  },
  profileAvatar:
  {
    width:"100% !important",
    height:"100% !important",
    border:'1px solid #fff',
    backgroundColor:"rgba(189, 200, 214, 0.45) !important",
    cursor :"pointer",

  },

}));
