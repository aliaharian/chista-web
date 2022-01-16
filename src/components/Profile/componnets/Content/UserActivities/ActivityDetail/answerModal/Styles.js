import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    baseInfoContainer: {
        padding: '40px 52px 16px 35px !important',
        [theme.breakpoints.down('sm')]: {
            padding: '16px 42px 16px 25px !important',
        },
    },
    form: {
        height: '530px',
        [theme.breakpoints.down(480)]: {
            height: 'calc(100vh - 63px)',
        },
        '&>div':{
            '&>div':{
                marginRight:'-17px !important',
                marginLeft:'unset !important'
            }
        },
        
        // "&>div": {
        //     "&>div": {
        //         paddingTop: 8,
        //         marginRight: '-15px !important',
        //         marginLeft: 'unset !important',
        //         [theme.breakpoints.down('sm')]: {
        //             paddingTop: 0,

        //         },
        //     }
        // },

    },
    questionImageContainer: {
        border:'1px solid #dbdbe0',
        width: '100%',
        height: 214,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 14,
        borderRadius: 8,
        overflow: 'hidden',
        '&:hover': {
            '&>div': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }
    },
    questionImageOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        right: 0,
        backgroundColor: theme.textColor.secondary,
        display: 'none',
        cursor: 'pointer',
        '& svg': {
            fontSize: 45,
            color: '#fff'
        }
    },
    formError: {
        top: "100%",
        margin: "0",
        display: "flex",
        // position: "absolute",
        alignItems: "center",
        fontFamily: theme.font.regular,
        '&>span': {
            color: '#f64d4d',
            fontSize: '13px',
            marginRight: 5
        }
    },
    decription: {
        marginTop: 20,
        "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            padding: "16px 20px",
            '&>textarea': {
                height: '125px !important',
            }
        },
        "& .MuiInputAdornment-positionStart": {
            top: "25px",
            position: "absolute",
            left: "10px",
        },

    },
    disableBtn: {
        pointerEvents: 'none',
        borderColor: theme.textColor.border + ' !important',
        color: theme.textColor.border + ' !important'
    },
    stepBTN: {
        right: 35,
        width: '78px',
        zIndex: 55,
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 15,
        color: theme.buttonColor.normal,

        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        margin: "0",
        outline: "none",
        fontSize: 13,
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',


        },
        [theme.breakpoints.down('sm')]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
            // width: 'max-content',
            color: theme.buttonColor.hover,
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.hover,

            },
        },
    },
    progressContainer: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        '&>p': {
            marginBottom: 7,
            textAlign: 'right',
            fontSize:14,
            color:theme.textColor.secondary
        }
    },
    uploadFileContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        // pointerEvents:'auto !important',
        '& svg':{
            fontSize:20,
            marginRight:11,
            marginBottom:-5,
            cursor:'pointer',
            pointerEvents:'auto !important'
        }
    },
    progress: {
        width: '291px'
    }
}));
