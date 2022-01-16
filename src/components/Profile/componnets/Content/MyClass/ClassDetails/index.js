import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ProfileAvatar from "../../../../../ProfileAvatar/ProfileAvatar";
import blackboard from "../../../../../../assets/images/Blackboard-white.svg";
import share from "../../../../../../assets/images/share.svg";
import UsersTab from "./tabs/UsersTab";
import SettingTab from "./tabs/SettingTab";
import ShareModal from "./ShareModal";

// import useStyles from "./Styles";
import classes from '../../../../../../assets/stylesheet/profile/myClass/classDetail.module.scss';
import { numberFormat, transform } from "../../../../../../utilities";
import Link from "../../../../../Link/Link";
import NextLink from 'next/link'
import DeactiveModal from './tabs/SettingTab/DeactiveModal';

import LoginClass from "../../../../../../assets/images/loginClass";
import { withStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";


const StyledTabs = withStyles({
    root: {
        padding: '0 25px',
        '&>div': {
            '&>div': {
                overflow: 'auto'
            }
        }
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 60,
            width: '100%',
            backgroundColor: '#3748bb',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

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

import StyledMenu from "../../../../../menu/StyledMenu";
import { componentsUpdateField, joinToClass } from "../../../../../../../redux/groups";
import SessionsTab from "./tabs/SessionsTab";
import { Scrollbars } from "react-custom-scrollbars";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BlackBoard from "../../../../../../assets/images/profile/BlackboardSidebar";
import axios from "axios";
import cameraPhoto from "../../../../../../assets/images/cameraPhoto.svg";
import DeleteIcon from "../../../../../../assets/images/trashIcon.svg";
import avatarIcon from "../../../../../../assets/images/avatarEdit.svg";
import { loadClassDetails } from "../../../../../../../redux/adviserDashboard";
import { errorSnackbar, infoSnackbar } from "../../../../../../../redux/user";
import EndClassModal from "../../Contacts/contactDetail/tabs/CommonGroups/EndClassModal/EndClassModal";
import ChistaMenu from "../../../../../Kit/Menu/ChistaMenu";
import ChistaMenuItem from "../../../../../Kit/Menu/ChistaMenuItem";
import ChistaButton from "../../../../../Kit/Buttons/ChistaButton";
import ChistaTabBar from "../../../../../Kit/TabBar/ChistaTabBar";

const ClassDetails = ({ data, enqueueSnackbar }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [toggleShareModal, setToggleShareModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [memberList, setMemberList] = useState([]);
    const [memberListLoading, setMemberListLoading] = useState(true);
    const [photo, setPhoto] = useState(data.photo || "");
    const [photoBase64, setPhotoBase64] = useState("");
    const [prevScrollpos, setPrevScrollpos] = React.useState(0);
    const [resFilterTop, setResFilterTop] = React.useState(0);
    const endClassModal = useSelector((state) => state.groups.endClassModal);
    const [showDeactiveModal, setDeactiveModal] = useState(false)
    const userInfo = useSelector((state) => state.user.user);
    const Dispatch = useDispatch()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const selectFile = useRef();

    const handleChangeIndex = (index) => {
        setTabIndex(index);
    };
    console.log('data', data)

    const handleScroll = () => {
        // let height = window.
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setResFilterTop(79)
        } else {
            setResFilterTop(0)

        }
        setPrevScrollpos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    useEffect(() => {
        setPhoto(data.photo || '')
    }, [data.photo]);

    const getData = useCallback(async (id) => {
        if (id) {
            setMemberListLoading(true)
            try {
                const response = await axios.get(`member/search?groupId=${id}`);
                setMemberList(response.data.result);
                setMemberListLoading(false)
            } catch (e) {
                Dispatch(errorSnackbar(e));

                setMemberListLoading(false)
                console.log(e)
            }
        }
    }, []);

    useEffect(() => {
        data.id && getData(data.id);
    }, [data.id]);


    const renderTab = [
        <UsersTab memberListLoading={memberListLoading} getData={() => getData(data.id)} memberList={memberList} index={tabIndex}
            membersInfo={data.membersInfo || [{}, {}, {}, {}, {}, {}, {}, {}, {}]} id={data.id} data={data}
            active={data.active && data.myRights.includes("CRR_ADD_MEMBER")} />,
        <SettingTab
            memberList={memberList}
            setMemberList={(e) => setMemberList(e)}
            index={tabIndex}
            data={data}
            getData={() => getData(data.id)}
        />,
        // <SessionsTab index={tabIndex} id={data.id} data={data}/>,
    ];
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleComingSoon = () => {
        Dispatch(infoSnackbar(0))
    }

    const handleChangeAvatar = (e) => {
        if (data.myRole !== process.env.REACT_APP_MEMBER_ROLE_TYPE || data?.meCreator) {
            // setErrorMessage("");
            if (e.target.files[0]?.size > 1000000) {
                enqueueSnackbar('حجم عکس انتخابی بیش از یک مگابایت است', {
                    variant: 'error',
                    // persist:true,
                    style: {},
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                });
                // setErrorMessage("حجم عکس انتخابی بیش از یک مگابایت است");
                return;
            }
            setPhoto(URL.createObjectURL(e.target.files[0]));

            setPhoto(e.target.files[0]);
            transform.getBase64(e.target.files[0], (result) => {
                setPhotoBase64(result);
                submitEditAvatar(result)
            });
        } else {
            return
        }
    };

    const submitEditAvatar = async (result) => {
        try {
            const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                photo: result,
            });
            console.log("response:", response.data);
            Dispatch(loadClassDetails(response.data));
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err", err);
        }
    };
    const handleChangeDeactiveModal = async (e) => {
        if (data.myRights.includes("CRR_GROUP_ACTIVE") && data.active) {
            // setState(e.target.checked);
            try {
                const response = await axios(`group/deactivate?id=${data.id}`);
                console.log("response:", response.data);
                Dispatch(loadClassDetails(response.data));
                setDeactiveModal(false)
            } catch (err) {
                Dispatch(errorSnackbar(err));

                console.log("err", err);
            }
        } else {
            console.log('unauthorized')
        }
    };
    const deletePhoto = async (e) => {
        e.preventDefault();
        setPhoto("");
        selectFile.current.value = ''
        try {
            const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                photo: "",
            });
            console.log("response:", response.data);
            Dispatch(loadClassDetails(response.data));
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err", err);
        }
    };
    const handleEndClass = async () => {
        console.log('cha', userInfo)
        console.log('cha', data)

        try {
            if (data.id) {
                let response = await axios.get(`/group/joinEnd?chatGroupId=${data.chatGroupId}&forceEnd=true`);
                await Dispatch(joinToClass(data.chatGroupId, userInfo.chatUserId, 'chatGroupId', '_blank'))
                Dispatch(componentsUpdateField({ prop: "endClassModal", value: false }))
                Dispatch(componentsUpdateField({ prop: "currentClassId", value: null }))
            }
        }
        catch (e) {
            Dispatch(errorSnackbar(e))
        }
    }
    return (
        <div className={classes.detailClassWrapper}>
            <EndClassModal
                closeModal={() => { Dispatch(componentsUpdateField({ prop: "endClassModal", value: false })) }}
                showModal={endClassModal}
                handelSubmit={handleEndClass}
            />
            <DeactiveModal
                showModal={showDeactiveModal}
                closeModal={() => setDeactiveModal(false)}
                handelSubmit={() => handleChangeDeactiveModal()}
            />
            <div className={classes.classHeader}>
                <div className={clsx(classes.imageWrapper, classes.classImageWrapper)}>
                    <NextLink href={`/profile/dashboard/myClass`}>
                        <ArrowForwardIcon
                            className={classes.backArrow}
                        />
                    </NextLink>
                    {
                        tabIndex === 1 && data.active ?
                            <label>
                                {(data.myRole !== process.env.REACT_APP_MEMBER_ROLE_TYPE || data?.meCreator) ?
                                    <input
                                        style={{ display: "none" }}
                                        id={"photo"}
                                        name={"photo"}
                                        type="file"
                                        onChange={handleChangeAvatar}
                                        accept="image/*"
                                        ref={selectFile}
                                    /> : null}
                                {photo ?
                                    <div className={classes.imageUploaded}>
                                        {photo && (

                                            <ProfileAvatar
                                                user={{ text: data.title, photo: data.photo }}
                                                variant="rounded"
                                                avatar={clsx(classes.classAvatar, data.photo && classes.borderNone, !data.active && classes.cursorAuto)}
                                                avatarContainer={classes.classAvatarBorder}
                                                classTile={false}
                                                content={<BlackBoard />}
                                            />
                                        )}
                                        {(data.myRole !== process.env.REACT_APP_MEMBER_ROLE_TYPE || data?.meCreator) ?
                                            <>
                                                <div className={classes.deleteIcon} onClick={deletePhoto}>
                                                    <img src={DeleteIcon} style={{ width: 24 }} />
                                                </div>
                                                <div className={classes.imageBadge}>
                                                    <img src={avatarIcon} />
                                                </div>
                                            </>
                                            : null}
                                    </div>

                                    :

                                    <div className={classes.image}>
                                        <img src={cameraPhoto} alt="" />
                                    </div>}

                            </label>
                            :
                            <ProfileAvatar
                                user={{ text: data.title, photo: data.photo }}
                                variant="rounded"
                                style={!data.active ? { cursor: 'auto' } : {}}
                                avatar={clsx(classes.classAvatar, data.photo && classes.borderNone, !data.active && classes.cursorAuto)}
                                avatarContainer={classes.classAvatarBorder}
                                classTile={false}
                                content={<BlackBoard />}
                            />
                    }
                    <div className={classes.classTitle}>
                        <p>{numberFormat.toPersianDigits(data.title)}</p>

                        {data.active ?
                            <>
                                <span>{numberFormat.toPersianDigits(data.memberCount)}</span>
                                <span>نفر</span>
                            </>
                            :
                            <span>غیر فعال</span>

                        }
                    </div>
                </div>
                <div className={classes.actionWrapper}>

                    {/* <button className={clsx(classes.join, !data.active && classes.disabledJoin)}
                        onClick={() => {
                            Dispatch(joinToClass(data.chatGroupId, data.myChatUserId, 'chatGroupId', '_blank'))
                        }}
                        disabled={!data.active}
                    >
                        <LoginClass className={classes.loginClassIcon} viewBox="0 0 24 31" />
                        <span> ورود</span>
                    </button> */}
                    <div className={classes.enterClassButtonWrapper}>
                        <ChistaButton
                            onClick={() => {
                                Dispatch(joinToClass(data.chatGroupId, 'chatGroupId', '_blank'))
                            }}
                            disabled={!data.active}
                        >
                            <LoginClass className={classes.loginClassIcon} viewBox="0 0 24 31" />
                            <span> ورود</span>
                        </ChistaButton>
                    </div>


                    {!isMobile && <button
                        className={classes.share}
                        onClick={() => setToggleShareModal((prevState) => !prevState)}
                    >
                        <img src={share} />
                    </button>}
                    {
                        ((data.myRights && data.myRights.includes("CRR_GROUP_INACTIVE") && data.active) || isMobile) &&
                        <MoreVertIcon
                            aria-controls="more"
                            aria-haspopup="true"
                            onClick={handleClick}
                        />}
                    <ChistaMenu
                        open={Boolean(anchorEl)}
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {data.myRights && data.myRights.includes("CRR_GROUP_INACTIVE") && data.active && (
                            <ChistaMenuItem onClick={() => { setDeactiveModal(!showDeactiveModal); handleClose() }}>
                                غیر فعال سازی
                            </ChistaMenuItem>
                        )}
                        {isMobile && <ChistaMenuItem onClick={() => { setToggleShareModal((prevState) => !prevState); handleClose() }}>
                            اشتراک گذاری
                        </ChistaMenuItem>}
                    </ChistaMenu>
                </div>
            </div>

            <div>
                <ChistaTabBar
                    value={tabIndex}
                    handleChange={handleChange}
                    items={['اعضا', 'تنظیمات']}
                    customStyle={{ top: isMobile ? resFilterTop : '' }}
                />
                {renderTab[tabIndex]}
            </div>

            <ShareModal
                open={toggleShareModal}
                url={data.shareUrl}
                data={data}
                chatGroupId={data.chatGroupId}
                myChatUserId={data.myChatUserId}
                closeModal={() => setToggleShareModal(false)}
                withEnterButton={false}
            />
        </div>
    );
};


export default withSnackbar((ClassDetails));
