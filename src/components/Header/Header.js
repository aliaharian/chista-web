import React, { useEffect } from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
    Button,
    Divider,
    Container,
    Dialog,
    DialogContent,
    Slide,
    Typography,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Logo from "../Logo/Logo";
import NextLink from 'next/link';
import useStyles from "./styles";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { Initiable, Verify, Complete } from "../Auth";
import { useRouter } from 'next/router'
import { Squeeze as Hamburger } from 'hamburger-react'
import { connect } from "react-redux";
import {
    authUpdateField,
    userLogout,
    userLogin,
    isAuth,
} from "../../../redux/auth";
import { payUpdateField } from "../../../redux/payment";
import { changeState } from "../../../redux/user";
import Link from "../Link/Link";
import IncreaseCreditInitial from "../IncreaseCredit/IncreaseCreditInitial";
import MobileMenuDialog from "../MobileMenu/MobileMenuDialog";
import { PacketStatus } from "../PacketStatus";
import { useTheme } from "@material-ui/core/styles";
import EditInfo from "../EditInfo/EditInfo";
import clsx from "clsx";

function Header(props) {
    const classes = useStyles();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLogin, setIsLogin] = React.useState(false);
    const [headerTop, setHeaderTop] = React.useState(0);
    const [isOpenChat, setIsOpenChat] = React.useState(false);
    const [menuDialog, setMenuDialog] = React.useState(false);
    const [menuDialogOpening, setMenuDialogOpening] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [prevScrollpos, setPrevScrollpos] = React.useState(0);
    const [mobileMenuColor, setMobileMenuColor] = React.useState('#fff');
    const [hamburgerColor, setHamburgerColor] = React.useState('#0c0b31');
    const [dividerColor, setDividerColor] = React.useState('#fff');
    const [headerShadow, setHeaderShadow] = React.useState('none');
    const [loginButtonStyle, setLoginButtonStyle] = React.useState({
        backgroundColor: '#fff',
        color: '#0c0b31cc',
        transition: 'all 250ms ease-in-out',

    });
    const [page, setPage] = React.useState(router.pathname)
    const [state, setState] = React.useState(
        props.adviser ? props.adviser.state !== process.env.REACT_APP_STATUS_OFFLINE : false
    );
    const [openMessageDailog, setOpenMessageDailog] = React.useState(false);
    const [message, setMessage] = React.useState(null);
    const theme = useTheme();

    useEffect(() => {
        setIsLogin(localStorage.getItem("isAuth"));
        if (isOpenChat) {
            props.authUpdateField({ prop: "openInitiable", value: false });
            handleGoToChat();
        }
        if (props.adviser) 
            setState(props.adviser.state !== process.env.REACT_APP_STATUS_OFFLINE);
        
    }, [props.userLoad, props.authLoad, props.adviser]);

    useEffect(() => {
        const handleRouteChange = (url) => {
            setPage(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setHeaderTop(0)
            if (currentScrollPos < 50) {
                setHeaderShadow('none')
                setDividerColor('rgba(0, 0, 0, 0)')
            } else {
                setHeaderShadow('none')
                setDividerColor('#0c0b3126')
            }
        } else {
            if (currentScrollPos - prevScrollpos > 5) {
                setHeaderShadow('none')
                setDividerColor('#fff')
                menuDialog ? setHeaderTop(-80) : setHeaderTop(-80);
            }
        }
        setPrevScrollpos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleUserLogout = () => {
        handleProfileMenuClose();
        props.userLogout();
    };
    const handleProfileMenuClose = (e) => {
        setAnchorEl(null);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function openInitiable() {
        props.authUpdateField({ prop: "openInitiable", value: true });
    }

    function handleopenEditInfo() {
        props.authUpdateField({ prop: "openEditInfo", value: true });
    }

    function handleGoToChat() {
        if (localStorage.getItem("isAuth")) {
            setIsOpenChat(false);
            window.open(process.env.REACT_APP_CHAT_URL, "_blank");
        } else {
            setIsOpenChat(true);
            openInitiable();
        }
    }

    function handleCloseMessageDailog() {
        setOpenMessageDailog(false);
    }

    function handleOpenIncreaseCredit() {
        handleCloseMessageDailog();
        props.payUpdateField({ prop: "openIncreaseCredit", value: true });
    }

    useEffect(() => {
        let q = router.query
        if (q.doLogin && q.referrer) {
            if (localStorage.getItem("isAuth")) {
                router.push(q.referrer)
            } else {
                props.authUpdateField({ prop: "openInitiable", value: true });
            }
        }
    }, [router.query])

    useEffect(() => {
        let q = router.query
        if (localStorage.getItem("isAuth") && q.doLogin && q.referrer) {
            router.push(q.referrer)
        }
    }, [props.user])

    function menuToggle() {
        if (menuDialogOpening) {
            setMenuDialog(!menuDialog)

            setTimeout(
                () => {
                    !menuDialog ? setMobileMenuColor('#0c0b31') : setMobileMenuColor('#fff')
                    setMenuDialogOpening(!menuDialogOpening)
                    setLoginButtonStyle({
                        backgroundColor: 'transparent',
                        color: '#0c0b31cc',
                        transition: 'all 250ms ease-in-out',
                    })
                    setHamburgerColor('#0c0b31')
                },
                150)
        } else {
            !menuDialog ? setMobileMenuColor('#0c0b31') : setMobileMenuColor('#fff')
            setMenuDialogOpening(!menuDialogOpening)
            setLoginButtonStyle({
                backgroundColor: 'transparent',
                color: '#fff',
                transition: 'all 250ms ease-in-out',
            })
            setHamburgerColor('#fff')

            setTimeout(
                () => {
                    setMenuDialog(!menuDialog)
                },
                120)
        }
    }

    function _renderMenu() {
        return <MobileMenuDialog page={page} open={menuDialog} handleClose={menuToggle}
            loggedIn={!!props.user?.username}
            setSelected={(item) => {
                setSelectedItem(item);
                menuToggle();
            }}
            editProfile={() => handleopenEditInfo()}
            _handleGotoChat={() => handleGoToChat()}
            _handleUserLogout={handleUserLogout}
            _openInitiable={openInitiable}
        />
    }

    const menuId = "primary-search-account-menu";
    return (
        <>
            {_renderMenu()}

            <Initiable />
            <PacketStatus />
            <Verify />
            <Complete />
            {props.openEditInfo &&
                <EditInfo />
            }
            <IncreaseCreditInitial {...props} />
            <Dialog
                fullWidth
                maxWidth="xs"
                open={openMessageDailog}
                transition={Slide}
                keepMounted
                onClose={handleCloseMessageDailog}
            >
                <div className={classes.modalHead}>
                    <div className={classes.containerModalIcon}>
                        <ErrorOutlineIcon className={classes.modalIcon} />
                    </div>
                    <Typography className={classes.modalTitle}>اعتبار ناکافی </Typography>
                </div>
                <DialogContent>
                    <Typography className={classes.modalContent}> {message}</Typography>
                </DialogContent>
                <div className={classes.containerButton}>
                    <Button
                        fullWidth
                        className={classes.dialogBtn}
                        onClick={() => handleOpenIncreaseCredit()}
                    >
                        {props.load ? (
                            <CircularProgress
                                color="primary"
                                style={{ width: 20, height: 20 }}
                            />
                        ) : (
                            "افزایش اعتبار"
                        )}
                    </Button>
                </div>
            </Dialog>

            <Container style={{
                top: headerTop,
                boxShadow: headerShadow,
                backgroundColor: mobileMenuColor,
            }}
                className={classes.headerMainParent}
            >
                <Container
                    style={{
                        backgroundColor: props.darkMode ? theme.textColor.dark : mobileMenuColor,
                    }}
                    className={classes.headerParent}
                >
                    <div className={classes.grow} style={props.darkMode ? { backgroundColor: theme.textColor.dark } : {}}>
                        <AppBar maxWidth="lg" color="with" className={classes.header} style={props.darkMode ? { backgroundColor: theme.textColor.dark } : {}}>
                            <Toolbar className={classes.toolbar} disableGutters={true}>
                                <div className={classes.sectionDesktop} style={props.darkMode ? { backgroundColor: theme.textColor.dark } : {}}>
                                    <Logo darkMode={props.darkMode} />
                                    <div className={classes.grow} style={props.darkMode ? { backgroundColor: theme.textColor.dark } : {}}>
                                        <div className={clsx(classes.navbar, props.darkMode && classes.navbarDark)}>
                                            <NextLink href={`/prices`}><a
                                                className={page === `/prices` ? classes.menuActive : ``}>تعرفه
                                                ها</a></NextLink>
                                                <NextLink href={`exambank`}><a
                                                className={page === `exambank` ? classes.menuActive : ``}>بانک آزمون
                                                </a></NextLink>
                                            <NextLink href={`/blog`}><a
                                                className={page === `/blog` ? classes.menuActive : ``}>بلاگ</a></NextLink>
                                            <NextLink href={`/help/`}><a
                                                className={page.includes('help') ? classes.menuActive : ``}
                                            >راهنما</a></NextLink>
                                        </div>
                                    </div>
                                    <Button
                                        variant="contained"
                                        className={clsx(classes.chatButton, props.darkMode && classes.chatButtonDarkMode)}
                                        onClick={() => {
                                            handleGoToChat();
                                        }}
                                    >
                                        گفتگوها
                                    </Button>
                                    {props.user?.username ?
                                        <Divider orientation="vertical" flexItem className={classes.dividerLoggedIn} /> :
                                        <Divider orientation="vertical" flexItem className={classes.divider} />
                                    }
                                    {props.user?.username ? (
                                        <Link href={`/profile/dashboard`} style={{ zIndex: 1500 }}>
                                            <IconButton onMouseOver={handleProfileMenuOpen}
                                                className={classes.profileButton}>
                                                <ProfileAvatar
                                                    user={props.user}
                                                    arrowDown={true}
                                                    darkMode={props.darkMode}
                                                    avatar={classes.classAvatar}
                                                    avatarContainer={classes.classAvatarBorder}
                                                /></IconButton>
                                        </Link>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            className={clsx(classes.loginButton, props.darkMode && classes.loginButtonDark)}
                                            onClick={openInitiable}
                                        >
                                            ورود
                                        </Button>)}
                                    <Menu
                                        // 109
                                        className={clsx(classes.profileMenu, props.user?.roleTypeId === 2861 && classes.profileMenuOstad)}
                                        anchorEl={anchorEl}
                                        getContentAnchorEl={null}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                                        transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleProfileMenuClose}
                                        MenuListProps={{ onMouseLeave: handleProfileMenuClose }}
                                    >
                                        <MenuItem onClick={handleProfileMenuClose}><Link
                                            href={'/profile/dashboard'}>صفحه شخصی</Link></MenuItem>
                                        {props.user?.roleTypeId !== 2861 &&
                                            <MenuItem onClick={handleProfileMenuClose}>
                                                <Link
                                                    href={'#'} onClick={(e) => {
                                                        e.preventDefault();
                                                        handleopenEditInfo()
                                                    }}>ویرایش</Link>
                                            </MenuItem>
                                        }
                                        <MenuItem onClick={handleUserLogout}>خروج</MenuItem>
                                    </Menu>

                                </div>
                                <div className={classes.sectionMobile}
                                    style={{
                                        height: "100%",
                                        width: '100%',
                                        transition: 'all 0s ease-in-out',
                                        justifyItems: 'center',
                                        backgroundColor: props.darkMode ? theme.textColor.dark : mobileMenuColor
                                    }}
                                >
                                    <Logo whiteLogo={menuDialogOpening || props.darkMode} />
                                    <div className={classes.grow} style={props.darkMode ? { backgroundColor: theme.textColor.dark } : {}}>
                                    </div>

                                    <IconButton disableFocusRipple disableRipple color="primary" onClick={menuToggle}
                                        className={classes.menuButtonMobile}>
                                        {
                                            <Hamburger toggled={menuDialog} toggle={menuToggle} color={props.darkMode ? '#fff' : hamburgerColor} />
                                        }
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>
                    {/* {!props.darkMode && <Divider orientation="horizontal" style={{ top: headerTop + 80, backgroundColor: dividerColor }}
                        className={classes.dividerHorizontal} />} */}
                </Container>
            </Container>
        </>
    );
}

Header.propTypes = {};

const mapStateToProps = (state) => ({
    user: state.user.user,
    authLoad: state.auth.load,
    userLoad: state.user.load,
    adviser: state.user.adviser,
    openEditInfo: state.auth.openEditInfo
});

export default connect(mapStateToProps, {
    authUpdateField,
    userLogout,
    userLogin,
    isAuth,
    changeState,
    payUpdateField,
})(Header);
