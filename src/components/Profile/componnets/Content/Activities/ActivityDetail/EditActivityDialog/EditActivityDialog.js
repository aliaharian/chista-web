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
                title={`ویرایش فعالیت`}
            >
                <div style={{ width: '100%', height: 82, top: -98, position: 'absolute', zIndex: 0 }}
                ></div>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container className={classes.activityItemsMain}>
                        <ActivityItem
                            name={`نام فعالیت`}
                            value={initialValues.name}
                            icon={<CheckList />}
                            handleChange={(e) => { handleOpenEditForm('name', `نام فعالیت`) }}
                        />
                        <ActivityItem
                            name={`نوع فعالیت`}
                            value={initialValues.activityType === 'EXAM' ? `آزمون` : initialValues.activityType === 'ASSIGNMENT' ? `تکلیف` : initialValues.activityTypeOther || `سایر`}
                            icon={<Blackboard />}
                            handleChange={(e) => { handleOpenEditForm('activityType', 'نوع فعالیت') }}
                        />
                        <ActivityItem
                            name={`توضیح مختصر`}
                            value={initialValues.note}
                            icon={<Note />}
                            handleChange={(e) => { handleOpenEditForm('note', `توضیح مختصر`) }}
                        />
                        <ActivityItem
                            name={`اعضای کلاس`}
                            value={initialValues.examinees.length === 1 ? examineeNameRender(initialValues.examinees[0]) : examineeNameRender(initialValues.examinees[0]) + ' و ' + numberFormat.toPersianDigits(initialValues.examinees.length - 1) + ' نفر دیگر'}
                            icon={<Blackboard />}
                            handleChange={(e) => { handleOpenEditForm('examinees', `اعضای کلاس`) }}
                        />
                        <ActivityItem
                            name={`زمان شروع`}
                            value={initialValues.startTime ? dateRender(initialValues.startTime) : 'انتخاب نشده'}
                            icon={<CalendarIcon />}
                            handleChange={(e) => { handleOpenEditForm('startTime', `زمان شروع`) }}
                        />
                        <ActivityItem
                            name={`زمان پایان`}
                            value={initialValues.endTime ? dateRender(initialValues.endTime) : 'انتخاب نشده'}
                            icon={<CalendarIcon />}
                            handleChange={(e) => { handleOpenEditForm('endTime', `زمان پایان`) }}
                        />
                        <ActivityItem
                            name={`طول مدت فعالیت`}
                            value={initialValues.duration ? numberFormat.toPersianDigits(initialValues.duration) + ' دقیقه' : 'انتخاب نشده'}
                            icon={<ClockIcon />}
                            handleChange={(e) => { handleOpenEditForm('duration', `طول مدت فعالیت`) }}
                        />
                        <ActivityItem
                            name={`شیوه محاسبه نتیجه`}
                            value={initialValues.scoring ? `نمره ای` : `توصیفی`}
                            icon={<NegativePoint />}
                            handleChange={(e) => { handleOpenEditForm('scoreType', `شیوه محاسبه نتیجه`) }}
                        />
                        <ActivityItem
                            name={`نحوه طراحی سوالات`}
                            value={initialValues.questionType === 'DESCRIPTIVE' ? `تشریحی` : initialValues.questionType === 'MULTIPLE_CHOICE' ? `تستی` : `ترکیبی`}
                            icon={<BookmarkIcon />}
                            handleChange={(e) => { handleOpenEditForm('questionType', `نحوه طراحی سوالات`) }}
                        />
                        <ActivityItem
                            name={`نحوه تعریف سوالات`}
                            value={initialValues.multiFile ? `جداگانه` : `گروهی`}
                            icon={<Blackboard />}
                            handleChange={(e) => { handleOpenEditForm('multiFile', `نحوه تعریف سوالات`) }}
                        />
                        <ActivityItem
                            name={`تعداد سوالات `}
                            value={numberFormat.toPersianDigits(initialValues.questionsCount) + ' سوال'}
                            icon={<Note />}
                            handleChange={(e) => { handleOpenEditForm('questionsCount', `تعداد سوالات `) }}
                        />
                        <ActivityItem
                            name={`مشخصات سوالات`}
                            value={numberFormat.toPersianDigits(initialValues.questions.length) + ' سوال'}
                            icon={<CheckList />}
                            handleChange={(e) => { handleOpenEditForm('questions', `مشخصات سوالات`) }}
                        />
                    </Grid>
                </Scrollbars>
            </DialogLayout>
        </>
    )
}

export default EditActivityDialog