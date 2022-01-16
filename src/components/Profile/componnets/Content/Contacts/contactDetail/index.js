import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ProfileAvatar from "../../../../../ProfileAvatar/ProfileAvatar";
import blackboard from "../../../../../../assets/images/Blackboard-white.svg";
import share from "../../../../../../assets/images/share.svg";
import save from "../../../../../../assets/images/bookmark.svg";
import ShareModal from "./ShareModal";

// import useStyles from "./Styles";
import { numberFormat } from "../../../../../../utilities";
import Link from "../../../../../Link/Link";
import NextLink from 'next/link'
import CommonGroups from './tabs/CommonGroups'

import LoginClass from "../../../../../../assets/images/loginClass";
import { Button, Fab, Menu, MenuItem, Typography, withStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import ChatIcon from "../../../../../../assets/images/profile/registerOstad/UserChatIcon";
import { userInfo } from "../../../../../../../redux/userDetails";
import dateTime from "../../../../../../utilities/dateTime";
import { useRouter } from "next/router";
import DeleteContactDialog from "../deleteContactDialog";
import UpdateContact from "../UpdateContact";
import { deleteContact, getContactDetail, getContactList, updateContact } from "../../../../../../../redux/contacts";
import classNames from "classnames";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Icon from "../../../../../Icon/Icon";
import BookmarkBorderIcon from "../../../../../../assets/images/bookmark.svg";
import { addOrRemoveFav } from "../../../../../../../redux/advisers";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InThisClass from "./tabs/InThisClass";
import { infoSnackbar } from "../../../../../../../redux/user";
import C404 from "../../../../../../../pages/404";
import HeaderMobile from "./HeaderMobile";
import classes from './ContactDetail.module.scss'

const StyledTabs = withStyles((theme) => ({
    root: {
        padding: '0 25px',
        [theme.breakpoints.down(1200)]: {
            padding: '0 25px 0 0',

        },
        '& .Mui-selected': {
            color: theme.buttonColor.normal + '!important',
        }
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            // maxWidth: '100%',
            width: 'calc(100% - 30px)',
            height: 3,
            borderRadius: 3,
            backgroundColor: theme.buttonColor.normal + '!important',
        },
    },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontSize: 13,
        minWidth: 40,
        padding: '0 15px !important',
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const StyledMenu = withStyles((theme) => ({
    paper: {
        overflow: 'visible',
        transform: "translate(7px , -23px)!important",
        border: 'none',
        width: '170px',
        borderRadius: '8px!important',
        boxShadow: '0 3px 10px 0 rgba(0, 5, 52, 0.11)',
        padding: '0 4px',
        // '&:after': {
        //     boxShadow: '0 9px 0px 0px white, 0 -9px 0px 0px white, 12px 0 15px -4px #0c0b3126, -12px 0 15px -4px #0c0b3126',
        //     right: 15,
        //     top: -7,
        //     content: '""',
        //     display: 'block',
        //     position: 'absolute',
        //     transform: 'rotateZ(45deg)',
        //     width: 15,
        //     height: 15,
        //     backgroundColor: '#fff',
        //     zIndex: 90
        // },
        '& .MuiMenuItem-root': {
            [theme.breakpoints.down('1200')]: {
                minHeight: 36
            }
        }
    },

}))(Menu);
const UserDetails = ({ enqueueSnackbar, id, contact, ...props }) => {
    // const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [toggleShareModal, setToggleShareModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [updateDialog, setUpdateDialog] = useState(false)
    const userInfoProp = useSelector((state) => state.contacts.contactDetail);
    const Dispatch = useDispatch();
    const Router = useRouter()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    // console.log('userinfo', userInfoProp)
    let commonClasses = useSelector(
        (state) => state.userDetails.commonGroups
    );
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    React.useEffect(() => {
        if (userInfoProp === '') {
            Dispatch(userInfo(id, !contact, props.groupId))
        }
    }, [userInfoProp])

    const handleChangeIndex = (index) => {
        setTabIndex(index);
    };

    // useEffect(() => {
    //     if (userInfoProp === null || userInfoProp?.deleted === true) Router.back()
    // }, [userInfoProp])
    const renderTab = !contact && (userInfoProp.callerRoleType === process.env.REACT_APP_OSTAD_ROLE_TYPE || userInfoProp.callerRoleType === process.env.REACT_APP_ASSISTANT_ROLE_TYPE ||
        userInfoProp.callerRoleType === process.env.REACT_APP_CREATOR_ROLE_TYPE || !userInfoProp.callerRoleType
    ) ?
        [
            <InThisClass data={userInfoProp} id={id} groupId={props.groupId} classData={props?.data} />,
            <CommonGroups data={userInfoProp} />
            // <UsersTab index={tabIndex} id={data.id} active={data.active && data.myRights.includes("CRR_ADD_MEMBER")}/>,
            // <SettingTab index={tabIndex} data={data}/>,
        ]
        :
        [
            <CommonGroups data={userInfoProp} />
            // <UsersTab index={tabIndex} id={data.id} active={data.active && data.myRights.includes("CRR_ADD_MEMBER")}/>,
            // <SettingTab index={tabIndex} data={data}/>,
        ]

        ;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleComingSoon = () => {
        Dispatch(infoSnackbar(0))
    }
    // console.log('propststttt', userInfoProp)

    const contactDeleteResponse = useSelector(
        (state) => state.contacts.deleteResponse
    );
    const contactUpdateResponse = useSelector(
        (state) => state.contacts.updateResponse
    );

    useEffect(() => {
        if (contactDeleteResponse?.message === 'OK') {
            // Dispatch(userInfo(id))
            Router.push('/profile/dashboard/contacts')
        }
    }, [contactDeleteResponse])

    useEffect(() => {
        if (contactUpdateResponse !== '') {
            console.log('heree', contactUpdateResponse)
            Dispatch(getContactDetail({
                ...userInfoProp,
                firstName: contactUpdateResponse.firstName,
                lastName: contactUpdateResponse.lastName
            }))
        }


    }, [contactUpdateResponse])

    function handleGoToChat() {
        localStorage.removeItem('open-chat');
        const url = `${process.env.REACT_APP_CHAT_URL}?chat_id=${userInfoProp.chatUserId}&&type=text`;
        window.open(url, '_blank');
    }


    const handleDeleteContact = (user) => {
        Dispatch(deleteContact(user.phone))
        setDeleteDialog(false)

    }
    const handleUpdateContact = (user) => {
        Dispatch(updateContact(user))
        setUpdateDialog(false)
    }

    const handleAddOrRemoveFav = (id) => {
        Dispatch(addOrRemoveFav(id, userInfoProp))
    }
    console.log('userinfoprop', userInfoProp)
    // if (contact && (userInfoProp !== '' && !userInfoProp.chatUserId)) {
    //     Router.push('/404')
    //     // window.location.href = "/404"
    //     return
    // }


    return (
        <>
            {deleteDialog &&
                <DeleteContactDialog
                    open={deleteDialog}
                    closeModal={() => setDeleteDialog(false)}
                    user={userInfoProp}
                    handleDeleteContact={handleDeleteContact}
                />

            }
            {updateDialog &&
                <UpdateContact
                    open={updateDialog}
                    closeModal={() => setUpdateDialog(false)}
                    user={userInfoProp}
                    handleUpdateContact={handleUpdateContact}
                />

            }
            <div className={classes.contactDetailWrapper}>
                {/* {
                    isMobile &&
                    <HeaderMobile
                        handleClick={handleClick}
                        setToggleShareModal={setToggleShareModal}
                        handleAddOrRemoveFav={handleAddOrRemoveFav}
                        userInfoProp={userInfoProp}
                        anchorEl={anchorEl}
                        handleClose={handleClose}
                        setUpdateDialog={setUpdateDialog}
                        setDeleteDialog={setDeleteDialog}
                        contact={contact}
                        groupId={props.groupId}
                    />
                } */}
                <div className={classes.contactDetailHeader}>
                    <div className={clsx(classes.imageWrapper, classes.contactDetailImageWrapper)}>

                        <ArrowForwardIcon
                            className={classes.backArrow}
                            onClick={() => {
                                contact ? Router.back() : Router.push(`/profile/dashboard/myClass/${props.groupId}`)
                            }}
                        />
                        <ProfileAvatar
                            user={userInfoProp}
                            variant="rounded"
                            avatar={classes.contactDetailAvatar}
                            avatarContainer={classes.contactDetailAvatarBorder}
                        />

                        <div className={classes.contactDetailTitle}>
                            <Typography>
                                {contact && numberFormat.toPersianDigits(userInfoProp.firstName || "")}
                                {" "}
                                {contact && numberFormat.toPersianDigits(userInfoProp.lastName || "")}
                                {" "}
                                {!contact && numberFormat.toPersianDigits(userInfoProp.fullName || "")}
                            </Typography>
                            <Typography noWrap style={{ maxWidth: 160 }}>
                                {
                                    userInfoProp.chatUserId === 0 || !userInfoProp.chatUserId ? `عضو چیستا نیست` :
                                        userInfoProp.status === "CS_ONLINE" ?
                                            `آنلاین`
                                            : `آخرین بازدید ${dateTime.diffTime(userInfoProp.wasOnline) || dateTime.diffTime(userInfoProp.onlineTime)}`
                                }
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.contactDetailActionWrapper}>
                        {(!isMobile && userInfoProp.chatUserId !== 0 && userInfoProp.chatUserId && userInfoProp.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE) &&
                            <button className={classes.contactDetailChat} style={!contact ? { margin: 0 } : {}}
                                onClick={() => handleGoToChat()}>
                                <ChatIcon
                                    className={classes.contactDetailChatIcon}
                                    viewBox="0 0 30.141 30.141"
                                />
                                {!isMobile &&
                                    <span> ارسال پیام </span>
                                }
                            </button>
                        }
                        {(isMobile && userInfoProp.chatUserId !== 0 && userInfoProp.chatUserId && userInfoProp.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE) &&
                            <button className={classes.contactDetailChat} style={!contact ? { margin: 0 } : {}}
                                onClick={() => handleGoToChat()}>
                                <ChatIcon
                                    className={classes.contactDetailChatIcon}
                                    viewBox="0 0 30.141 30.141"
                                />
                                {/* {!isMobile &&
                                    <span> ارسال پیام </span>
                                } */}
                            </button>
                        }

                        {
                            (userInfoProp.roleTypeId == 2861 && !isMobile && (!commonClasses || (commonClasses && commonClasses?.length != 0))) &&
                            <>
                                <Button
                                    className={classes.contactDetailShare}
                                    onClick={() => {
                                        handleAddOrRemoveFav(userInfoProp.advisorId)
                                    }}
                                >
                                    {userInfoProp && userInfoProp.favorite ?
                                        <BookmarkIcon />
                                        :
                                        <img src={save} />
                                    }
                                    {/*<img src={save}/>*/}
                                </Button>

                                <button
                                    className={classes.contactDetailShare}
                                    onClick={() => setToggleShareModal((prevState) => !prevState)}
                                >
                                    <img src={share} />
                                </button>


                            </>

                        }
                        {
                            // !isMobile &&
                            <>
                                <MoreVertIcon
                                    aria-controls="more"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                />
                                <StyledMenu
                                    id="more"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    style={{
                                        marginTop: 40,
                                    }}


                                >
                                    {
                                        contact ?
                                            userInfoProp.deleted !== true &&
                                            <>
                                                {(isMobile && userInfoProp.chatUserId !== 0 && userInfoProp.chatUserId && userInfoProp.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE) &&
                                                    <MenuItem
                                                        className={classes.contactDetailLink}
                                                    >
                                                        <Link href={`#`} onClick={(e) => {
                                                            e.preventDefault()
                                                            handleClose();
                                                            handleGoToChat()
                                                        }}>ارسال پیام</Link>
                                                    </MenuItem>

                                                }

                                                {
                                                    (userInfoProp.roleTypeId === 2861 && isMobile) &&
                                                    <>
                                                        <MenuItem
                                                            className={classes.contactDetailLink}
                                                        >
                                                            <Link href={`#`} onClick={(e) => {
                                                                e.preventDefault()
                                                                handleClose();
                                                                setToggleShareModal((prevState) => !prevState)
                                                            }}>اشتراک گذاری</Link>
                                                        </MenuItem>
                                                        <MenuItem
                                                            className={classes.contactDetailLink}
                                                        >
                                                            <Link href={`#`} onClick={(e) => {
                                                                e.preventDefault()
                                                                handleClose();
                                                                handleAddOrRemoveFav(userInfoProp.advisorId)
                                                            }}>علاقمندی ها</Link>
                                                        </MenuItem>

                                                    </>

                                                }

                                                <MenuItem
                                                    className={classes.contactDetailLink}
                                                >
                                                    <Link href={`#`} onClick={(e) => {
                                                        e.preventDefault()
                                                        handleClose();
                                                        setUpdateDialog(true)
                                                    }}>ویرایش</Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={classes.contactDetailLink}
                                                >
                                                    <Link href={`#`} onClick={(e) => {
                                                        e.preventDefault()
                                                        handleClose();
                                                        setDeleteDialog(true)
                                                    }}>حذف</Link>
                                                </MenuItem>
                                            </>
                                            :
                                            <>
                                                {(isMobile && userInfoProp.chatUserId !== 0 && userInfoProp.chatUserId && userInfoProp.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE) &&
                                                    <MenuItem
                                                        className={classes.contactDetailLink}
                                                    >
                                                        <Link href={`#`} onClick={(e) => {
                                                            e.preventDefault()
                                                            handleClose();
                                                            handleGoToChat()
                                                        }}>ارسال پیام</Link>
                                                    </MenuItem>

                                                }
                                                <MenuItem
                                                    className={classes.contactDetailLink}
                                                >
                                                    <Link href={`#`} onClick={(e) => {
                                                        Dispatch(infoSnackbar(0))
                                                        e.preventDefault()
                                                        handleClose();
                                                        // setDeleteDialog(true)
                                                    }}>اخراج از کلاس</Link>
                                                </MenuItem>
                                            </>

                                    }


                                </StyledMenu>

                            </>
                        }

                    </div>
                </div>
                <div className={classes.contactDetailTabsRoot}>
                    <StyledTabs
                        value={tabIndex}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        className={classes.contactDetailTabs}
                        aria-label="full width tabs example"
                    >
                        {
                            !contact && (
                                userInfoProp.callerRoleType === process.env.REACT_APP_OSTAD_ROLE_TYPE ||
                                userInfoProp.callerRoleType === process.env.REACT_APP_ASSISTANT_ROLE_TYPE ||
                                userInfoProp.callerRoleType === process.env.REACT_APP_CREATOR_ROLE_TYPE ||
                                !userInfoProp.callerRoleType
                            ) &&
                            <StyledTab label="در این کلاس" />
                        }
                        <StyledTab label="گروه های مشترک" />

                        {/* <Tab label="جلسات" />
          <Tab label="گروه های مشترک" />
          <Tab label="گزارشات" />
          <Tab label="فایل ها" />
          <Tab label="مدیا" />
          <Tab label="صوت" /> */}
                    </StyledTabs>
                    {renderTab[tabIndex]}
                </div>
                {/*{toggleShareModal && (*/}
                {/*    <ShareModal*/}
                {/*        url={userInfoProp.shareUrl}*/}
                {/*        closeModal={() => setToggleShareModal((prevState) => !prevState)}*/}
                {/*    />*/}
                {/*)}*/}
            </div>
        </>
    );
};


export default withSnackbar((UserDetails));
