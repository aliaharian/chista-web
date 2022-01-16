import React, { useEffect } from "react";
import useStyles from "./styles";
import { Typography, Grid, Button, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import { isAuth, userLogout } from "../../../redux/auth";
import Router from "next/router";
import dynamic from "next/dynamic";
import SideBar from "./componnets/SideBar/SideBarDesktop";
import BaseInfo from "./componnets/BaseInfo/BaseInfo";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function UserDashboard(props, isMobile) {
  const classes = useStyles();
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      Router.push("/");
    }
    if (
      props.user &&
      props.user.inCartable === false &&
      props.user.roleTypeId === 2861
    ) {
      Router.push("/profile/adviser/dashboard");
    }
  }, [props.userLoad, props.authLoad]);

  return (
    <>
      {/* {isMobile ? (
        <div className={classes.sectionMobile}> موبایل</div>

      ) : (
          <div className={classes.sectionDesktop}>
            <Grid
              container
              direction="row"
              spaceing={0}
              justify="flex-start"
              alignItems="center"
              className={classes.breadcrumb}
            >
              <Typography className={classes.breadcrumbTextCh1}>
                صفحه شخصی
            </Typography>
              <ArrowBackIosIcon className={classes.breadcrumbCaret} />
              <Typography className={classes.breadcrumbTextCh2}>
                پروفایل شخصی
            </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              spaceing={0}
              justify="space-between"
              className={classes.root}
            >
              <Grid item sm={3} style={{ padding: "0 8px" }}>
                <SideBar />
              </Grid>
              <Grid item sm={9}>
                پروفایل
            </Grid>
            </Grid>
          </div>

        )} */}
         <div className={classes.sectionDesktop}>
            <Grid
              container
              direction="row"
              spaceing={0}
              justify="flex-start"
              alignItems="center"
              className={classes.breadcrumb}
            >
              <Typography className={classes.breadcrumbTextCh1}>
                صفحه شخصی
            </Typography>
              <ArrowBackIosIcon className={classes.breadcrumbCaret} />
              <Typography className={classes.breadcrumbTextCh2}>
                پروفایل شخصی
            </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              spaceing={0}
              justify="space-between"
              className={classes.root}
            >
              <Grid item sm={3} style={{ padding: "0 8px" }}>
                <SideBar />
              </Grid>
              <Grid item sm={9}>
                پروفایل
            </Grid>
            </Grid>
          </div>
    </>
  );
}

UserDashboard.propTypes = {};
const mapStateToProps = (state) => ({
  user: state.user.user,
  authLoad: state.auth.load,
  userLoad: state.user.load,
});

export default connect(mapStateToProps, { userLogout })(UserDashboard);
