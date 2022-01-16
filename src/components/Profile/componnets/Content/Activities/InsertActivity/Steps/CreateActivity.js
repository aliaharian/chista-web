import React, { useRef, useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import success from "../../../../../../../assets/images/success.svg";
import warning from "../../../../../../../assets/images/warning.svg";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";

const CreateActivity = ({ handelStep, photo, title, allData, reset, intro, enqueueSnackbar, initialValues, ...props }) => {
    const classes = useStyles();
    const router = useRouter();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handelSubmit = () => {
        handelStep("basicInfo", {});
        reset();
        router.push("/profile/dashboard/ostad/activity");
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={true}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
            aria-labelledby="responsive-dialog-title"
            classes={{
                paper: classes.modalWrapper,
            }}
        >
            <DialogContent className={classes.contactListContent}>
                <div>
                    {(initialValues?.finalCheckResult?.message) ?
                        <div className={classes.warningWrapper}>
                            <img src={warning} alt="warning" />
                        </div>
                        :
                        <div className={classes.succesWrapper}>
                            <img src={success} alt="success" />
                        </div>
                    }
                    {
                        (initialValues?.finalCheckResult?.message) ?
                            <div className={classes.errorText}>
                                فعالیت شما به صورت {initialValues?.finalCheckResult?.type===`draft`?` پیش نویس`:`غیر فعال`} ذخیره شد
                            </div>
                            :
                            <div className={classes.succesText}>
                                فعالیت با موفقیت ایجاد شد
                            </div>
                    }
                </div>
            </DialogContent>
            <DialogActions className={classes.contactActionBTN}>
                <button className={classes.loginClassBtn} onClick={handelSubmit}>
                    متوجه شدم
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default withSnackbar(CreateActivity);
