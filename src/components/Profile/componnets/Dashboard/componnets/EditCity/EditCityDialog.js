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
import {Select, Text} from "../../../../../form"
import {connect} from "react-redux";
import numberFormat from "../../../../../../utilities/numberFormat";
import {getCityList} from "../../../../../../../redux/filters";


function Transition(props) {
    return <Slide direction="up" {...props} />
}
function EditCityDialog(props) {
    const classes = useStyles();

    useEffect(()=>{

        if(props.cityList && props.cityList.length === 0)
        {
            props.getCityList();
        }

    },[props.load])

    function submited(data) {
        props.updateInfo(data,function () {
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
            <div className={classes.modalHead}>
                <Typography className={classes.modalTitle}>ویرایش استان/شهر </Typography>
            </div>
            <form  onSubmit={submitter}   className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <Field
                    name='cityId'
                    label="شهر"
                    component={Select}
                    options={props.cityList&&props.cityList.map((item)=>({label:item.name,value:item.id}))||[]}
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
        cityList:state.filters.cityList,
        initialValues:{cityId:user&&user.cityId}
    }
}

export default connect(
    mapStateToProps,
    { updateInfo, getCityList }
)(reduxForm({ form: "updateCity", enableReinitialize: true})(EditCityDialog));

