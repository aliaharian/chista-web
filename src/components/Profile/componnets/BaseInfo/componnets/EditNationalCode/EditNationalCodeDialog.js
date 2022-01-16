import React, {useEffect, useRef, useState} from 'react';
import useStyles from './styles';
import {
    Typography,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide
} from "@material-ui/core";

import {Field, reduxForm} from "redux-form";
import {updateInfo} from "../../../../../../../redux/user";
import { required} from "../../../../../../utilities";
import {Text} from "../../../../../form"
import {connect} from "react-redux";
import numberFormat from "../../../../../../utilities/numberFormat";


function Transition(props) {
    return <Slide direction="up" {...props} />
}
function EditNationalCodeDialog(props) {
    const classes = useStyles();

    function submited(data) {
        props.updateInfo({nationalCode:numberFormat.toEnglishDigitsOnlyNum(data.nationalCode)},function () {
            handleClose()
        })

    }

    function handleClose() {
        props.reset()
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
            PaperProps={{className:classes.dialogRoot}}
        >
            <div className={classes.modalHead}>
                <Typography className={classes.modalTitle}>ویرایش کد ملی </Typography>
            </div>
            <form  onSubmit={submitter}   className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <Field
                    name='nationalCode'
                    label="کد ملی"
                    component={Text}
                    validate={[required]}
                    normalize={numberFormat.nationalCodeMask}
                    />



                   <Button
                        fullWidth
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

                </DialogContent>

            </form>
        </Dialog>

    </>);

}

const mapStateToProps = (state) => {


    const user=state.user.adviser
    return{
        load:state.user.load,
        initialValues:{nationalCode:user&&user.nationalCode}
    }
}

export default connect(
    mapStateToProps,
    { updateInfo }
)(reduxForm({ form: "updateNationalCode", enableReinitialize: true})(EditNationalCodeDialog));

