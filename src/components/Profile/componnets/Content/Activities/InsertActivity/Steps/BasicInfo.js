import React, { useState, memo, useRef, useEffect } from "react";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import CameraAltRoundedIcon from "@material-ui/icons/CameraAltRounded";
import DeleteIcon from '../../../../../../../assets/images/trashIcon.svg'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import InputForm from "../../../../form/InputForm";
import InputFormMultiline from "../../../../form/InputFormMultiline";
import Blackboard from "../../../../../../../assets/images/profile/BlackboardSidebar";
import Bookmark from "../../../../../../../assets/images/BookmarkAlt";
import useStyles from "./Styles";
import { transform } from "../../../../../../../utilities";
import { withSnackbar } from "notistack";
import CheckList from "../../../../../../../assets/images/CheckList";
import PacketSelect from "../../../../../../form/PacketSelect";
import BlackboardSidebar from "../../../../../../../assets/images/profile/BlackboardSidebar";
import SelectForm from "../../../../form/SelectForm";
import ActivityTypeDialog from './ActivityTypeDialog'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../../../../../../../redux/adviserDashboard";
import Scrollbars from "react-custom-scrollbars";
import NegativePoint from "../../../../../../../assets/images/NegativePoint";

const BasicInfo = ({ handelStep, initialValues, resetQuestions, resetExaminees, ...props }) => {
    const classes = useStyles();
    const [openTypeDialog, setOpenTypeDialog] = useState(false)
    const [activityTypeCustom, setActivityTypeCustom] = useState(initialValues.activityTypeOther ? initialValues.activityTypeOther : initialValues.activityType !== 'EXAM' && initialValues.activityType !== 'ASSIGNMENT' && initialValues.activityType !== `""` ? initialValues.activityType : null)
    const [myClassData, setMyClassData] = useState();
    const Dispatch = useDispatch()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [negativeField, setNegativeField] = useState(initialValues.questionType === 'MULTIPLE_CHOICE' ? true : false);
    const [describeTypeField, setDescribeTypeField] = useState(initialValues?.resultType === 'DESCRIPTIVE' ? true : false)
    const [maxGradeField, setMaxGradeField] = useState(initialValues?.resultType === 'NUMERIC' ? true : false)
    const activityDescriptives = useSelector((state) => state.activity.activityDescriptives);
    const [activityType, setActivityType] = useState(null)
    const allClasses = useSelector((state) => state.adviserDashboard.allClasses);
    const [className, setClassName] = useState(null)
    const [questionType, setQuestionType] = useState(null)
    const [minusNum, setMinusNum] = useState(null)
    const [questionDefinition, setQuestionDefinition] = useState(null)
    const [typeResult, setTypeResult] = useState(null)
    const [describeType, setDescribeType] = useState(null)
    const theme = useTheme();
    const isDesktopSm = useMediaQuery(theme.breakpoints.down(1800));
    const isMobile = useMediaQuery(theme.breakpoints.down(480));

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "?????? ?????????? ???????? ???? ?? ?????????????? ????????")
            .max(30, "?????? ?????????? ?????????? ???? ???? ?????????????? ????????")
            .required("?????? ???????????? ???? ???????? ????????????"),
        description: Yup.string()
            .min(10, "?????????????? ?????????? ???????? ???? ???? ?????????????? ????????")
            .max(100, "?????????????? ?????????? ?????????? ???? ?????? ?????????????? ????????"),

        questionCount: Yup.number().
            required("???? ???????? ?????? ???????? ???????????? ???? ????????").positive('?????????? ???????????? ???????? ?????????? ???? ?????? ????????').integer(),
        activityType: Yup.string().test(
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        activityClassId: Yup.string().test(
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        questionType: Yup.string().test(
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        negativePoint: negativeField && Yup.string().test( //add exp
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        multiFile: Yup.string().test(
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        resultType: Yup.string().test(
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        describeType: describeTypeField && Yup.string().test( // add exp
            'is-empty',
            "???? ???????? ?????? ???????? ???????????? ???? ????????",
            (value, context) => value !== `""`,
        ),

        maxGrade: maxGradeField && Yup.string()
            .required("???? ???????? ?????? ???????? ???????????? ???? ????????")
            .test('min', '???????? ???????? ???????????? ???? ?????? ????????', val => parseInt(val) > 0)
            .test('max', '???????? ???????? ???????????? ???? ?????? ????????', val => parseInt(val) <= 100)
    });

    useEffect(() => {
        if (!allClasses) {
            Dispatch(getAllClasses(process.env.REACT_APP_OSTAD_ROLE_TYPE, true))
        } else if (allClasses && !myClassData) {
            setMyClassData(allClasses)
            if (initialValues?.classId) {
                formik.setFieldValue('activityClassId', initialValues?.classId);
                formik.setFieldValue('addContactList', allClasses.find(x => x.id == initialValues?.classId)?.membersInfo);
            }
            if (initialValues?.activityClass) {
                formik.setFieldValue('activityClassId', initialValues?.activityClass.id);
                formik.setFieldValue('addContactList', initialValues?.activityClass.membersInfo);
            }
        }
    }, [allClasses])

    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            activityType: `""`,
            activityClass: `""`,
            activityClassId: initialValues.classId || `""`,
            description: "",
            addContactList: [],
            questionCount: '',
            questionType: `""`,
            negative: false,
            negativePoint: `""`,
            multiFile: `""`,
            resultType: `""`,
            describeType: `""`,
            maxGrade: '',
            ...initialValues,
            negativePointStr:initialValues.negativePoint=='0'?"??????????":initialValues.negativePoint=='0.5'?'??/?? ????????':initialValues.negativePoint=='0.3333'?'??/?? ????????':initialValues.negativePoint=='0.25'?'??/?? ????????':'??????????',
            activityType: (initialValues?.activityTypeOther) ? (initialValues?.activityTypeOther) : initialValues?.activityType
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            handelStep("addMember", {
                ...values,
            });
        },
    });

    const handleChangeActivityType = (e) => {
        setActivityType(e.target.value)
        if (e.target.value === 'ETC') {
            setOpenTypeDialog(true)
        }
    }

    const handleChangeQuestionType = (e) => {
        setQuestionType(e.target.value)
        if (e.target.value === 'MULTIPLE_CHOICE') {
            setNegativeField(true)
            formik.setFieldValue('resultType', 'NUMERIC');
            setDescribeTypeField(false)
            setMaxGradeField(true)

        } else {
            setNegativeField(false)
            formik.setFieldValue('negative', false);
            formik.setFieldValue('negativePointStr', '??????????');
        }
        resetQuestions()
        resetFormikQuestions()
    }
    const resetFormikQuestions = () => {
        formik.setFieldValue('questions', null);
        formik.setFieldValue('questionTitle', null);
        formik.setFieldValue('answerTitle', null);
        formik.setFieldValue('questionImages', null);
        formik.setFieldValue('answerImages', null);
    }
    const resetFormikExaminees = () => {
        formik.setFieldValue('examinees', null);
        formik.setFieldValue('examineeCount', 0);
    }
    const renderClassData = () => {
        if (myClassData) {
            let items = [{ title: "???????????? ????????", value: `""` }]
            myClassData.map((myClass) => (
                items.push({ title: myClass.title, value: myClass.id })
            ))
            return items;
        } else {
            return [
                { title: "???????????? ????????", value: `""` }
            ]
        }
    }

    const renderDescribeType = () => {
        let items = [{ title: "???????????? ????????", value: `""` }]
        activityDescriptives?.map((item) => {
            items.push({
                title: item.name, value: item.id
            })
        })
        return items;
    }
    return (
        <div className={classes.baseInfoMainContainer}>
            <div className={classes.baseInfoHeaderElement}></div>
            <ActivityTypeDialog
                open={openTypeDialog}
                handleClose={() => {
                    if (!activityTypeCustom) {
                        formik.setFieldValue('activityType', `""`);
                    } else {
                        formik.setFieldValue('activityType', activityTypeCustom);
                    }
                    setOpenTypeDialog(false)
                }}
                handleSubmit={(val) => {
                    setActivityTypeCustom(val.activityTypeEtc)
                    formik.setFieldValue('activityType', val.activityTypeEtc);
                    setOpenTypeDialog(false)
                }}
            />
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Grid item xs={12}>
                                <InputForm
                                    errorClass={classes.formError}
                                    label="?????? ????????????"
                                    className={classes.formInput}
                                    errorWrapperClass={classes.errorWrapper}
                                    name={"name"}
                                    formik={formik}
                                    disabled={props.sameMode}
                                    svgIcon
                                    icon={<CheckList />}
                                    required
                                    placeholder={'????????: ?????? ?????? ??????????'}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 20 }}>
                                <SelectForm
                                    label="?????? ????????????"
                                    name={"activityType"}
                                    formik={formik}
                                    activityStyle
                                    className={classes.formInput}
                                    handleChange={(e) => handleChangeActivityType(e)}
                                    svgIcon
                                    disabled={props.sameMode}
                                    errorClass={classes.formError}
                                    selectedValue={activityType}
                                    icon={<Blackboard />}
                                    required
                                    options={activityTypeCustom ?
                                        [
                                            { title: "???????????? ????????", value: `""` },
                                            { title: "??????????", value: 'EXAM' },
                                            { title: "??????????", value: 'ASSIGNMENT' },
                                            { title: activityTypeCustom, value: activityTypeCustom },
                                            { title: "????????", value: 'ETC' },
                                        ]
                                        : [
                                            { title: "???????????? ????????", value: `""` },
                                            { title: "??????????", value: 'EXAM' },
                                            { title: "??????????", value: 'ASSIGNMENT' },
                                            { title: "????????", value: 'ETC' },
                                        ]
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 20 }}>
                                <SelectForm
                                    label="????????"
                                    activityStyle
                                    name={"activityClassId"}
                                    formik={formik}
                                    svgIcon
                                    className={classes.formInput}
                                    errorClass={classes.formError}
                                    selectedValue={className}
                                    handleChange={(e) => {
                                        formik.setFieldValue('addContactList', myClassData.find(x => x.id === e.target.value).membersInfo);
                                        formik.setFieldValue('activityClass', myClassData.find(x => x.id === e.target.value));
                                        formik.setFieldValue('examinees', null);
                                        formik.setFieldValue('examineeCount', 0);
                                        resetExaminees()
                                        resetFormikExaminees()
                                        setClassName(e.target.value)
                                    }}
                                    icon={<Blackboard />}
                                    required
                                    options={
                                        renderClassData()
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputFormMultiline
                                    errorClass={classes.formError}
                                    maxCharacter={100}
                                    label=" ?????????????? ??????????"
                                    characterNumber
                                    name={"description"}
                                    formik={formik}
                                    rows={7}
                                    disabled={props.sameMode}
                                    className={classes.decription}
                                    placeholder="?????? ?????????????? ?????????? ???? ???? ???????????? ???? ????????"
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 20 }}>
                                <InputForm
                                    errorClass={classes.formError}
                                    label="?????????? ????????????"
                                    disabled={props.sameMode}
                                    placeholder={'????????: 20'}
                                    className={classes.formInput}
                                    errorWrapperClass={classes.errorWrapper}
                                    name={"questionCount"}
                                    formik={formik}
                                    maxLength={3}
                                    numberOnly
                                    onChange={() => {
                                        resetQuestions()
                                        resetFormikQuestions()
                                    }}
                                    svgIcon
                                    icon={<CheckList />}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 20 }}>
                                <SelectForm
                                    activityStyle
                                    label="???????? ?????????? ????????????"
                                    name={"questionType"}
                                    formik={formik}
                                    className={classes.formInput}
                                    disabled={props.sameMode}
                                    selectedValue={questionType}
                                    handleChange={handleChangeQuestionType}
                                    svgIcon
                                    errorClass={classes.formError}
                                    icon={<Bookmark />}
                                    required
                                    options={
                                        [
                                            { title: "???????????? ????????", value: `""` },
                                            { title: "????????", value: 'MULTIPLE_CHOICE' },
                                            { title: "????????????", value: 'DESCRIPTIVE' },
                                            { title: "????????????", value: 'GROUP' }
                                        ]
                                    }
                                />
                            </Grid>
                            {negativeField &&
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <SelectForm
                                        activityStyle
                                        label="???????? ???????? (???????????? ????????)"
                                        name={"negativePoint"}
                                        formik={formik}
                                        errorClass={classes.formError}
                                        className={classes.formInput}
                                        disabled={props.sameMode}
                                        handleChange={(e) => {
                                            setMinusNum(e.target.value)
                                            if (e.target.value === '0') {
                                                formik.setFieldValue('negative', false);
                                                formik.setFieldValue('negativePointStr', '??????????');
                                            } else {
                                                formik.setFieldValue('negativePointStr', true);
                                                switch (e.target.value) {
                                                    case '0.5':
                                                        formik.setFieldValue('negativePointStr', '??/?? ????????');
                                                        break;
                                                    case '0.3333':
                                                        formik.setFieldValue('negativePointStr', '??/?? ????????');
                                                        break;
                                                    case '0.25':
                                                        formik.setFieldValue('negativePointStr', '??/?? ????????');
                                                        break;
                                                }
                                            }
                                        }}
                                        svgIcon
                                        selectedValue={minusNum}
                                        icon={<NegativePoint />}
                                        options={
                                            [
                                                { title: "???????????? ????????", value: `""` },
                                                { title: "??????????", value: '0' },
                                                { title: "??/?? ????????", value: '0.5' },
                                                { title: "??/?? ????????", value: '0.3333' },
                                                { title: "??/?? ????????", value: '0.25' }
                                            ]
                                        }
                                    />
                                </Grid>}
                            <Grid item xs={12} style={{ marginTop: 20 }}>
                                <SelectForm
                                    activityStyle
                                    label="???????? ?????????? ????????????"
                                    name={"multiFile"}
                                    errorClass={classes.formError}
                                    className={classes.formInput}
                                    disabled={props.sameMode}
                                    formik={formik}
                                    handleChange={(e) => {
                                        setQuestionDefinition(e.target.value)
                                        resetQuestions()
                                        resetFormikQuestions()
                                    }}
                                    selectedValue={questionDefinition}
                                    svgIcon
                                    icon={<Blackboard />}
                                    renderValue={(value) => {
                                        if (value == false) {
                                            return "??????????"
                                        } else if (value == true) {
                                            return "??????????????"
                                        } else {
                                            return "???????????? ????????"
                                        }
                                    }}
                                    required
                                    options={
                                        [
                                            { title: "???????????? ????????", value: `""` },
                                            { title: "?????????? (???????? ???? ???????????? ???? ???? ?????? ???????? ?????????? ??????????)", value: false },
                                            { title: "?????????????? (???????? ???? ???????? ???? ???? ?????? ???????? ?????????? ??????????)", value: true },
                                        ]
                                    }
                                />
                            </Grid>
                            {formik.values.questionType !== 'MULTIPLE_CHOICE' &&
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <SelectForm
                                        activityStyle
                                        label="???????? ???????????? ??????????"
                                        name={"resultType"}
                                        className={classes.formInput}
                                        errorClass={classes.formError}
                                        disabled={props.sameMode}
                                        formik={formik}
                                        handleChange={(e) => {
                                            setTypeResult(e.target.value)
                                            if (e.target.value === 'DESCRIPTIVE') {
                                                setDescribeTypeField(true)
                                                setMaxGradeField(false)
                                            } else {
                                                setDescribeTypeField(false)
                                                setMaxGradeField(true)
                                            }
                                            resetQuestions()
                                            resetFormikQuestions()
                                        }}
                                        svgIcon
                                        icon={<NegativePoint />}
                                        required
                                        selectedValue={typeResult}
                                        options={
                                            [
                                                { title: "???????????? ????????", value: `""` },
                                                { title: "????????????", value: 'DESCRIPTIVE' },
                                                { title: "???????? ????", value: 'NUMERIC' },
                                            ]
                                        }
                                    />
                                </Grid>
                            }

                            {describeTypeField &&
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <SelectForm
                                        activityStyle
                                        label="???????? ??????????"
                                        name={"describeType"}
                                        className={classes.formInput}
                                        errorClass={classes.formError}
                                        disabled={props.sameMode}
                                        formik={formik}
                                        handleChange={(e) => {
                                            setDescribeType(e.target.value)
                                            if (e.target.value === '0') {
                                                formik.setFieldValue('negative', false);
                                            } else {
                                                formik.setFieldValue('negative', true);
                                            }
                                        }}
                                        svgIcon
                                        icon={<Blackboard />}
                                        selectedValue={describeType}
                                        required
                                        options={
                                            renderDescribeType()
                                        }
                                    />
                                </Grid>
                            }
                            {maxGradeField &&
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <InputForm
                                        errorClass={classes.formError}
                                        label=" ????????"
                                        className={classes.formInput}
                                        errorWrapperClass={classes.errorWrapper}
                                        name={"maxGrade"}
                                        maxLength={5}
                                        disabled={props.sameMode}
                                        formik={formik}
                                        decimalNumberOnly
                                        onChange={() => {
                                            resetQuestions()
                                            resetFormikQuestions()
                                        }}
                                        svgIcon
                                        placeholder={`???????????? ???????? ??????`}
                                        icon={<Blackboard />}
                                        required
                                    />
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>????????</button>
            </form>
        </div>
    );
};

export default memo(withSnackbar(BasicInfo));
