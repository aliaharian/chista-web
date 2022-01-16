import {
    Dialog,
    Divider, Fade,
    Slide,
    Typography, useTheme
} from "@material-ui/core";
import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./Styles";
import { useSelector } from "react-redux";
import BasicInfo from "../Steps/BasicInfo";
import AddMember from "../Steps/AddMember";
import SetSetting from "../Steps/SetSetting";
import close from "../../../../../../../assets/images/close.svg";
import backIcon from "../../../../../../../assets/images/arrowBack.svg";
import { useRouter } from "next/router";
import AddQuestions from "../Steps/AddQuestions";
import AddScore from "../Steps/AddScore/AddAcore";
import FinalCheck from "../Steps/FinalCheck";
import CreateActivity from "../Steps/CreateActivity";
import { useEffect } from "react";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function InsertActivityDialog(props) {
    const [transition, setTransition] = React.useState(false)
    const classes = useStyles();
    const router = useRouter();
    const oldUserData = useSelector((state) => state.user.user);
    const [user, setUser] = React.useState(oldUserData)
    const [step, setStep] = useState("basicInfo");

    const [allData, setAllData] = useState(props.prevData ||
    {
        activityType: `""`,
        questionType: `""`,
        negative: false,
        negativePoint: `""`,
        multiFile: `""`,
        resultType: `""`,
        describeType: `""`,
    }
    );
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        if (props.prevData)
            setAllData(props.prevData)
    }, [props.prevData])

    const resetData = () => {
        setAllData({
            activityType: `""`,
            questionType: `""`,
            negative: false,
            negativePoint: `""`,
            multiFile: `""`,
            resultType: `""`,
            describeType: `""`,
        })
    }

    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })
    const handelStep = async (step, data) => {
        setAllData({ ...allData, ...data });
        setStep(step);
    };
    const updateData = async (data) => {
        setAllData({ ...allData, ...data });
    };
    const resetQuestions = async (data) => {
        setAllData({
            ...allData,
            questions: null,
            questionTitle: null,
            answerTitle: null,
            questionImages: null,
            answerImages: null,
        });
    };
    const resetExaminees = async (data) => {
        setAllData({
            ...allData,
            examinees: null,
            examineeCount:0
        });
    };
    const handleClose = () => {
        props.toggleOpen()
    }

    const steps = {
        basicInfo: {
            title: "تعاریف",
            component: (
                <BasicInfo
                    handelStep={handelStep}
                    resetQuestions={resetQuestions}
                    resetExaminees={resetExaminees}
                    sameMode={props.sameMode}
                    initialValues={{
                        ...allData,
                        name: allData?.name,
                        description: allData?.description || allData?.note,
                        activityClass: allData?.activityClass,
                        activityType: allData?.activityType,
                        questionCount: allData.questionCount || allData.questionsCount,
                        questionType: allData?.questionType,
                        negative: allData?.negative,
                        negativePoint: allData?.negativePoint || allData?.negativeScore?.toString() || `""`,
                        multiFile: allData?.multiFile,
                        resultType: allData?.resultType ? allData?.resultType : allData.descriptiveId ? 'DESCRIPTIVE' : allData.scoring ? 'NUMERIC' : `""`,
                        describeType: allData?.describeType || allData?.descriptiveId || `""`,
                        maxGrade: allData?.maxGrade || allData.scoring || "",
                    }}
                />
            ),
        },
        addMember: {
            title: allData?.activityClass?.title,
            component: (
                <AddMember
                    handelStep={handelStep}
                    updateData={updateData}
                    handleClose={() => handleClose()}
                    initialValues={{
                        addContactList: allData?.addContactList,
                        examinees: allData?.examinees
                    }}
                />
            ),
        },
        addQuestions: {
            title: "تعریف فعالیت",
            component: (
                <AddQuestions
                    handelStep={handelStep}
                    allData={allData}
                    handleCloseAll={handleClose}
                    user={user}
                    updateData={updateData}
                    initialValues={allData}
                    sameMode={props.sameMode}
                />
            ),
        },
        addScore: {
            title: "تعریف بارم سوالات",
            component: (
                <AddScore
                    handelStep={handelStep}
                    allData={allData}
                    handleCloseAll={handleClose}
                    user={user}
                    initialValues={allData}
                    sameMode={props.sameMode}
                />
            ),
        },
        setSetting: {
            title: "زمان فعالیت",
            component: (
                <SetSetting
                    handelStep={handelStep}
                    photo={allData?.activityClass?.photo}
                    title={allData?.activityClass?.title}
                    allData={allData}
                    sameMode={props.sameMode}
                    handleCloseAll={handleClose}
                    addContactNumber={allData?.addContactNumber}
                    memberCount={(allData?.examinees?.length)}
                    initialValues={allData}
                    updateData={updateData}
                />
            ),
        },
        finalCheck: {
            title: "تایید نهایی",
            component: (
                <FinalCheck
                    handelStep={handelStep}
                    allData={allData}
                    handleCloseAll={handleClose}
                    initialValues={allData}
                />
            ),
        },
        createActivity: {
            title: "ایجاد",
            component: (
                <CreateActivity
                    intro={props.intro || false}
                    handelStep={handelStep}
                    reset={resetData}
                    photo={allData?.photo}
                    title={allData?.title}
                    initialValues={allData}
                    allData={allData}
                    resetFilter={props.resetFilter}
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
            case "addQuestions":
                return handelStep("addMember");
            case "addScore":
                return handelStep("addQuestions");
            case "setSetting":
                if (allData.resultType === 'NUMERIC') {
                    return handelStep("addScore");
                }
                else {
                    return handelStep("addQuestions")
                }
            case "finalCheck":
                return handelStep("setSetting");

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
            <Dialog
                fullScreen
                open={props.open}
                TransitionComponent={transition ? Transition : NoTransition}
                transition={Slide}
                disableBackdropClick={true}
                disableEscapeKeyDown={true}
                PaperProps={{ className: classes.root }}
                classes={{
                    scrollPaper: classes.dialog
                }}
            >
                <>
                    <div className={classes.addClassHeaderWrapper}>
                        <div className={classes.selectAddClassTitle}>
                            <div>
                                <img
                                    src={(step === 'finalCheck' && allData?.finalCheckResult?.message) ?
                                        backIcon
                                        :
                                        close}
                                    alt="icon"
                                    style={{ marginLeft: 13, width: 17 }}
                                    onClick={() => {
                                        (step === 'finalCheck' && allData?.finalCheckResult?.message) ?
                                            handelBack()
                                            :
                                            handleCloseDialog()
                                    }}
                                />
                                <Typography noWrap>{steps[step].title}</Typography>
                            </div>
                            {
                                (step !== 'basicInfo' && !(step === 'finalCheck' && allData?.finalCheckResult?.message)) &&
                                <div
                                    className={classes.backBtn}
                                    onClick={handelBack}>
                                    قبلی
                                </div>
                            }
                        </div>
                        <Divider className={classes.divider} />
                    </div>
                    <div className={classes.stepContainer}>
                        {step === "createActivity" && steps["setSetting"].component}
                        {step !== "createActivity" && steps[step].component}
                    </div>
                </>
            </Dialog>
            {step === "createActivity" && steps["createActivity"].component}
        </>
    )
}

export default InsertActivityDialog;