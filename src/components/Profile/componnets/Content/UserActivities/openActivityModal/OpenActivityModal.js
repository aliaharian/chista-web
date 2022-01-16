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

import warning from "../../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import clsx from "clsx";
import { numberFormat } from "../../../../../../utilities";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}


const OpenActivityModal = ({ closeModal, showModal, handelSubmit, duration, durationType }) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [transition, setTransition] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })
    
    return (
        <Dialog
            fullScreen
            open={showModal}
            onClose={() => closeModal()}
            TransitionComponent={transition ? Transition : NoTransition}
            aria-labelledby="responsive-dialog-title"
            classes={{
                paper: classes.modalWrapper,
                scrollPaper: classes.modalScrollPaper,

            }}
        >
            <DialogTitle className={classes.resNone} id="responsive-dialog-title">
                <div className={classes.modalTop}>
                    {/* <CloseIcon
                        className={classes.closeModalIcon}
                        onClick={() => closeModal()}
                    /> */}
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <div className={classes.warningImageWrapper}>
                    <img src={warning} alt="" />
                </div>


                {
                    durationType !== 'none' &&
                    <p className={classes.warningText}>

                        شما از زمان ورود به جزییات این فعالیت فقط {numberFormat.toPersianDigits(duration)}

                        {durationType === 'hour' ? ' ساعت ' : durationType === 'minute' ? ' دقیقه ' : ` ثانیه `} فرصت برای انجام آن دارید
                    </p>}


              { durationType === 'none' &&  <p className={classes.warningText}>
                    زمان انجام فعالیت به اتمام رسیده است
                </p> }

            </DialogContent>
            {/*<DialogActions>*/}

            <div className={classes.deleteActionBtnContainer}>
                <button onClick={handelSubmit}>
                    وارد میشم
                </button>
                <button onClick={() => closeModal()}>
                    باشه بعدا
                </button>
            </div>

            {/*<button className={classes.actionBTN} onClick={handelSubmit}>*/}
            {/*  تایید*/}
            {/*</button>*/}
            {/*</DialogActions>*/}
        </Dialog>
    );
};

export default OpenActivityModal;
