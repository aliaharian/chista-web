import DialogLayout from "../Profile/componnets/Content/Contacts/dialog/DialogLayout";
import { Button, InputAdornment, useMediaQuery, CircularProgress } from "@material-ui/core";
import React, {useEffect} from "react";
import useStyles from "./styles";
import { Field } from "redux-form";
import { Text } from "../form";
import { nameRequired } from "../../utilities";
import UserIcon from "../../assets/images/profile/registerOstad/UserIcon";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import clsx from "clsx";
import {withSnackbar} from "notistack";
import {connect} from "react-redux";
import {
    authUpdateField,
    initiableUserGuest,
} from "../../../redux/auth";
import { useTheme } from "@material-ui/core/styles";

function GuestModal(props) {
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    
    function submited(values) {
        props.initiableUserGuest(values, props.group.chatGroupId);
    }
    useEffect(() => {
        
    }, [props.load]);
    return (
        <DialogLayout
            open={props.open}
            closeModal={props.handleClose}
            className={{ root: classes.dialogRoot }}
            customBack
            title={`کاربر مهمان`}
        >
            <ProfileAvatar
                user={{}}
                variant="circle"
                avatar={classes.avatar}
                avatarContainer={classes.guestAvatarContainer}
                content={<UserIcon />}
            />
            <form
                onSubmit={props.handleSubmit((values) => submited(values))}
                className={clsx(classes.formWrapper, classes.guestForm)}
            >
                <label className={`${classes.fieldLabel} ${classes.fieldLabelRequired}`}>
                    نام
                    <span>(به سایر کاربران نمایش داده میشود)</span>
                </label>
                <Field
                    name="uniqueName"
                    autoComplete={`off`}
                    label="مثلا : محمد"
                    component={Text}
                    validate={[nameRequired]}
                    InputLabelProps={{ shrink: false }}
                    style={{ marginBottom: 12, marginTop: 12 }}
                    className={clsx(classes.addContactInput)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                <UserIcon />
                            </InputAdornment>),
                        style: { height: isMobile ? 48 : 56, fontSize: 15, fontFamily: "chistaYekanR", borderRadius: 8, width: '100%' }
                    }}
                />
                <Button
                    className={classes.loginGuestBtn}
                    disabled={props.load}
                    type="submit"
                    color="primary"
                >
                    {props.load ? (
                        <CircularProgress
                            color="primary"
                            style={{ width: 20, height: 20 }}
                        />
                    ) : (
                        "ورود"
                    )}
                </Button>
            </form>
        </DialogLayout>
    )
}

GuestModal.propTypes = {};
const mapStateToProps = (state) => ({
    load: state.auth.load,
})

export default connect(mapStateToProps, {
    authUpdateField,
    initiableUserGuest
})(withSnackbar(GuestModal));