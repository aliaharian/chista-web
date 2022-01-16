import React, {useEffect, useState} from "react";
import Header from "../../Header/Header";
import {connect} from "react-redux";
import {userLogin} from "../../../../redux/auth";
import Footer from "../../Footer/Footer";
import {SnackbarProvider} from "notistack";
import Notifier from "../../Notifier";

function Layout({
                    children,
                    darkMode
                }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // props.initAxios();
        if (localStorage.getItem("isAuth")) {
            // userLogin();
        }
        setLoading(false);
    }, []);
    return (
        <>
            <SnackbarProvider>
                <Notifier/>
                <Header darkMode={darkMode}/>
                {children}
                <Footer/>
            </SnackbarProvider>
        </>
    );
}

const mapStateToProps = ({user: {load}}) => ({
    load,
});
export default connect(mapStateToProps, {
    userLogin,
    //  initAxios
})(Layout);
