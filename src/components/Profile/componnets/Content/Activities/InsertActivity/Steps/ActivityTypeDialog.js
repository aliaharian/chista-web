import React, { memo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import InputForm from "../../../../form/InputForm";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import CheckList from "../../../../../../../assets/images/CheckList";
import DialogLayout from "../../ActivityDetail/EditActivityDialog/dialog/DialogLayout";
import clsx from "clsx";

const validationSchema = Yup.object().shape({
    activityTypeEtc: Yup.string()
        .min(2, "عنوان فعالیت نباید کمتر از 2 کاراکتر باشد")
        .max(30, "عنوان فعالیت نباید بیشتر از 30 کاراکتر باشد")
        .required("عنوان فعالیت را وارد نمایید"),
});

const ActivityTypeDialog = (props) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            activityTypeEtc: "",
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            props.handleSubmit(values)
          },
    });

    return (
        <DialogLayout
            withCloseIcon={false}
            open={props.open}
            closeModal={props.handleClose}
            className={{
                root: classes.root
            }}
            title={`سایر`}
            style={{position:'static'}}
            transparent
        >
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container>
                        <Grid item md={12} xs={12} container className={clsx(classes.p40res)}>
                            <Grid item xs={12}>
                                <InputForm
                                    errorClass={classes.formError}
                                    label="عنوان فعالیت"
                                    className={classes.formInput}
                                    errorWrapperClass={classes.errorWrapper}
                                    name={"activityTypeEtc"}
                                    formik={formik}
                                    svgIcon
                                    icon={<CheckList />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <button type="submit" className={classes.stepBTN}>تایید</button>
                </form>
            </div>
        </DialogLayout>
    );
};

export default memo(withSnackbar(ActivityTypeDialog));
