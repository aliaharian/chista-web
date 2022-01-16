import React from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, Slide, Fade,
} from "@material-ui/core";

import warning from "../../../../../../../../../assets/images/warning.svg";
import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/endClassModal.module.scss';

// import useStyles from "./Styles";
import clsx from "clsx";
import ModalLayoutWithoutHeader from "../../../../../../../../Kit/Layouts/ModalLayoutWithoutHeader";
import ChistaButton from "../../../../../../../../Kit/Buttons/ChistaButton";


const EndClassModal = ({ closeModal, showModal, handelSubmit }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [transition, setTransition] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })
    return (
        // <Dialog
        //     fullScreen
        //     open={showModal}
        //     onClose={() => closeModal()}
        //     TransitionComponent={transition ? Transition : NoTransition}
        //     aria-labelledby="responsive-dialog-title"
        //     classes={{
        //         paper: classes.modalWrapper,
        //         scrollPaper: classes.modalScrollPaper,

        //     }}
        // >
        <ModalLayoutWithoutHeader
            openDialog={showModal}
            closeModal={() => closeModal()}
            style={{ position: 'unset' }}
            customClass={classes.modalWrapper}
        // hideBackdrop
        >


            <div className={classes.dialogContent}>
                <div className={classes.warningImageWrapper}>
                    <img src={warning} alt="" />
                </div>

                <p className={classes.warningText}>
                    شما در کلاس دیگری حضور دارید
                </p>
                <p className={classes.warningSubtext}>
                    آیا میخواهید در این کلاس وارد شوید؟
                </p>

            </div>
            <div className={classes.deleteActionBtnContainer}>
                <div>
                    <ChistaButton onClick={handelSubmit}>بله</ChistaButton>
                </div>
                <div>
                    <ChistaButton onClick={() => closeModal()}>خیر</ChistaButton>
                </div>

            </div>
        </ModalLayoutWithoutHeader>
    );
};

export default EndClassModal;
