import DialogLayout from "./contactDialogLayout/ContactDialogLayout";
import React, {useRef} from "react";
import useStyles from "./Styles";
import {connect, useDispatch} from "react-redux";
import {authUpdateField} from "../../../../../../redux/auth";
import copyIcon from '../../../../../assets/images/copy.svg'
import chistaApp from "../../../../../assets/images/chistaIconBlack.svg";
import telegram from "../../../../../assets/images/TelegramShareIcon.svg";
import gmail from "../../../../../assets/images/gmailShareIcon.svg";
import chista from "../../../../../assets/images/chistaShareIcon.svg";
import whatsapp from "../../../../../assets/images/whatsappShareIcon.svg";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import {numberFormat, transform} from "../../../../../utilities";
import {withSnackbar} from "notistack";
import classes from './Contacts.module.scss';
import { useMediaQuery, useTheme } from "@material-ui/core";
import { infoSnackbar } from "../../../../../../redux/user";
function InviteDialog(props) {
    // const classes = useStyles();
    const linkRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
    const Dispatch = useDispatch()

    const copyToClipboard = () => {


        let copyText = linkRef.current
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        Dispatch(infoSnackbar('لینک در کلیپ بورد کپی شد'))

        // props.enqueueSnackbar('لینک در کلیپ بورد کپی شد', {
        //     variant: 'info',
        //     // persist:true,
        //     style: {},
        //     anchorOrigin: {
        //         vertical: 'bottom',
        //         horizontal: 'left',
        //     },
        // });

    };

    console.log('invite', props.inviteLink)
    return (
        <DialogLayout
            title={`دعوت به چیستا`}
            open={props.open}
            noHeader={isMobile}
            closeModal={props.closeModal}
            className={{
                root: classes.contactsInviteDialogRoot
            }}
            freeDimension
            withCloseIcon
        >
            <div className={classes.contactsInviteBody}>
                {isMobile && <p className={classes.inviteDialogTitleRes}>دعوت به چیستا</p>}
                {
                    props.selectedUser &&
                    <>
                        <ProfileAvatar user={props.selectedUser} variant="circle" avatar={classes.contactsAvatar}
                                       status={classes.contactsStatus}
                                       avatarContainer={classes.contactsDeleteAvatarContainer}/>
                        <p className={classes.contactsDeleteContactName}>{transform.fullName(props.selectedUser)}</p>
                        <p className={classes.contactsDeleteContactPhone}>{numberFormat.toPersianDigits(props.selectedUser.phone)}</p>
                    </>
                }
                {/*<p className={classes.inviteUserName}>{props.user.firstName} عزیز</p>*/}
                <p className={classes.contactsInviteText}>
                    این کاربر عضو چیستا نیست، شما میتوانید از طریق کپی لینک یا
                    اشتراک گذاری، ایشان را به چیستا دعوت نمایید
                </p>

                {/* <p className={classes.contactsInviteLinkText}>لینک دعوت</p> */}

                <div className={classes.contactsInviteLink}>
                    <input
                        type="text"
                        value={props.inviteLink?.message}
                        readOnly
                        ref={linkRef}

                    />
                    <img onClick={copyToClipboard} src={copyIcon} alt=""/>

                </div>
                {!isMobile && <div className={classes.contactsShareSocial}>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=به چیستا ملحق شوید&body=${props.inviteLink?.message}&ui=2&tf=1&pli=1`}
                        target="_blank"
                    >
                        <img src={gmail} alt="chista"/>
                    </a>
                    <a
                        href={`https://api.whatsapp.com/send?text=${props.inviteLink?.message}`}
                        target="_blank"
                    >
                        <img src={whatsapp} alt="chista"/>
                    </a>
                    <a
                        href={`https://telegram.me/share/url?url=https://chista.ir&text=${props.inviteLink?.message}`}
                        target="_blank"
                    >
                        <img src={telegram} alt="chista"/>
                    </a>
                    {/* <a
                        href={process.env.REACT_APP_CHAT_URL}
                        target="_blank"
                    >
                        <img src={chista} alt="chista"/>
                    </a> */}


                </div>}
            </div>
        </DialogLayout>
    )
}


InviteDialog.propTypes = {};

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {
    authUpdateField,
})(withSnackbar(InviteDialog));