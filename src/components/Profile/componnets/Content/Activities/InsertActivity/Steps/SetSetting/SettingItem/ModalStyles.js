import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  modalWrapper: {
    minHeight: 575,
  },
  modalTitle: {
    "& h2": {
      display: "flex",
      fontFamily: "yekanHeavy",
    },
  },
  closeModalIcon: {
    cursor: "pointer",
    marginRight: 10,
  },
  modalDec: {
    fontSize: 16,
    fontFamily: theme.font.regular,
    textAlign: "center",
    marginTop: 50,
  },
  numberInput: {
    backgroundColor: "#f5f8fa",
    borderRadius: 8,
    width: 385,
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
    margin: "57px 15px 10px",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      marginTop: "20px !important",
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
    maxHeight: 380,
    overflowY: "auto",
    "& li": {
      listStyle: "none",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "60vh !important",
    },
  },
  modalTitleContact: {
    marginTop: 20,
  },
  contactActionBTN: {
    "& button": {
      marginTop: "20px !important",
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
      color: theme.palette.primary.main,
      fontFamily: "chistaYekanB",
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
    marginTop: 20,
  },
  searchDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    "& input": {
      height: 48,
      width: 48,
      border: "1px solid #e7ecf0",
      transition: "ease all 300ms",
      borderRadius: 12,
    },
  },
  searchExpand: {
    "& input": {
      display: "block",
      width: "100%",
      padding: "0 15px",
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
    "& div:first-child": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  limitAssistant: {
    textAlign: "center",
    color: "#f64d4d",
  },
}));
