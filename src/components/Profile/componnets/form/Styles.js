import { makeStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = '#0c0b31';
const secondaryColor = '#0c0b31cc';

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
    selectedInSelectFormView: {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    menuPaper: {
        maxHeight: '190px !important'
    },
    inputRoot: {
        '& textarea':{
            overflow: 'auto',
        },  
        '& .Mui-disabled':{
            border:'none !important'
        },
        '& svg':{
            color:theme.textColor.primary
        }
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "column",
        position: 'relative',
        width: 394,
        margin: 'auto',
        [theme.breakpoints.down(480)]: {
            width: '100%'
        },
        // marginTop: 53,
        [theme.breakpoints.down(480)]: {
            width: '100%'
        },
        "& img": {
            width: "24px",
            height: "24px",
            marginRight: '10px',
        },
        "& input": {
            fontSize: 13,
            color: primaryColor,
            fontFamily: theme.font.regular,
            // height: 55,
            // borderRadius: 8,
            // border: `1px solid ${theme.palette.border.main}`,
        },
        "& textarea": {
            fontSize: 13,
            color: primaryColor,
            fontFamily: theme.font.regular,
            height: 160,
        },
        "& .MuiInput-root": {
            height: 56,
            border: `1px solid ${theme.palette.border.main}`,
            paddingLeft: '15px',
            borderRadius: 8,
            [theme.breakpoints.down('sm')]: {
                height: 48,
            },
            '&>.MuiInput-input': {
                paddingRight: 10
            }
        },
        "& .MuiInputBase-formControl": {
            height: 55,
            borderRadius: 8,
        },
        "& label": {
            display: "inline",
            width: "fit-content",
            position: "relative",
            marginBottom: 12,
            fontSize: 13,
            fontFamily: 'chistaYekanM',
            marginLeft: 5,
            color: secondaryColor,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 15,
            },

        },
        "& .MuiInput-underline:after": {
            borderBottom: "none !important",
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none !important",
        },

    },
    SelectOption: {
        '& .MuiPaper-root': {
            width: '320px',
            borderRadius: '8px!important'
        },
        '& .MuiMenu-list': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        '& .MuiListItem-root': {
            width: 294,
            borderRadius: 8,
            '&:hover': {
                backgroundColor: '#f5f8fa',

            }

        },
        '& .Mui-selected': {
            backgroundColor: 'transparent',
        }
    },

    selectInput: {
        '& .Mui-disabled':{
            border:'none !important',
            backgroundColor: 'transparent !important'
        },
        '& svg':{
            color:theme.textColor.primary
        },
        '& .MuiSelect-root': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '6px!important',
            fontSize: 13,
            fontFamily: theme.font.regular,
            color: theme.textColor.primary,
            maxWidth:'80%',
            '& p':{
                fontFamily: theme.font.medium,
            color: theme.textColor.secondary,
            fontSize:13,
            },
            '&:focus': {
                backgroundColor: 'transparent'
            }
        }
    },

    SelectChevron: {
        position: 'absolute',
        right: 0
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
    errorWrapperCalendar: {
        "& .MuiInput-root": {
            borderColor: `#f64d4d`,

        },
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
            fontSize: 13,
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
            border: `1px solid #f64d4d !important`,
        },
        '& svg': {
            color: theme.textColor.error + ' !important'
        }
    },
    errorMessage: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        margin: '12px 0 14px 0',
        fontFamily: 'chistaYekanR',
        top: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: '8px 0 0 0 ',
            position: "unset",

        },
        "& span": {
            fontSize: 13,
            marginLeft: 5,
            color: "#f64d4d",
            [theme.breakpoints.down('sm')]: {
                fontSize: 13,

            },
        },
    },
    uploadWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "& label": {
            // height: 100,
            // width: 100,
            backgroundColor: "#f5f8fa",
            border: "1px dashed #aab8c1",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& p": {
                marginTop: 10,
                marginBottom: 0,
            },
            "& svg": {
                marginTop: 0,
            },
        },
        "& img": {
            // height: 100,
            // width: 100,
            borderRadius: 8,
            margin: "0px 10px",
        },
        "& video": {
            // height: 100,
            // width: 100,
            borderRadius: 8,
            margin: "0px 10px",
        },
    },
    numberValidate: {
        "& label": {
            pointerEvents: "none",
            opacity: "0.3",
        },
    },
    previewWrapper: {
        position: "relative",
        display: "flex",
        "& svg": {
            position: "absolute",
            top: 5,
            right: 15,
            color: theme.palette.error.main,
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
    montaFont: {
        '& input': {
            fontFamily: 'iranYekanFaNumRegular'
        }
    }
}));
