import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import React from "react";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    padding: "12px 30px",
  },
  dialogRoot: {
    // width: "436px !important",
    height: "auto !important",
    padding: 50,
  },
  formTitle: {
    fontSize: 12,
    color: "#536b88",
  },
  modalHead: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  modalIcon: {
    fontSize: 60,
    color: "#607d8b",
    marginBottom: 10,
    height: "76px !important",
  },
  phoneInputLabel: {
    color: "#92a4bb",
    fontSize: 15,
    fontFamily: theme.font.regular,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#607d8b",
    marginBottom: 20,
    marginTop: 10,
  },
  modalTitleDesc: {
    fontSize:13,
    color: "#92a4bb",
    marginBottom: 15,
    marginTop: 14,
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
  modalContent: {
    padding: "15px",
  },
  actionBtn: {
    width: 140,
    height: 48,
    borderRadius: 12,
    color: "#536b88",
    backgroundColor: "rgba(213, 223, 235, 0.35)",
    fontSize: 16,
    margin: "10px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#1641ff",
    },
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
  },
  modalTitleBolder: {
    fontFamily: "yekanHeavy",
    fontSize: 25,
    fontWight: "bold",
  },
  profileField: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 14,
  },
  profileFieldLabel: {
    fontFamily: "yekanLight",
    fontSize: "11px",
    color: "#92a4bb",
  },
  profileFieldValue: {
    fontFamily: theme.font.regular,
    fontSize: "13px",
    color: "#536b88",
  },
  profileFieldWrapper: {
    // borderBottom: "1px solid rgba(146, 164, 187, 0.17)",
    flexWrap: "nowrap",
  },
  inputWrapper: {
    marginBottom: "18px",
  },
  editButtonTag: {
    position: "absolute",
    left: 0,
  },
  breadcrumbWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    "& span": {
      margin: "0 10px",
      fontSize: 20,
      fontWeight: "bold",
    },
  },
  breadcrumbTitle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  submitBtn: {
    backgroundColor: theme.palette.primary.main,
    height: 60,
    width: 260,
    borderRadius: 8,
    fontSize: 16,
    color: "white",
    border: "none",
    fontFamily: "chistaYekanB",
    margin: "50px 0 0 auto",
    boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
    cursor: "pointer",
    display: "block",
  },
  disableBtn: {
    pointerEvents: "none",
    backgroundColor: "#bdbdbd",
    boxShadow: "none !important",
  },
  courseItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p:first-child": {
      fontSize: 16,
      color: "#2a2f33",
      fontFamily: "chistaYekanB",
    },
    "& p:last-child": {
      fontSize:13,
    },
  },
  deleteCourse: {
    width: 25,
    height: 25,
    borderRadius: 5,
    border: `1px solid ${theme.palette.border.main}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& svg": {
      width: 15,
      height: 15,
    },
  },
}));
