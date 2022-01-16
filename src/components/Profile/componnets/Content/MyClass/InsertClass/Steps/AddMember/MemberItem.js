import React, {memo} from "react";
import {numberFormat} from "../../../../../../../../utilities";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";

import classes from "../../../../../../../../assets/stylesheet/profile/myClass/memberItem.module.scss";
import dateTime from "../../../../../../../../utilities/dateTime";
import {Typography} from "@material-ui/core";

const MemberItem = ({memberInfo, number}) => {
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
