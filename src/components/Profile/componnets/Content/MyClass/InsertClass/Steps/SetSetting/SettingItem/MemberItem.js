import React, { memo } from "react";
import { numberFormat } from "../../../../../../../../../utilities";
import ProfileAvatar from "../../../../../../../../ProfileAvatar/ProfileAvatar";

import useStyles from "../../Styles";

const MemberItem = ({ memberInfo, number }) => {
  const classes = useStyles();

  const statusRender = {
    CS_OFFLINE: "آفلاین",
    CS_ONLINE: "آنلاین",
  };
  return (
    <div>
      <div className={classes.memebrAvatarWrapper}>
        <ProfileAvatar
          user={
            memberInfo.chatUserId > 0 && {
              text:
                memberInfo?.fullName ||
                memberInfo?.firstName ||
                memberInfo?.phone,
            }
          }
          user={memberInfo}
          variant="rounded"
          avatar={classes.memebrAvatarOpinion}
          avatarContainer={classes.memebrAvatarBorder}
        />
        <div className={classes.memebrNameWrapper}>
          {memberInfo.chatUserId > 0 ? (
            <p>
              {memberInfo?.fullName ||
                memberInfo?.firstName ||
                memberInfo?.phone ||
                number}
            </p>
          ) : (
            <p>{statusRender[memberInfo.state] || "عضو چیستا نیست"}</p>
          )}

          <p>
            {numberFormat.toPersianDigits(
              memberInfo?.phone ||
                number ||
                memberInfo?.username ||
                memberInfo?.number
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(MemberItem);
