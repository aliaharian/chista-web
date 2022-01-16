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
    inputLabelBold: {
        fontSize: "15px",
        color: "#536b88",
        marginLeft: 10,
        marginRight: 14,
        fontFamily: "chistaYekanB",
        position: "relative",
    },
    ml44: {
        paddingRight: '44px'
    },
    introInput: {
        paddingRight: '66px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0',
        },
    },


    mr44: {
        paddingLeft: '44px'
    },
    selectedCoursesNumber: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 8,
        border: 'solid 1px #ccd7dd',
        fontSize: 16,
        fontFamily: 'chistaYekanB'
    },
    inputLabel: {
        fontSize: "15px",
        color: "#92a4bb",
        marginLeft: 10,
        marginBottom: 12,
        fontFamily: "yekanLight",
        position: "relative",
    },
    inputHint: {
        fontSize:13,
        color: "#92a4bb",
        fontFamily: "yekanLight",
    },
    categoryFooter: {
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        fontfamily: 'chistaYekanB',
        color: '#0c0b31',
        fontSize: 16,
        marginBottom: 139,
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
            marginBottom: 69,
            marginTop: 44,


        },

        "& button": {
            margin: "0 0 0 30px",
        },
        "& p span:first-child": {
            marginRight: 8,
            color: '#0c0b31',
            fontSize:13,
        },
        "& p span:last-child": {
            color: "#0c0b31",
            fontSize:13,
        },
    },
    submitBtn: {
        backgroundColor: theme.buttonColor.normal,
        height: 56,
        width: 320,
        borderRadius: 8,
        fontSize:13,
        color: "white",
        // marginTop: 69,
        // marginBottom: 114,
        fontFamily: "chistaYekanB",
        margin: "0",
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        cursor: "pointer",
        display: "block",
        border:'none!important',
        outline:'none!important',
        transition: 'all 0.3s ease-in-out',
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            top:0,
            right:0,
            margin:0,
            width:'max-content',
            padding:'0 25px',
            textAlign:'right',
            backgroundColor:'transparent',
            color:theme.buttonColor.normal
        },
        '&:hover': {
            backgroundColor: '#3748bb',
            [theme.breakpoints.down('sm')]: {
                backgroundColor: 'transparent',

            },
        }

    },

    formContainer: {
        justifyContent: 'space-between',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        margin: 0,
        '&>.MuiGrid-item , &>.MuiGrid-root': {
            padding: '14px 0 46px 0 ',
            width: '320px!important',
            [theme.breakpoints.down('sm')]: {
                padding: '14px 0 14px 0',
                width: '100%!important',

            },
        }
    },

    pb0: {
        paddingBottom: "0!important"
    },


    disableBtn: {
        pointerEvents: "none",
        backgroundColor: '#fff',
        color: '#bdbdbd',
        border: "1px solid #bdbdbd!important",
        boxShadow: "none !important",
        [theme.breakpoints.down('sm')]: {
            border: "1px solid transparent",


        },
    },
    textAlignLeft: {
        "& input": {
            textAlign: "right",
            direction: "rtl",
        },
    },
    searchBoxWrapper: {
        height: 60,
        border: "1px solid #e7ecf0",
        borderRadius: 8,
    },
    categoryBtn: {
        height: "100%",
        padding: 5,
        color: "#0c0b31",
        fontSize: 'chistaYekanB'

    },
    categoryWrapepr: {
        width: "100%",
        height: 500,
        borderRadius: 8,
        boxShadow: "0 5px 10px 0 rgba(0, 5, 52, 0.11)",
        display: "flex",
        marginTop: 6,
        color: "#aab8c2",

        "& ul": {
            height: "100%",
            overflowY: "auto",
            minWidth: 204,
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            padding: 15,
            "& li": {
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                "& p": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px 0",
                },
                "& img": {
                    width: 20,
                    height: 20,
                    marginRight: 10,
                },
            },

            "& li:hover": {
                color: "#aab8c2",
                "& svg": {
                    color: `#aab8c2 !important`,
                },
            },
        },
    },
    mainCategory: {
        backgroundColor: "#e7ecf0",
    },
    hoverActive: {
        color: theme.palette.primary.main,
        "& svg": {
            color: `${theme.palette.primary.main} !important`,
        },
    },
    errorMessage: {
        marginTop: 0,
        marginBottom:0,
        color: `${theme.palette.error.main} !important`,
        fontSize: 16,
    },

    uploadTitle: {
        fontSize: 15,
        fontFamily: "chistaYekanB",
        color: "#0b0c31",
        display: "inline",
    },
    uploadValidation: {
        fontSize:13,
        color: "#0b0c31b3",
        marginLeft: 15,
        fontFamily: 'chistaYekanR'
    },
    uploadContainer:{
        [theme.breakpoints.down('sm')]: {
            padding:8
        },
    },
    uploadDescription: {
        fontSize:13,
        marginTop: 8,
        marginBottom: 25,
        color: "#0b0c31b3",
    },
    uploadTitleReq: {
        position: "relative",
        "&::before": {
            content: '""',
            height: 5,
            width: 5,
            backgroundColor: "#fc3563",
            borderRadius: '50%',
            right: -39,
            position: "absolute",
            [theme.breakpoints.down('sm')]: {
                right: -25,
            },
        },
    },
    policy: {
        margin: "0 5px",
        textDecoration: "none",
        color: theme.palette.primary.main,
        fontFamily: "chistaYekanB",
    },
    btnErrorContainer:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:69,
        marginBottom:114,
        flexDirection:'row-reverse'
    }
}));
