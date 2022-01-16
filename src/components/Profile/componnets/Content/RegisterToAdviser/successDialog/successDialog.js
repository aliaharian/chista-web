import {Button, Dialog, DialogContent, Slide, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import Icon from "../../../../../Icon/Icon";
import Link from "next/link";
import React from "react";
import useStyles from './styles';
import successIcon from '../../../../../../assets/images/success.svg'

function Transition(props) {
    return <Slide direction="up" {...props} />
}
function SuccessDialog(props){
    const classes = useStyles();

    function handleClose() {
        props.openSuccessDialog(false)
    }

    return(
        <Dialog
            fullWidth
            // maxWidth="xs"
            open={props.open}
            transition={Slide}
            keepMounted
            TransitionComponent={ Transition }
            onClose={handleClose}
            classes={{
                scrollPaper: classes.dialog
            }}
            PaperProps={{className: classes.root}}

        >
            <Close className={classes.closeButton} onClick={handleClose}/>

            <form className={classes.modalContent}>
                <div className={classes.modalHead}>
                    <Icon src={successIcon} className={classes.modalIcon}/>
                    <Typography className={classes.modalTitle} style={{color: `#34c278`}}>ثبت نام با موفقیت ایجاد شد</Typography>
                </div>
                <DialogContent>

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="button"
                            disabled={props.load || (props.pristine || props.submitting)}
                            className={classes.actionBtn}
                            onClick={handleClose}
                            // endIcon={!props.load ? <ArrowBackIosIcon/> : ''}
                        >
                            تایید
                        </Button>
                </DialogContent>

            </form>
        </Dialog>
    )
}


export default SuccessDialog;