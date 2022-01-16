import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  modalWrapper: {
    borderRadius: 22,
    padding: "35px 0px 25px 0px",
    width: 460,
  },
  modalTitle: {
    "& h2": {
      fontWeight: "bold",
      fontSize: 20,
      color: "#484e5c",
      textAlign: "center",
      //   padding: 15,
    },
  },
  modalSubTitle: {
    textAlign: "center",
  },
  inputWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputLabel: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& span": {
      marginLeft: "5px",
      fontWeight: "bold",
      fontSize: "15",
    },
  },
  input: {
    "& .MuiInputBase-formControl": {
      borderRadius: 12,
    },
  },
  divider: {
    margin: "20px 0",
  },
  twoColumnWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiFormControl-marginDense": {
      padding: "0 !important",
    },
    "& .MuiOutlinedInput-marginDense": {
      height: "100%",
      borderRadius: 12,
    },
    "& span": {
      margin: "0 10px",
    },
  },
  dateLabel: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  filterBtn: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    color: "white",
    outline: "none",
    fontFamily: "chistaYekanR",
    border: "none",
    width: "100%",
    height: 60,
    margin: "0 15px",
    cursor: "pointer",
    boxShadow: "0px 10px 20px 5px rgba(22, 65, 255, 0.11)",
  },
  closeModalIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    border: "1.5px solid #808895",
    color: "#808895",
    width: 20,
    height: 20,
    cursor: "pointer",
  },
  clearFormDesktop: {
    all: "unset",
    position: "absolute",
    left: 20,
    top: 20,
    cursor: "pointer",
  },
}));
