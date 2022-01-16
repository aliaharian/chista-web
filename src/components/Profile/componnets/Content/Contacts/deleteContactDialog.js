import DialogLayout from "./contactDialogLayout/ContactDialogLayout";
import React from "react";
import useStyles from "./Styles";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import {numberFormat, transform} from "../../../../../utilities";
import {Grid} from "@material-ui/core";
import classes from './Contacts.module.scss';
function DeleteContactDialog(props) {
    // const classes = useStyles();


    return (
        <DialogLayout
            customBack
            open={props.open}
            closeModal={props.closeModal}
            title={`حذف مخاطب`}
            noHeader
            className={{
                root: classes.contactsDeleteDialogRoot
            }}
            freeDimension
        >
            {props.user &&
            <div className={classes.contactsDeleteBody}>
                <ProfileAvatar user={props.user} variant="circle" avatar={classes.contactsAvatar}
                               status={classes.contactsStatus}
                               avatarContainer={classes.contactsDeleteAvatarContainer}
                               />
                <p className={classes.contactsDeleteContactName}>{transform.fullName(props.user)}</p>
                {/* <p className={classes.contactsDeleteContactPhone}>{numberFormat.toPersianDigits(props.user.phone)}</p> */}
                <p className={classes.contactsDeleteContactConfirmText}>آیا میخواهید این کاربر را از لیست مخاطبین خود حذف کنید؟</p>

                <div className={classes.contactsDeleteActionBtnContainer}>
                    <button onClick={()=>props.handleDeleteContact(props.user)}>
                        بله
                    </button>
                    <button onClick={props.closeModal}>
                        خیر
                    </button>
                </div>
            </div>
            }
        </DialogLayout>
    )
}

export default DeleteContactDialog