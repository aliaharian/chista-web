import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  modalWrapper: {
    minHeight: 575,
  },
  addNumberModalWrapper:{
    width:470,
    // padding:'32px 35px'
    '&>.MuiDialogTitle-root':{
      padding:'32px 35px'
    },
    '& .MuiDialogContent-root':{
      padding: '0 35px 32px 35px'
    }
  },
  modalTitle: {

    "& h2": {
      display: "flex",
      fontFamily: theme.font.bold,
    },
    // "& svg": {
    //   marginRight: 10,
    // },
  },
  closeModalIcon: {
    cursor: "pointer",
    marginRight: 10,
  },
  modalDec: {
    fontSize: 16,
    fontFamily: theme.font.regular,
    textAlign: "center",
    marginTop: 34,
  },
  numberInput: {
    backgroundColor: "#f5f8fa",
    borderRadius: 8,
    width: 385,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& input": {
      textAlign: "right",
      borderRight: "1px solid #e7ecf0",
      padding: "10px 19px 10px 0",
      margin: "10px 10px 10px 0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
  actionBTN: {
    all: "unset",
    height: 59,
    backgroundColor: "#f5f8fa",
    borderRadius: 8,
    color: "#aab8c1",
    fontFamily: "chistaYekanB",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    margin: "27px 15px 10px",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  actionActiveBTN: {
    cursor: "pointer",
    pointerEvents: "unset",
    backgroundColor: "#4264fb",
    color: "white",
    boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
  },
  infoWrapper: {
    position: "relative",
    textAlign: "center",
    marginTop: "50px",
  },
  contactListContent: {
    padding: 0,
  },
  contactList: {
    // maxHeight: 400,
    maxHeight: 405,
    height:405,
    // overflowY: "auto",
    "&>div":{
      "&>div":{
        marginRight:'-15px !important',
        marginLeft:'unset !important'
      }
    },
    "& li": {
      listStyle: "none",
    },
  },
  modalTitleContact: {
    marginTop: 20,
  },
  contactActionBTN: {
    "& button": {
      marignTop: 0,
      width: 390,
    },
  },
  listStatus: {
    backgroundColor: "#f5f8fa",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    marginBottom: "20px",
    "& span:first-child": {
      all: "unset",
      fontFamily: "chistaYekanB",
      color: "#314351",
      marginRight: 5,
    },
    "& span:last-child": {
      fontSize:13,
      marginLeft: 5,
    },
    "& button": {
      all: "unset",
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  noDataWrapper: {
    textAlign: "center",
    color: "#2a2f33",
    fontSize: 17,
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    // marginTop: 20,
  },
  searchDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  usersCheckbox:{
    marginRight:26
  },
  search: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // marginRight: 20,

    cursor: "pointer",
    position: "relative",
    "& input": {
      height: 68,
      width: 48,
      marginBottom:9,
      fontFamily:theme.font.regular,
      outline:'none!important',
      border: "1px solid #e7ecf0",
      transition: "ease all 300ms",
      borderRadius: 0,
      pointerEvents: "none",
    },
  },
  searchExpand: {
    // justifyContent: "space-between",
    "& input": {
      display: "block",
      width: "100%",
      padding: "0 15px",
      pointerEvents: "unset !important",
    },
  },
  searchExpandMobile: {
    justifyContent: "space-between",
    width: "100%",

    "& input": {
      display: "block",
      width: "100%",
      padding: "0 15px",
    },
  },
  searchIcon: {
    position: "absolute",
    right: 13,
  },
  modalTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    color:theme.textColor.primary,
    "& div:first-child": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  itemWrapper: {
    padding:' 9px 16px',
    borderBottom: "1px solid rgba(0, 5, 52, 0.11)",
  },
  loadingText: {
    color: theme.palette.primary.main,
    fontSize:13,
    fontFamily: theme.font.bold,
  },
  memebrNameWrapper: {
    marginLeft: 10,
    textAlign: "left",
    "& p:first-child": {
      fontFamily: theme.font.bold,
      marginBottom:4
    },
    "& p": {
      margin: "0",
    },
  },
  memebrAvatarWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  memebrAvatarOpinion: {
    width: 56,
    height: 56,
    borderRadius: "50%",
  },
  memebrAvatarBorder: {
    // border: "1px solid #808895",
    borderRadius: 100,
    padding: 2,
    position: "relative",
  },
  sessionStats: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 0 10px 56px',
    '&>div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      '&>p': {
        fontSize: 13,
        margin:'10px 0'
      },
      '&>p:nth-child(2)': {
        fontFamily: theme.font.bold,
        color: theme.textColor.primary
      },
      '&>p:nth-child(1)': {
        fontFamily: theme.font.regular,
        color: theme.textColor.secondary
      }
    }
  }
}));
