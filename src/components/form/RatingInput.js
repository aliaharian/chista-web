import React from "react"
import { Box, ThemeProvider, createMuiTheme } from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '../../assets/images/star-icon-outline.svg';
import rateIcon from '../../assets/images/Favorite.svg';
import Icon from "../Icon/Icon";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/styles";

const theme = createMuiTheme({ direction: "ltr" });

const useStyles = makeStyles(theme => ({
  root: {
    direction: "rtl",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  labelRoot: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "16px"
  },
  label: {
    margin: "0 15px 0 0",
    textAlign: "center",
    fontFamily: theme.font.regular,
    fontSize: 13,
    color: "#536B88",
  }
}));
const StyledRating = withStyles({
  icon: {
    width: '33px',
    justifyContent: "center",
    margin: "0 15px",
  },
  root: {
    display: "flex",
    justifyContent: "center"
  }
})(Rating);

const RatingInput = ({
  input,
  label,
  options,
  meta: { touched, error },
  ...custom
}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Box component="fieldset" dir="ltr" borderColor="transparent">
          <StyledRating
            name="customized-empty"
            defaultValue={input.value}
            onChange={(event, value) => { input.onChange(value) }}
            icon={<Icon src={rateIcon} style={{ width: "33px", height: "33px" }} />}
            emptyIcon={<Icon src={StarBorderIcon} style={{ width: "33px", height: "33px" }} />}
          />
          <div className={classes.labelRoot}>
            {input.value == 1 && <span className={classes.label}>خیلی ضعیف</span>}
            {input.value == 2 && <span className={classes.label}>ضعیف</span>}
            {input.value == 3 && <span className={classes.label}>متوسط</span>}
            {input.value == 4 && <span className={classes.label}>خوب</span>}
            {input.value == 5 && <span className={classes.label}>عالی</span>}
          </div>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default RatingInput
