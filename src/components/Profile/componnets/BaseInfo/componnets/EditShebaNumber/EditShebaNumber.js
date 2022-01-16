import React, {useEffect, useRef, useState} from 'react';
import useStyles from './../styles';
import {
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide, Input, InputAdornment
} from "@material-ui/core";
import BorderColorIcon from '../../../../../../assets/images/pen-edit.svg';
import profileShebaNumberIcon from '../../../../../../assets/images/profile/registerOstad/Bank.svg'
import userProfileIconActive from '../../../../../../assets/images/profile/registerOstad/Bank.svg'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import EditShebaNumberDialog from "./EditShebaNumberDialog";
import Icon from "../../../../../Icon/Icon";
import {ChistaText} from "../../../../../form";
import {minLength24, number} from "../../../../../../utilities";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import {updateInfo} from "../../../../../../../redux/user";
import AdviserProfileInput from "../../../../../form/AdviserProfileInput";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


function EditShebaNumber(props) {
    const classes = useStyles();
    const inputRef = useRef(null);

    const [active, setActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false);
    // props.initialValues.sheba=numberFormat.shebaMask(props.initialValues.sheba)

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
        props.initialize(props.initialValues)
    }, [isMobile])

    function editToggle(response) {
        setShowEdit(!showEdit);
        if (!showEdit) {
            setTimeout(() => {
                inputRef.current.focus();
                inputRef.current.value = numberFormat.toPersianDigits(numberFormat.toEnglishDigitsOnlyNum(inputRef.current.value))
            }, 100);
        }
        // else {
        //     inputRef.current.blur()
        //     inputRef.current.value = numberFormat.shebaMask(inputRef.current.value)
        //
        // }
    }

    function submited(data) {
        props.updateInfo({sheba: numberFormat.toEnglishDigitsOnlyNum(data.sheba)}, function () {
            editToggle()
        })

    }

    let submitter = props.handleSubmit((values) => submited(values));

    return (

        <>
            {/*<EditShebaNumberDialog show={showEdit} handleClose={editToggle}/>*/}
            <form onSubmit={submitter}>

                <Grid container spacing={1} justify='space-between' alignItems="flex-end"
                      style={{margin: '0', width: "100%"}} className={classes.profileFieldContainer}>
                    <Grid item container md={10} xs={9} className={classes.profileFieldWrapper}>
                        <Grid item>
                            <img src={active ? profileShebaNumberIcon : profileShebaNumberIcon}
                                 style={{width: 24, marginTop: 16}}/>
                        </Grid>
                        <Grid item style={{width: '100%'}}>
                            <div className={classes.profileField}>
                                <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                                <Typography className={classes.profileFieldValue}>
                                    {showEdit ?
                                        <Field
                                            name='sheba'
                                            pattern="[0-9]*"
                                            inputMode="numeric"
                                            component={AdviserProfileInput}
                                            defaultValue={showEdit ? numberFormat.toPersianDigits(props.initialValues.sheba) : numberFormat.shebaMask(props.initialValues.sheba)}
                                            endAdropment={'IR'}
                                            {...{
                                                inputRef: inputRef,
                                                disabled: !showEdit,
                                                className: classes.EditInputSheba,
                                            }}
                                            style={{textAlign: 'left'}}
                                            validate={[minLength24, number]}
                                            maxLength={24}
                                            tal={true}
                                            onlyNum={true}
                                            // defaultValue={props.value}
                                            normalize={showEdit ? numberFormat.toPersianDigits : numberFormat.shebaMask}
                                        /> :
                                        <div className={classes.inputValue} style={{textAlign: 'left'}}>
                                            <span style={{
                                                marginRight: 5,
                                                fontSize: 14
                                            }}>IR</span>
                                            {numberFormat.shebaMask(props.initialValues.sheba)}
                                        </div>
                                    }


                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item md={2} xs={3}>
                        {!showEdit && <IconButton aria-label="edit"
                            //                           onMouseEnter={() => {
                            //                               setActive(true)
                            //                           }} onMouseLeave={() => {
                            //     setActive(false)
                            // }}
                                                  className={classes.editButton} onClick={editToggle}>
                            <Icon src={BorderColorIcon} style={{width: 20, height: 20}}/>
                        </IconButton>}

                        {showEdit &&
                        <div className={classes.editButton}>
                            <IconButton aria-label="edit"
                                //             onMouseEnter={() => {
                                //     setActive(true)
                                // }} onMouseLeave={() => {
                                //     setActive(false)
                                // }}
                                        style={{
                                            borderRadius: "25%",
                                            width: "26px",
                                            height: "26px",
                                            border: '1px solid #657686'
                                        }}
                                        onClick={editToggle}>
                                <CloseIcon style={{width: 20, height: 20}}/>
                            </IconButton>

                            <IconButton aria-label="edit"
                                //             onMouseEnter={() => {
                                //     setActive(true)
                                // }} onMouseLeave={() => {
                                //     setActive(false)
                                // }}
                                        style={{
                                            borderRadius: "25%",
                                            width: "26px",
                                            height: "26px",
                                            border: '1px solid #3f53d9',
                                            marginRight: 7
                                        }} type={'submit'}>
                                <DoneIcon style={{width: 20, height: 20, color: '#3f53d9'}}/>
                            </IconButton>
                        </div>
                        }
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

EditShebaNumber.propTypes = {};
const mapStateToProps = (state) => {

    const user = state.user.user;

    return {
        adviser: state.user.adviser,
        user: state.user,
        initialValues: user
    }
}

export default connect(
    mapStateToProps,
    {updateInfo}
)(reduxForm({form: "updateShebanum", enableReinitialize: true})(EditShebaNumber));

