import React from 'react';
import useStyles from './styles';
import { Typography, Grid, Avatar, IconButton, createMuiTheme, ThemeProvider, Divider } from "@material-ui/core";
import classNames from 'classnames';
import Icon from "../../../../../../../Icon/Icon";
import LikeIcon from "../../../../../../../../assets/images/like-icon.png";
import DisLikeIcon from "../../../../../../../../assets/images/dis-like-icon.png";
import Rating from '@material-ui/lab/Rating';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { numberFormat, transform } from "../../../../../../../../utilities";
const theme = createMuiTheme({ direction: "ltr" });

function AdviserCommentItem(props) {
    const classes = useStyles();
    const { item } = props;
    const tileColor = item && transform.tileColor(item.id);
    return (<>
        <Grid container justify="space-between" className={classes.commentItemRoot}>
            <Grid container item md={3} sm={4} xs={9} >
                <div className={classes.commentAvatarContainer}>
                    <Avatar className = {classNames(classes.commentAvatar, {[tileColor]: !item.imageProfile})}  src={transform.getImage(item.userImageProfile)}>
                    {transform.getLetters(item.userFullName).trim()}
                    </Avatar>
                </div>
                <div className={classes.commentRateWrapper}>
                    <Typography className={classes.commentUserName}>{item.userFullName}</Typography>
                    <ThemeProvider theme={theme}>
                        <Rating precision={0.5} size="small" name="commemt-rate" value={item.rate} readOnly style={{ direction: 'ltr' }} />
                    </ThemeProvider>
                </div>
            </Grid>
            {props.showLike && <Grid container justify="flex-end" item md={2} xs={3} className={classes.commentItemMore}>
                    <div className={classes.likeDisLikeWrapper}>
                        <IconButton className={classes.likeDisLikeBtn} onClick={() => {
                            if (props.isLogin) {
                                props.likeDislike(item.id);
                            } else {
                                props.openInitiable()
                            }
                        }}>
                            <Icon src={item.liked ? DisLikeIcon : LikeIcon} style={{ width: "29px", height: "29px" }} />
                        </IconButton >
                        <Typography className={classes.likeCountText}>{numberFormat.toPersianDigits(item.likeCnt)}</Typography>
                    </div>
                    <IconButton className={classes.moreBtn}>
                        <MoreVertIcon className={classes.moreBtnIcon} />
                    </IconButton>
                </Grid>
                }
                {props.showDate && <Grid container justify="flex-end" item md={2} xs={3} className={classes.commentItemMore}>
                    <div className={classes.likeDisLikeWrapper}>
                        <Typography className={classes.commentItemDate}>{numberFormat.toPersianDigits(item.createdTimeFa)}</Typography>
                    </div>
                </Grid>
                }
            <Grid item md={12} xs={12} className={classes.commentWrapper}>
                {item.comment &&
                    <Grid item xs={12} className={classes.commentItemContent}>
                        <Typography className={classes.commentText}>{item.comment}</Typography>
                    </Grid>
                }
            </Grid>

            <Grid item container md={12} xs={12} className={classes.commentRepliesRoot}>
                {item.sortedReplies && item.sortedReplies.length > 0 && item.sortedReplies.map((replayItem) => (
                    <>
                        <Grid item container className={classes.commentReplyRoot}>
                            {/* <Divider orientation="vertical" className={classes.dividerReply} /> */}
                            <Grid item container sm={12} md={12} xs={12}>
                                <div className={classes.commentReplayAvatarContainer}>
                                    <Avatar className={classes.commentReplayAvatar} src={transform.getImage(replayItem.userImageProfile)}>
                                    {transform.getLetters(replayItem.userFullName).trim()}
                                    </Avatar>
                                </div>
                                <div className={classes.commentRateWrapper}>
                                    <Typography className={classes.commentReplyUserName}>{replayItem.userFullName}</Typography>
                                    <Typography className={classes.commentReplyUserType}>استاد</Typography>

                                </div>
                            </Grid>
                            <Grid item container sm={12} md={12} xs={12}>
                                <Typography className={classes.commentReplyText}>{replayItem.comment}</Typography>
                            </Grid>
                        </Grid>
                    </>
                ))}
            </Grid>
            <Divider orientation="horizontal" className={classes.dividerCommentItem} />
        </Grid>
    </>
    );
}

AdviserCommentItem.propTypes = {};

export default AdviserCommentItem;
