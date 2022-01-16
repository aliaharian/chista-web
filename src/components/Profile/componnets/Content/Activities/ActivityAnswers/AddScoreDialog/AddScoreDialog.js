import { Button, CircularProgress, Grid, TextField, Typography } from "@material-ui/core"
import clsx from "clsx"
import { useFormik } from "formik"
import MinusIcon from "../../../../../../../assets/images/MinusIcon"
import PlusIcon from "../../../../../../../assets/images/PlusIcon"
import BlackboardSidebar from "../../../../../../../assets/images/profile/BlackboardSidebar"
import { numberFormat } from "../../../../../../../utilities"
import InputFormMultiline from "../../../../form/InputFormMultiline"
import SelectForm from "../../../../form/SelectForm"
import DialogLayout from "../../../Contacts/dialog/DialogLayout"
import useStyles from './Styles'

function AddScoreDialog({ open, closeModal, question, selectedExaminee, descriptives, activity, ...props }) {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            note: selectedExaminee.note || '',
            score: selectedExaminee.scoring ? selectedExaminee.scoring :
                question.score ?
                    question.questionType === 'MULTIPLE_CHOICE' ?
                        question.correctChoice == selectedExaminee.choice ?
                            question.score : 0
                        : 0
                    : null,
            descriptivePartId: selectedExaminee.descriptivePartId ?
                selectedExaminee.descriptivePartId :
                descriptives.length !== 0 ? descriptives[0].id : null

        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            if (question.score) {
                props.handleSubmitScore({
                    "note": values.note,
                    "id": selectedExaminee.id,
                    "scoring": values.score
                })
            } else {
                props.handleSubmitScore({
                    "descriptivePartId": values.descriptivePartId,
                    "id": selectedExaminee.id,
                    "note": values.note,
                })
            }
        },
    });
    function toFixedIfNecessary(value, dp) {
        return +parseFloat(value).toFixed(dp);
    }
    return (
        <DialogLayout
            open={open}
            headerStyle={{ marginBottom: 0 }}
            customBack={false}
            withCloseIcon={false}
            closeModal={closeModal}
            className={{
                root: classes.root
            }}
            whiteCloseIcon={true}
            style={{ padding: 0 }}
            title={`اعلام نتیجه`}
        >
            <div className={classes.dialogContent}>
                <div className={classes.scoreTitle}>
                    {
                        question.score ?
                            <Typography>
                                بارم تعیین شده برای این سوال به صورت نمره ای و  از
                                &nbsp;
                                {numberFormat.toPersianDigits(toFixedIfNecessary(question.score,2))}
                                &nbsp;
                                نمره می باشد
                            </Typography> :
                            <Typography>
                                بارم تعیین شده برای این سوال به صورت توصیفی ({activity.descriptiveName}) می باشد
                            </Typography>
                    }
                    {
                        question.questionType === 'MULTIPLE_CHOICE' &&
                        <Typography>
                            پاسخ سوال تستی {question.correctChoice == selectedExaminee.choice ? <span style={{ color: '#00dbb5' }}>درست</span> : <span style={{ color: '#ff6575' }}>نادرست</span>} بود
                        </Typography>
                    }
                </div>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <Grid container spacing={0}>
                        {
                            (question.score && question.questionType === 'DESCRIPTIVE') &&
                            <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                                <div className={classes.countModalBody}>
                                    <Button disabled={formik.values.score >= question.score} onClick={() => {
                                        formik.setFieldValue('score', parseInt(formik.values.score) + 1);
                                    }}>
                                        <PlusIcon />
                                    </Button>
                                    <div style={{ width: '100%' }}>
                                        <TextField
                                            type={'text'}
                                            className={classes.durationTextField}
                                            disableUnderline
                                            value={numberFormat.toPersianDigits(formik.values.score)}
                                            onChange={(e) => {
                                                let value = e.target.value
                                                console.log('va', value)
                                                const regex = /^[0-9]{1,2}([,.][0-9]{1,2})?$/;
                                                if (!isNaN(parseFloat(numberFormat.toEnglishDigits(value))) || value === '') {
                                                    if (regex.test(value.substr(value.length - 1)) || value === '' || (value.substr(value.length - 1) === '.' && value.match(/\./g).length === 1)) {
                                                        formik.setFieldValue('score', `${numberFormat.toEnglishDigits(value)}`);
                                                    }
                                                }
                                            }}
                                        />
                                        <span> نمره</span>
                                    </div>
                                    <Button disabled={formik.values.score < 1} onClick={() => {
                                        formik.setFieldValue('score', parseInt(formik.values.score) - 1);
                                    }}>
                                        <MinusIcon />
                                    </Button>
                                </div>
                            </Grid>
                        }
                        {!question.score &&
                         <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Grid item xs={12}>
                                <SelectForm
                                    label=""
                                    activityStyle
                                    name={"descriptivePartId"}
                                    formik={formik}
                                    svgIcon
                                    icon={<BlackboardSidebar />}
                                    options={
                                        [
                                            { title: "انتخاب کنید", value: '""' },
                                            ...descriptives.map((desc) => (
                                                { title: desc.name, value: desc.id }
                                            ))
                                        ]
                                    }
                                />
                            </Grid>
                        </Grid>}

                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Grid item xs={12}>
                                <InputFormMultiline
                                    errorClass={classes.formError}
                                    maxCharacter={100}
                                    label=" دیدگاه استاد"
                                    characterNumber
                                    name={"note"}
                                    formik={formik}
                                    rows={7}
                                    className={classes.decription}
                                    placeholder="این توضیحات مربوط به دیدگاه استاد می باشد"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <button
                        type="submit"
                        className={
                            clsx(
                                classes.stepBTN,
                                question.score && formik.values.score > question.score && classes.disableBtn
                            )
                        }
                    >{props.loading ? <CircularProgress size={13} /> : `تایید`}</button>
                </form>
            </div>
        </DialogLayout>
    )
}

export default AddScoreDialog