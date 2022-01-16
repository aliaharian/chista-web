import { useState } from "react"
import { useDispatch } from "react-redux"
import { getActivityDetails, getActivityExaminees } from "../../../../../../../../../redux/activity"
import { errorSnackbar } from "../../../../../../../../../redux/user"
import DialogLayout from "../dialog/DialogLayout"
import EditName from "../ActivityItems/EditName"
import useStyles from './Styles'
import axios from "axios";
import EditActivityType from "../ActivityItems/EditActivityType"
import EditNote from "../ActivityItems/EditNote"
import EditExaminees from "../ActivityItems/EditExaminees"
import CustomDatePicker from "../../../InsertActivity/Steps/SetSetting/SettingItem/CustomDatePicker"
import { dateTime, numberFormat } from "../../../../../../../../utilities"
import jMoment from "moment-jalaali";
import EditDuration from "../ActivityItems/EditDuration"
import EditScoreType from "../ActivityItems/EditScoreType"
import EditQuestionType from "../ActivityItems/EditQuestionType"
import EditMultiFile from "../ActivityItems/EditMultiFile"
import EditQuestionsCount from "../ActivityItems/EditQuestionsCount"
import AddQuestions from "../../../InsertActivity/Steps/AddQuestions"

function EditFormLayout({ open, closeModal, selectedItem, initialValues, classUsers, descriptives }) {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [startError, setStartError] = useState(false)
    const [endError, setEndError] = useState(false)
    const Dispatch = useDispatch()
    const renderItem = () => {
        switch (selectedItem.type) {
            case 'name':
                return (
                    <EditName
                        initialValues={
                            {
                                name: initialValues.name
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)
            case 'activityType':
                return (
                    <EditActivityType
                        initialValues={
                            {
                                activityType: initialValues.activityType,
                                activityTypeOther: initialValues.activityTypeOther
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)
            case 'note':
                return (
                    <EditNote
                        initialValues={
                            {
                                note: initialValues.note
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)
            case 'examinees':
                return (
                    <EditExaminees
                        initialValues={
                            {
                                examinees: initialValues.examinees
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                        classUsers={classUsers}
                    />)
            case 'duration':
                return (
                    <EditDuration
                        initialValues={
                            {
                                duration: initialValues.duration
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)
            case 'scoreType':
                return (
                    <EditScoreType
                        initialValues={
                            {
                                ...initialValues,
                                scoreType: initialValues.scoring ? `scoring` : `descriptive`,
                                descriptiveId: initialValues.descriptiveId || null,
                                scoring: initialValues.scoring || "",
                                questions: initialValues.questions
                            }
                        }
                        descriptives={descriptives}
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />
                    )
            case 'questionType':
                return (
                    <EditQuestionType
                        initialValues={
                            {
                                ...initialValues,
                                negativeScore: initialValues.negative ? initialValues.negativeScore || '0' : '0',
                                questionCount: initialValues.questionsCount,
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)

            case 'multiFile':
                return (
                    <EditMultiFile
                        initialValues={
                            {
                                ...initialValues,
                                negativeScore: initialValues.negative ? initialValues.negativeScore || '0' : '0',
                                questionCount: initialValues.questionsCount,
                                tmpQuestions: initialValues.questions
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)
            case 'questionsCount':
                return (
                    <EditQuestionsCount
                        initialValues={
                            {
                                ...initialValues,
                                negativeScore: initialValues.negative ? initialValues.negativeScore || '0' : '0',
                                questionCount: initialValues.questionsCount,
                            }
                        }
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />)
            case 'questions':
                return (
                    <AddQuestions
                        initialValues={
                            {
                                ...initialValues,
                                negativeScore: initialValues.negative ? initialValues.negativeScore || '0' : '0',
                                questionCount: initialValues.questionsCount,
                            }
                        }
                        handelStep={(step, values) => {
                            let questionsTemp = []
                            values.questions.map((q) => {
                                questionsTemp.push({
                                    "answerImages": values.multiFile ? q.answerImages?.map(function (image) {
                                        return image.hashCode !== undefined ? image.hashCode : image;
                                    }) : [],
                                    "answerText": values.multiFile ? q.answerTitle || q.answerText : "",
                                    "correctChoice": !q.correctChoice ? null : q.correctChoice,
                                    // "note": "string",
                                    "questionImages": values.multiFile ? q.questionImages?.map(function (image) {
                                        return image.hashCode !== undefined ? image.hashCode : image;
                                    }) : [],
                                    "questionText": values.multiFile ? q.questionTitle || q.questionText : '',
                                    "questionType": values.multiFile ? q.singleQuestionType || q.questionType : q.questionType||values.questionType,
                                    "score": q.score,
                                    "sequence": q.sequence || 0
                                })
                            })

                            let answerImages = []
                            !values.multiFile && values.answerImages?.map((image) => {
                                answerImages.push(image.hashCode || image)
                            })

                            let questionImages = []
                            !values.multiFile && values.questionImages?.map((image) => {
                                questionImages.push(image.hashCode || image)

                            })
                            handleSubmit({
                                answerImages: answerImages,
                                answerText: values.answerTitle || null,
                                questionImages: questionImages,
                                questionText: values.questionTitle || null,
                                questions: questionsTemp,
                            })
                        }}
                    />
                )
        }
    }
    const handleSubmit = async (values, examinees = false) => {
        try {
            setLoading(true)
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activities/edit`, {
                id: initialValues.id,
                ...values
            });
            if (examinees) {
                Dispatch(getActivityExaminees(false, initialValues.id));
            } else {
                Dispatch(getActivityDetails(false, initialValues.id));
            }
            setLoading(false)
            closeModal()
        } catch (err) {
            Dispatch(errorSnackbar(err));
            closeModal()
        }
    }
    return (
        (selectedItem.type === 'startTime' || selectedItem.type === 'endTime') ?
            <CustomDatePicker
                title={` ویرایش زمان ${selectedItem.type === 'startTime' ? `شروع ` : `پایان`}`}
                disableBack
                activeError
                justSubmit
                selectedItem={selectedItem.type}
                error={selectedItem.type === 'startTime' ? startError : endError}
                disableError={() => {
                    selectedItem.type === 'startTime' ? setStartError(false) : setEndError(false)
                }}
                handleCloseAll={() => { }}
                handleChange={(date, hour) => {
                    let flag = true
                    let now = new Date();
                    let mm = new Date(date)
                    let myToday = new Date(mm.getFullYear(), mm.getMonth(), mm.getDate(), hour[0], hour[1], 0);
                    if (myToday <= now) {
                        selectedItem.type === 'startTime' ? setStartError('تاریخ و زمان انتخابی باید بزرگتر از زمان فعلی باشد') : setEndError('تاریخ و زمان انتخابی باید بزرگتر از زمان فعلی باشد')
                        flag = false
                    }
                    if (selectedItem.type === 'startTime') {
                        if (jMoment(myToday).unix() >= Math.floor(initialValues.endTime / 1000)) {
                            setStartError('زمان شروع باید کوچکتر از زمان پایان باشد')
                            flag = false
                        }
                        if (Math.floor(initialValues.endTime / 1000) - jMoment(myToday).unix() <300) {
                            setStartError('حد فاصل زمان شروع و پایان باید بیشتر از ۵ دقیقه باشد')
                            flag = false
                        }
                    } else if (selectedItem.type === 'endTime') {
                        if (jMoment(myToday).unix() - Math.floor(initialValues.startTime / 1000)<300) {
                            setEndError('حد فاصل زمان شروع و پایان باید بیشتر از ۵ دقیقه باشد')
                            flag = false
                        }
                    }

                    if (flag) {
                        selectedItem.type === 'startTime' ?
                            handleSubmit({
                                startTime: jMoment(myToday).unix() * 1000
                            })
                            :
                            handleSubmit({
                                endTime: jMoment(myToday).unix() * 1000
                            })
                    }
                }}
                open={open}
                initialValue={selectedItem.type === 'startTime' ? Math.floor(initialValues.startTime / 1000) : Math.floor(initialValues.endTime / 1000)}
                initialTime={selectedItem.type === 'startTime' ? [numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(initialValues.startTime / 1000)).hour), numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(initialValues.startTime / 1000)).minute)] : [numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(initialValues.endTime / 1000)).hour), numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(initialValues.endTime / 1000)).minute)]}
                closeModal={closeModal} />
            :
            <DialogLayout
                open={open}
                headerStyle={{ marginBottom: 0 }}
                customBack
                closeModal={closeModal}
                className={{
                    root: classes.root
                }}
                style={{ padding: 0, position: 'static' }}
                title={`ویرایش ${selectedItem.title}`}
                transparent
            >
                {renderItem()}
            </DialogLayout>
    )
}

export default EditFormLayout