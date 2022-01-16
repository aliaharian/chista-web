import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import ActivityTypeDialog from "../../../InsertActivity/Steps/ActivityTypeDialog";
import SelectForm from "../../../../../form/SelectForm";
import BlackboardSidebar from "../../../../../../../../assets/images/profile/BlackboardSidebar";

const EditActivityType = ({ initialValues, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [openTypeDialog, setOpenTypeDialog] = useState(false)
    const [activityTypeCustom, setActivityTypeCustom] = useState(initialValues.activityTypeOther ? initialValues.activityTypeOther : initialValues.activityType !== 'EXAM' && initialValues.activityType !== 'ASSIGNMENT' && initialValues.activityType !== `""` ? initialValues.activityType : null)

    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }
    const formik = useFormik({
        initialValues: {
            ...initialValues,
            activityType: (initialValues?.activityTypeOther) ? (initialValues?.activityTypeOther) : initialValues?.activityType

        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            if (values.activityType !== 'EXAM' && values.activityType !== 'ASSIGNMENT') {
                props.handleSubmit({
                    activityType: 'OTHER',
                    activityTypeOther: values.activityType
                })
            } else {
                props.handleSubmit({
                    activityType: values.activityType
                })
            }
        },
    });

    const handleChangeActivityType = (e) => {
        if (e.target.value === 'OTHER')
            setOpenTypeDialog(true)
    }
    return (
        <div
            className={classes.baseInfoMainContainer}
        >
            <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: -97, position: 'absolute', zIndex: 0 }}>
            </div>
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
                                <SelectForm
                                    label="نوع فعالیت"
                                    name={"activityType"}
                                    formik={formik}
                                    className={classes.formInput}
                                    activityStyle
                                    handleChange={handleChangeActivityType}
                                    svgIcon
                                    icon={<BlackboardSidebar />}
                                    required
                                    options={activityTypeCustom ?
                                        [
                                            { title: "انتخاب کنید", value: '""'},
                                            { title: "آزمون", value: 'EXAM' },
                                            { title: "تکلیف", value: 'ASSIGNMENT' },
                                            { title: activityTypeCustom, value: activityTypeCustom },
                                            { title: "سایر", value: 'OTHER' },
                                        ]
                                        : [
                                            { title: "انتخاب کنید", value: '""'},
                                            { title: "آزمون", value: 'EXAM' },
                                            { title: "تکلیف", value: 'ASSIGNMENT' },
                                            { title: "سایر", value: 'OTHER' },
                                        ]
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>{props.loading ? <CircularProgress size={13} /> : `تایید`}</button>
            </form>
        </div>
    );
};

export default memo(withSnackbar(EditActivityType));
