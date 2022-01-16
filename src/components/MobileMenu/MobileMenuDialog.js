import React, {useState} from 'react';
import useStyles from './styles';
import {
    Typography, Divider, AppBar, Dialog,
    Toolbar, IconButton, List, ListItem, ListItemText, Slide
} from "@material-ui/core";
import {connect} from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import Logo from "../Logo/Logo";
import clsx from "clsx";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function MobileMenuDialog(props) {
    const classes = useStyles();
    const [selectCat1, setSelectCat1] = useState(null);
    const [selectCat2, setSelectCat2] = useState(null);

    function handleClose() {
        props.handleClose();
    }

    function handleBack() {
        if (selectCat2)
            setSelectCat2(null);
        else
            setSelectCat1(null);
    }
    return (
        <Dialog
            fullScreen
            open={props.open}
            onClose={handleClose}
            TransitionComponent={Transition}
            classes={{
                root: classes.dialog
            }}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    {(selectCat1 || selectCat2) &&
                    <IconButton edge="start" color="inherit" onClick={handleBack} aria-label="close">
                        <CloseIcon/>
                    </IconButton>}
                    {(!selectCat1 && !selectCat2) &&
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon/>
                    </IconButton>}
                    <Typography variant="h6" className={classes.title}>
                        <Logo whiteLogo/>
                    </Typography>
                </Toolbar>
            </AppBar>
            <List component="div" disablePadding className={classes.navRoot}>
                {props.loggedIn ?
                    <>
                        <ListItem button className={classes.listItem}>
                            <Link href={'/profile/dashboard'}>
                                <ListItemText key='lsitelT' primary={`صفحه شخصی`}
                                              className={clsx(classes.listItemText,
                                                  props.page.search('profile') !== -1 && classes.mobileMenuItemActive
                                              )}
                                />
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <Link href={'#'}>

                                <ListItemText onClick={(e) => {
                                    e.preventDefault();
                                    props._handleGotoChat()
                                }} key='lsitelT' primary={`گفتگو`}
                                              className={clsx(classes.listItemText)}
                                />
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <Link href={'#'}>
                                <ListItemText onClick={(e) => {
                                    e.preventDefault();
                                    props.editProfile()
                                }} key='lsitelT' primary={`ویرایش پروفایل`}
                                              className={clsx(classes.listItemText)}
                                />
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <Link href={'#'}>
                                <ListItemText onClick={(e) => {
                                    e.preventDefault();
                                    props._handleUserLogout()
                                }} key='lsitelT' primary={`خروج`}
                                              className={clsx(classes.listItemText)}
                                />
                            </Link>
                        </ListItem>
                    </> :
                    <>
                        <ListItem button className={classes.listItem}>
                            <Link href={'#'}>
                                <ListItemText onClick={(e) => {
                                    e.preventDefault();
                                    props._openInitiable()
                                }} key='lsitelT' primary={`ورود`}
                                              className={clsx(classes.listItemText)}
                                />
                            </Link>
                        </ListItem>
                    </>
                }
                {/* <Divider orientation="horizontal" className={classes.divider}/> */}

                {/* <ListItem button className={classes.listItem}>
                    <Link href={`/advisers`}>

                        <ListItemText key='lsitelT' primary={`اساتید`}
                                      className={clsx(classes.listItemText,
                                          props.page === `/advisers` && classes.mobileMenuItemActive
                                      )}
                        />
                    </Link>
                </ListItem> */}

                <ListItem button className={classes.listItem}>
                    <Link href={`/prices`}>
                        <ListItemText key='lsitelT' primary={`تعرفه ها`}
                                      className={clsx(classes.listItemText,
                                          props.page === `/prices` && classes.mobileMenuItemActive
                                      )}
                        />
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link href={`/blog`}>
                        <ListItemText key='lsitelT' primary={`بلاگ`}
                                      className={clsx(classes.listItemText,
                                          props.page === `/blog` && classes.mobileMenuItemActive
                                      )}
                        />
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link href={`/help`}>
                        <ListItemText key='lsitelT' primary={`راهنما`}
                                      className={clsx(classes.listItemText,
                                          props.page === `/help` && classes.mobileMenuItemActive
                                      )}
                        />
                    </Link>
                </ListItem>
            </List>
            <div className={classes.socialContainer}>
                <Link href='#'>
                    <a>
                        <i className={`${classes.social} ${classes.socialFacebook}`}/>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <i className={`${classes.social} ${classes.socialInstagram}`}/>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <i className={`${classes.social} ${classes.socialLinkedin}`}/>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <i className={`${classes.social} ${classes.socialTwitter}`}/>
                    </a>
                </Link>
            </div>
        </Dialog>
    )
}

MobileMenuDialog.propTypes = {};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(MobileMenuDialog);