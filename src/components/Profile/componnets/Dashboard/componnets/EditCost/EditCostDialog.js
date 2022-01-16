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
function EditCostDialog(props) {
    const classes = useStyles();

    function submited(data) {
        props.updateInfo({price:numberFormat.toEnglishDigitsOnlyNum(data.price)},function () {
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
            PaperProps={{className:classes.dialogRoot}}
        >
            <form  onSubmit={submitter}   className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <Field
                    name='price'
                    label="هزینه به ازای هر دقیقه(تومان)"
                    component={Text}
                    validate={[required]}
                    normalize={numberFormat.toPersianDigitsPutCommas}

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
        initialValues:{price:user&&user.price}
    }
}

export default connect(
    mapStateToProps,
    { updateInfo }
)(reduxForm({ form: "updateCost", enableReinitialize: true})(EditCostDialog));

