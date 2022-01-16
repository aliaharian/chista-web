import React, {useEffect, useRef, useState} from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
    CircularProgress, Avatar, InputAdornment, Divider,
    Input, Fade, useTheme
} from "@material-ui/core"
import {reduxForm, Field} from "redux-form"
import {Text,} from "../form"
import {maxLength20, maxLength40, minLength2, minLength24, nameRequired} from "../../utilities"
import {connect} from "react-redux"
import {authUpdateField, editInfo} from "../../../redux/auth"
import useStyles from './styles';
import profileUploadIcon from '../../assets/images/cameraPhoto.svg'
import Icon from "../Icon/Icon";
import UserIcon from "../../assets/images/profile/registerOstad/UserIcon";
import shebaIcon from "../../assets/images/profile/registerOstad/Bank.svg";
import {Close} from "@material-ui/icons";
import trashIcon from '../../assets/images/trashIcon.svg'
import editAvatar from '../../assets/images/editAvatar.svg'
import clsx from "clsx";
import numberFormat from "../../utilities/numberFormat";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {withSnackbar} from "notistack";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function EditInfo(props) {
    const classes = useStyles();
    const selectFile = useRef();
    const [profileImg, setProfileImg] = useState(props.user !== null && props.user.imageProfile ? process.env.REACT_APP_IMAGE_URL + props.user.imageProfile : null);
    const theme = useTheme();
    const [sheba, setSheba] = useState(props.user.sheba ? numberFormat.toPersianDigits(numberFormat.toEnglishDigitsOnlyNum(props.user.sheba)) : '')
    const [transition, setTransition] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (props.initialValues !== null) 
        props.initialValues.sheba = numberFormat.shebaMask(props.initialValues.sheba)
    

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
        props.authUpdateField({prop: "openEditInfo", value: false})
    }

    function submited({firstName, lastName, sheba}) {
        props.editInfo({
            imageProfile: profileImg || "",
            firstName,
            lastName,
            sheba: numberFormat.toEnglishDigitsOnlyNum(sheba)
        })
    }

    function handleSelectAvatar(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        if (file?.size > 1000000) {
            props.enqueueSnackbar('حجم عکس نباید بیشتر از ۱ مگابایت باشد', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
            });
        } else {
            reader.onload = function (upload) {
                setProfileImg(upload.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <Dialog
            fullScreen
            open={props.openEditInfo}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={Slide}
            keepMounted
            onClose={handleClose}
            PaperProps={{className: classes.root}}
            classes={{
                scrollPaper: classes.dialog
            }}
        >
            <form onSubmit={props.handleSubmit((values) => submited(values))} className={classes.modalContent}>
                <div className={classes.modalHead}>
                    <div className={classes.completeModalTitle}>
                        {/*{!isMobile &&*/}
                        <Close className={classes.closeButton} onClick={handleClose}/>
                        {/*}*/}
                        <Typography>
                            ویرایش اطلاعات
                        </Typography>
                    </div>
                    <Divider className={classes.divider}/>
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
                                            selectFile.current.value = ''
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
                                    <Avatar
                                        className={clsx(classes.profileAvatar, classes.profileAvatarDemo, classes.avatarBorder)}
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
                    <Field name="imageProfile" component={Input} type="file" style={{display: 'none'}}
                           inputProps={{style: {visibility: 'hidden'}, ref: selectFile, onChange: handleSelectAvatar}}/>
                    <label className={`${classes.fieldLabel} ${classes.fieldLabelRequired}`}>نام</label>
                    <Field
                        name="firstName"
                        label="مثلا: محمد"
                        component={Text}
                        validate={[nameRequired, minLength2, maxLength20]}
                        InputLabelProps={{shrink: false}}
                        style={{marginBottom: 16, marginTop: 12}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                                    <UserIcon/>
                                </InputAdornment>),
                            style: {
                                height: isMobile ? 48 : 56,
                                fontSize: 15,
                                fontFamily: "chistaYekanR",
                                borderRadius: 8
                            }
                        }}
                    />
                    <label className={`${classes.fieldLabel}`}>نام خانوادگی</label>
                    <Field
                        name="lastName"
                        label="مثلا: محمدی"
                        component={Text}
                        validate={[minLength2, maxLength40]}
                        InputLabelProps={{shrink: false}}
                        style={{marginBottom: 16, marginTop: 12}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                                    <UserIcon/>
                                </InputAdornment>),
                            style: {
                                height: isMobile ? 48 : 56,
                                fontSize: 15,
                                fontFamily: "chistaYekanR",
                                borderRadius: 8
                            }
                        }}
                    />
                    <label className={`${classes.fieldLabel}`}>شماره شبا</label>
                    <Field
                        name="sheba"
                        label="۰۰۰۰-۰۰۰۰-۰۰۰۰-۰۰۰۰-۰۰۰۰-۰۰۰۰"
                        component={Text}
                        InputLabelProps={{shrink: false}}
                        style={{marginBottom: 16, marginTop: 12}}
                        validate={[minLength24]}
                        tal={true}
                        maxLength={24}
                        normalize={numberFormat.shebaMask}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                                    <Icon src={shebaIcon} style={{height: "20px", marginRight: 0}}/>
                                </InputAdornment>),
                            endAdornment: ('IR'),
                            inputProps: ({
                                onChange: (e) => {
                                    if (e.target.value.length < 25 && ((/^[0-9]+$/.test(numberFormat.toEnglishDigits(e.target.value))) || e.target.value === '')) {
                                        setSheba(numberFormat.toPersianDigits(e.target.value))
                                    }
                                },
                                value: sheba,
                                style: {textAlign: 'left', paddingLeft: 10, direction: 'ltr'}
                            }),
                            style: {
                                height: isMobile ? 48 : 56,
                                fontSize: 15,
                                fontFamily: "chistaYekanR",
                                borderRadius: 8
                            }
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={props.load || (props.submitting)}
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
                </DialogContent>

            </form>
        </Dialog>
    )
}

const mapStateToProps = ({auth: {load, openEditInfo}, user: {user}}) => ({
    load,
    openEditInfo,
    user,
    initialValues: user
})

export default connect(
    mapStateToProps,
    {authUpdateField, editInfo}
)(reduxForm({form: "editInfoForm", enableReinitialize: true})(withSnackbar(EditInfo)))
