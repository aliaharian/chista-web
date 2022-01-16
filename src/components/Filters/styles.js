import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    margin: '15px auto',
  },
  padding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  /* Styles applied to the root element if dense. */
  dense: {},
  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0,
  },
  panelSummary: {
    padding: 0,
    marginLeft: 0
  },
  filterPanel:
  {
    width: "90%",
    display: "flex",
    flexDirection: "column",
  },
  selectWrapper: {
    display: 'flex',
    alignItems: "center",
  },
  selectLabel: {
    fontFamily: 'yekan',
    fontSize: 13,
    marginRight: "8px",
    color: "#536B88",
  },
  filterPanelHeading:
  {
    fontFamily: "chistaYekanR",
    fontSize: "15px",
    color: "#536b88",
  },
  filterPanelExpandBtn:
  {
    width: 24,
    height: 24,
  },
  radioLabel:
  {
    '&>span':
    {
      padding: "2px",
      fontSize: 13,
      color: "#536b88",
    }
  },
  filterOptionRoot:
  {
    display: 'flex',
    flexWrap: "wrap",
  },
  filterPanelSelect:
  {
    marginTop: "6px",
    height: "39px !important",
    backgroundColor: "rgb(189,200,214,.05) !important",
    fontFamily: 'yekan',
    borderRadius: "12px !important",
    border: "1px solid rgba(189, 200, 214, 0.28) !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '& fieldset': {
      display: "none"
    },
    '& div':
    {
      color: "#536b88",
      backgroundColor: 'transparent !important',
      fontFamily: 'yekan !important',
      fontSize: '13px !important',
      right: "0!important",
    }
  },
  priceSelectOption:
  {
    fontFamily: "chistaYekanR",
    cursor: "pointer",
    fontSize: 13,
    lineHeight: "21px",
    color: "#536b88",
    padding: 12,
  },
  "MuiPaper-root":{
    minWidth: 191,
    maxHeight: 172,
  },
}));
