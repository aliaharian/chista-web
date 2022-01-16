import React, {memo} from "react";
import {numberFormat} from "../../../../../../../../utilities";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import useStyles from "../Styles";
import dateTime from "../../../../../../../../utilities/dateTime";
import {Typography} from "@material-ui/core";

const MemberItem = ({memberInfo, number, ostad , rootClass}) => {
    const classes = useStyles();
    const statusRender = {
        CS_OFFLINE: "آفلاین",
        CS_ONLINE: "آنلاین",
    };
    return (
        <div>
            <div className={classes.memebrAvatarWrapper}>
                <ProfileAvatar
                    user={memberInfo}
                    variant="rounded"
                    avatar={classes.memebrAvatarOpinion}
                    avatarContainer={classes.memebrAvatarBorder}
                />
                <div className={classes.memebrNameWrapper}>
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
                            memberInfo.roleStr || memberInfo.memberRoleStr
                        }
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default memo(MemberItem);
