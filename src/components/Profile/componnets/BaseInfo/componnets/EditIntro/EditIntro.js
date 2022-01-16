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
import profileIntroIcon from '../../../../../../assets/images/profile/registerOstad/News.svg'
import profileIntroIconActive from '../../../../../../assets/images/profile/registerOstad/News.svg'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import EditIntroDialog from "./EditIntroDialog";
import Icon from "../../../../../Icon/Icon";
import {ChistaText} from "../../../../../form";
import {maxLength25, minLength5, required} from "../../../../../../utilities";
import AdviserProfileInput from "../../../../../form/AdviserProfileInput";
import {updateInfo} from "../../../../../../../redux/user";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


function EditIntro(props) {
    const classes = useStyles();
    const inputRef = useRef(null);

    const [active, setActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
        props.initialize(props.initialValues)
    }, [isMobile])

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
        props.updateInfo({intro: (data.intro)}, function () {
            editToggle()
        })

    }

    let submitter = props.handleSubmit((values) => submited(values));

    return (

        <>
            {/*<EditIntroDialog show={showEdit} handleClose={closeEdit}/>*/}
            <form onSubmit={submitter} style={{width: '100%'}}>

                <Grid container spacing={1} justify='space-between' alignItems="flex-start"
                      style={{margin: '8px 0 0 0', width: "100%"}} className={classes.profileFieldContainer}>
                    <Grid item container md={10} xs={11} className={classes.profileFieldWrapper}>
                        <Grid item>
                            <img src={active ? profileIntroIconActive : profileIntroIcon}
                                 style={{width: 24, marginTop: 16}}/>
                        </Grid>
                        <Grid item>
                            <div className={classes.profileField}>
                                <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                                <Typography className={classes.profileFieldValue}>

                                    {showEdit ? <Field
                                            name='intro'
                                            label="جمله معرفی"
                                            defaultValue={props.initialValues.intro}

                                            component={AdviserProfileInput}
                                            validate={[required, minLength5, maxLength25]}
                                            maxLength={25}
                                            minLength={5}
                                            {...{
                                                inputRef: inputRef,
                                                disabled: !showEdit,
                                                className: classes.EditInput,
                                            }}

                                        /> :
                                        <div className={classes.inputValue}
                                             dangerouslySetInnerHTML={{__html: props.initialValues.intro.replace('\n', '<br/>')}}>
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
                        }} className={classes.editButtonRelative} onClick={editToggle}>
                            <Icon src={BorderColorIcon} style={{width: 20, height: 20}}/>
                        </IconButton>}

                        {showEdit &&
                        <div className={classes.editButtonRelative}>
                            <IconButton aria-label="edit" onMouseEnter={() => {
                                setActive(true)
                            }} onMouseLeave={() => {
                                setActive(false)
                            }} style={{borderRadius: "25%", width: "26px", height: "26px", border: '1px solid #657686'}}
                                        onClick={editToggle}>
                                <CloseIcon style={{width: 20, height: 20}}/>
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
                            }} type={'submit'}>
                                <DoneIcon style={{width: 20, height: 20, color: theme.buttonColor.normal}}/>
                            </IconButton>
                        </div>
                        }
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

EditIntro.propTypes = {};

const mapStateToProps = (state) => {

    const user = state.user.user
    const adviser = state.user.adviser

    return {
        adviser: state.user.adviser,
        initialValues: Object.assign(user, adviser)
    }
}

export default connect(
    mapStateToProps,
    {updateInfo}
)(reduxForm({form: "updateIntro", enableReinitialize: true})(EditIntro));

