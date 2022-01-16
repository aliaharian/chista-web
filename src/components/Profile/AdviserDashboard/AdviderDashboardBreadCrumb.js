import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const makeStyles = (theme) => ({
  root: {
    height: "auto",
    width: "100%",
    marginTop: "31px",
    padding: "18px",
    backgroundColor: "#fff",
    borderRadius: 18,
  },
  breadcrumb: {
    width: "100%",
    marginTop: "35px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  breadcrumbTextCh1: {
    fontFamily: "chistaYekanR",
    fontSize: 19,
    color: "#92a4bb",
  },
  breadcrumbTextCh2: {
    fontFamily: "chistaYekanR",
    fontSize: 19,
    color: "#536b88",
  },
  breadcrumbCaret: {
    color: "#92a4bb !important",
    margin: "0 5px",
    fontSize: "19px",
  },
});

const AdviderDashboardBreadCrumb = () => {
  const classes = makeStyles();
  return (
    <Grid
      container
      direction="row"
      spaceing={0}
      justify="flex-start"
      className={classes.breadcrumb}
    >
      <Typography className={classes.breadcrumbTextCh1}>صفحه شخصی</Typography>
      <ArrowBackIosIcon className={classes.breadcrumbCaret} />
      <Typography className={classes.breadcrumbTextCh2}>
        پروفایل شخصی
      </Typography>
    </Grid>
  );
};

export default AdviderDashboardBreadCrumb;
