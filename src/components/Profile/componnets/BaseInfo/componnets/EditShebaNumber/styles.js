import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import React from "react";

const primaryColor='#0c0b31';
const secondaryColor='#0c0b31cc';

export default makeStyles(theme => ({
  root: {
    minHeight: "100%",
    padding: '12px 30px'
  },
  dialogRoot: {
    width: "436px !important",
    height: "auto !important"
  },
  formTitle:
  {
    fontSize: 12,
    color: '#0c0b31',

  },
  EditInput:{
    color:primaryColor,
    border:'none!important',
    fontSize:13,
    width:'100%',
    '&>input':{
      direction:'LTR',
      marginRight:5

    },
    '&>.Mui-disabled':{
      color:primaryColor,
      border:'none!important'
    }
  },
  modalHead: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  modalTitle: {
    fontSize: 20,
    color: "#0c0b31",
    fontFamily: "chistaYekanB",
    lineHeight: '31px',
    padding: 11,
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
    fontFamily: "chistaYekanR"
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
    padding: "15px"
  },
  actionBtn: {
    width: 140,
    height: 48,
    borderRadius: 12,
    color: '#0c0b31',
    backgroundColor: 'rgba(213, 223, 235, 0.35)',
    fontSize: 16,
    margin: '10px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#1641ff'
    }
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",

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
    fontFamily: "chistaYekanR",
    fontSize:13,
    color: '#0c0b31cc'
  },
  profileFieldValue: {
    fontFamily: "chistaYekanR",
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
