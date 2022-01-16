import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";

import BreadCrumb from "./BreadCrumb";
import BasicInfo from "./Steps/BasicInfo";
import AddMember from "./Steps/AddMember";
import SetSetting from "./Steps/SetSetting";
import CreateClass from "./Steps/CreateClass";
import ShowSessions from "./Steps/AddSessions";

const useStyles = makeStyles((theme) => ({
    errorMessage: {
        marginTop: 30,
        color: `${theme.palette.error.main} !important`,
        fontSize: 16,
    },
}));

const InsertClass = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user.user);
    const [step, setStep] = useState("basicInfo");
    const [allData, setAllData] = useState({
        ostad: {
            fullName: user?.fullName,
            username: user?.username,
            memberRoleType: process.env.REACT_APP_OSTAD_ROLE_TYPE,
            imageProfile: user?.imageProfile,
            id: user?.id,
        },
        owner: {
            fullName: user?.fullName,
            username: user?.username,
            memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
            imageProfile: user?.imageProfile,
            id: user?.id,
        }
    });


    const [errorMessage, setErrorMessage] = useState("");

    const handelStep = async (step, data) => {
        console.log('step' , step)
        setAllData({...allData, ...data});
        setStep(step);
    };

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
                    addContactNumber={allData?.addContactNumber}
                    memberCount={allData?.members?.length}
                    user={user}
                    initialValues={{
                        ostad: allData?.ostad,
                    }}
                />
            ),
        },
        addMeeting: {
            title: "ایجاد جلسه",
            component: (
                <ShowSessions
                    handelStep={handelStep}
                    photo={allData?.photo}
                    title={allData?.title}
                    addContactNumber={allData?.addContactNumber}
                    memberCount={allData?.members?.length}
                    user={user}
                    initialValues={{
                        ostad: allData?.ostad,
                        sessions:allData?.sessions
                    }}
                />
            ),
        },
        createClass: {
            title: "تنظیمات",
            component: (
                <CreateClass
                    handelStep={handelStep}
                    photo={allData?.photo}
                    title={allData?.title}
                    allData={allData}
                    memberCount={allData?.members?.length}
                />
            ),
        },
    };


    return (
        <div>
            <BreadCrumb
                step={step}
                title={steps[step].title}
                handelStep={handelStep}
            />
            {step === "createClass" && steps["setSetting"].component}
            {steps[step].component}
        </div>
    );
};

export default InsertClass;
