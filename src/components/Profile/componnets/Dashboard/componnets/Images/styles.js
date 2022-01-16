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
    marginTop: 31,
    fontSize: 16,
    fontFamily: 'yekan',
    height: 59,
    borderRadius: 12
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
  filesRoot: {
    display: 'flex',
    justifyContent: "flex-start",
    padding: '15px 0px',
    flexWrap: "wrap"
  },
  item: {
    width: 76,
    marginLeft: 7,
    marginBottom: 7,
    height: 76,
    position: 'relative',
    border: "1px solid #92a4bb",
    borderRadius: 18,
    overflow: 'hidden',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& svg': {
      fontSize: '20px',
      position: 'absolute',
      bottom: 6,
      left: 6,
      cursor: "pointer",
      backgroundColor: "#00000052",
      color: "#fff",
      borderRadius: "4px",
    },
    '& img':
    {
      width: "100%!important",
      height: '100%!important'
    }

  },
  addItemBtn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 76,
    marginLeft: 8,
    cursor: "pointer",
    height: 76,
    backgroundColor: 'rgba(189, 200, 214, 0.17)',
    border: "1px dashed #92a4bb",
    borderRadius: 18,
    '& span': {
      color: '#536b88',
      fontSize:13,
      fontFamily: theme.font.regular

    },
    '& img': {
      width: "30px!important",
      height: "30px!important",
    },
    removeIcon: {
      color: "#000"
    },


  }, flexBox: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center'
  },

  inputLabel: {
    fontSize: "12px",
    color: "#92a4bb",

    fontFamily: "yekanLight"

  },




}));
