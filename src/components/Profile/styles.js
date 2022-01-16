import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  breadcrumbMobile: {
    display: "flex",
    padding: "13px 0 0 0",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  breadcrumbCaret: {
    color: "#536b88",
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
}));
