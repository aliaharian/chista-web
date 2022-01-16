import React, {useEffect, useRef, useState} from "react"
import {
    Button,
    DialogContent,
    CircularProgress, Avatar, InputAdornment,
    Input, useTheme
} from "@material-ui/core"
import {reduxForm, Field} from "redux-form"
import {Text} from "../form"
import {maxLength20, maxLength40, minLength2, required} from "../../utilities"

import {connect} from "react-redux"
import {authUpdateField, complete} from "../../../redux/auth"
import useStyles from './styles';
import profileUploadIcon from '../../assets/images/cameraPhoto.svg'
import trashIcon from '../../assets/images/trashIcon.svg'
import clsx from "clsx";
import DialogLayout from "../Profile/componnets/Content/Contacts/dialog/DialogLayout";
import editAvatar from "../../assets/images/editAvatar.svg";
import UserIcon from "../../assets/images/profile/registerOstad/UserIcon";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Complete({gift=true , ...props}) {
    const classes = useStyles();
    const selectFile = useRef();
    const [profileImg, setProfileImg] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [transition, setTransition] = React.useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })

    function handleClose() {
        props.authUpdateField({prop: "openComplete", value: false})
    }

    async function submited({firstName, lastName}) {
        await props.complete({imageProfile: profileImg, firstName, lastName},gift)
    }

    function handleSelectAvatar(event) {
        var reader = new FileReader();
        var file = event.target.files[0];

        reader.onload = function (upload) {
            setProfileImg(upload.target.result);
        };
        reader.readAsDataURL(file);
    }
    return (
        <DialogLayout
            customBack
            open={props.openComplete}
            closeModal={handleClose}
            className={{
                root: classes.root
            }}
            title={`مشخصات پروفایل`}
        >
            <form onSubmit={props.handleSubmit((values) => submited(values))} className={classes.modalContent}>
                <div className={classes.modalHead}>
                    <div className={classes.addImageContainer}>
                        <div className={classes.profileAvatarContainer}>
                            {
                                profileImg ?
                                    <>
                                        <Avatar className={classes.profileAvatar} src={profileImg || profileUploadIcon}
                                                onClick={() => {
                                                    selectFile.current.click()
                                                }}
                                        />
                                        <div className={classes.profileOverlay} onClick={() => {
                                            setProfileImg(null)
                                        }
                                        }>
                                            <img src={trashIcon} alt=""/>
                                        </div>
                                        <div className={classes.avatarEditIcon}
                                             onClick={() => {
                                                 selectFile.current.click()
                                             }}
                                        >
                                            <img src={editAvatar} alt=""/>
                                        </div>
                                    </>
                                    :
                                    <Avatar className={clsx(classes.profileAvatar, classes.profileAvatarDemo)}
                                            src={profileImg || profileUploadIcon}
                                            onClick={() => {
                                                selectFile.current.click()
                                            }}
                                    />
                            }
                        </div>
                    </div>
                </div>
                <DialogContent className={classes.modalBody}>
                    <Field name="file" component={Input} type="file" style={{display: 'none'}}
                           inputProps={{style: {visibility: 'hidden'}, ref: selectFile, onChange: handleSelectAvatar}}/>
                    <label className={`${classes.fieldLabel} ${classes.fieldLabelRequired}`}>نام</label>
                    <Field
                        name="firstName"
                        label="مثل: محمد"
                        autoComplete={'off'}
                        suggestions={'off'}
                        autoCorrect={'off'}
                        spellCheck={'off'}
                        component={Text}
                        validate={[required, minLength2, maxLength20]}
                        InputLabelProps={{shrink: false}}
                        style={{marginBottom: 16, marginTop: 12}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                                    <UserIcon/>
                                </InputAdornment>),
                            style: {height: isMobile?48:56, fontSize: 15, fontFamily: "chistaYekanR", borderRadius: 8}
                        }}
                    />
                    <label className={`${classes.fieldLabel}`}>نام خانوادگی</label>
                    <Field
                        name="lastName"
                        label="مثل: محمدی"
                        autoComplete={'off'}
                        suggestions={'off'}
                        autoCorrect={'off'}
                        spellCheck={'off'}
                        component={Text}
                        validate={[minLength2, maxLength40]}
                        InputLabelProps={{shrink: false}}
                        style={{marginBottom: 16, marginTop: 12}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                                    <UserIcon/>
                                </InputAdornment>),
                            style: {height: isMobile?48:56, fontSize: 15, fontFamily: "chistaYekanR", borderRadius: 8}
                        }}
                    />
                </DialogContent>
                <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={
                            props.load ||
                            (props.submitting)
                        }
                        className={classes.actionBtn}
                    >
                        {props.load ? (
                            <CircularProgress
                                color="primary"
                                style={{width: 20, height: 20}}
                            />
                        ) : (
                            "تایید"
                        )}
                    </Button>
            </form>
        </DialogLayout>
    )
}

const mapStateToProps = ({auth: {load, openComplete}}) => ({
    load,
    openComplete,
})

export default connect(
    mapStateToProps,
    {authUpdateField, complete}
)(reduxForm({
    form: "completeForm", touchOnBlur: false
})(Complete))
