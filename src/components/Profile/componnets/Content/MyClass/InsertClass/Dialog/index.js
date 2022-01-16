import {
    Avatar,
    Button,
    CircularProgress,
    Dialog,
    DialogContent, Divider, Fade,
    Input,
    InputAdornment,
    Slide,
    Typography, useTheme
} from "@material-ui/core";

import React, {useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classes from '../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import {useDispatch, useSelector} from "react-redux";
import BasicInfo from "../Steps/BasicInfo";
import AddMember from "../Steps/AddMember";
import SetSetting from "../Steps/SetSetting";
import CreateClass from "../Steps/CreateClass";
import close from "../../../../../../../assets/images/close.svg";
import ShowSessions from "../Steps/AddSessions";
import SessionSetting from "../Steps/SessionSetting";
import {userInfo} from "../../../../../../../../redux/userDetails";
import ModalLayoutWithHeader from '../../../../../../Kit/Layouts/ModalLayoutWithHeader'


function InsertClassDialog(props) {
    const [userFetched, setUserFetched] = React.useState(false)
    const Dispatch = useDispatch();
    const newUserData = useSelector((state) => state.contacts.contactDetail);
    const oldUserData = useSelector((state) => state.user.user);
    const [user, setUser] = React.useState(oldUserData)
    const [step, setStep] = useState("basicInfo");

    React.useEffect(() => {
        if (!userFetched && oldUserData) {
            Dispatch(userInfo(oldUserData.chatUserId))
            setUserFetched(true)
        }
    })
    React.useEffect(() => {
        if (newUserData !== '') {
            setUser(newUserData)
        }
    }, [newUserData])

    const [allData, setAllData] = useState(
        {
            ostad: {
                fullName: user?.fullName,
                username: user?.username || user?.phone,
                memberRoleType: process.env.REACT_APP_OSTAD_ROLE_TYPE,
                status: user?.status,
                wasOnline: user?.wasOnline,
                imageProfile: user?.imageProfile,
                id: user?.id,
                chatUserId: user?.chatUserId,
            },
            owner: {
                fullName: user?.fullName,
                username: user?.username || user?.phone,
                memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                status: user?.status,
                wasOnline: user?.wasOnline,
                imageProfile: user?.imageProfile,
                id: user?.id,
                chatUserId: user?.chatUserId,
            },
            addContactList: [
                {
                    fullName: user?.fullName,
                    username: user?.username || user?.phone,
                    memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                    status: user?.status,
                    wasOnline: user?.wasOnline,
                    imageProfile: user?.imageProfile,
                    id: user?.id,
                    chatUserId: user?.chatUserId,
                }
            ],
        }
    );

    const [errorMessage, setErrorMessage] = useState("");
    const [ownerAdded, setOwnerAdded] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    React.useEffect(() => {
        if (user && !ownerAdded && user?.wasOnline) {
            setAllData({
                ostad: {
                    fullName: user?.fullName,
                    username: user?.username || user?.phone,
                    memberRoleType: process.env.REACT_APP_OSTAD_ROLE_TYPE,
                    status: user?.status,
                    wasOnline: user?.wasOnline,
                    imageProfile: user?.imageProfile,
                    id: user?.id,
                    chatUserId: user?.chatUserId,
                },
                owner: {
                    fullName: user?.fullName,
                    username: user?.username || user?.phone,
                    memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                    status: user?.status,
                    wasOnline: user?.wasOnline,
                    imageProfile: user?.imageProfile,
                    id: user?.id,
                    chatUserId: user?.chatUserId,
                },
                addContactList: [
                    {
                        fullName: user?.fullName,
                        username: user?.username || user?.phone,
                        memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                        status: user?.status,
                        wasOnline: user?.wasOnline,
                        imageProfile: user?.imageProfile,
                        id: user?.id,
                        chatUserId: user?.chatUserId,
                    }
                ],
            })

            setOwnerAdded(true)
        }
    }, [user])

    const resetData = () => {

        setAllData({
            ostad: {
                fullName: user?.fullName,
                username: user?.username || user?.phone,
                memberRoleType: process.env.REACT_APP_OSTAD_ROLE_TYPE,
                status: user?.status,
                wasOnline: user?.wasOnline,
                imageProfile: user?.imageProfile,
                id: user?.id,
                chatUserId: user?.chatUserId,
            },
            owner: {
                fullName: user?.fullName,
                username: user?.username || user?.phone,
                memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                status: user?.status,
                wasOnline: user?.wasOnline,
                imageProfile: user?.imageProfile,
                id: user?.id,
                chatUserId: user?.chatUserId,
            },
            addContactList: [
                {
                    fullName: user?.fullName,
                    username: user?.username || user?.phone,
                    memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                    status: user?.status,
                    wasOnline: user?.wasOnline,
                    imageProfile: user?.imageProfile,
                    id: user?.id,
                    chatUserId: user?.chatUserId,
                }
            ],
        })
    }

    const handelStep = async (step, data) => {
        setAllData({...allData, ...data});
        setStep(step);
    };

    const handleClose = () => {
        props.toggleOpen()
        // setAllData({});
        // setStep('basicInfo');
        // resetData()
    }


    const steps = {
        basicInfo: {
            title: "اطلاعات پایه",
            component: (
                <BasicInfo
                    handelStep={handelStep}
                    initialValues={{
                        title: allData?.title,
                        about: allData?.about,
                        photo: allData?.photo,
                    }}
                />
            ),
        },
        addMember: {
            title: "تعریف اعضا",
            component: (
                <AddMember
                    handelStep={handelStep}
                    photo={allData?.photo}
                    title={allData?.title}
                    handleClose={() => handleClose()}
                    initialValues={{
                        addContactList: allData?.addContactList,
                        addContactNumber: allData?.addContactNumber,
                    }}
                />
            ),
        },
        setSetting: {
            title: "تنظیمات",
            component: (
                <SetSetting
                    handelStep={handelStep}
                    photo={allData?.photo}
                    title={allData?.title}
                    allData={allData}
                    handleCloseAll={handleClose}
                    addContactNumber={allData?.addContactNumber}
                    // memberCount={allData?.members?.length}
                    user={user}
                    memberCount={(allData?.addContactList?.length + allData?.addContactNumber?.length)}
                    initialValues={{
                        ostad: allData?.ostad,
                    }}
                />
            ),
        },
        addSession: {
            title: "ایجاد جلسه",
            component: (
                <ShowSessions
                    handelStep={handelStep}
                    photo={allData?.photo}
                    title={allData?.title}
                    handleCloseAll={handleClose}
                    addContactNumber={allData?.addContactNumber}
                    memberCount={(allData?.addContactList?.length + allData?.addContactNumber?.length)}
                    user={user}
                    allData={allData}
                    initialValues={{
                        ostad: allData?.ostad,
                        sessions: allData?.groupSessions
                    }}
                />
            ),
        },
        sessionSetting: {
            title: "ایجاد جلسه",
            component: (
                <SessionSetting
                    handelStep={handelStep}
                    handleCloseAll={handleClose}
                    photo={allData?.photo}
                    title={allData?.title}
                    addContactNumber={allData?.addContactNumber}
                    memberCount={(allData?.addContactList?.length + allData?.addContactNumber?.length)}
                    user={user}
                    allData={allData}
                    initialValues={{
                        ostad: allData?.ostad,
                    }}
                />
            ),
        },
        createClass: {
            title: "تنظیمات",
            component: (
                <CreateClass
                    intro={props.intro || false}
                    handelStep={handelStep}
                    reset={resetData}
                    photo={allData?.photo}
                    title={allData?.title}
                    allData={allData}
                    resetFilter={props.resetFilter}
                    // memberCount={(allData?.addContactList?.length + allData?.addContactNumber?.length )}
                />
            ),
        },
    };

    const handelBack = () => {
        switch (step) {
            case "basicInfo":
                handleClose()
            case "addMember":
                return handelStep("basicInfo");
            case "setSetting":
                return handelStep("addMember");
            case "addSession":
                return handelStep("setSetting");
            case "sessionSetting":
                return handelStep("addSession");
            case "createClass":
                return handelStep("addSession");
            default:
                return;
        }
    };

    


    const handleCloseDialog = () => {
        props.toggleOpen()
        setAllData({});
        setStep('basicInfo');
        resetData()
    }
    return (
        <>
        <ModalLayoutWithHeader
            openDialog={props.open}
            closeModal={()=>{}}
            classes={{
                scrollPaper: classes.dialog
            }}
            PaperProps={{ className: classes.root }}
            style={{ position: 'unset' }}
        >
                <>
                    <div className={classes.addClassHeaderWrapper}>
                        <div className={classes.selectAddClassTitle}>
                            <div>
                                <img
                                    src={close}
                                    alt="icon"
                                    style={{marginLeft: 13, width: 17}}
                                    onClick={() => handleCloseDialog()}
                                />
                                <p>{steps[step].title}</p>
                            </div>
                            {
                                step !== 'basicInfo' &&
                                <div
                                    className={classes.backBtn}
                                    onClick={handelBack}>
                                    قبلی
                                </div>
                            }
                        </div>
                        <Divider className={classes.divider}/>
                    </div>
                    <div className={classes.stepContainer}>
                        {step === "createClass" && steps["setSetting"].component}
                        {step !== "createClass" && steps[step].component}
                    </div>

                </>
            </ModalLayoutWithHeader>
            {step === "createClass" && steps["createClass"].component}

        </>
    )
}

export default InsertClassDialog;