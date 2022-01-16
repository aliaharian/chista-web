import {makeStyles} from "@material-ui/styles";

export default makeStyles(
    (theme) => ({
        filterWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "#F7F9FF",
            borderRadius: 12,
            marginTop: 4,
            padding: '0px 10px 15px 15px',
            [theme.breakpoints.down("sm")]: {
                justifyContent: "flex-end",
                display:"none"
            },
        },
        hiddenMd:{
            [theme.breakpoints.up("md")]: {
                display:"none"
            },
        },
        breadCrumb: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 11,
            color: '#0c0b31',
            cursor: "pointer",
            "& p": {
                fontSize: 16,
                fontFamily: "chistaYekanB",
                marginLeft: 15,
                marginTop: 0,
                marginBottom: 0,
            },
            [theme.breakpoints.down("sm")]: {
                marginTop: 6
            },
        },
        breadCrumbRes: {

            [theme.breakpoints.up("md")]: {
                display: "none"
            },
        },
        filterBtn: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: theme.palette.primary.main,
            borderRadius: 12,
            color: "white",
            outline: "none",
            fontFamily: "chistaYekanR",
            border: "none",
            width: 150,
            height: 50,
            padding: "0 25px",
            cursor: "pointer",
            marginLeft: 20,
        },
        opinionsWrapper: {},
        opinionAvatarWrapper: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        opinionAvatarBorder: {
            border: "1px solid transparent",
            borderRadius: 100,
            // padding: 2,
            position: "relative",
            width: '68px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down("sm")]: {
                width: '56px',
                height: '56px',
            },

        },
        opinionReplayAvatarBorder: {
            border: "1px solid transparent",
            borderRadius: 100,
            // padding: 2,
            position: "relative",
            width: '68px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down("sm")]: {
                width: '56px',
                height: '56px',
            },
        },
        opinionAvatar: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
        opinionAvatarReplay: {
            width: theme.spacing(5),
            height: theme.spacing(5),
            borderRadius: "50%",
        },
        opinionAvatarOpinion: {
            width: '100%',
            height: '100%',
            borderRadius: "50%",
            border: '1px solid #fff',
            '&>img':{
                borderRadius: "50%",

            }
        },

        opinionAvatarOpinionReplay:{
            width: '100%',
            height: '100%',
            borderRadius: "50%",
            border: '1px solid #fff',
            '&>img':{
                borderRadius: "50%",

            }
        },
        opinionNameWrapper: {
            marginLeft: 13,
            textAlign: "left",
            "& p:first-child": {
                fontFamily: "chistaYekanB",
                color:'#0c0b31'
            },
            "& p:last-child": {
                display:'flex',
                alignItems:'center'
            },
            "& p": {
                margin: "2px 0",
            },
        },
        headerWrapper: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            [theme.breakpoints.down("sm")]: {
                flexDirection:'column'
            },

        },
        headerWrapperReply: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
        itemWrapper: {
            margin: "24px 0 30px 47px",
            // borderBottom: "1px solid rgba(224, 224, 224, 1)",
            paddingBottom: 15,
            [theme.breakpoints.down("sm")]: {
                margin: "35px 0 30px 0",
            },

        },
        opinionText: {
            padding: "0",
            fontSize:13,
            fontFamily: 'chistaYekanR!important',
            color: '#0c0b31cc!important',
            marginLeft:132,
            marginTop:8,
            [theme.breakpoints.down("sm")]: {
                marginLeft:0,
            },
            '&>div':{
                height:29,
                '&>svg':{
                    fontSize:24
                }
            }
        },
        actionsBtn: {
            all: "unset",
            border: "none",
            width: 95,
            height: 35,
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        actionsBtnEdit: {
            backgroundColor: '#fff',
            // border: '1px solid #ccd7dd',
            marginLeft: 15,
            color: '#0c0b31cc',
            width: '124px',
            height: '36px'
        },
        actionsBtnAnswer: {
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            backgroundColor: '#fff',
            // marginLeft: 15,
            width: '124px',
            height: '36px'
        },
        actionBtnReport: {
            border: `1px solid ${theme.palette.border.main}`,
            marginLeft: 10,
        },
        editBtnRes: {
            // [theme.breakpoints.up("md")]: {
            //     display: "none",
            // },
        },
        hiddenDesktop: {
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        actionEditIcon: {
            color: "#0c0b31",
            borderBottom: "1px solid #0c0b31",
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        actionsWrapper: {
            textAlign: "center",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            '&>div':{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily:'chistaYekanR',
                marginRight:33,
                color:'#0c0b31cc',
                cursor:'pointer',
                '&:hover':{
                    color:'#0c0b31',
                    '&>svg':{
                        color:'#0c0b31',
                    }
                },
                '&>svg':{
                    color:'#0c0b31cc',
                  marginRight:5,
                }
            },
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
        },
        answerBtnActive:{
            '&>svg':{
                fill:'#0c0b31cc',
            }
        },
        activeAction:{
            color:'#0c0b31!important',
            '&>svg':{
                color:'#0c0b31!important',
            }
        },
        date: {
            margin: "0 3px",
        },
        replayWrapper: {
            // borderLeft: "5px solid #ccd7dd",
            paddingLeft: 15,
            borderRadius: 3,
            marginLeft: 328,
            marginTop: 14,
            [theme.breakpoints.down("sm")]: {
                // backgroundColor: "rgba(22, 65, 255, 0.05)",
                border: "none",
                borderRadius: 20,
                padding: 0,
                borderTopLeftRadius: 0,
                marginLeft: 23,
                marginTop: 25,
            },
        },
        replyNameWrapper:{
          display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            '&>p':{
              marginRight:12
            }
        },
        editText: {
            width: "100%",
            border: "none",
            minHeight: 100,
            padding: "0",
            fontSize:13,
            fontFamily: 'chistaYekanR',
            color: '#0c0b31cc',
            margin: '7px 0',
            // resize: "none",
            "&:focus": {
                border: "none",
                outline: "none",
            },
        },
        actionBtnClose: {
            border: "1px solid" + " " + theme.palette.border.main,
            borderRadius: 8,
            color: "#484e5c",
            marginRight: 8,
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
                width: 26,
                height: 26,
                padding:2

            },
        },
        actionBtnWrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
                display: "block",
            },
        },
        actionBtnCheck: {
            border: "1px solid" + " " + theme.palette.primary.main,
            borderRadius: 8,
            color: theme.palette.primary.main,
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
                width: 26,
                height: 26,
                padding:2
            },
        },
        messageError: {
            color: "red",
            fontSize: 12,
            margin: 0,
            marginRight: 10,
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        charCount: {
            margin: "0 10px",
            fontSize: 12,
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        messageErrorModal: {
            // display: "block",
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        messageErrorModalContent: {
            padding: 40,
            maxWidth: 300,
            fontWeight: "bold",
        },
        dateTime: {
            textAlign: "left",
            marginRight:13
        },
        rate: {
            display: "flex",
            alignItems: "center",
            marginBottom: 4,
            flexDirection: 'column',
            "& span": {
                fontSize: 55,
                color:'#0c0b31',
                fontFamily: "chistaYekanR",
                marginLeft: 0,
            },


            "&>span:nth-child(1)":{
                lineHeight:1.5,
            }
        },
        rateRes: {
            display: "flex",
            alignItems: "center",
            marginBottom: 5,
            flexDirection: 'column',
            "& span": {
                fontSize: 47,
                fontFamily: "chistaYekanB",
                marginLeft: 0,
            },
        },
        rateWrapper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 30,
            "& p": {
                color: theme.palette.secondaryText.main,
            },
        },
        scoresWrapper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 51,
            '&>div': {
                display: 'flex',
                alignItems: 'center',
                marginBottom:10,
                '&>span': {
                    color: '#0c0b31',
                    fontSize:13,
                },
                '&>span:last-child':{
                    lineHeight:'0',

                },
                '&>span:first-child':{
                    lineHeight:'0',

                }
            },
            "& progress": {
                width: 297,
                height: 6,
                margin: '5px 8.5px',
                border: "none",
                borderRadius: 100,
            },

            "& progress::-webkit-progress-value": {
                background: "#0c0b31",
                borderRadius: 100,
            },

            "& progress::-webkit-progress-bar": {
                background: "rgba(189, 200, 214, 0.3)",
                borderRadius: 100,
            },
            "& span:first-child": {
                width: 15,
                display: "inline-block",
                textAlign: "center",
            },
            "& span": {
                color: theme.palette.secondaryText.main,
            },
            "& div": {
                display: "flex",
            },
        },

        scoresWrapperRes: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 30,
            '&>div': {
                display: 'flex',
                alignItems: 'center',
                '&>span': {
                    color: '#0c0b31',
                    fontSize:13
                }
            },
            "& progress": {
                width: 203,
                height: 5,
                margin: '5px 8.5px',
                border: "none",
                borderRadius: 100,
            },

            "& progress::-webkit-progress-value": {
                background: "#0c0b31",
                borderRadius: 100,
            },

            "& progress::-webkit-progress-bar": {
                background: "rgba(189, 200, 214, 0.3)",
                borderRadius: 100,
            },
            "& span:first-child": {
                width: 15,
                display: "inline-block",
                textAlign: "center",
            },
            "& span": {
                color: theme.palette.secondaryText.main,
            },
            "& div": {
                display: "flex",
            },
        },
        countWrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > div": {
                display: "flex",
                [theme.breakpoints.down("sm")]: {
                    display: "none",
                },
                "&>div:nth-child(2)": {
                    marginRight: 0
                }, "&>div:nth-child(1)": {
                    marginRight: 80
                },
                "& div": {
                    margin: "0 10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                },
                "& div p:first-child": {
                    fontFamily: "chistaYekanB",
                    fontSize: 16,
                    margin: 0,
                    marginBottom: 3,
                    color: '#0c0b31',

                },
                "& div p:last-child": {
                    color: '#0c0b31',
                    margin: 0,
                },
            },
        },
        rateScore: {
            display: "flex",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },

        rateResWrapperContainer: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection:'column',
            marginBottom:31,
            [theme.breakpoints.up("md")]: {
                display:"none"
            },
            '&>div:nth-child(2)':{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop:36,

                '&>div:nth-child(1)':{
                    marginRight:24

                },
                '&>div:nth-child(2)':{
                    marginLeft:24

                },
            },
            "& div p:first-child": {
                fontSize:13,
                fontFamily:'chistaYekanB',
                margin: 0,
                marginBottom: 10,
                color: theme.palette.primaryText.main,

            },
            "& div p:last-child": {
                color: theme.palette.secondaryText.main,
                margin: 0,
                textAlign:"center",

            },

        },
        rateResWrapper: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width:'100%',
            // backgroundColor: "rgba(255, 196, 82, 0.1)",
            borderRadius: 14,
            padding: 9,
            '&>div:nth-child(1)':{
                marginLeft:0
            },
            "& > div": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            },

            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        dateRes: {

            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        dateDesk: {
            display: 'inline-flex',
            marginRight: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 14px',
            width: 124,
            height: 36,
            backgroundColor: '#f5f8fa',
            borderRadius: 8,
            fontSize:13,
            '&>div': {
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        ostad: {
            // [theme.breakpoints.down("sm")]: {
            //     display: "none",
            // },
        },
    }));
