import React, { useEffect } from "react";
import useStyles from "./styles";
import { Typography, Grid, Button, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import { isAuth, userLogout } from "../../../redux/auth";
import Router from "next/router";
import dynamic from "next/dynamic";
import SideBar from "./componnets/SideBar/SideBar";

function Profile(props) {
  const classes = useStyles();
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      Router.push("/");
    }
  }, [props.userLoad, props.authLoad]);

  return (
    <>
      <div className={classes.sectionDesktop}>
        <Grid
          container
          direction="row"
          spaceing={0}
          justify="flex-start"
          className={classes.breadcrumb}
        >
          <Typography className={classes.breadcrumbText}>
            <span>صفحه شخصی</span>{" "}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          spaceing={0}
          justify="space-between"
          className={classes.root}
        >
          <Grid item sm={3}>
            <SideBar />
          </Grid>
          <Grid item sm={9}>
            saeed
          </Grid>
        </Grid>
      </div>
      <div className={classes.sectionMobile}> </div>
    </>
  );
}

Profile.propTypes = {};
const mapStateToProps = (state) => ({
  user: state.user.user,
  authLoad: state.auth.load,
  userLoad: state.user.load,
});

export default connect(mapStateToProps, { userLogout })(Profile);
