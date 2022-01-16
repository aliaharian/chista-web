import React, {useState, memo} from "react";
import clsx from "clsx";
import {Checkbox, Grid} from "@material-ui/core";
import jMoment from "moment-jalaali";
import {SnackbarProvider, useSnackbar} from "notistack";
import {numberFormat} from "../../../../../../../../utilities";
import useStyles from "../Styles";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import checkboxEmpty from "../../../../../../../../assets/images/checkbox-empty.svg";
import checkboxChecked from "../../../../../../../../assets/images/checkbox-checked.svg";
import JoinBeforeStart from "./SettingItem/JoinBeforeStart";
import RollCall from "./SettingItem/RollCall";
import StartNotify from "./SettingItem/StartNotify";

const items = [{
    text: 'حداکثر تا ۵ دقیقه امکان پذیر است',
    value: 5
},
    {
        text: 'حداکثر تا ۱۵ دقیقه امکان پذیر است',
        value: 15
    },
    {
        text: 'حداکثر تا ۳۰ دقیقه امکان پذیر است',
        value: 30
    },
    {
        text: 'همیشه امکان پذیر است',
        value: "0"
    },
    {
        text: 'امکان پذیر نیست',
        value: -1
    }
]
const SessionSetting = ({
                            photo,
                            title,
                            handelStep,
                            handleCloseAll,
                            addContactNumber,
                            memberCount,
                            initialValues,
                            user,
                            allData,
                            ...props
                        }) => {
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();

    const [rollCall, setRollCall] = useState(false);
    const [startNotify, setStartNotify] = useState(false);
    const [joinBeforeStart, setJoinBeforeStart] = useState(items[0].value);


    const changeRollCall = (value) => {
        console.log(value)
        setRollCall(value);
    };
    const changeStartNotify = (value) => {
        console.log(value)
        setStartNotify(value);
    };

    const changeJoinBeforeStart = (value) => {
        console.log(value)
        setJoinBeforeStart(value);
    };


    const handleSubmit = () => {
        handelStep("createClass", {
            "rollCall": rollCall,
            "joinBeforeStart": parseInt(joinBeforeStart),
            "startNotify": startNotify,
        });
        handleCloseAll()
        console.log('all', allData)
    };

    return (
        <div className={classes.settingWrapper}>
            <Grid container spacing={4}>
                <Grid item md={12} className={classes.addClassHeaderSetting}>
                    <div
                        className={clsx(classes.imageWrapper, classes.classImageWrapper)}
                    >
                        {photo ? (
                            <div
                                className={clsx(
                                    classes.borderWrapper,
                                    classes.classBorderWrapper
                                )}
                            >
                                <img
                                    src={URL.createObjectURL(photo)}
                                    alt=""
                                    className={clsx(classes.image, classes.classImage)}
                                />
                            </div>
                        ) : (
                            <ProfileAvatar
                                user={{text: title}}
                                variant="rounded"
                                avatar={classes.memebrAvatarOpinion}
                                avatarContainer={classes.memebrAvatarBorder}
                            />
                        )}
                        <div className={classes.classTitle}>
                            <p>{title}</p>
                            {memberCount ? (
                                <p>
                                    {numberFormat.toPersianDigits(memberCount)}
                                    نفر
                                </p>
                            ) : (
                                <p>بدون عضو</p>
                            )}
                        </div>
                    </div>
                </Grid>
                {/*<hr className={classes.divider}/>*/}
                <Grid container className={classes.addClassSettingContainer}>
                    <div className={classes.sessionSettingContainer}>
                        <p className={classes.sessionSettingTitle}>تنظیمات جلسه</p>
                        <JoinBeforeStart handleChange={changeJoinBeforeStart} items={items} value={joinBeforeStart}/>
                        <RollCall handleChange={changeRollCall} value={rollCall}/>
                        <StartNotify handleChange={changeStartNotify} value={startNotify}/>
                    </div>


                </Grid>
            </Grid>
            <button className={classes.stepBTN} onClick={handleSubmit}>
                بعدی
            </button>
        </div>
    );
};

export default memo(SessionSetting);
