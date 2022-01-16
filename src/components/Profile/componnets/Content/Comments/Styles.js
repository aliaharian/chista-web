import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    filterWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#F7F9FF",
        borderRadius: 12,
        marginTop: 15,
        padding: 15,

    },
    breadCrumb: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom:16,
        cursor:"pointer",
        "& p": {
            fontSize: 16,
            fontFamily: "chistaYekanB",
            marginLeft: 15,
            marginTop: 0,
            marginBottom: 0
        },
        [theme.breakpoints.down("sm")]: {
            marginTop:6
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
    },
    commentsWrapper: {

        marginLeft:35,
        [theme.breakpoints.down("sm")]: {
            marginLeft:0,
            padding :'0 9px'
        },

    },
    commentAvatarWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    commentAvatarBorder: {
        border: "1px solid #808895",
        borderRadius: 100,
        padding: 2,
        position: "relative",
    },
    commentAvatar: {
        width: '100%',
        height: '100%',
        border: 'solid 1px #fff',

    },
    replyCommentAvatarContainer:{
        width: 68,
        height: 68,
        border: 'solid 1px rgba(128,136,149,0.6)',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        borderRadius: '50%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        [theme.breakpoints.down("sm")]: {
            width: 52,
            height: 52,
        }

        },
    commentAvatarContainer: {
        width: 86,
        height: 86,
        border: 'solid 1px rgba(128,136,149,0.6)',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        borderRadius: '50%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        [theme.breakpoints.down("sm")]: {
            width: 52,
            height: 52,
        }
    },

    commentAvatarReplay: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    commentNameWrapper: {
        marginLeft: 14,
        textAlign: "left",
        "& :first-child": {
            fontFamily: "chistaYekanR",
        },
        "& p": {
            color:'#0c0b31',
            margin: "2px 0",
        },
    },
    headerWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemWrapper: {
        margin: "30px 0",
        // borderBottom: "1px solid #80889521",

        paddingBottom: 15,
    },
    commentText: {
        padding: "0 10px 0 0 ",
        marginTop:13,
        fontSize:13,
        color:'#0c0b31cc'
    },
    editBtn: {
        all: "unset",
        backgroundColor: theme.buttonColor.normal,
        border: "none",
        color: "white",
        width: 124,
        height: 36,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            display:'none!important'
        },
        '&>img':{
            marginRight:7,
            height:24
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    editBtnRes: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    actionsTime: {
        textAlign: "center",
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        '&>button':{
            display:'inline-flex',
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    commentDateTime:{
        display:'inline-flex',
        marginRight:8,
        alignItems:'center',
        justifyContent:'flex-start',
        // padding : '0 14px',
        width:124,
        height:36,
        // backgroundColor:'#f5f8fa',
        borderRadius:8,
        fontSize:13
    },
    date: {
        margin: "0 6px",
    },

    editText: {
        width: "100%",
        border: "none",
        fontFamily: "chistaYekanR",
        minHeight: 100,
        marginTop:17,
        fontSize:13,
        color:'#0c0b31cc',
        // resize: "none",
        "&:focus": {
            border: "none",
            outline: "none",
        },
    },
    actionBtnClose: {
        border: "1px solid" + " " + theme.palette.border.main,
        borderRadius: 4,
        color: "#484e5c",
        marginRight: 8,
        cursor: "pointer",
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
        borderRadius: 4,
        color: theme.palette.primary.main,
        cursor: "pointer",
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
        textAlign: "right ",
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        fontSize:13
    },

    replayWrapper: {
        marginLeft:56,
        marginTop:30,
        // borderLeft: "4px solid #ccd7dd",
        paddingLeft: 12,
        borderRadius: 3,
        [theme.breakpoints.down("sm")]: {
            // backgroundColor: "rgba(22, 65, 255, 0.05)",
            border: "none",
            marginLeft:25,
            marginTop:26,
            borderRadius: 20,
            padding: 0,
            borderTopLeftRadius: 0,
        },
    },
}));
