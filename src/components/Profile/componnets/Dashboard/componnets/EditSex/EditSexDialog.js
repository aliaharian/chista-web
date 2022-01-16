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
import {ChistaRadio, Text} from "../../../../../form"
import {connect} from "react-redux";
import numberFormat from "../../../../../../utilities/numberFormat";


function Transition(props) {
    return <Slide direction="up" {...props} />
}
function EditSexDialog(props) {
    const classes = useStyles();

    function submited(data) {
        props.updateInfo(data,function (response) {
            handleClose(response)
        })

    }

    function handleClose(response) {
        props.reset();
        props.handleClose(response);
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
            <form  onSubmit={submitter}   className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <Field
                    name='male'
                    label="جنسیت"
                    component={ChistaRadio}
                    defaultValue={props.initialValues.male ? 'true' : 'false'}
                    options={[{'label':'آقا',value:'true'},{'label':'خانم',value:'false'}]}
                    validate={[required]}
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
        initialValues:{male:user&&user.male}
    }
}

export default connect(
    mapStateToProps,
    { updateInfo }
)(reduxForm({ form: "updateSex", enableReinitialize: true})(EditSexDialog));

