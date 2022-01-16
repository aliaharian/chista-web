import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    height: '100px',
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    position: "relative",
    backgroundColor: "transparent",
    color: theme.textColor.primary,
    fontFamily:theme.font.bold,
    fontSize: "16px",
    lineHeight: "37px",
  },
  Toolbar: {
    justifyContent: "center",
    '&>svg':{
      marginRight:5,
      marginTop:4,
      color:theme.textColor.primary
    }
  },
  container: {
    height: 'max-content',
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
    maxWidth: "100%",
  },
}));