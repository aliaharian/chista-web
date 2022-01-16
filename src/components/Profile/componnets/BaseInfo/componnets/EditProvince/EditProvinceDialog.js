import React, { useEffect, useState } from 'react';
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
import { Select } from "../../../../../form"
import { connect } from "react-redux";
import { getCityList, getProvinceList } from "../../../../../../../redux/filters";
import userProvinceIcon from '../../../../../../assets/images/profile/registerOstad/Pin.svg'
import CloseIcon from '@material-ui/icons/Close';

function EditProvinceDialog(props) {
    const classes = useStyles();
    const [provinceListProp, setProvinceListProp] = useState([]);
    const [cityList, setCityList] = useState([]);

    useEffect(() => {

        if (!props.provinceList) {
            props.getProvinceList();
        }
        props.getCityList(props.initialValues.provinceId);
    }, [])

    useEffect(() => {
        if (props.list.filters.provinceList!==null) {
            setProvinceListProp(props.list.filters.provinceList)
        }
    }, [props.list.filters.provinceList])

    useEffect(() => {
        if (props.list.filters.cityList !== null) {
            setCityList(props.list.filters.cityList)
        }

    }, [props.list.filters.provinceList])

    useEffect(() => {
        if (props.list.filters.cityList !== null) {
            setCityList(props.list.filters.cityList)
        }
    }, [props.list.filters.cityList])

    function submited(data) {
        props.updateInfo({cityId: (data.cityId) , provinceId:(data.provinceId)}, function () {
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
            transition={Slide}
            keepMounted
            onClose={handleClose}
            PaperProps={{ className: classes.dialogRoot }}
        >
            <CloseIcon onClick={handleClose} className={classes.closeIcon}/>
            <div className={classes.modalHead}>
                <img src={userProvinceIcon} alt=""/>
                <Typography className={classes.modalTitle}>ویرایش استان/شهر </Typography>
            </div>
            <form onSubmit={submitter} className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <Typography className={classes.provinceInputLabel}>استان</Typography>
                    <Field
                        name='provinceId'
                        label="استان"
                        component={Select}
                        options={provinceListProp.map((item) => ({ label: item.name, value: item.id })) || []}
                        validate={[required]}
                        className={classes.provinceInput}
                        onChange={(e) => { props.getCityList(e.target.value) }}
                    />
                    <Typography className={classes.provinceInputLabel}>شهر</Typography>
                    <Field
                        name='cityId'
                        label="شهر"
                        component={Select}
                        className={classes.provinceInput}
                        style={{padding:0}}
                        options={cityList.map((item) => ({ label: item.name, value: item.id })) || []}
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
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    </>);
}

const mapStateToProps = (state) => {
    const adviser = state.user.adviser
    const user = state.user.user
    return {
        list:state,
        load: state.user.load,
        provinceList: state.filters.provinceList,
        cityList: state.filters.cityList,
        initialValues: Object.assign(user,adviser)
    }
}

export default connect(
    mapStateToProps,
    { updateInfo, getCityList, getProvinceList }
)(reduxForm({ form: "updateProvinceForAdviser", enableReinitialize: true })(EditProvinceDialog));

