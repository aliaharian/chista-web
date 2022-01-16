import React from "react";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    commentsRoot:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "relative",
        width: "100%",
        marginTop: 100
    },
    commentItemRoot: {
    },
    commentItemAvatarWrapper: {
    },
    commentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    commentItemContent: {
        marginTop: 8,
    },
    commentItemMore: {
    },
    commentAvatarContainer:
    {
        width: "69px",
        height: "69px",
        borderRadius: "50%",
        border: "1px solid #92A4BB",
        position: "relative",
        marginRight: "9px",
        [theme.breakpoints.down('sm')]: {
            width: "40px",
            height: "40px",
        }
    },
    commentAvatar:
    {
        width: "100% !important",
        height: "100% !important",
        border: '1px solid #fff',
        backgroundColor: "#ffa352",
        fontSize: 18
    },
    commentRateWrapper:
    {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            '& svg': {
                width: 14,
                height: 14,
            }
        }
    },
    commentUserName:
    {
        fontSize: 15,
        fontFamily: "chistaYekanB",
        color: "#484e5c",
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        }
    },
    commentText:
    {
        fontSize: 14,
        fontFamily: "yekanLight",
        textAlign: 'Justify',
        color: "#484e5c",
        lineHeight: "28px",
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        }
    },
    moreBtn: {
        height: "41px",
        width: "29px",
        padding: "25px 0",
        [theme.breakpoints.down('sm')]: {
            padding: "13px 0",
            '& svg': {
                width: "20px !important",
                height: "20px !important",
                marginTop: "-4px",
            }
        },
        '&:hover': {
            backgroundColor: "transparent"
        },
    },
    moreBtnIcon: {
        color: "#484E5C",
        width: "29px",
    },
    likeDisLikeBtn: {
        padding: "6px",
        [theme.breakpoints.down('sm')]: {
            '& img': {
                width: "20px !important",
                height: "20px !important",
            }
        }
    },
    likeDisLikeWrapper:
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    likeCountText: {
        fontSize: 13,
        fontFamily: 'yekanLight',
        color: "#484e5c",
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        }
    },
    commentRepliesRoot:
    {
    },
    dividerReply: {
        width: "100%",
    },
    dividerCommentItem: {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        margin: "26px 0",
    },
    commentReplyRoot: {
        padding: "21px 8px",
        borderLeft: "5px solid rgba(66, 100, 251, 0.1)",
        borderRadius: "3px",
    },
    commentReplayAvatarContainer:
    {
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "1px solid #92A4BB",
        position: "relative",
        marginRight: "9px",
        [theme.breakpoints.down('sm')]: {
            width: "31px",
            height: "31px",
        }
    },
    commentReplayAvatar:
    {
        width: "100% !important",
        height: "100% !important",
        border: '1px solid #fff',
        backgroundColor: "#ffa352",
        fontSize: 18
    },
    commentReplyUserName: {
        color: "#484e5c",
        fontSize: 15,
        fontFamily: "chistaYekanB",
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        }
    },
    commentReplyUserType:
    {
        fontFamily: "yekanLight",
        color: "#484e5c",
        fontSize: 12
    },
    commentReplyText:
    {
        fontSize: 14,
        fontFamily: "yekanLight",
        color: "#484e5c",
        margin: 4,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        }
    },
    commentItemDate: {
        color: "#484e5c",
        fontSize: "15px",
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        }
    }
}));
