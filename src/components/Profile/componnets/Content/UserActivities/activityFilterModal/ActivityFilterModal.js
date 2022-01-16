import React from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, Slide, Fade, Grid,
} from "@material-ui/core";

import warning from "../../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import clsx from "clsx";
import { numberFormat } from "../../../../../../utilities";
import DialogLayout from "../../Contacts/dialog/DialogLayout";
import SelectForm from "../../../form/SelectForm";
import BlackboardSidebar from "../../../../../../assets/images/profile/BlackboardSidebar";
import { useFormik } from "formik";
import NegativePoint from "../../../../../../assets/images/NegativePoint";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}


const ActivityFilterModal = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const formik = useFormik({
        initialValues: {
            activityType: "all",
            doneByExaminee:"all"
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            props.handleSubmit(values)
            props.handleClose()

        },
    });
    return (
        <DialogLayout
            withCloseIcon={true}
            open={props.open}
            fullScreen
            closeModal={() => {
                props.handleClose()
            }}

            title={'فیلتر'}
            style={{ position: 'static', padding: 0 }}
        >
            <form className={classes.form} onSubmit={formik.handleSubmit}>

            <Grid item xs={12} style={{ marginTop: 20 }}>
                    <SelectForm
                        label="نوع فعالیت"
                        name={"activityType"}
                        activityStyle
                        svgIcon
                        disabled={false}
                        errorClass={classes.formError}
                        formik={formik}
                        icon={<BlackboardSidebar />}
                        
                        options={
                            [
                                {title: "انتخاب کنید", value: '""'},
                                { title: "همه", value: `all` },
                                { title: "آزمون", value: 'EXAM' },
                                { title: "تکلیف", value: 'ASSIGNMENT' },
                                { title: "سایر", value: 'OTHER' },
                            ]
                        }
                    />
                </Grid>
                {/* <Grid item xs={12} style={{ marginTop: 20 }}>
                    <SelectForm
                        label="وضعیت"
                        name={"doneByExaminee"}
                        svgIcon
                        activityStyle
                        disabled={false}
                        errorClass={classes.formError}
                        formik={formik}
                        icon={<NegativePoint />}
                        
                        options={
                            [
                                { title: "همه", value: `all` },
                                { title: "انجام شده", value: 'true' },
                                { title: "انجام نشده", value: 'false' },
                            ]

                        }
                    />
                </Grid> */}

                <button type="submit" className={classes.stepBTN}>تایید</button>
            </form>
        </DialogLayout>
    );
};

export default ActivityFilterModal;
