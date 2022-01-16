import React, { useEffect } from 'react';
import useStyles from './styles';
import { Typography, Grid, Button, Tabs, Tab, Divider } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import classNames from "classnames";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useRouter } from 'next/router'
import { getAdviser, addOrRemoveFav, share } from "../../../../../redux/advisers";
import shareIcon from '../../../../assets/images/share.svg';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '../../../../assets/images/bookmark.svg';
import { numberFormat } from "../../../../utilities";
import rateIcon from "../../../../assets/images/Favorite.svg";
import Icon from "../../../Icon/Icon";
import chatIcon from "../../../../assets/images/chat-icon.png";
import AdviserGallery from './componnents/AdviserGallery/AdviserGallery'
import AdviserLongDesc from "./componnents/AdviserLongDesc/AdviserLongDesc";
import AdviserComments from "./componnents/AdviserComments/AdviserComments";
import ProfileAvatar from "../../../ProfileAvatar/ProfileAvatar";
import { transform } from "../../../../utilities";
import { authUpdateField, userLogin, isAuth } from "../../../../../redux/auth";
import { initVideoChatUpdateField } from "../../../../../redux/initVideoChat";
import InitVideoChat from "../../../InitVideoChat/InitVideoChat";
import IncreaseCreditInitial from "../../../IncreaseCredit/IncreaseCreditInitial";
import Factor from "../../../Factor/Factor";
import { payUpdateField, setInitFactor } from "../../../../../redux/payment";
import AdviserSharedDialog from "./componnents/AdviserShared/AdviserSharedDialog";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

