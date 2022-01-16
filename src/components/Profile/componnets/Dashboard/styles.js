import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import React from "react";


export default makeStyles(theme => ({
  root: {
    minHeight: "100%",
    padding: '12px 30px'
  },
  formTitle:
  {
    fontSize: 12,
    color: '#536b88',

  },
  SideBarDesktop: {
    position: "sticky",
    top: 100,
    height: "100%",
    padding: "0 8px",
  },
  displayNone: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  avatarContainer: {
    width: "72px",

    height: "72px",
    borderRadius: "25%",
    border: "1px solid #92A4BB",
    position: "relative",
    marginTop: "42px",
    fontSize: 18,
  },
  avatar: {
    width: "100% !important",
    height: "100% !important",
    border: "1px solid #fff",
    borderRadius: "25% !important",
  },
  status: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    top: "0px",
    left: "4px",
    position: "absolute",
    zIndex: 9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statusOnline: {
    backgroundColor: "#34c278",
  },
  statusOffline: {
    backgroundColor: "#c5c9cc",
  },
  statusBusy: {
    backgroundColor: "#fa418d",
  },
  avatarUploadContainer: {
    opacity: 0.5,
    width: "68px",
    height: "68px",
    backgroundColor: "#1a172d",

    position: "absolute",
    top: 0,
    borderRadius: "25%",
    margin: "auto",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "24px",
    },
  },
  avatarTitleContainer: {
    marginTop: "16px",
  },
  avatarTitle: {
    fontFamily: theme.font.regular,
    fontWeight: "bold",
    fontSize: 17,
    color: "#1a172d",
    textAlign: "center",
  },
  avatarMobile: {
    marginTop: 7,
    fontFamily: "yekanLight",
    textAlign: "center",
    fontSize: 12,
    color: "#1a172d",
  },
  sidebarMenuContainer: {
    width: "100%",
  },
  sidebarMenu: {
    listStyle: "none",
    padding: 0,
    marginBottom:14
  },
  sidebarMenuItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
    "&:hover": {
      "& svg": {
        color: '#0c0b31'
      },
      "& p": {
        color: "#0c0b31",
      },
    },
    "& a": {
      "&:hover": {
        textDecoration: "none !important",
      },
      "& p": {
        color: "#0c0b31cc",
      },
      "& svg": {
        color: "#0c0b31cc",
      },


    },
  },
  sidebarMenuItemActive: {
    borderLeft: "3px solid #1641ff",
    "& p": {
      color: "#3f53d9 !important",
    },
    "& svg": {
      color: "#3f53d9 !important",
    },
  },

  sidebarMenuItemIcon: {
    width: "24px",
    marginRight: "11px",
    marginLeft: "10px",
    color: "#0c0b31cc",

  },
  sidebarMenuItemText: {
    fontFamily: theme.font.regular,
    fontSize: 13,


    color: "#0c0b31cc",
  },
  divider: {
    backgroundColor: "#eee",
    marginTop: "30px",
  },
  sidebarMenuItemLink: {
    "&:hover": {
      textDecoration: "none !important",
      "& svg": {
        color: '#0c0b31'
      },
      "& p": {
        color: "#0c0b31",
      },

    },
  },
 
  breadcrumbMobile: {
    display: "flex",
    padding: "20px 20px 0px 20px",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  breadcrumbCaretMobile: {
    border: "1px solid rgba(0, 0, 0, 0.08)",
    borderRadius: 20,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  breadcrumbTitleMobile: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "yekanHeavy",
  },
  breadcrumbCaret: {
    color: "#536b88",
  },
  sidebarDivider: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 28,
    marginLeft: 10,
    '&:after': {
      display: 'inline-block',
      content: '""',
      width: 'calc(100% - 90px)',
      height: 1,
      backgroundColor: theme.textColor.border,
      position: 'absolute',
      right: 0
    },
    '& p': {
      fontSize: 13,
      color: theme.textColor.secondary,
      display: 'inline-block',
      width: 90

    }
  }





}));
