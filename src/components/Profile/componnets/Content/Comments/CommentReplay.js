import React from "react";
import CommentItem from "./CommentItem";
import useStyles from "./Styles";
import { transform } from "../../../../../utilities";
import { Avatar } from "@material-ui/core";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";

const CommentReplay = ({ replay }) => {
  const classes = useStyles();
  return (
    <div className={classes.replayWrapper}>
      <div className={classes.commentAvatarWrapper}>
        {/*<div className={classes.commentAvatarBorder}>*/}
          {/*<Avatar*/}
          {/*  src={transform.getImage(replay.userImageProfile)}*/}
          {/*  className={classes.commentAvatarReplay}*/}
          {/*/>*/}
            <ProfileAvatar user={replay} variant="circle" avatar={classes.commentAvatar}
                           status={classes.status + " " + transform.parseStatus(replay.state, classes)}
                           avatarContainer={classes.replyCommentAvatarContainer}/>

        {/*</div>*/}
        <div className={classes.commentNameWrapper}>
          <p>{replay.userFullName}</p>
          <p>استاد</p>
        </div>
      </div>
      <p className={classes.commentText} style={{marginTop:13}}>{replay.comment}</p>
    </div>
  );
};

export default CommentReplay;
