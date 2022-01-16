import React, {useEffect, useRef, useState} from "react";
import {
    DialogContent,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";
import telegram from "../../../../../../../assets/images/TelegramShareIcon.svg";
import whatsapp from "../../../../../../../assets/images/whatsappShareIcon.svg";
import copy from "../../../../../../../assets/images/copy.svg";
import useStyles from "./Styles";
import DialogLayout from "../../../Contacts/dialog/DialogLayout";
import gmail from "../../../../../../../assets/images/gmailShareIcon.svg";
import {withSnackbar} from "notistack";

const ShareModal = ({open, closeModal , id , enqueueSnackbar }) => {
    const classes = useStyles();
    const linkRef = useRef(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [url , setUrl] = useState()

    useEffect(() => {
        if(window){
            setUrl(window?.location?.origin+'/profile/dashboard/activity/'+id)
        }
    })

    const copyToClipboard = () => {
        let copyText = linkRef.current
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        enqueueSnackbar('لینک در کلیپ بورد کپی شد', {
            variant: 'info',
            style: {},
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
        });
    };
    return (
        <DialogLayout
            withCloseIcon
            fullScreen={fullScreen}
            open={open}
            closeModal={closeModal}
            aria-labelledby="responsive-dialog-title"
            className={{
                root: classes.modalWrapper,
            }}
            title={`اشتراک گذاری`}
        >
            <DialogContent className={classes.shareContactContent}>
               <p>آدرس فعالیت</p>
                <div className={classes.shareInput}>
                    <input type="text" value={url} ref={linkRef}/>
                    <img src={copy} alt="share" onClick={copyToClipboard}/>
                </div>
                <div className={classes.shareSocial}>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=به کلاس ملحق شوید&body=${url}&ui=2&tf=1&pli=1`}
                        target="_blank"
                    >
                        <img src={gmail} alt="chista"/>
                    </a>
                    <a
                        href={`https://api.whatsapp.com/send?text=${url}`}
                        target="_blank"
                    >
                        <img src={whatsapp} alt="chista"/>
                    </a>
                    <a
                        href={`https://telegram.me/share/url?url=https://chista.ir&text=${url}`}
                        target="_blank"
                    >
                        <img src={telegram} alt="chista"/>
                    </a>
                </div>
            </DialogContent>
        </DialogLayout>
    );
};

export default withSnackbar(ShareModal);
