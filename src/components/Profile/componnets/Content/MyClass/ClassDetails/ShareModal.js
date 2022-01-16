import React, { useRef } from "react";
import {
    Divider,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import close from "../../../../../../assets/images/close.svg";
import telegram from "../../../../../../assets/images/TelegramShareIcon.svg";
import whatsapp from "../../../../../../assets/images/whatsappShareIcon.svg";
import copy from "../../../../../../assets/images/copy.svg";
import classes from "../../../../../../assets/stylesheet/profile/myClass/classDetail.module.scss";
import gmail from "../../../../../../assets/images/gmailShareIcon.svg";
import { joinToClass } from "../../../../../../../redux/groups";
import { useDispatch } from "react-redux";
import { withSnackbar } from "notistack";
import ModalLayoutWithHeader from "../../../../../Kit/Layouts/ModalLayoutWithHeader";
import ChistaButton from "../../../../../Kit/Buttons/ChistaButton";

const ShareModal = ({ open, handelStep, closeModal, url, chatGroupId, myChatUserId, enqueueSnackbar, data, withEnterButton }) => {
    const linkRef = useRef(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const Dispatch = useDispatch();
    const handelSubmit = (e) => {
        console.log("e", e);
        Dispatch(joinToClass(chatGroupId, myChatUserId, 'chatGroupId', '_blank'))
    };


    const copyToClipboard = () => {

        let copyText = linkRef.current
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        enqueueSnackbar('لینک در کلیپ بورد کپی شد', {
            variant: 'info',
            // persist:true,
            style: {},
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
        });
    };

    return (
        <ModalLayoutWithHeader
            openDialog={open}
            closeModal={closeModal}
            style={{ position: 'unset' }}
            customClass={classes.classShareModal}
        >
            <div className={classes.shareModalHeaderWrapper}>
                <div className={classes.shareModalTitle}>
                    <div>

                        <img
                            src={close}
                            alt="icon"
                            style={{ marginLeft: 13, width: 17 }}
                            onClick={closeModal}
                        />
                        <p>اشتراک گذاری</p>
                    </div>

                </div>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.shareContactContent}>
                <p>آدرس کلاس</p>
                <div className={classes.shareInput}>
                    <input type="text" value={url} ref={linkRef} />
                    <img src={copy} alt="share" onClick={copyToClipboard} />
                </div>
                <div className={classes.shareSocial}>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=به کلاس ملحق شوید&body=${url}&ui=2&tf=1&pli=1`}
                        target="_blank"
                    >
                        <img src={gmail} alt="chista" />
                    </a>
                    <a
                        href={`https://api.whatsapp.com/send?text=${url}`}
                        target="_blank"
                    >
                        <img src={whatsapp} alt="chista" />
                    </a>
                    <a
                        href={`https://telegram.me/share/url?url=https://chista.ir&text=${url}`}
                        target="_blank"
                    >
                        <img src={telegram} alt="chista" />
                    </a>
                </div>
                {
                data.active && withEnterButton &&
                <div className={classes.loginClassBtn}>
                <ChistaButton onClick={handelSubmit}>
                    ورود به کلاس
                </ChistaButton>
                </div>
                }
            </div>
        </ModalLayoutWithHeader>
    );
};

export default withSnackbar(ShareModal);
