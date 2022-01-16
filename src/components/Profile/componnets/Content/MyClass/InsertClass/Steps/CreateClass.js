import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    CircularProgress,
    Divider
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import { numberFormat, transform } from "../../../../../../../utilities";
import Copy from "../../../../../../../assets/images/Copy";
import success from "../../../../../../../assets/images/success.svg";
import chistaApp from "../../../../../../../assets/images/chistaIconBlack.svg";
import telegram from "../../../../../../../assets/images/TelegramShareIcon.svg";
import gmail from "../../../../../../../assets/images/gmailShareIcon.svg";
import chista from "../../../../../../../assets/images/chistaShareIcon.svg";
import whatsapp from "../../../../../../../assets/images/whatsappShareIcon.svg";

import classes from '../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import { joinToClass } from "../../../../../../../../redux/groups";
import { useDispatch } from "react-redux";
import { withSnackbar } from "notistack";
import ModalLayoutWithoutHeader from "../../../../../../Kit/Layouts/ModalLayoutWithoutHeader";
import ChistaButton from "../../../../../../Kit/Buttons/ChistaButton";


const CreateClass = ({ handelStep, photo, title, allData, reset, intro, enqueueSnackbar, ...props }) => {
    const router = useRouter();
    const linkRef = useRef(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [loading, setLoading] = useState(true);
    const [classData, setClassData] = useState();
    const Dispatch = useDispatch()

    const handelSubmit = () => {
        // Dispatch(joinToClass(classData.chatGroupId, classData.myChatUserId, 'chatGroupId', '_blank'))
        Dispatch(joinToClass(classData.chatGroupId, 'chatGroupId', '_blank'))
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

    const closeModal = () => {
        handelStep("basicInfo", {});
        props.resetFilter();
        reset();
        if (intro) {
            router.push("/");
        } else {
            router.push("/profile/dashboard/myClass");

        }

    };

    useEffect(() => {
        !classData && setClassData(allData.classData)
        classData && setLoading(false)
    }, [allData, classData]);

    return (
        <ModalLayoutWithoutHeader
            openDialog={true}
            closeModal={closeModal}
            customClass={classes.modalWrapper}
            style={{ position: 'unset' }}
        >

            {!loading && <CloseIcon
                className={classes.closeCreateClassIcon}
                onClick={closeModal}
            />}

            <div>
                {loading ? (
                    <div style={{ textAlign: "center" }}>
                        <CircularProgress />
                    </div>
                ) : (
                    <div>

                        <div className={classes.succesWrapper}>
                            <img src={success} alt="success" />
                        </div>
                        <div className={classes.successText}>کلاس با موفقیت ایجاد شد</div>
                        <div className={classes.linkWrapper}>
                            <div>
                                <div>
                                    <button onClick={copyToClipboard}>
                                        <Copy />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    ref={linkRef}
                                    value={classData.shareUrl}
                                />
                            </div>

                            <div className={classes.shareSocial}>
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=به کلاس ملحق شوید&body=${classData.shareUrl}&ui=2&tf=1&pli=1`}
                                    target="_blank"
                                >
                                    <img src={gmail} alt="chista" />
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${classData.shareUrl}`}
                                    target="_blank"
                                >
                                    <img src={whatsapp} alt="chista" />
                                </a>
                                <a
                                    href={`https://telegram.me/share/url?url=https://chista.ir&text=${classData.shareUrl}`}
                                    target="_blank"
                                >
                                    <img src={telegram} alt="chista" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.loginClassBtn}>
                {!loading &&
                    <ChistaButton onClick={handelSubmit}>ورود به کلاس</ChistaButton>
                }
            </div>
        </ModalLayoutWithoutHeader>
    );
};

export default withSnackbar(CreateClass);
