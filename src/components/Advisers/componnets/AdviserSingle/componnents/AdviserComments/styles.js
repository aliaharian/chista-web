import React from "react";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    titleRoot:
    {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: "23px 30px",
        [theme.breakpoints.down('sm')]: {
            margin: "23px 0",
        },
    },
    boxTitleRoot: {
    },
    titleWrapper:
    {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        '&>img':
        {
            height: 29,
            width: 29,
        },
        '&>h2':
        {
            color: "#484e5c",
            fontFamily: "yekanHeavy",
        }
    },
    root:
    {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        margin: "15px 30px",
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
    },
    emptyImg:
    {
        width: 371,
        height: 282
    },
    emptyListText:
    {
        fontFamily: theme.font.regular,
        fontSize: '14px',
        color: '#92A4BB',
        fontWeight: 'normal',
        textAlign: "center",
    },
    commentsTitle:
    {
    },
    writeCommentButton: {
        color: "#4264fb",
        border: '1px solid #4264fb',
        height: 48,
        width: 172,
        borderRadius: "12px",
        fontFamily: theme.font.regular,
        fontSize: '16px',
        [theme.breakpoints.down('sm')]: {
            height: 35,
            width: 115,
            fontSize: 14,
            borderRadius: 8,
            '& img': {
                width: "20px!important",
                height: "20px!important",
            }
        }
    },
    moreCommentButton: {
        color: "#4264fb",
        backgroundColor: "transparent",
        border: 0,
        fontFamily: 'yekanB',
        fontSize: 16,
    },
    writeCommentButtonMobile: {
        width: "48px",
        border: "1px solid #4264fb",
        height: "48px",
    },
    rateWrapper:
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end',
        }
    },
    scoreBoardWrapper:
    {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        flexGrow: 1,
        marginLeft: 15,
    },
    rateTextWrapper:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    rateText:
    {
        fontFamily: "chistaYekanB",
        fontSize: "25px",
        color: "#484e5c",
        lineHeight: "39px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "42px",
        }
    },
    rateCountText:
    {
        fontFamily: "yekanLight",
        fontSize: "16px",
        color: "#808895",
        lineHeight: "28px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px",
        }
    },
    processBar: {
        margin: theme.spacing(1),
        width: "100%"
    },
    fullRateWrapper:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "relative",
        marginBottom: "66px",
        marginTop: "37px",
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            '& >div': {
                justifyContent: 'center',
                margin: "30px 0 0",
            }
        }
    },
    scoreBoardItem:
    {
        display: 'flex',
        width: "100%",
        alignItems: "center"
    },
    scoreBoardItemNumber:
    {
        fontFamily: "yekanRegular",
        color: "#808895",
        fontSize: 11,
        width: 6,
        textAlign: 'right'
    },
    commentsRoot:
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "relative",
        width: "100%",
    },
    writeCommentWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
    },
    countsWrapper:
    {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    countItem:
    {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        marginRight: 36,
    },
    countItemText:
    {
        fontFamily: theme.font.regular,
        fontSize: 16,
        color: "#484e5c"
    },
    countItemSubText:
    {
        fontFamily: "yekanLight",
        fontSize: 14,
        color: "#484e5c"
    },
    commentTitleWrapper: {
        display: "flex",
        margin: "23px 30px",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            margin: "0 0 30px 0",
        },
    },

    commentTitle: {
        color: "#2a2f33",
        fontFamily: "chistaYekanB",
        fontSize: 22,
        display: "flex",
        alignItems: "center",
        margin: "37px 0",
    },
    commentTitleIcon: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "flex-end",
    },
}));
