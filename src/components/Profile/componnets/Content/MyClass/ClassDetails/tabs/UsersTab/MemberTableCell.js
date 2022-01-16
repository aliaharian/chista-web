import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
    Grid,
    MenuItem
} from "@material-ui/core";
import {
    transform,
    numberFormat,
    dateTime,
} from "../../../../../../../../utilities";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import userIcon from "../../../../../../../../assets/images/user-profile-white.png";
// import useStyles from "../../Styles";
import Link from "../../../../../../../Link/Link";
import StyledMenu from "../../../../../../../menu/StyledMenu";
import { useRouter } from "next/router";
import ChistaMenuItem from "../../../../../../../Kit/Menu/ChistaMenuItem";
import ChistaMenu from "../../../../../../../Kit/Menu/ChistaMenu";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetail.module.scss'

const MyClassTableCell = ({ row, id, data, handleChangeRole }) => {
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const dateTimeRow = () => {
        const { day, month, year, time } = dateTime.dateTimeCustom(
            row.activityTime * 1000
        );
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span>{month}</span> <span>{year}</span> - <span>{time}</span>
            </div>
        );
    };


    //handlechat
    function handleGoToChat() {
        console.log('here')
        localStorage.removeItem('open-chat');
        const url = `${process.env.REACT_APP_CHAT_URL}?chat_id=${row?.chatUserId}&type=text`;
        window.open(url, '_blank');
    }


    const Router = useRouter();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.singleMemberContainer}
            style={{ cursor: 'pointer' }}>
            <Grid>
                <Grid align="center">
                    <div className={classes.myClassAvatarWrapper}>
                        <ProfileAvatar
                            user={row}
                            variant="circle"
                            avatar={classes.classAvatar}
                            avatarContainer={classes.classAvatarBorder}
                            content={!row.fullName && <img style={{ width: 23 }} src={userIcon} />}
                        />
                        <div className={classes.myClassNameWrapper}>
                            <p
                                style={{ cursor: 'pointer' }}
                            >{row.fullName || numberFormat.toPersianDigits(row.username)}</p>
                            <p>{row.memberRoleStr}</p>
                        </div>
                    </div>
                </Grid>

                <Grid align="center">

                    {
                        // row.chatUserId !== 0 &&
                        <div className={classes.actionWrapper}>
                            {
                                (((row.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE || row.chatUserId != 0) && (data?.meCreator || data?.myRole == process.env.REACT_APP_OSTAD_ROLE_TYPE || data?.myRole == process.env.REACT_APP_ASSISTANT_ROLE_TYPE))) &&
                                < MoreVertIcon
                                    aria-controls="more"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    // className={classes.editBtnRes}
                                    style={{ color: '#0c0b31', cursor: 'pointer' }}
                                />}

                            <ChistaMenu
                                open={Boolean(anchorEl)}
                                handleClose={handleClose}
                                anchorEl={anchorEl}
                            >

                                {(row.chatUserId != 0) &&
                                    <ChistaMenuItem onClick={
                                        () => {
                                            handleGoToChat()
                                        }
                                    }>
                                        ارسال پیام
                                    </ChistaMenuItem>
                                }
                                {((data?.meCreator || data?.myRole == process.env.REACT_APP_OSTAD_ROLE_TYPE) && row.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE) &&
                                    <ChistaMenuItem onClick={() => {
                                        handleChangeRole();
                                        handleClose();
                                    }}>
                                        ویرایش نقش
                                    </ChistaMenuItem>
                                }

                            </ChistaMenu>
                        </div>}


                </Grid>
            </Grid>
        </div>
    );
};

export default MyClassTableCell;
