import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  userLogin,
} from "../../../../redux/auth";
import { SnackbarProvider } from "notistack";
import Notifier from "../../Notifier";

function AuthClassLayout({
  children,
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
    }
    setLoading(false);
  }, []);
  return (
    <>
      <SnackbarProvider>
        <Notifier />
        {children}
      </SnackbarProvider>
    </>
  );
}

const mapStateToProps = ({ user: { load } }) => ({
  load,
});
export default connect(mapStateToProps, {
  userLogin,
})(AuthClassLayout);
