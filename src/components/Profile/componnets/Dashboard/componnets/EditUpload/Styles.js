import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  errorMessage: {
    marginTop: 30,
    color: `${theme.palette.error.main} !important`,
    fontSize: 16,
  },
  editUploadWrapper: {
    marginBottom: 20,
  },
  uploadValidation: {
    fontSize:13,
    color: "#536b88",
    marginLeft: 15,
  },
}));
