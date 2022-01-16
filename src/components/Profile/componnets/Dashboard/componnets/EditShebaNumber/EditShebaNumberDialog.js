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
import { required } from "../../../../../../utilities";
import { Text, ChistaText } from "../../../../../form"
import { connect } from "react-redux";
import numberFormat from "../../../../../../utilities/numberFormat";
import { minLength24 } from "../../../../../../utilities";


function Transition(props) {
    return <Slide direction="up" {...props} />
}
function EditShebaNumberDialog(props) {
    const classes = useStyles();

    function submited(data) {
        props.updateInfo({ sheba: numberFormat.toEnglishDigitsOnlyNum(data.sheba) }, function () {
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
                <Typography className={classes.modalTitle}>ویرایش شماره شبا </Typography>
            </div>
            <form onSubmit={submitter} className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                <div className={classes.inputWrapper}>
                    <Field
                        name='sheba'
                        label="شماره شبا"
                        component={ChistaText}
                        endAdropment ={'IR'}
                        validate={[minLength24]}
                        maxLength={29}
                        tal={true}
                        normalize={numberFormat.shebaMask}
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
        initialValues: { sheba: user && numberFormat.shebaMask(user.sheba) }
    }
}

export default connect(
    mapStateToProps,
    { updateInfo }
)(reduxForm({ form: "updateSheba", enableReinitialize: true })(EditShebaNumberDialog));

