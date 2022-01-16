import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userLogout } from "../../../../redux/auth";
import Router from "next/router";
import dynamic from "next/dynamic";

const AdviserDashboardDesktop = dynamic(() =>
  import("./AdviserDashboardDesktop")
);
const AdviserDashboardMobile = dynamic(() =>
  import("./AdviserDashboardMobile")
);

function Profile(props, isMobile) {

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      Router.push("/");
    }
  }, [props.userLoad, props.authLoad]);

  return (
    <>
      {isMobile ? <AdviserDashboardMobile /> : <AdviserDashboardDesktop />}
    </>
  );
}

Profile.propTypes = {};
const mapStateToProps = (state) => ({
  user: state.user.user,
  adviser: state.user.adviser,
  authLoad: state.auth.load,
  userLoad: state.user.load,
});

export default connect(mapStateToProps, { userLogout })(Profile);
