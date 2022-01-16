import { useEffect, useState } from "react"
import useDownloadChunk from "../../../../../../customHook/downloadChunk"
import useStyles from './Styles'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckList from '../../../../../../assets/images/CheckList'
import { Link, MenuItem, Tooltip, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import clockIcon from '../../../../../../assets/images/Clock.svg'
import share from '../../../../../../assets/images/share.svg'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StyledMenu from "../../../../../menu/StyledMenu";
import { dateTime, numberFormat } from "../../../../../../utilities";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import DownloadIcon from "../../../../../../assets/images/DownloadIcon";
import ShareModal from "./shareModal/ShareModal";
import { useRouter } from "next/router";
import DeactiveModal from "./deactiveModal/DeactiveModal";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { errorSnackbar } from "../../../../../../../redux/user";
import { getActivityDescriptives, getActivityDetails } from "../../../../../../../redux/activity";
import CustomDatePicker from "../InsertActivity/Steps/SetSetting/SettingItem/CustomDatePicker";
import jMoment from "moment-jalaali";
import DetailModal from "./detailModal/DetailModal";
import UsersScorsDialog from "./UsersScorsDialog/UsersScorsDialog";
import EditActivityDialog from "./EditActivityDialog/EditActivityDialog";
import GalleryModal from '../../UserActivities/ActivityDetail/galleryModal/GalleryModal'
import InsertActivityDialog from "../InsertActivity/Dialog";
import TimeCounter from "./TimeCounter";
import { convertNumberToLetter } from "../../../../../../utilities/convertToArabicNum";
import arrowLeft from '../../../../../../assets/images/arrow-left.svg';
import arrowLeftDis from '../../../../../../assets/images/arrowLeftDisabled.svg';

const ActivityDetail = ({ id, activityProp, classUsers, examineesProp, descriptives, allDescriptives }) => {
    const [fileDatas, downloadChunkFile] = useDownloadChunk()
    const now = new Date() * 1000 / 1000
    const activityState = useSelector((state) => state.activity.activityDetails)
    const examineesState = useSelector((state) => state.activity.activityExaminees)
    const [examinees, setExaminees] = useState(examineesProp)
    const [activity, setActivity] = useState(activityProp)
    const [anchorEl, setAnchorEl] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryImagesIndex, setGalleryImagesIndex] = useState(0);
    const [allowedImages, setAllowedImages] = useState([])
    const [sameMode, setSameMode] = useState(false)
    const [openGallery, setOpenGallery] = useState(false);
    const [questionImages, setQuestionImages] = useState([]
        // activity?.questionImages ? [...activity.questionImages] : []
    );
    const [hashCodes, setHashCodes] = useState([]);
    const [answerImages, setAnswerImages] = useState(activity?.answerImages ? [...activity.answerImages] : []);
    const [openShare, setOpenShare] = useState(false)
    const [openDeactive, setOpenDeactive] = useState(false)
    const [openExtend, setOpenExtend] = useState(false)
    const [openDetail, setOpenDetail] = useState(false)
    const [openUsersScors, setOpenUsersScors] = useState(false)
    const [userSearchText, setUserSearchText] = useState('')
    const [userFilter, setUserFilter] = useState('all')
    const [filteredUSers, setFilteredUsers] = useState(examinees)
    const [openInsertActivity, setOpenInsertActivity] = useState(false)
    const [prevData, setPrevData] = useState()
    const [openEdit, setOpenEdit] = useState(false)
    const [extendError, setExtendError] = useState(false)
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false)
    const classes = useStyles()
    const Router = useRouter();
    const Dispatch = useDispatch()
    const activityDescriptives = useSelector((state) => state.activity.activityDescriptives);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.textColor.secondary,
            color: '#fff',
            maxWidth: 174,
            width: 174,
            height: 75,
            fontSize: 12,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            flexDirection: 'column',
        },
    }))(Tooltip);

    useEffect(() => {
        if (activityState)
            setActivity(activityState)
    }, [activityState])

    useEffect(() => {
        if (examineesState)
            setExaminees(examineesState)
    }, [examineesState])

    const dateRender = (date) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(Math.floor(date / 1000));
        return (
            <>
                <span> {day} </span>
                <span className={classes.dateMonth}> {month} </span>
                <span> {year} </span>
                <span> - </span>
                <span> {time} </span>
            </>
        );
    };

    useEffect(() => {
        let addedCodes = [...hashCodes]
        if (activityState) {
            if (activity.multiFile) {
                activity.questions?.map((question) => {
                    question.questionImages?.map((img) => {
                        if (typeof img !== 'object' && addedCodes.indexOf(img) === -1) {
                            addedCodes.push(img)
                            downloadChunkFile(img)
                        }
                    })
                })
            } else {
                let imagesTemp = [...questionImages]
                imagesTemp.map((img, index) => {
                    if (img.hashCode) {
                        if (activity.questionImages.indexOf(img.hashCode) == -1) {
                            imagesTemp.splice(index, 1)
                        }
                    }
                    else {
                        if (activity.questionImages.indexOf(img) == -1) {
                            imagesTemp.splice(index, 1)
                        }
                    }
                })
                activity.questionImages?.map((img) => {
                    if (typeof img !== 'object' && addedCodes.indexOf(img) === -1) {
                        imagesTemp.push(img)
                        addedCodes.push(img)
                        downloadChunkFile(img)
                    }
                })
                setQuestionImages([...imagesTemp])
            }
            setHashCodes([...addedCodes])
        }
    }, [activity])

    useEffect(() => {
        if (fileDatas) {
            if (activity.multiFile) {
                let index;
                activity.questions?.map((question) => {
                    index = question.questionImages?.indexOf(fileDatas.hashCode)
                    if (index !== -1)
                        setQuestionImages([...questionImages, fileDatas])
                })
            }
            else {
                let tmp = []
                let index = questionImages.indexOf(fileDatas.hashCode)
                if (index !== -1) {
                    tmp = [...questionImages]
                    tmp[index] = fileDatas
                    setQuestionImages([...tmp])
                }
            }
        }
    }, [fileDatas])

    const calculateAnswers = (question) => {
        let answers = question.answerInfo.answeredCount || 0;
        let corrections = question.answerInfo.correctedCount || 0;
        if (answers === 0) {
            return (`پاسخ داده نشده`)
        } else {
            return (`${numberFormat.toPersianDigits(answers)} از ${numberFormat.toPersianDigits(question.answerInfo.examineeCount)} نفر پاسخ داده اند - 
        ${corrections === 0 ? `تصحیح نشده` : `${numberFormat.toPersianDigits(corrections)} پاسخ تصحیح شده`}
        `)
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const downloadFile = (file) => {
        if (file.mimeType === "image/jpeg") {
            let tempLink = document.createElement('a');
            tempLink.href = file.url;
            tempLink.setAttribute('download', 'activity.jpg');
            tempLink.click();
        } else if (file.mimeType === "image/png") {
            let tempLink = document.createElement('a');
            tempLink.href = file.url;
            tempLink.setAttribute('download', 'activity.png');
            tempLink.click();
        }
    }
    const handleDeactiveActivity = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activities/active`, {
                "active": !activity.active,
                "id": activity.id
            });
            Dispatch(getActivityDetails(false, activity.id));
            setOpenDeactive(false)
        } catch (err) {
            Dispatch(errorSnackbar(err));
            setOpenDeactive(false)
        }
    }
    const handleExtend = async (date, hour) => {
        setExtendError(false)
        let Mnow = new Date();
        let nowHour = Mnow.getHours();
        let nowMinute = Mnow.getMinutes();
        let flag = true;
        var mm = new Date(date)
        var myToday = new Date(mm.getFullYear(), mm.getMonth(), mm.getDate(), hour[0], hour[1], 0);
        if (myToday < Mnow) {
            if (parseInt(hour[0]) < nowHour) {
                flag = false
            } else if (parseInt(hour[0]) === nowHour) {
                if (parseInt(hour[1]) < nowMinute) {
                    flag = false
                }
            }
        }
       
        if (activity.startTime && (jMoment(myToday).unix()*1000) - activity.startTime < 300000)
            flag = false
        else if (activity.duration && activity.startTime && (jMoment(myToday).unix() * 1000 - activity.startTime) / 60 < activity.duration)
            flag = false

        if (flag) {
            try {
                const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activities/extend`, {
                    "endTime": jMoment(myToday).unix() * 1000,
                    "id": activity.id
                });
                Dispatch(getActivityDetails(false, activity.id));
                setOpenExtend(false)
            } catch (err) {
                Dispatch(errorSnackbar(err));
            }
        } else {
            setExtendError(`زمان انتخابی باید بعد از زمان جاری و زمان شروع باشد`)
        }
    }

    const handleAddSame = () => {
        setPrevData(
            {
                ...activity,
                id: 0,
                activityType: activity.activityTypeOther || activity.activityType,
                examinees: examinees,
                startTime: null,
                endTime: null
            }
        )
        setSameMode(true)
        setOpenInsertActivity(true)
    }
    useEffect(() => {
        !activityDescriptives &&
            Dispatch(
                getActivityDescriptives()
            )
    }, [activityDescriptives])
    return (
        <>
            <InsertActivityDialog
                resetFilter={() => {
                }}
                sameMode={sameMode}
                open={openInsertActivity}
                toggleOpen={() => setOpenInsertActivity(!openInsertActivity)}
                prevData={prevData}
            />
            {openGallery && <GalleryModal
                open={openGallery}
                allowedImages={allowedImages}
                closeModal={() => { setOpenGallery(false) }}
                imagesProp={galleryImages}
                imagesIndexProp={galleryImagesIndex}
            />}
            <ShareModal
                open={openShare}
                closeModal={() => setOpenShare(false)}
                id={activity.id}
            />
            <DeactiveModal
                showModal={openDeactive}
                closeModal={() => setOpenDeactive(false)}
                handelSubmit={() => { handleDeactiveActivity() }}
                active={activity.active}
            />
            <DetailModal
                showModal={openDetail}
                closeModal={() => setOpenDetail(false)}
                initialValues={{ ...activity, examinees: examinees }}
            />
            <UsersScorsDialog
                open={openUsersScors}
                handleClose={() => setOpenUsersScors(false)}
                users={filteredUSers}
                activity={activity}
                changeUserFilter={(e) => { setUserFilter(e.target.value) }}
                changeUserSearchText={(e) => { setUserSearchText(e) }}
                userSearchText={userSearchText}
                userFilter={userFilter}
                descriptives={descriptives}
            />
            <EditActivityDialog
                open={openEdit}
                handleClose={() => {
                    setOpenEdit(false)
                }}
                initialValues={{ ...activity, examinees: examinees }}
                classUsers={classUsers}
                descriptives={allDescriptives}
            />
            {openExtend &&
                <CustomDatePicker
                    title={`تمدید زمان پایان`}
                    disableBack
                    handleCloseAll={() => { }}
                    handleChange={handleExtend}
                    open={openExtend}
                    error={extendError}
                    transparent={false}
                    activeError={extendError}
                    disableError={() => setExtendError(false)}
                    initialValue={Math.floor(activity.endTime / 1000)}
                    initialTime={
                        [numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(activity.endTime / 1000)).hour),
                        numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(activity.endTime / 1000)).minute)]
                    }
                    closeModal={() => setOpenExtend(false)} />
            }
            <div className={classes.activityDetailContainer}>
                <div className={classes.activityHeader}>
                    <div className={classes.activityHeaderInfo}>
                        <ArrowForwardIcon onClick={() => { Router.push('/profile/dashboard/ostad/activity') }} />
                        <CheckList />
                        <div>
                            <Typography noWrap style={{ maxWidth: 150 }}>{activity.activityType === 'EXAM' ? `آزمون` : activity.activityType === 'ASSIGNMENT' ? `تکلیف` : activity.activityTypeOther || `سایر`} - {activity.name}</Typography>
                            <Typography noWrap style={{ maxWidth: 150 }}>{numberFormat.toPersianDigits(examinees.length)} نفر -  {activity.classInfo.title}</Typography>
                        </div>
                    </div>

                    <div className={classes.activityHeaderActions}>
                        <>
                            <HtmlTooltip
                                title={
                                    <>
                                        <Typography style={{ fontSize: 12, marginBottom: 10 }} color="inherit">شروع از: {activity.startTime ? dateRender(activity.startTime) : `انتخاب نشده`}</Typography>
                                        <Typography style={{ fontSize: 12 }} color="inherit">تا تاریخ: {activity.endTime ? dateRender(activity.endTime) : `انتخاب نشده`}</Typography>
                                    </>
                                }
                                aria-label={`hello`}
                                placement="bottom-end"
                                classes={{ tooltip: classes.toolTip }}
                                open={tooltipIsOpen}
                                onOpen={() => setTooltipIsOpen(true)}
                                onClose={() => setTooltipIsOpen(false)}
                            >
                                <img src={clockIcon} onClick={() => {
                                    setTooltipIsOpen(true)
                                }} />
                            </HtmlTooltip>
                            <Typography >
                                <TimeCounter
                                    activity={activity}
                                />
                            </Typography>
                        </>
                        <img src={share} style={{ cursor: 'pointer' }} onClick={() => setOpenShare(true)} />
                        <MoreVertIcon
                            aria-controls="more"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={classes.editBtnRes}
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
                            {isMobile &&
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        setOpenShare(true)
                                        handleClose()
                                    }}
                                >
                                    <Link href={`#`}>اشتراک گذاری</Link>
                                </MenuItem>
                            }
                            <MenuItem
                                className={classes.classDetailLink}
                                onClick={() => {
                                    setOpenDetail(true)
                                    handleClose()
                                }}
                            >
                                <Link href={`#`}>جزئیات</Link>
                            </MenuItem>
                            {(activity.startTime > now) &&
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        setOpenEdit(true)
                                        handleClose()
                                    }}
                                >
                                    <Link href={`#`} >ویرایش</Link>
                                </MenuItem>
                            }
                            {
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        setOpenExtend(true)
                                        handleClose()
                                    }}
                                >
                                    <Link href={`#`}>تمدید</Link>
                                </MenuItem>
                            }
                            {((!activity.active && activity.endTime > now) || activity.startTime > now) &&
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        setOpenDeactive(true)
                                        handleClose()
                                    }}
                                >
                                    <Link href={`#`} >{activity.active && `غیر`} فعالسازی</Link>
                                </MenuItem>
                            }
                            {activity.endTime < now &&
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        setOpenUsersScors(true)
                                        handleClose()
                                    }}
                                >
                                    <Link href={`#`}>نتایج</Link>
                                </MenuItem>
                            }
                            <MenuItem
                                className={classes.classDetailLink}
                            >
                                <Link href={`#`} onClick={() => { handleAddSame() }}>ایجاد فعالیت مشابه</Link>
                            </MenuItem>
                        </StyledMenu>
                    </div>
                </div>
                <div className={classes.activityBody}>
                    {activity.multiFile ?
                        <div className={classes.questionsContainer}>
                            <Typography className={classes.activityNote}>{activity.note}</Typography>
                            {
                                activity.questions.map((question, index) => (
                                    <div className={classes.questionItem}>
                                        <div className={classes.questionTitle}>
                                            <div className={classes.questionNumber}>{numberFormat.toPersianDigits(index + 1)}</div>
                                            <Typography>{question.questionText}</Typography>
                                        </div>
                                        <div className={classes.activityQuestionImages}>
                                            {
                                                question.questionImages?.map((hashCode) => {
                                                    let image;
                                                    let index = questionImages.findIndex(x => x?.hashCode === hashCode)
                                                    if (index !== -1) image = questionImages[index]
                                                    return (
                                                        image?.url &&
                                                        <div>
                                                            <img src={image.url} />
                                                            <div className={classes.overlay}>
                                                                <FullscreenIcon onClick={() => {
                                                                    setGalleryImages([...questionImages])
                                                                    setGalleryImagesIndex(index)
                                                                    setOpenGallery(true)
                                                                    setAllowedImages(question.questionImages)
                                                                }} />
                                                                <DownloadIcon onClick={() => downloadFile(image)} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={classes.questionItemFooter}>
                                            <Typography>
                                                {calculateAnswers(question)}
                                            </Typography>
                                            <div className={classes.answerShow} onClick={question.answerInfo.answeredCount == 0 || !question.answerInfo.answeredCount ? null : () => Router.push('/profile/dashboard/ostad/activity/' + id + '/answers/' + question.id)}>
                                                <p
                                                style={{margin: 0, cursor: 'pointer'}}
                                                className={question.answerInfo.answeredCount == 0 || !question.answerInfo.answeredCount ? classes.disabledSeeBtn : null}
                                                >
                                                    مشاهده
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                        :
                        <>
                            {activity.note && activity.note !== "" ? <Typography className={classes.activityNote}>{activity.note}</Typography> : null }
                            <div
                            className={classes.ostadActivityDetailContainerForQues}
                            >
                                <div className={classes.questionNumbersContainer}>
                                    سوال <span>{convertNumberToLetter(1)}</span> تا <span>{convertNumberToLetter(activity.questions?.length)}</span>
                                </div>
                                <Typography className={classes.activityNote}>{activity.questionText}</Typography>
                                <div className={classes.activityQuestionImages}>
                                    {
                                        questionImages?.map((image, index) => (
                                            image?.url &&
                                            <div>
                                                <img src={image.url} />
                                                <div className={classes.overlay}>
                                                    <FullscreenIcon onClick={() => {
                                                        setGalleryImages([...questionImages])
                                                        setGalleryImagesIndex(index)
                                                        setAllowedImages(questionImages.map((image) => (image.hashCode)))
                                                        setOpenGallery(true)
                                                    }} />
                                                    <DownloadIcon onClick={() => downloadFile(image)} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={classes.answersContainer}>
                                <Typography className={classes.answerTitleFloat}>پاسخ ها</Typography>
                                {
                                    activity.questions?.map((question, index) => (
                                        <div className={classes.answerItem}>
                                            <div className={classes.answerDetail}>
                                                <span>{numberFormat.toPersianDigits(index + 1)}
                                                </span>
                                                {question.answerInfo.answeredCount !== 0 && question.answerInfo.answeredCount ?
                                                <div className={classes.howManyAnswersAndCorrected}>
                                                    <p className={classes.howManyAnswersP}>{`${question.answerInfo.answeredCount} از ${question.answerInfo.examineeCount} نفر پاسخ داده‌اند`}</p>
                                                    <p>{!question.answerInfo.correctedCount || question.answerInfo.correctedCount == 0 ? 'تصحیح نشده' : `${question.answerInfo.correctedCount} پاسخ تصحیح شده`}</p>
                                                </div>
                                                :
                                                <div className={classes.answerShow}>
                                                    <p className={classes.howManyAnswersP} style={{margin: '0px'}}>پاسخ داده نشده</p>
                                                </div>
                                                }
                                            </div>
                                            <p
                                            className={question.answerInfo.answeredCount == 0 || !question.answerInfo.answeredCount ? classes.disabledSeeBtn : null}
                                            onClick={question.answerInfo.answeredCount == 0 || !question.answerInfo.answeredCount ? null : () => Router.push('/profile/dashboard/ostad/activity/' + id + '/answers/' + question.id)}
                                            style={{cursor: 'pointer'}}
                                            >
                                                {isMobile ? 
                                                <img src={question.answerInfo.answeredCount == 0 || !question.answerInfo.answeredCount ? arrowLeftDis : arrowLeft} alt={"see more"}/>
                                                : 'مشاهده'}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default ActivityDetail