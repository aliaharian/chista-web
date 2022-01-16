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
import { Select, Text } from "../../../../../form"
import { connect } from "react-redux";
import numberFormat from "../../../../../../utilities/numberFormat";
import { getCityList, getProvinceList } from "../../../../../../../redux/filters";


function Transition(props) {
    return <Slide direction="up" {...props} />
}


function EditProvinceDialog(props) {
    const classes = useStyles();
    const [province, setProvince] = React.useState(null);

    useEffect(() => {

        if (!props.provinceList) {
            props.getProvinceList();
        }
        props.getCityList(props.initialValues.provinceId);

    }, [])

    function submited(data) {
        props.updateInfo(data, function () {
            handleClose()
        })

    }

    function handleClose() {
        props.reset();
        //*** bad code */ 
        props.getCityList(props.initialValues.provinceId);
        /**** */
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
                <Typography className={classes.modalTitle}>ویرایش استان/شهر </Typography>
            </div>
            <form onSubmit={submitter} className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <Field
                        name='provinceId'
                        label="استان"
                        component={Select}
                        options={props.provinceList && props.provinceList.map((item) => ({ label: item.name, value: item.id })) || []}
                        validate={[required]}
                        onChange={(e) => { props.getCityList(e.target.value) }}
                    />

                    <Field
                        name='cityId'
                        label="شهر"
                        component={Select}
                        options={props.cityList && props.cityList.map((item) => ({ label: item.name, value: item.id })) || []}
                        validate={[required]}

                    />

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
        provinceList: state.filters.provinceList,
        cityList: state.filters.cityList,
        initialValues: { provinceId: user && user.provinceId, cityId: user && user.cityId }
    }
}

export default connect(
    mapStateToProps,
    { updateInfo, getCityList, getProvinceList }
)(reduxForm({ form: "updateProvince", enableReinitialize: true })(EditProvinceDialog));

