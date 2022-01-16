import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import {
    Button,
    Toolbar,
    CircularProgress,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { connect, useDispatch, useSelector } from "react-redux";
import {
    authUpdateField,
    userLogout,
    userLogin,
    isAuth,
    initiableUserGuest,
} from "../../../redux/auth";
import { componentsUpdateField, getGroupInfo, joinToClass } from "../../../redux/groups";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { Initiable, Verify, Complete } from "../Auth";
import EndClassModal from "../Profile/componnets/Content/Contacts/contactDetail/tabs/CommonGroups/EndClassModal/EndClassModal";

import useStyles from "./styles";
import BlackboardSidebar from "../../assets/images/profile/BlackboardSidebar";
import ErrorModal from "./ErrorModal";
import { errorSnackbar, infoSnackbar } from "../../../redux/user";
import GuestModal from "./GuestModal";
import clsx from "clsx";
import { withSnackbar } from "notistack";
import LoginClass from "../../assets/images/loginClass";
import axios from "axios";
import { transform } from "../../utilities";

function AuthClass(props) {
    const classes = useStyles();
    const [isGuest, setIsGuest] = React.useState(false);
    const [guestModal, setGuestModal] = React.useState(false);
    const [ostad, setOstad] = React.useState();
    const [errorTxt, setErrorTxt] = React.useState('');
    const [isIE, setIsIE] = React.useState(false);
    const endClassModal = useSelector((state) => state.groups.endClassModal);

    useEffect(() => {
        if (navigator) {
            const browserVersionSupport = transform.getBrowserVersionForWebrtc();
            if (!browserVersionSupport) {
                setErrorTxt('نسخه مرورگر شما قدیمی است، برای استفاده از چیستا میبایست آن را بروز نمایید.')
            } else if (browserVersionSupport === 'IE') {
                setErrorTxt('چیستا در مرورگر شما قابل اجرا نیست، برای ورود به کلاس از نسخه های بروز شده کروم، اپرا یا فایر فاکس استفاده نمایید.')
                setIsIE(true)
            }
        }
    })
    useEffect(() => {
        if (!props.group) 
            props.getGroupInfo(props.slug);
        
        if (props.openClass) 
            joinToClass();
        
        if (props.userLoad) 
            props.getGroupInfo(props.slug);
        
    }, [props.userLoad, props.authLoad, props.openClass]);

    function openInitiable() {
        props.authUpdateField({ prop: "openInitiable", value: true });
    }

    const setUserGuest = () => {
        setIsGuest(!isGuest);
        setGuestModal(!guestModal);

    };
    const joinToClass = () => {
        props.joinToClass(props.slug);
    };

    function submited(values) {
        props.initiableUserGuest(values, props.group.chatGroupId);
    }

    const goToDownloadBrowser = () => {
        let ua = navigator.userAgent, tem,
            m = ua.match(/(opera|chrome|safari|CriOS|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        switch (m[1]) {
            case 'Chrome':
            case 'CriOS':
                window.open('https://www.google.com/chrome/?brand=BNSD&gclid=EAIaIQobChMIlqaWmvHp8gIV9WDmCh2ntgMLEAAYASAAEgKpvPD_BwE&gclsrc=aw.ds', '_blank')
                break;
            case 'Firefox':
                window.open('https://www.mozilla.org/en-US/firefox/new/', '_blank')
                break;
            case 'Opera':
                break;
        }
    };

    React.useEffect(() => {
        if (!ostad && props.group !== null) {
            props.group.membersInfo.map((member) => {
                if (member.roleType === process.env.REACT_APP_OSTAD_ROLE_TYPE) {
                    setOstad(member)
                }
            })
        }
    })

    const Dispatch = useDispatch();

    const handleEndClass = async () => {
        try {
            if (props.group.chatGroupId) {
                await Dispatch(joinToClass(props.group.chatGroupId, props.user.chatUserId, 'chatGroupId', '_blank'))
                Dispatch(componentsUpdateField({ prop: "endClassModal", value: false }))
                Dispatch(componentsUpdateField({ prop: "currentClassId", value: null }))
            }
        }
        catch (e) {
            Dispatch(errorSnackbar(e))
        }
    }
    return (
        <>
            <EndClassModal
                closeModal={() => { Dispatch(componentsUpdateField({ prop: "endClassModal", value: false })) }}
                showModal={endClassModal}
                handelSubmit={handleEndClass}
            />
            <Initiable />
            <Verify />
            <Complete gift={false} />
            {props.groupError !== null && <ErrorModal open={true} />}

            <GuestModal initiableUserGuest={props.initiableUserGuest} group={props.group} {...props}
                handleSubmit={props.handleSubmit} open={guestModal} handleClose={setUserGuest} />

            {props.group &&
                props.groupError === null
                && (
                    <>
                        <Toolbar disableGutters={true} className={classes.Toolbar}>
                            <LoginClass viewBox="0 0 32 32" />
                            ورود به کلاس
                        </Toolbar>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.cardTitle}
                                avatar={
                                    <ProfileAvatar
                                        user={props.group}
                                        variant="circle"
                                        avatar={clsx(classes.avatar, props.group?.photo && classes.borderNone)}
                                        avatarContainer={classes.avatarContainer}
                                        classTile
                                        content={<BlackboardSidebar />}
                                    />
                                }
                                title={props.group.title}
                                subheader={ostad?.fullName || `نام استاد تعیین نشده`}
                            />

                            {errorTxt ?
                                <div className={classes.browserErrorContainer}>
                                    <p>{errorTxt}
                                        <a href={process.env.REACT_APP_HELP_URL} target="_blank" >اطلاعات بیشتر</a>
                                    </p>
                                    {!isIE && <Button
                                        className={classes.actionButton}
                                        color="primary"
                                        onClick={() => {
                                            goToDownloadBrowser()
                                        }}
                                    >
                                        دانلود
                                    </Button>}

                                </div>
                                : <form
                                    onSubmit={props.handleSubmit((values) => submited(values))}
                                    className={clsx(classes.formWrapper, !props.user?.username && classes.customForm)}
                                >
                                    {props.user?.username && (
                                        <CardContent>
                                            <div className={classes.userTitleContainer}>
                                                <CardHeader
                                                    className={classes.userTitle}
                                                    avatar={
                                                        <ProfileAvatar
                                                            user={props.user}
                                                            variant="circle"
                                                            avatar={classes.avatar}
                                                            avatarContainer={classes.userAvatarContainer}
                                                        />
                                                    }
                                                    title={props.user.fullName}
                                                    subheader={props.group.myRoleStr}
                                                />
                                                <div className={classes.changeUser}
                                                    onClick={() => props.userLogout(true)}>تغییر
                                                    کاربر
                                                </div>
                                            </div>
                                        </CardContent>
                                    )}

                                    <CardActions className={classes.cardAction}>
                                        {props.user?.username && (
                                            <Button
                                                className={classes.actionButton}
                                                disabled={props.load}
                                                color="primary"
                                                onClick={joinToClass}
                                            >
                                                {props.load ? (
                                                    <CircularProgress
                                                        color="primary"
                                                        style={{ width: 20, height: 20 }}
                                                    />
                                                ) : (
                                                    "ورود"
                                                )}
                                            </Button>
                                        )}
                                        {isGuest && (
                                            <Button
                                                className={classes.actionButton}
                                                type="submit"
                                                color="primary"
                                            >
                                                ورود
                                            </Button>
                                        )}
                                        {!props.user?.username && !isGuest && (
                                            <>
                                                <Button
                                                    className={classes.actionButton}
                                                    color="primary"
                                                    onClick={openInitiable}
                                                >
                                                    ورود با تلفن همراه
                                                </Button>
                                                <Button
                                                    className={classes.actionButtonWhite}
                                                    disabled={!props.group.joinByLink}
                                                    color="primary"
                                                    onClick={setUserGuest}
                                                >
                                                    کاربر مهمان هستم
                                                </Button>
                                            </>
                                        )}
                                    </CardActions>
                                </form>}
                        </Card>
                    </>
                )}
        </>
    );
}

AuthClass.propTypes = {};
const mapStateToProps = (state) => ({
    user: state.user.user,
    authLoad: state.auth.load,
    userLoad: state.user.load,
    load: state.groups.load,
    group: state.groups.group,
    groupError: state.groups.error,
    openClass: state.groups.openClass,
    openVerify: state.auth.openVerify,
    openInitiable: state.auth.openInitiable,
    openComplete: state.auth.openComplete,
})

export default connect(mapStateToProps, {
    authUpdateField,
    userLogout,
    userLogin,
    isAuth,
    getGroupInfo,
    joinToClass,
    initiableUserGuest,
})(reduxForm({ form: "authClassForm" })(withSnackbar(AuthClass)));
