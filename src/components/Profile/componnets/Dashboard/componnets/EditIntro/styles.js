import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import React from "react";


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
    color: '#536b88',

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
    color: "#536b88",
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
    color: "#92a4bb",
    fontSize: 15,
    fontFamily: theme.font.regular
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#607d8b",
    marginBottom: 20,
    marginTop: 10
  },
  modalTitleDesc: {

    fontSize:13,
    color: "#92a4bb",
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
    color: '#536b88',
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
    fontFamily: 'yekanHeavy',
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
    fontFamily: "yekanLight",
    fontSize: '11px',
    color: '#92a4bb'
  },
  profileFieldValue: {
    fontFamily: theme.font.regular,
    fontSize: '13px',
    color: '#536b88'
  },
  profileFieldWrapper: {
    borderBottom: "1px solid rgba(146, 164, 187, 0.17)",
    flexWrap: 'nowrap'
  },
  inputWrapper:{
    marginBottom: "18px"
  },

}));
