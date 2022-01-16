import React, { useEffect, useRef, useState } from 'react';
import useStyles from './styles';
import {
    Typography,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide
} from "@material-ui/core";

import { Field, reduxForm } from "redux-form";
import { updateInfo } from "../../../../../../../redux/user";
import { required, minLength, maxLength, minLength5, maxLength25 } from "../../../../../../utilities";
import { Text, ChistaText } from "../../../../../form"
import { connect } from "react-redux";
import numberFormat from "../../../../../../utilities/numberFormat";


function Transition(props) {
    return <Slide direction="up" {...props} />
}
function EditIntroDialog(props) {
    const classes = useStyles();

    function submited(data) {
        props.updateInfo(data, function () {
            handleClose()
        })

    }

    function handleClose() {
        props.reset();
        props.handleClose();
    }

    let submitter = props.handleSubmit((values) => submited(values));
    return (<>
        <Dialog
            fullWidth
            maxWidth="xs"
            open={props.show}
            // TransitionComponent={Transition}
            transition={Slide}
            keepMounted
            onClose={handleClose}
            PaperProps={{ className: classes.dialogRoot }}
        >
            <div className={classes.modalHead}>
                <Typography className={classes.modalTitle}>ویرایش جمله معرفی </Typography>
            </div>
            <form onSubmit={submitter} className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <div className={classes.inputWrapper}>
                        <Field
                            name='intro'
                            label="جمله معرفی"
                            component={ChistaText}
                            validate={[required,minLength5, maxLength25]}
                            maxLength={25}
                            minLength={5}

                        />
                    </div>


                    <div className={classes.actionContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.actionBtn}
                            disabled={props.load || (props.pristine || props.submitting)}

                        >
                            {props.load ? (
                                <CircularProgress
                                    color="primary"
                                    style={{ width: 20, height: 20 }}
                                />
                            ) : (
                                    "ذخیره"
                                )}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.actionBtn}
                            onClick={handleClose}
                        >
                            انصراف
                    </Button>
                    </div>

                </DialogContent>

            </form>
        </Dialog>

    </>);

}

const mapStateToProps = (state) => {


    const user = state.user.adviser
    return {
        load: state.user.load,
        initialValues: { intro: user && user.intro }
    }
}

export default connect(
    mapStateToProps,
    { updateInfo }
)(reduxForm({ form: "updateIntro", enableReinitialize: true })(EditIntroDialog));

