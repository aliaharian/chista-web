import { Grid } from "@material-ui/core"
import { useRef, useState } from "react"
import Scrollbars from "react-custom-scrollbars"
import CheckList from "../../../../../../../assets/images/CheckList"
import Note from "../../../../../../../assets/images/Note"
import Blackboard from "../../../../../../../assets/images/profile/BlackboardSidebar"
import { dateTime, numberFormat } from "../../../../../../../utilities"
import DialogLayout from "./dialog/DialogLayout"
import BookmarkIcon from '../../../../../../../assets/images/BookmarkAlt'
import ActivityItem from "./ActivityItem"
import useStyles from './Styles'
import NegativePoint from "../../../../../../../assets/images/NegativePoint"
import CalendarIcon from "../../../../../../../assets/images/profile/registerOstad/CalendarIcon"
import ClockIcon from "../../../../../../../assets/images/ClockIcon";
import EditFormLayout from "./EditForm/EditFormLayout"

function EditActivityDialog(props) {
    const classes = useStyles()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [editFormOpen, setEditFormOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState()

    const { initialValues } = props
    const examineeNameRender = (examinee) => {
        let name = ""
        if (examinee.memberInfo.firstName)
            name += examinee.memberInfo.firstName
        
        if (examinee.memberInfo.lastName)
            name += ' '+examinee.memberInfo.lastName
        
        if (!examinee.memberInfo.firstName && !examinee.memberInfo.lastName)
            name += examinee.memberInfo.phone
        
        return name;
    }
    const dateRender = (date) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(Math.floor(date / 1000));
        return (
            <div>
                <span> {day} </span>
                <span className={classes.dateMonth}> {month} </span>
                <span> {year} </span>
                <span> - </span>
                <span> {time} </span>
            </div>
        );
    };
    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }

    const handleOpenEditForm = (type, title) => {
        setSelectedItem({
            type: type,
            title: title
        })
        setEditFormOpen(true)
    }
    return (
        <>
            {editFormOpen &&
                <EditFormLayout
                    open={editFormOpen}
                    closeModal={() => setEditFormOpen(false)}
                    selectedItem={selectedItem}
                    initialValues={initialValues}
                    classUsers={props.classUsers}
                    descriptives={props.descriptives}
                />}
            <DialogLayout
                customBack
                hasScroll
                open={props.open}
                closeModal={props.handleClose}
                className={{
                    root: classes.root
                }}
                style={{ padding: '0 0 0 0' }}
                title={`???????????? ????????????`}
            >
                <div style={{ width: '100%', height: 82, top: -98, position: 'absolute', zIndex: 0 }}
                ></div>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container className={classes.activityItemsMain}>
                        <ActivityItem
                            name={`?????? ????????????`}
                            value={initialValues.name}
                            icon={<CheckList />}
                            handleChange={(e) => { handleOpenEditForm('name', `?????? ????????????`) }}
                        />
                        <ActivityItem
                            name={`?????? ????????????`}
                            value={initialValues.activityType === 'EXAM' ? `??????????` : initialValues.activityType === 'ASSIGNMENT' ? `??????????` : initialValues.activityTypeOther || `????????`}
                            icon={<Blackboard />}
                            handleChange={(e) => { handleOpenEditForm('activityType', '?????? ????????????') }}
                        />
                        <ActivityItem
                            name={`?????????? ??????????`}
                            value={initialValues.note}
                            icon={<Note />}
                            handleChange={(e) => { handleOpenEditForm('note', `?????????? ??????????`) }}
                        />
                        <ActivityItem
                            name={`?????????? ????????`}
                            value={initialValues.examinees.length === 1 ? examineeNameRender(initialValues.examinees[0]) : examineeNameRender(initialValues.examinees[0]) + ' ?? ' + numberFormat.toPersianDigits(initialValues.examinees.length - 1) + ' ?????? ????????'}
                            icon={<Blackboard />}
                            handleChange={(e) => { handleOpenEditForm('examinees', `?????????? ????????`) }}
                        />
                        <ActivityItem
                            name={`???????? ????????`}
                            value={initialValues.startTime ? dateRender(initialValues.startTime) : '???????????? ????????'}
                            icon={<CalendarIcon />}
                            handleChange={(e) => { handleOpenEditForm('startTime', `???????? ????????`) }}
                        />
                        <ActivityItem
                            name={`???????? ??????????`}
                            value={initialValues.endTime ? dateRender(initialValues.endTime) : '???????????? ????????'}
                            icon={<CalendarIcon />}
                            handleChange={(e) => { handleOpenEditForm('endTime', `???????? ??????????`) }}
                        />
                        <ActivityItem
                            name={`?????? ?????? ????????????`}
                            value={initialValues.duration ? numberFormat.toPersianDigits(initialValues.duration) + ' ??????????' : '???????????? ????????'}
                            icon={<ClockIcon />}
                            handleChange={(e) => { handleOpenEditForm('duration', `?????? ?????? ????????????`) }}
                        />
                        <ActivityItem
                            name={`???????? ???????????? ??????????`}
                            value={initialValues.scoring ? `???????? ????` : `????????????`}
                            icon={<NegativePoint />}
                            handleChange={(e) => { handleOpenEditForm('scoreType', `???????? ???????????? ??????????`) }}
                        />
                        <ActivityItem
                            name={`???????? ?????????? ????????????`}
                            value={initialValues.questionType === 'DESCRIPTIVE' ? `????????????` : initialValues.questionType === 'MULTIPLE_CHOICE' ? `????????` : `????????????`}
                            icon={<BookmarkIcon />}
                            handleChange={(e) => { handleOpenEditForm('questionType', `???????? ?????????? ????????????`) }}
                        />
                        <ActivityItem
                            name={`???????? ?????????? ????????????`}
                            value={initialValues.multiFile ? `??????????????` : `??????????`}
                            icon={<Blackboard />}
                            handleChange={(e) => { handleOpenEditForm('multiFile', `???????? ?????????? ????????????`) }}
                        />
                        <ActivityItem
                            name={`?????????? ???????????? `}
                            value={numberFormat.toPersianDigits(initialValues.questionsCount) + ' ????????'}
                            icon={<Note />}
                            handleChange={(e) => { handleOpenEditForm('questionsCount', `?????????? ???????????? `) }}
                        />
                        <ActivityItem
                            name={`???????????? ????????????`}
                            value={numberFormat.toPersianDigits(initialValues.questions.length) + ' ????????'}
                            icon={<CheckList />}
                            handleChange={(e) => { handleOpenEditForm('questions', `???????????? ????????????`) }}
                        />
                    </Grid>
                </Scrollbars>
            </DialogLayout>
        </>
    )
}

export default EditActivityDialog