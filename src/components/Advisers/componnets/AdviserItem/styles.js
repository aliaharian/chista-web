import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dummyArea: {
    backgroundColor: 'gray'
  },
  root: {
    width: '100%'
  },
  itemTop: {
    display: "flex",
    flexDirection: "row",
    padding: "0px",
    width: "100%",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    flexBasis: "100%",
    marginBottom: "16px",
    maxWidth: "100%",
  },
  itemDetail: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexWrap: "wrap",
    flexGrow: "1",
    justifyContent: "center",
    padding: "5px",
  },
  itemDetailTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "100%"
  },
  rateBox:
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrapper: {
    width: "100%",
  },
  avatarContainer:
  {
    width: "86px",
    height: "86px",
    borderRadius: "50%",
    border: "1px solid #92A4BB",
    position: "relative",

    [theme.breakpoints.down('md')]: {
      width: "76px",
      height: "76px",
    },
    [theme.breakpoints.down('sm')]: {
      width: "89px",
      height: "89px",
    },
    [theme.breakpoints.down('md') && '@media(max-width: 768px)']: {
      width: "76px",
      height: "76px",
    },
    [theme.breakpoints.down('md') && '@media(max-width: 748px)']: {
      width: "68px",
      height: "68px",
    },
    [theme.breakpoints.down('sm')&& '@media(max-width: 600px)']: {
      width: "84px",
      height: "84px",
    }
  },
  avatar: {
    width: "100% !important",
    height: "100% !important",
    border: '1px solid #fff',
    fontSize: 18
  },
  status: {
    width: "20px",
    height: '20px',
    borderRadius: '50%',
    bottom: "0px",
    left: "4px",
    position: "absolute",
    zIndex: 9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statusOnline: {
    backgroundColor: '#34c278',
  },
  statusOffline: {
    backgroundColor: '#c5c9cc',
  },
  statusBusy: {
    backgroundColor: '#fa418d',
  },
  adviserTitle: {
    fontSize: "14px",
    fontFamily:'chistaYekanB',
    color: "#0c0b31",
  },
  titleContainer: {
    marginRight: '8px',
    display: "flex",
    alignItems: "center",
  },
  rateContainer: {
    width: 24,
    display: "flex",
    alignItems: "center"
  },
  rateTextContainer: {
    width: 30,
    color: "#92A4BB",
    textAlign: "right"
  },
  rate: {
    width: 24,
  },
  rateText: {
    color: "#808895",
    fontSize: 14,
    fontWeight: "normal"
  },
  subtitle: {
    fontSize: 14,
    lineHeight: "22px",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: "19px",
    color: '#484e5c'
  },
  itemDetailBottom: {
    maxWidth: "100%",
  },
  itemBottom: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    height: 50,
    padding: "0 19px"
  },
  itemLocContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  itemLoc: {
    height: 24
  },
  itemLocText: {
    fontSize: "14px",
    color: "#808895"
  },
  itemPriceContainer: {

  },
  itemPrice: {
    fontSize: "14px",
    marginTop: '15px',
    color: "#536B88",
    fontWeight: "bold"
  },
  itemPriceUnit:
  {
    fontSize: "14px",
    fontFamily: "yekanLight",
    color: "#92A4BB"
  },
  itemLink:{
    display: "flex",
    '&:hover':
    {
      textDecoration: 'none !important'
    }
  }
}));
