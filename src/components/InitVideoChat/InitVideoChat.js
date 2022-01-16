import React from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
    CircularProgress,
} from "@material-ui/core"
import { Timer } from "@material-ui/icons"
import { connect } from "react-redux"
import {initVideoChatUpdateField, initiableVideChat} from "../../../redux/initVideoChat";
import {payUpdateField} from "../../../redux/payment";
import {enqueueSnackbar} from '../../../redux/user';
import { useDispatch } from "react-redux";
import useStyles from './styles';

function InitVideoChat(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({});
    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);
    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
        setUser(props.user);
    }, [props.videoChatLoad, snackPack, messageInfo, open]);

    function handleClose() {
        props.initVideoChatUpdateField({ prop: "openVideoChat", value: false });
    }

    function handleContinueClick() {
        if (props.adviser.callPermit ){
            handleClose();
            
            if (props.adviser.state === process.env.REACT_APP_STATUS_BUSY){
                const message =
                'استاد شما اکنون در حال مکالمه است.';
                dispatch( dispatch(
                    enqueueSnackbar({
                        message: message,
                    })))
            } else {
                props.handleContinue();
            }
        } else {
            const message =
                'اعتبار شما کافی نیست. \
                لطفا ابتدا‌ اعتبار خود را افزایش دهید.';
                dispatch( dispatch(
                    enqueueSnackbar({
                        message: message,
                    }))
                )
        }
    }

    function handleOpenIncreaseCredit() {
        props.payUpdateField({ prop: "openIncreaseCredit", value: true});
    }
    return (
        <>
        <Dialog
            fullWidth
            maxWidth="xs"
            open={props.openVideoChat}
            transition={Slide}
            keepMounted
            onClose={handleClose}
        >
                <div className={classes.modalHead}>
                    <div className={classes.containerModalIcon}>
                    <Timer className={classes.modalIcon} />
                    </div>
                    { props.adviser.price === 0 ?
                         <Typography className={classes.modalTitle}>رایگان </Typography>
                       : <Typography className={classes.modalTitle}>{props.adviser.callDuration} دقیقه </Typography>
                    }
                </div>
                <DialogContent >
                    {props.adviser.price === 0 ? 
                    <Typography className={classes.modalContent}>با اعتبار فعلی میتوانید رایگان  با {props.adviser.fullName} تماس تصویری داشته باشید</Typography>
                    :
                    <Typography className={classes.modalContent}>با اعتبار فعلی میتوانید {props.adviser.callDuration} دقیقه با {props.adviser.fullName} تماس تصویری داشته باشید</Typography>
                    }
                </DialogContent>
            <div className={classes.containerButton}>
                <Button
                    className={classes.dialogBtn}
                    disabled={props.load || (props.pristine || props.submitting)}
                    onClick={() => handleOpenIncreaseCredit()}
                >
                    {props.load ? (
                        <CircularProgress
                            color="primary"
                            style={{ width: 20, height: 20 }}
                        />
                    ) : (
                        "افزایش اعتبار"
                    )}
                </Button>
                <Button
                    className={classes.dialogBtn}
                    disabled={props.load || (props.pristine || props.submitting)}
                    onClick={() => {handleContinueClick()}}
                >
                    {props.load ? (
                        <CircularProgress
                            color="primary"
                            style={{ width: 20, height: 20 }}
                        />
                    ) : (
                        "ادامه"
                    )}
                </Button>
            </div>
        </Dialog>
            </>
    )
}

const mapStateToProps = ({ initVideoChat: { openVideoChat }, state }) => ({
    openVideoChat,
})

export default connect(
    mapStateToProps,
    { initVideoChatUpdateField, initiableVideChat, payUpdateField }
)(InitVideoChat)
