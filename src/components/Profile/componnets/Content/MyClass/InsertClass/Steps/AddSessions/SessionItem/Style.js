import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({

    stepBTN: {
        right: 35,
        width: '394px',
        position: "absolute",
        bottom: 15,
        height: 56,
        cursor: "pointer",
        backgroundColor: theme.buttonColor.normal,
        borderRadius: 8,
        color: "white",
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "block",
        margin: "32px 0 0 auto",
        outline: "none",
        border: "none",
        fontFamily: theme.font.bold,
        '&:hover': {
            backgroundColor: theme.buttonColor.hover
        },
        [theme.breakpoints.down('sm')]: {
            width:'calc(100% - 50px)',
            right:25,
            height:48,
            bottom:20
        },
    },
    dialogContainer:{
        height:'100%',
        position:'relative',
        padding:'15px 0',
        [theme.breakpoints.down('sm')]: {
            padding:'0 0',
        },
    },

    sessionItemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // height: 89,
        width: '100%',
        padding: ' 21px 35px',
        borderBottom: '1px solid ' + theme.textColor.border,
        [theme.breakpoints.down('sm')]: {
            padding: ' 21px 25px',
        },
    },
    sessionItemDateWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sessionItemNumber: {
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.textColor.border,
        border: '1px solid ' + theme.textColor.secondary,
        color: theme.textColor.secondary,
        borderRadius: '50%',
        fontSize: 13
    },
    sessionItemDate: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: 14,
        '&>p': {
            margin: 0,
            fontSize: 13
        },
        '&>p:nth-child(1)': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary
        },
        '&>p:nth-child(2)': {
            fontFamily: theme.font.regular,
            color: theme.textColor.secondary
        }
    },
    sessionItemTimeWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sessionItemTime: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginRight: 28,
        '&>p': {
            margin: 0
        },
        '&>p:nth-child(1)': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            fontSize: 16
        },
        '&>p:nth-child(2)': {
            fontFamily: theme.font.regular,
            color: theme.textColor.secondary,
            fontSize: 13
        }
    },
    classDetailLink: {
        backgroundColor: '#fff !important',
        zIndex: 990,
        '&>a': {
            fontSize: 13,
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            width: '100%'
        },
        '&:hover': {
            // backgroundColor:'#fff !important',

            borderRadius: 8,
            backgroundColor: '#f5f8fa!important',
            '&>a': {
                color: theme.buttonColor.normal,
                // color: theme.textColor.primary,
            },
        }
    },
    addSessionNextWeekContainer: {
        cursor: 'pointer'
    },
    addSessionNextWeekBtnIcon: {
        color: '#fff',
        backgroundColor: theme.buttonColor.normal,
        border: 'none',
    },
    confirmSessionContainer: {
        marginTop: -15
    },
    scrollBar: {
        height: '500px !important',
        '&>div:nth-child(1)': {
            marginLeft: 'unset!important',
            marginRight: '-15px !important'
        }
    },
    errorContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding:'0 35px',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(255,101,117,0.16)',
        marginBottom:28,
        '&>p': {
            color: theme.textColor.error,
            direction:'ltr',

            [theme.breakpoints.down('sm')]: {
               fontSize:13
            },
        },
        '&>img':{
            marginRight:13,
            width:18,
            height:18
        }
    }
}));
