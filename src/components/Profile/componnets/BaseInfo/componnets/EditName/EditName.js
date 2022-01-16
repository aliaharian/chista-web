import React, { useEffect, useRef, useState } from 'react';
import useStyles from './../styles';
import {
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide, Input
} from "@material-ui/core";
import BorderColorIcon from '../../../../../../assets/images/pen-edit.svg';
import userProfileIcon from '../../../../../../assets/images/profile/registerOstad/User.svg'
import userProfileIconActive from '../../../../../../assets/images/profile/registerOstad/User.svg'
import numberFormat from "../../../../../../utilities/numberFormat";
import { Field, reduxForm } from "redux-form";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";
import Icon from "../../../../../Icon/Icon";
import { updateInfo } from "../../../../../../../redux/user";
import { ChistaText } from "../../../../../form";
import {
    justPersian,
    maxLength24,
    maxLength25,
    maxLength30,
    minLength2,
    number,
    required
} from "../../../../../../utilities";
import AdviserProfileInput from "../../../../../form/AdviserProfileInput";
import EditNameDialog from "./EditNameDialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";


function EditName(props) {
    const classes = useStyles();
    const inputRef = useRef(null);

    const [active, setActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(()=>{
        props.initialize(props.initialValues)
    },[isMobile])


    function editToggle(response) {
        setShowEdit(!showEdit);
        if (!showEdit) {
            setTimeout(() => {
                inputRef.current.focus()
            }, 100);
        }
        // else {
        //     inputRef.current.blur()
        // }
    }


    function submited(data) {
        props.updateInfo({ firstName: (data.firstName), lastName: (data.lastName) }, function () {
            editToggle()
        })

    }
    let submitter = props.handleSubmit((values) => submited(values));


    return (

        <>
            {/*<EditNameDialog show={showEdit} handleClose={showEdit}/>*/}
            <form onSubmit={submitter} style={{ width: '100%' }}>

                <Grid container spacing={1} alignItems="flex-start" justify='space-between'
                    className={classes.profileFieldContainer}>
                    <Grid item container md={10} xs={11} className={classes.profileFieldWrapper}>
                        <Grid item>
                            <img src={active ? userProfileIconActive : userProfileIcon} style={{ width: 24, marginTop: 16 }} />
                        </Grid>
                        <Grid item>
                            <div className={classes.profileField}>
                                <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                                <Typography className={classes.profileFieldValue}>

                                    {showEdit?<Field
                                        name='firstName'
                                        label="نام"
                                        defaultValue={props.value}
                                        component={AdviserProfileInput}
                                        validate={[required, justPersian,minLength2,maxLength30]}
                                        minLength={2}
                                        maxLength={30}
                                        {...{
                                            inputRef: inputRef,
                                            disabled: !showEdit,
                                            className: classes.EditInput,
                                        }}
                                    />:
                                        <div className={classes.inputValue}>

                                            {props.initialValues.firstName}
                                        </div>
                                    }
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item md={2} xs={1}>

                        {!showEdit && <IconButton aria-label="edit" onMouseEnter={() => {
                            setActive(true)
                        }} onMouseLeave={() => {
                            setActive(false)
                        }}  className={classes.editButton} onClick={editToggle}>
                            <Icon src={BorderColorIcon} style={{ width: 20, height: 20 }} />
                        </IconButton>}

                        {showEdit &&
                            <div className={classes.editButton}>


                                <IconButton aria-label="edit" onMouseEnter={() => {
                                    setActive(true)
                                }} onMouseLeave={() => {
                                    setActive(false)
                                }} style={{ borderRadius: "25%", width: "26px", height: "26px", border: '1px solid #657686' }}
                                    onClick={editToggle}>
                                    <CloseIcon style={{ width: 20, height: 20 }} />
                                </IconButton>

                                <IconButton aria-label="edit" onMouseEnter={() => {
                                    setActive(true)
                                }} onMouseLeave={() => {
                                    setActive(false)
                                }} style={{
                                    borderRadius: "25%",
                                    width: "26px",
                                    height: "26px",
                                    border: '1px solid #3f53d9',
                                    marginRight: 7
                                }} type={"submit"}>
                                    <DoneIcon style={{ width: 20, height: 20, color: '#3f53d9' }} />
                                </IconButton>
                            </div>

                        }


                    </Grid>
                </Grid>
            </form>
        </>
    );
}

EditName.propTypes = {};

const mapStateToProps = (state) => {
    const user = state.user.user;
    return {
        adviser: state.user.adviser,
        initialValues: user
    }
}


export default connect(

    mapStateToProps,
    { updateInfo }
)(reduxForm({ form: "updateFirstName", enableReinitialize: true, keepDirtyOnReinitialize: true })(EditName));
