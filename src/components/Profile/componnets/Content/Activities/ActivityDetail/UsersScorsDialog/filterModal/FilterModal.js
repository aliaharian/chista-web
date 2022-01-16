import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {
    Slide, Fade, Grid,
} from "@material-ui/core";
import useStyles from "./Styles";
import DialogLayout from "../../../../Contacts/dialog/DialogLayout";
import SelectForm from "../../../../../form/SelectForm";
import BlackboardSidebar from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import { useFormik } from "formik";

const FilterModal = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const formik = useFormik({
        initialValues: {
            activityType: "all",
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            props.handleSubmit({target:{value:values.activityType}})
            props.handleClose()
        },
    });
    return (
        <div style={{zIndex: 2000}}>
            <DialogLayout
                withCloseIcon={true}
                open={props.open}
                fullScreen
                closeModal={() => {
                    props.handleClose()
                }}
                className={{
                    root: classes.root
                }}
                title={'فیلتر'}
                style={{ position: 'static', padding: 0, zIndex: 2000}}
            >
                <form style={{zIndex: 2000}} className={classes.form} onSubmit={formik.handleSubmit}>
                <Grid item xs={12} style={{ marginTop: 20, zIndex: 2000 }}>
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
                                    { title: "انتخاب کنید", value: '""' },
                                    {
                                        title: `همه`,
                                        value: `all`
                                    },
                                    {
                                        title: `تصحیح شده`,
                                        value: `corrected`
                                    },
                                    {
                                        title: `تصحیح نشده`,
                                        value: `nonCorrected`
                                    },
                                    {
                                        title: `پاسخ داده نشده`,
                                        value: `notAnswered`
                                    },
                                ]
                            }
                        />
                    </Grid>
                    <button type="submit" className={classes.stepBTN}>تایید</button>
                </form>
            </DialogLayout>
        </div>
    );
};

export default FilterModal;
