import React, { memo } from "react";
import ProfileAvatar from "../../../../../../ProfileAvatar/ProfileAvatar";
import useStyles from "./Styles";
import { Typography } from "@material-ui/core";
import { numberFormat } from "../../../../../../../utilities";

const MemberItem = ({ memberInfo, examineeInfo, ...props }) => {
    const classes = useStyles();
    const renderAnswer = () => {
        if ((!examineeInfo.scoring && examineeInfo.scoring !== 0 && !examineeInfo.descriptivePartName)) {
            if (examineeInfo.answers.length == 0) {
                return 'پاسخ داده نشده'
            }else{
                return 'تصحیح نشده'
            }
        } else {
            return examineeInfo.descriptivePartName || numberFormat.toPersianDigits(examineeInfo.scoring) + " از " + numberFormat.toPersianDigits(props.activity.scoring)
        }
    }
    return (
        <div className={classes.examineeItemContainer}>
            <div className={classes.memebrAvatarWrapper}>
                <ProfileAvatar
                    user={memberInfo}
                    variant="rounded"
                    avatar={classes.memebrAvatarOpinion}
                    avatarContainer={classes.memebrAvatarBorder}
                />
                <div className={classes.memebrNameWrapper}>
                    <Typography noWrap style={{ maxWidth: 200 }}>
                        {
                            memberInfo.firstName && memberInfo.firstName
                        }
                        {
                            memberInfo.lastName && ' ' + memberInfo.lastName
                        }
                        {
                            !memberInfo.firstName && !memberInfo.lastName && memberInfo.phone
                        }
                    </Typography>
                    <Typography>
                        {
                            memberInfo.roleName
                        }
                    </Typography>
                </div>
            </div>
            <div>
                <Typography>{renderAnswer()}</Typography>
            </div>
        </div>
    );
};

export default memo(MemberItem);
