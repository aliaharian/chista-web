import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dummyArea: {
    backgroundColor: 'gray'
  },
  root: {
  },
  advItem: {
    padding: theme.spacing(2),
    paddingBottom: 0
  },
  divider:
  {
    width: "100%",
    margin: "5px",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  advisersWrapper: {
    width: "100%",
    '& .infinite-scroll-component__outerdiv': {
      width: "100%"
    }
  }
}));
