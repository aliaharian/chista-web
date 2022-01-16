import React from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { wrapper } from "../redux/store";
import RTL from "../src/components/RTL/RTL";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme/theme";
import { globalStyles } from "../src/theme/globalStyles";
import { withStyles } from "@material-ui/styles";
import { transform } from "../src/utilities";
import { LOAD_SUCCESS } from "../redux/user";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import 'swiper/swiper.scss'; //styles of swiper
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SnackbarProvider } from "notistack"; // requires a loader

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp(props) {
    const { Component, pageProps, store, isMobile, classes } = props;
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);


    return (
        <SnackbarProvider maxSnack={3} classes={{
            root: classes.snackbar
        }}>
            <React.Fragment>
                <Head>
                    <title>چیستا</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <RTL>
                        <CssBaseline />
                        <Component isMobile={isMobile} {...pageProps} />
                    </RTL>
                </ThemeProvider>
            </React.Fragment>
        </SnackbarProvider>
    );
}

const styles = (theme) => globalStyles(theme);

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async ({ ctx }) => {
    const { user } = ctx.store.getState();

    if (ctx.req) {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/profile`, {
                withCredentials: true,
                headers: { cookie: ctx.req.headers.cookie },
            });
            const data = await res.json();
            const res2 = await fetch(`${process.env.REACT_APP_BASE_URL}/user/view?chatUserId=${data.chatUserId || 0}&teacher=true&groupOwner=true`, {
                withCredentials: true,
                headers: { cookie: ctx.req.headers.cookie },
            });
            const data2 = await res2.json();

            ctx.store.dispatch({ type: LOAD_SUCCESS, payload: { user: data, userDetail: data2 } });
        } catch (err) {
        }
    }

    if (ctx.req) {
        return {
            isMobile: transform.isMobileSSR(ctx.req.headers["user-agent"]),
        };
    }
};

export default wrapper.withRedux(withStyles(styles)(MyApp));
