import React from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
} from "@material-ui/core"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import { connect, useDispatch } from "react-redux";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import {enqueueSnackbar} from '../../../../../../../redux/user';
import useStyles from './styles';

function AdviserSharedDialog(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const whatsAppShare = `https://wa.me?text=${window.location.href}`;
    const telegramAppShare = `https://telegram.me/share/url?url=${window.location.href}`;

    function handleCopyLink() {
        copy(window.location.href);
        dispatch( dispatch(
            enqueueSnackbar({
                message: 'لینک اشتراک گذاری در کلیپ برد کپی شد',
            }))
        )
    }
    return (
        <>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={props.open}
                transition={Slide}
                keepMounted
                onClose={props.handleClose}
                PaperProps={{ className: classes.root }}
            >
                <div className={classes.modalHead}>
                    <Typography className={classes.modalTitle}>اشتراک گذاری </Typography>
                    <Typography className={classes.modalSubTitle}>با استفاده از روش های زیر میتوانید این صفحه را با دوستان خود به اشتراک بگذارید </Typography>
                </div>
                <DialogContent className={classes.modalContent}>
                    <a className={classNames(classes.shareSocial,classes.socialWhatsapp)} href={whatsAppShare} target="_blank">
                        <WhatsAppIcon style={{ color: "#fff" }} />
                    </a>
                    <a className={classNames(classes.shareSocial,classes.socialTelegram)} href={telegramAppShare} target="_blank">
                        <TelegramIcon style={{ color: "#fff" }} />
                    </a>
                    <Button
                        className={classes.copyBtn}
                        onClick={handleCopyLink}
                    >
                        کپی لینک
                    </Button>
                </DialogContent>
                <div className={classes.actionContainerLeft}>
                    <Button
                        className={classes.dialogBtn}
                        onClick={props.handleClose}
                    >
                        بی خیال
                    </Button>
                </div>
            </Dialog>
        </>
    )
}

const mapStateToProps = ({ state }) => ({
})

export default connect(
    mapStateToProps,

)(AdviserSharedDialog)
