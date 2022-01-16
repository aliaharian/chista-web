import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  modalWrapper: {
    padding: 35,
  },
  breadcrumbTextCh1: {
    fontFamily: "yekanHeavy",
    fontSize: 18,
    color: "#1a172d",
  },
  breadcrumbCaret: {
    color: "#92a4bb !important",
    margin: "0 5px",
    fontSize: "19px",
    width: 50,
    height: 50,
    border: "1px solid rgba(0, 0, 0, 0.04)",
    padding: "15px",
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 0,
  },
  backWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
    padding: "10px 0",
    "& button": {
      all: "unset",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#92a4bb",
    },
    "& p": {
      color: "#536b88",
      fontWeight: "bold",
      fontSize: "1rem",
    },
  },
  filterBtn: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    color: "white",
    outline: "none",
    fontFamily: theme.font.regular,
    border: "none",
    width: "100%",
    height: 60,
    margin: "0 15px",
    cursor: "pointer",
    boxShadow: "0px 10px 20px 5px rgba(22, 65, 255, 0.11)",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  datepicker: {
    padding: "0 !important",
    "& .MuiInputBase-formControl": {
      padding: "20px 0 0",
      "&:before": {
        borderBottom: "unset !important",
      },
    },
  },
  filterItemCalendar: {
    width: "100%",
    position: "absolute",
  },
  filterItemCalendarLast: {
    width: "100%",
    position: "absolute",
    paddingTop: "45px !important",
  },
}));
