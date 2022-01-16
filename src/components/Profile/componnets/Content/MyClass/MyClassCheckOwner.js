import React, {useState, useEffect} from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import {useSelector} from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputAdornment,
    TextField,
    CircularProgress,
} from "@material-ui/core";

import danger from "../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import {useRouter} from "next/router";
import DialogLayout from "../Contacts/dialog/DialogLayout";

const AddFromNumberModal = ({closeModal, showModalNumber, checkOwner,open}) => {
    const classes = useStyles();
    const theme = useTheme();
    const router = useRouter();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const fullName = useSelector((state) => state.user.user.fullName);

    const handelSubmit = () => {
        router.push('/profile/dashboard/packets')
    };

    return (
        <DialogLayout
            fullScreen={fullScreen}
            open={open}
            noHeader
            onClose={() => closeModal(false)}
            aria-labelledby="responsive-dialog-title"
            className={{
                root: classes.checkOwnerWrapper,
            }}
        >
            <DialogTitle id="responsive-dialog-title" className={classes.modalTitle}>
                <CloseIcon
                    className={classes.closeModalIcon}
                    onClick={() => closeModal(false)}
                />
            </DialogTitle>
            <DialogContent>
                <div className={classes.checkOwnerIcon}>
                    <img src={danger} alt="danger"/>
                </div>
                <p className={classes.checkOwnerText}>بسته فعالی موجود نیست</p>
                <p className={classes.checkOwnerName}>
                    {/*<span>{fullName} عزیز </span>*/}
                </p>
                <p className={classes.checkOwnerMessage}>
                    {
                        checkOwner.message ||
                        `در صورت تمایل به خرید بسته با مراجعه به لینک زیر، بسته مورد
نیاز خود را انتخاب و خریداری نمایید`
                    }
                </p>
            </DialogContent>
            <DialogActions>
                <button
                    className={clsx(classes.actionBTN, classes.actionActiveBTN)}
                    onClick={handelSubmit}
                >
                    خرید بسته
                </button>
            </DialogActions>
        </DialogLayout>
    );
};

export default AddFromNumberModal;
