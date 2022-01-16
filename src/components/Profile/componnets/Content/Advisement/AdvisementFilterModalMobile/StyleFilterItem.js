import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  //   filterItemWrapper: {
  //     position: "absolute",
  //     zIndex: 10,
  //     backgroundColor: "#0000007a",
  //     width: "100%",
  //     height: "100%",
  //     right: 0,
  //     top: 0,
  //   },
  filterItemContent: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    margin: 0,
    padding: 25,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& p": {
      color: "#1a172d",
      marginLeft: 10,
      fontSize:13,
    },
  },
  headerDivider: {
    height: 5,
    width: 65,
    margin: "0 auto",
    borderRadius: 100,
  },
  radioBottom: {
    "& .MuiIconButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));
