import React from 'react';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import useStyles from './styles';
import { connect } from "react-redux"
import { authUpdateField, userLogout, userLogin, isAuth } from "../../../../redux/auth";
import { changeState } from "../../../../redux/user";
import LoginClass from '../../../assets/images/loginClass'

function Header() {
    const classes = useStyles();    
    return (
        <>
            <>
                <Container maxWidth="lg" className={classes.container} >
                    <div className={classes.grow}>
                        <AppBar maxWidth="lg"  color="with" className={classes.header} >
                            <Toolbar disableGutters={true} className={classes.Toolbar} >
                                <LoginClass viewBox="0 0 32 32" />
                                ورود به کلاس
                            </Toolbar>
                        </AppBar>
                    </div>
                </Container>
            </>
        </>
    );
}

Header.propTypes = {
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    authLoad: state.auth.load,
    userLoad: state.user.load,
});

export default connect(mapStateToProps, { authUpdateField, userLogout, userLogin, isAuth, changeState })(Header)

