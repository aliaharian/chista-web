import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {
    Dialog,
    DialogContent,
    Slide, Fade,
} from "@material-ui/core";
import warning from "../../../../assets/images/warning.svg";
import useStyles from "./Styles";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

const ErrorModal = ({ closeModal, showModal, handelSubmit }) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [transition, setTransition] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
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
            <DialogContent className={classes.dialogContent}>
                <div className={classes.warningImageWrapper}>
                    <img src={warning} alt="" />
                </div>
                <p className={classes.warningText}>
                    شما بسته فعال دارید، اگر تمایل به تمدید یا ارتقا دارید به صفحه شخصی خود مراجعه کنید
                </p>
            </DialogContent>
            <div className={classes.deleteActionBtnContainer}>
                <button onClick={handelSubmit}>
                    صفحه شخصی
                </button>
                <button onClick={() => closeModal()}>
                    فعلا نه
                </button>
            </div>
        </Dialog>
    );
};

export default ErrorModal;
