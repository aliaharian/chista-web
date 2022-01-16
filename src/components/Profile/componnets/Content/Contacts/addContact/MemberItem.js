import React, {memo} from "react";
import {numberFormat} from "../../../../../../utilities";
import ProfileAvatar from "../../../../../ProfileAvatar/ProfileAvatar";

// import useStyles from "../Styles";
import dateTime from "../../../../../../utilities/dateTime";
import {Typography} from "@material-ui/core";
import classes from './AddContact.module.scss';
const MemberItem = ({memberInfo, number, ostad , rootClass}) => {
    // const classes = useStyles();
    const statusRender = {
        CS_OFFLINE: "آفلاین",
        CS_ONLINE: "آنلاین",
    };

    // console.log('userinf', memberInfo)
    return (
        <div>
            <div className={classes.contactMemebrAvatarWrapper}>
                <ProfileAvatar
                    user={memberInfo}
                    variant="rounded"
                    avatar={classes.contactMemebrAvatarOpinion}
                    avatarContainer={classes.contactMemebrAvatarBorder}
                />
                <div className={classes.contactMemebrNameWrapper}>
                    <Typography noWrap style={{maxWidth:200}}>
                        {
                            memberInfo.fullName && memberInfo.fullName
                        }
                        {
                            !memberInfo.fullName && memberInfo.firstName && memberInfo.firstName
                        }
                        {
                            !memberInfo.fullName && memberInfo.lastName && ' ' + memberInfo.lastName
                        }
                        {
                            !memberInfo.fullName && !memberInfo.firstName && !memberInfo.lastName && memberInfo.phone
                        }
                        {
                            !memberInfo.fullName && !memberInfo.firstName && !memberInfo.lastName && !memberInfo.phone && number || numberFormat.toPersianDigits(memberInfo.number||"")
                        }
                        {
                            !memberInfo.fullName && !memberInfo.firstName && !memberInfo.lastName && !memberInfo.phone && !number && !memberInfo.number && numberFormat.toPersianDigits(memberInfo.username)
                        }
                    </Typography>


                    <Typography>
                        {
                            memberInfo.chatUserId===0||!memberInfo.chatUserId?`عضو چیستا نیست`:
                                memberInfo.wasOnline===0?`آنلاین`:
                                memberInfo.status==="CS_ONLINE"?`آنلاین`:`آخرین بازدید ${dateTime.diffTime(memberInfo.wasOnline) || dateTime.diffTime(memberInfo.onlineTime)}`
                        }
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default memo(MemberItem);