function AdviserSingle(props) {
    const classes = useStyles();
    const [tabValue, setTabValue] = React.useState(0);
    const [isOpenChat, setIsOpenChat] = React.useState(false);
    const [isOpenVideoChat, setIsOpenVideoChat] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(false);
    const [transactionId, setTransactionId] = React.useState(0);
    const [openShareDialog, setOpenShareDialog] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [scrolling, setScrolling] = React.useState(false);

    useEffect(() => {
        setIsLogin(localStorage.getItem('isAuth'));
        if (isOpenChat || localStorage.getItem('open-chat')) {
            localStorage.removeItem('open-chat');
            props.authUpdateField({ prop: "openInitiable", value: false });
            handleGoToChat();
        }
        if (isOpenVideoChat || localStorage.getItem('open-videochat')) {
            localStorage.removeItem('open-videochat')
            props.authUpdateField({ prop: "openInitiable", value: false });
            openInitiableVideoChat();
        }
        const onScroll = e => {
            const currentScroll = e.target.documentElement.scrollTop;
            if (currentScroll > scrollTop || currentScroll === 0) {
                setScrollTop(currentScroll);
                setScrolling(currentScroll > scrollTop);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [props.userLoad, props.authLoad, props.videoChatLoad, scrollTop])

    const router = useRouter();
    const { query } = router;
    React.useEffect(() => {
        props.getAdviser(props.slug);
        //clear adviser store back flag
        if (query.type == 'increase-credit') {
            props.payUpdateField({ prop: "openIncreaseCredit", value: true });
        }
        if (query.success) {
            props.setInitFactor(query.id);
            setTransactionId(query.id);
            props.payUpdateField({ prop: "openFactor", value: true });
        }
    }, [])

    function openInitiable() {
        props.authUpdateField({ prop: "openInitiable", value: true });
    }

    async function openInitiableVideoChat() {
        localStorage.removeItem('open-videochat')
        if (localStorage.getItem('isAuth')) {
            setIsOpenVideoChat(false);
            await props.getAdviser(props.slug);
            props.initVideoChatUpdateField({ prop: "openVideoChat", value: true });
        } else {
            localStorage.setItem('open-videochat', true);
            setIsOpenVideoChat(true);
            openInitiable();
        }
    }

    function handleGoToChat() {
        localStorage.removeItem('open-chat');
        if (localStorage.getItem('isAuth')) {
            setIsOpenChat(false);
            const url = `${process.env.REACT_APP_CHAT_URL}?chat_id=${props.adviser.chatUserId}&&type=text`;
            window.open(url, '_blank');
        } else {
            localStorage.setItem('open-chat', true)
            setIsOpenChat(true);
            openInitiable();
        }
    }

    function handleGoToVideoChat() {
        if (localStorage.getItem('isAuth')) {
            setIsOpenChat(false);
            const url = `${process.env.REACT_APP_CHAT_URL}?chat_id=${props.adviser.chatUserId}&&type=video`;
            window.open(url, '_blank');
        } else {
            localStorage.setItem('open-videochat', true)
            setIsOpenChat(true);
            openInitiable();
        }
    }

    const handleChangeTab = (event, newValue) => {
        window.scrollTo(0, 0);
        setTabValue(newValue);
    };

    function handleShareDialog() {
        setOpenShareDialog(!openShareDialog);
    }
    function goToCommentTab() {
        window.scrollTo(0, 0);
        setTabValue(1);
    }
    function goBack() {
        localStorage.removeItem('open-videochat');
        localStorage.removeItem('open-chat');
        router.back();
    }
    return (
        <>
            {props.adviser &&
                <>
                    {!scrolling && <Grid container className={classes.adviserInfo} data-aos="fade" data-aos-duration="500">
                        <Grid item container lg={8} md={7} xs={12} direction="column" container justify="space-between"
                            className={classes.toolbarRoot}>
                            <div className={classes.adviserInfoWrapper}>
                                <ProfileAvatar user={props.adviser} variant="circle" avatar={classes.avatar}
                                    status={classes.status + " " + transform.parseStatus(props.adviser.state, classes)}
                                    avatarContainer={classes.avatarContainer} />
                                <div className={classes.titleContainer}>
                                    <div className={classes.rateBox}>
                                        <Typography
                                            className={classes.adviserTitle}>{props.adviser.fullName}
                                        </Typography>

                                        <div className={classes.rateTextContainer}>
                                            <Typography className={classes.rateText}>{numberFormat.toPersianDigits(props.adviser.score)}
                                            </Typography>
                                        </div>
                                        <div className={classes.rateContainer}>
                                            <img src={rateIcon} className={classes.rate} />
                                        </div>
                                    </div>
                                    <Typography className={classes.desc}>{props.adviser.intro}</Typography>
                                </div>
                            </div>

                        </Grid>
                        <Grid item lg={4} md={5} xs={12} container className={classes.actionAdviserWrapper}>
                            <div className={classNames(classes.chatBtnWrapper)}>
                                <Button
                                    variant="outlined"
                                    className={classes.chatButton}
                                    onClick={() => { handleGoToChat() }}
                                    startIcon={<Icon src={chatIcon} style={{ width: "27px", height: "27px" }} />}>
                                    ارسال پیام
                                    </Button>
                                <div className={classes.btnGroupWrapper}>
                                    <div className={classes.btnWrapper}>
                                        <Button className={classes.btn} disabled={props.shareLoad} onClick={() => {
                                            // props.share(props.adviser.id);
                                            handleShareDialog();
                                        }} endIcon={<Icon src={shareIcon} style={{ height: '24px', width: '24px' }} />} />
                                    </div>
                                    <div className={classes.btnWrapper}>
                                        <Button className={classNames(classes.btn, classes.btnFav)} disabled={props.favoriteLoad} onClick={() => {
                                            if (isLogin) 
                                                props.addOrRemoveFav(props.adviser.id);
                                            else 
                                                openInitiable()
                                            
                                        }} endIcon={props.adviser && props.adviser.favorite ? <BookmarkIcon style={{ height: '24px', width: '24px' }} /> : <Icon src={BookmarkBorderIcon} style={{ height: '24px', width: '24px' }} />} />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>}

                    <div container className={classes.root}>
                        <Tabs
                            value={tabValue}
                            onChange={handleChangeTab}
                            TabIndicatorProps={{
                                style: {
                                    height: "4px",
                                    backgroundColor: "#4264fb"
                                }
                            }}
                            TabScrollButtonProps={{ style: { minWidth: "72px" } }}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs "
                            classes={{
                                root: classes.tabRoot,
                                selected: classes.selectedTab
                            }}
                            className={classes.tabWrapper}
                        >
                            <Tab label="پروفایل" {...a11yProps(0)} className={classes.tab} />
                            {(props.adviser.score > 0 || props.adviser.commentCnt > 0) && <Tab label="دیدگاه ها" {...a11yProps(1)} className={classes.tab} />}
                        </Tabs>

                        <InitVideoChat user={props.user} adviser={props.adviser} handleContinue={handleGoToVideoChat} />
                        <IncreaseCreditInitial {...props} />
                        <Factor transactionId={query.id} />
                        <AdviserSharedDialog open={openShareDialog} handleClose={handleShareDialog} />
                        <TabPanel value={tabValue} index={0} className={classes.tabContent}>
                            <AdviserLongDesc desc={props.adviser.note} city={props.adviser.cityName} />
                            <AdviserGallery imageFiles={props.adviser.imageFiles} videoFiles={props.adviser.videoFiles} />
                            <Divider orientation="horizontal" className={classes.divider} />
                            <AdviserComments isLogin={isLogin} openInitiable={openInitiable} showLike={true} maxList={3} moreComment={goToCommentTab} showTitle={true} />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <AdviserComments isLogin={isLogin} openInitiable={openInitiable} showScoreBord={true} showLike={true} showWriteComment={true} />
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            کلاس های مشترک
                    </TabPanel>
                        <TabPanel value={tabValue} index={3}>
                            تماس ها
                    </TabPanel>
                        <TabPanel value={tabValue} index={4}>
                            مدیا
                    </TabPanel>
                        <TabPanel value={tabValue} index={5}>
                            فایل ها
                    </TabPanel>
                        <TabPanel value={tabValue} index={6}>
                            صوت
                    </TabPanel>
                    </div>
                </>
            }
        </>
    );
}

AdviserSingle.propTypes = {};

const mapStateToProps = (state) => ({

    load: state.advisers.load,
    shareLoad: state.advisers.shareLoad,
    favoriteLoad: state.advisers.favoriteLoad,
    adviser: state.advisers.adviser,
    user: state.user.user,
    authLoad: state.auth.load,
    userLoad: state.user.load
});

export default connect(mapStateToProps, { getAdviser, addOrRemoveFav, authUpdateField, share, initVideoChatUpdateField, userLogin, isAuth, payUpdateField, setInitFactor })(AdviserSingle);