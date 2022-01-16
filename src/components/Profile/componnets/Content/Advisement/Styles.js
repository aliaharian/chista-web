import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  table: {
    minWidth: 650,
    marginTop: 30,
  },
  advisementAvatarWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  advisementAvatarBorder: {
    border: "1px solid #808895",
    borderRadius: 100,
    padding: 2,
    position: "relative",
  },
  advisementAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  advisementNameWrapper: {
    marginLeft: 10,
    textAlign: "left",
    "& :first-child": {
      fontFamily: "yekanHeavy",
    },
    "& p": {
      margin: "5px 0",
    },
  },
  dateTime: {
    "& span": {
      padding: "0 2px",
    },
  },
  statusWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  statusWrapperSuccess: {
    backgroundColor: "rgba(52, 194, 120, 0.1)",
    color: "#34c278",
  },
  statusWrapperFailure: {
    backgroundColor: "rgba(255, 82, 122, 0.1)",
    color: "#fa418d",
  },
  status: {
    width: 25,
    height: 25,
    marginRight: 5,
    border: "1.5px solid",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statusIcon: {
    fontSize: 17,
    // color: "#34C278",
  },
  incomingStrMobile: {
    fontFamily: "yekanHeavy",
  },

  infoWrapper: {
    backgroundColor: "transparent",
    border: "1px solid #c5c9cc",
    borderRadius: 16,
    width: 41,
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  filterWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F7F9FF",
    borderRadius: 12,
    marginTop: 15,
    padding: 15,
  },
  filterWrapperMobile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateTimeMobile: {
    color: "#92a4bb !important",
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
    width: 150,
    height: 50,
    padding: "0 25px",
    cursor: "pointer",
  },
  filterBtnMobile: {
    all: "unset",
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  totalStatusWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  },
  totalStatusItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(22, 65, 255, 0.05)",
    borderRadius: 12,
    width: "45%",
    padding: "0 15px",
  },
  totalStatustext: {
    marginLeft: 7,
  },
  totalStatusNmuber: {
    fontFamily: "yekanHeavy",
    color: "#1a172d",
    marginRight: 2,
  },
  rowItemMobile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTextWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableHead: {
    "& th": {
      backgroundColor: "rgba(194, 203, 218, 0.08)",
      border: `1px solid ${theme.palette.border.main}`,
    },
    "& th:nth-child(1)": {
      display: "block",
      borderRight: "none",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    "& th:nth-child(2)": {
      borderRight: "none",
      borderLeft: "none",
    },
    "& th:nth-child(3)": {
      borderRight: "none",
      borderLeft: "none",
    },
    "& th:nth-child(4)": {
      display: "block",
      borderLeft: "none",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
  },
}));
