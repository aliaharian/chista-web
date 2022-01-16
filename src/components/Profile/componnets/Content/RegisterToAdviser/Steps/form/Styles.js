import {makeStyles} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";
const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});
export default makeStyles((theme) => ({
    inputWrapper: {
        display: "flex",
        flexDirection: "column",
        // marginTop: 53,
        "& img": {
            width: "24px",
            height: "24px",
        },
        "& input": {
            fontSize: 15,
            color: "#536b88",
            fontFamily: theme.font.regular,
            // height: 55,
            // borderRadius: 8,
            // border: `1px solid ${theme.palette.border.main}`,
        },
        "& textarea": {
            fontSize: 15,
            color: "#536b88",
            fontFamily: theme.font.regular,
            height: 160,
        },
        "& .MuiInput-root": {
            height: 55,
            border: `1px solid ${theme.palette.border.main}`,
            padding: "5px 10px",
            borderRadius: 8,
        },
        "& .MuiInputBase-formControl": {
            height: 55,
            borderRadius: 8,
        },
        "& label": {
            display: "inline",
            width: "fit-content",
            position: "relative",
            marginBottom: 20,
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none !important",
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none !important",
        },
    },
    calendarWrapper: {
        "& .MuiOutlinedInput-notchedOutline": {
            height: 57,
            borderColor: "rgba(224, 224, 224, 1)",
        },
        // "& .MuiInputBase-formControl": {
        //   height: "unset",
        // },
    },

    deleteOverlay: {
        display: 'flex',
        position: "absolute",
        width: '120px',
        height: '120px',
        top: 0,
        right: '50%',
        transform: 'translateX(50%)',
        cursor: 'pointer',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
        borderRadius: 8,
        backgroundColor: 'rgba(42,47,51,0)',
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            opacity:1,
            width: '98px',
            height: '98px',
            backgroundColor: 'rgba(42,47,51,0.7)',

        },
        '&:hover': {
            opacity: 1,

            backgroundColor: 'rgba(42,47,51,0.7)',
        }
    },
    loadingOverlay: {
        display: 'flex',
        position: "absolute",
        width: '120px',
        height: '120px',
        top: 0,
        right: '50%',
        transform: 'translateX(50%)',
        cursor: 'pointer',
        opacity: 1,
        transition: 'all 0.2s ease-in-out',
        borderRadius: 8,
        backgroundColor: 'rgba(42,47,51,0.8)',
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            opacity:1,
            width: '98px',
            height: '98px',
            backgroundColor: 'rgba(42,47,51,0.7)',

        },
    },
    errorWrapperCalendar: {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `#f64d4d`,
        },
    },
    inputWrapperTextarea: {
        "& .MuiInput-root": {
            minHeight: 55,
            height: "auto",
        },
    },
    checkboxWrapper: {
        paddingBottom: 7,
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
    },
    labelWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& p": {
            marginTop: "0px !important",
            color: "#aab8c1",
            fontSize:13,
        },
    },
    inputLabelRequired: {
        "&::before": {
            content: '""',
            height: 5,
            width: 5,
            backgroundColor: "#fc3563",
            borderRadius: 30,
            right: -10,
            position: "absolute",
        },
    },
    errorWrapper: {
        "& .MuiInputBase-root": {
            border: `1px solid #f64d4d`,
        },
    },
    errorMessage: {
        display: "flex",
        alignItems: "center",
        "& span": {
            marginLeft: 5,
            color: "#f64d4d",
        },
    },
    uploadWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom:48,
        maxWidth:420,
        flexWrap:'wrap',

        "& label": {
            height: 120,
            width: 120,
            backgroundColor: "#f5f8fa",
            border: "1px dashed #aab8c1",
            borderRadius: 8,
            margin:'0 10px 10px 10px',
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.down('sm')]: {
                width:98,
                height:98,
                margin:'0 10px 10px 0',

            },
            "& p": {
                fontSize:13,
                fontFamily:'chistaYekanR',
                color:'#0b0c31b3',
                marginTop: 2,
                marginBottom: 0,
            },
            "& svg": {
                fontSize: 31,

                marginTop: 0,
            },
        },
        "& img": {
            // height: 100,
            // width: 100,
            borderRadius: 8,
            // margin: "0px 10px",
        },
        "& video": {
            // height: 100,
            // width: 100,
            borderRadius: 8,
            // margin: "0px 10px",
        },
    },
    numberValidate: {
        "& label": {
            pointerEvents: "none",
            display:'none',
            opacity: "0.3",
        },
    },
    previewWrapper: {
        position: "relative",
        display: "flex",
        alignItems:'center',
        margin:'0 10px',
        width:120,
        height:120,
        marginBottom:10,
        backgroundPosition:"center",
        backgroundSize:'cover',
        borderRadius:8,
        [theme.breakpoints.down('sm')]: {
            width:98,
            height:98,
            margin:'0 10px 10px 0',

        },
        "& svg": {
            position: "relative",
            // top: 5,
            // right: 15,
            color: '#fff',
            cursor: "pointer",
        },
    },
    constValue: {
        position: "absolute",
        right: 10,
    },
    constValueWrapper: {
        "& .MuiInput-root": {
            paddingRight: 25,
        },
    },
    ".MuiMenu-list": {
        border: "none",
    },
}));
