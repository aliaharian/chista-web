import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import React from "react";


export default makeStyles(theme => ({
  root: {
    minHeight: "100%",
    padding: '12px 30px',
    position:"relative"
  },
  closeIcon:{
    color:'#0c0b31',
    position:"absolute",
    right:24,
    top:24,
    cursor:"pointer"

  },
  dialogRoot: {
    width: "500px !important",
    height: "auto !important",
    padding:'24px'
  },
  provinceInputLabel: {
    color: "#0c0b31cc",
    fontSize: 14,
    fontFamily: theme.font.regular,
    position: 'relative',
    paddingLeft:5,
    marginBottom:13,
    '&:after': {
      content: '""',
      width: 5,
      height: 5,
      position: 'absolute',
      display: 'inline-block',
      borderRadius: '50%',
      left: 45,
      backgroundColor: '#f64d4d'
    }
  },
  provinceInput:{
    padding:'0!important',
    backgroundColor:'#fff',
    borderRadius:8,
    marginBottom:'21px!important',
    '&>div':{
      backgroundColor:'#fff',
      height:'56px!important',
      border:'1px solid #e7ecf0',

      '&>div':{
        backgroundColor:'#fff!important',

      }
    }

  },
  formTitle:
  {
    fontSize: 12,
    color: '#0c0b31',

  },
  modalHead: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  modalIcon: {
    fontSize: 60,
    color: "#607d8b",
    marginBottom: 10,
    height: '76px !important',

  },
  phoneInputLabel: {
    color: "#0c0b31cc",
    fontSize: 15,
    fontFamily: theme.font.regular
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#0c0b31",
    marginBottom: 0,
    marginTop: 0,
    marginLeft:4
  },
  modalTitleDesc: {

    fontSize:13,
    color: "#0c0b31cc",
    marginBottom: 15,
    marginTop: 14
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
    padding: "0",
    marginTop:42,
    '&>.MuiDialogContent-root':{
      padding:0
    }
  },
  actionBtn: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '##3f53d9',
    fontSize: 16,
    margin: '0',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3748bb'
    }
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop:66

  },
  modalTitleBolder: {
    fontFamily: "chistaYekanB",
    fontSize: 25,
    fontWight: 'bold'
  },
  profileField: {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    paddingLeft: 14
  },
  profileFieldLabel: {
    fontFamily: theme.font.regular,
    fontSize:13,
    color: '#0c0b31cc'
  },
  profileFieldValue: {
    fontFamily: theme.font.regular,
    fontSize:13,
    color: '#0c0b31'
  },
  profileFieldWrapper: {
    borderBottom: "1px solid rgba(146, 164, 187, 0.17)",
    flexWrap: 'nowrap'
  },
  inputWrapper:{
    marginBottom: "18px"
  }
}));
