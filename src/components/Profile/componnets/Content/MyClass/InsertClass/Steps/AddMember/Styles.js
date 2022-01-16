import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    disableBTN: {
        border: '1px solid rgba(12, 11, 49, 0.16)!important',
        backgroundColor: 'white',
        color: 'rgba(12, 11, 49, 0.16)!important',
        borderRadius: 15,
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        borderRadius: 15,
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "block",
        margin: "0",
        outline: "none",
        fontFamily: theme.font.bold,
        transition: 'all 0.3s ease-in-out',
        [theme.breakpoints.down("sm")]: {
            top: 17.5,
            right: 24
            // width: "100% !important",
        },
    },
    checkboxRoot: {
        position: "absolute",
        zIndex: 4,
        left: 28,
        bottom: 2,
    },
    addClassHeaderWrapper: {
        // position: "relative",
        height: 74,
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 17,
        // paddingTop:17,
        paddingTop: 16,
        paddingRight: 35,
        paddingLeft: 35,
        borderBottom: '1px solid rgba(12, 11, 49, 0.15)',
        // marginBottom: 16,
        justifyContent: 'center',
        [theme.breakpoints.down(480)]: {
            borderBottom: '1px solid rgba(12, 11, 49, 0.15)',
            height: 65,
            padding: '17.5px 24px'
        },

    },
    errorContainer: {
        width: 'calc(100%)',
        margin: '7px auto 0 auto',
        height: 30,
        padding: '0 35px',
        backgroundColor: 'rgba(255,101,117,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& svg': {
            height: 30,
            color: '#ff6575',
            marginRight: 5
        },
        '&>p': {
            color: '#ff6575',
            fontSize: 13,
        }
    },
    errorMessage: {
        color: theme.textColor.error,
        fontSize: 13,
        marginTop: 0,
        marginLeft: 5
    },


    numberInputContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        outline: 'none !important',
        height: 56,
        border: '1px solid ' + theme.textColor.border + ' !important',
        [theme.breakpoints.down("sm")]: {
            height: 48,
        },

    },
    numberInputError: {
        border: '1px solid ' + theme.textColor.error + ' !important',
        '& svg': {
            color: theme.textColor.error
        }
    },

    divider: {
        color: theme.textColor.border,
        width: "calc(100%)",
        height: 1,
        position: "absolute",
        top: 91,
        right: 0,
        [theme.breakpoints.down("sm")]: {
            top: 65,
        },
        // borderTop: "1px solid #e7ecf0",
    },

    actionBTN: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        borderRadius: 15,
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "block",
        margin: "0",
        outline: "none",
        fontFamily: theme.font.bold,
        transition: 'all 0.3s ease-in-out',
        backgroundColor: "#f5f8fa",
        color: "#aab8c1",
        border: 'none',
        pointerEvents: 'none',
        [theme.breakpoints.down(480)]: {
            top: 17.5,
            right: 24
        },
    },

    actionActiveBTN: {
        cursor: "pointer",
        pointerEvents: "unset",
        backgroundColor: '#fff',
        color: theme.buttonColor.normal,
        fontSize: 13,
        fontFamily: theme.font.medium,
        border: "1px solid " + theme.buttonColor.normal,
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',
        },
        [theme.breakpoints.down("sm")]: {
            top: 17.5,
            right: 24
        },
    },

    stepBTN: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        color: theme.buttonColor.normal,
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "block",
        margin: "0",
        outline: "none",
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.bold,
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

    selectAddClassTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: '0',
        width: '100%',
        height: 30,

        "&>div:nth-child(1)": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        "& p": {
            margin: 0,
            fontFamily: theme.font.regular,
            fontSize: 14,
            color: theme.textColor.primary,
        },
        "& img": {
            cursor: "pointer",
        },
        "& svg": {
            fontSize: 18,
            color: theme.textColor.primary,
            cursor: "pointer",
            marginRight: 11,
        },
    },


    modalWrapper: {
        width: 464,
        height: 615,
        padding: '17px 0',
        borderRadius: 16,
        [theme.breakpoints.down(480)]: {
            margin: 0,
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            maxHeight: '100%',
            borderRadius: 0,
            padding:0
        },

    },
    modalTitle: {
        "& h2": {
            display: "flex",
            fontFamily: theme.font.bold,
        },
        // "& svg": {
        //   marginRight: 10,
        // },
    },
    closeModalIcon: {
        cursor: "pointer",
        marginRight: 10,
    },
    addFromNumberContainer: {
        padding: '8px 35px',
        '&>p:nth-child(2)': {
            marginBottom: 12,
            marginLeft: 5,
            fontSize: 13,
            lineHeight: '25px',
            marginTop: 27,
            position: 'relative',
            display: 'inline-block',
            '&:after': {
                content: '""',
                width: 5,
                height: 5,
                right: -10,

                backgroundColor: theme.textColor.error,
                position: 'absolute',
                borderRadius: '50%'
            }
        },
        [theme.breakpoints.down('sm')]: {
            padding: '8px 24px',
        },
    },
    modalDec: {
        fontSize: 14,
        fontFamily: theme.font.regular,
        textAlign: "center",
        marginTop: 32,
    },
    numberInput: {
        backgroundColor: "#f5f8fa",
        borderRadius: 8,
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        "& input": {
            color: theme.textColor.secondary,
            textAlign: "right",
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: theme.textColor.secondary + ' !important',

            },
            // borderRight: "1px solid #e7ecf0",
            padding: "10px 13px 10px 0",
            margin: "10px 0",
            fontSize: 14
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none !important",
        },
        '& .Mui-focused': {
            outline: 'none !important',
            border: '1px solid ' + theme.textColor.primary + ' !important'
        }
    },


    infoWrapper: {
        position: "relative",
        textAlign: "center",
        marginTop: "35px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "30px",
        },
    },
    contactListContent: {
        padding: 0,
        overflow: "hidden"
    },
    contactList: {
        // maxHeight: 400,
        maxHeight: 515,
        height: 'calc(100% - 120px)',
        [theme.breakpoints.down('sm')]: {
            height: 515
        },
        "&>div": {
            "&>div": {
                marginRight: '-17px',
                marginLeft: 'unset !important',
                [theme.breakpoints.down('sm')]: {
                    paddingTop: 0,

                },
            }
        },
        "& li": {
            listStyle: "none",
        },
    },
    // contactList: {
    //   // maxHeight: 400,
    //   maxHeight: 380,
    //   // overflowY: "auto",
    //   "& li": {
    //     listStyle: "none",
    //   },
    // },
    modalTitleContact: {
        marginTop: 20,
    },
    contactActionBTN: {
        "& button": {
            marignTop: 0,
            width: 390,
        },
    },
    listStatus: {
        backgroundColor: "#f5f8fa",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        marginBottom: "20px",
        "& span:first-child": {
            all: "unset",
            fontFamily: "chistaYekanB",
            color: "#314351",
            marginRight: 5,
        },
        "& span:last-child": {
            fontSize: 13,
            marginLeft: 5,
        },
        "& button": {
            all: "unset",
            color: theme.palette.primary.main,
            cursor: "pointer",
        },
    },
    noDataWrapper: {
        textAlign: "center",
        color: theme.textColor.secondary,
        marginTop: 80,
        [theme.breakpoints.down(480)]: {
            marginTop: 50,
        },
        '& img': {
            width: 51,
            display: 'block',
            margin: '0px auto 30px'
        },
        '& p': {
            margin: 0,
            fontSize: 14
        }

    },
    searchDesktop: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },

    search: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // marginRight: 20,

        cursor: "pointer",
        position: "relative",
        "& input": {
            height: 68,
            width: 48,
            // marginBottom: 9,
            fontFamily: theme.font.regular,
            outline: 'none!important',
            border: "1px solid " + theme.textColor.border,
            transition: "ease all 300ms",
            borderRadius: 0,
            pointerEvents: "none",
        },
    },
    searchExpand: {
        // justifyContent: "space-between",
        "& input": {
            display: "block",
            width: "100%",
            padding: "0 35px",
            pointerEvents: "unset !important",
        },
        [theme.breakpoints.down('sm')]: {
            borderTop: '1px solid ' + theme.textColor.border,
            paddingTop: 16,
            paddingBottom: 10,

            // marginBottom: 15,
            "& input": {
                padding: "0 20px",
                height: 48,
                borderRadius: 24,
                margin: '0 24px',
                border: '1px solid ' + theme.textColor.border + ' !important',
            }


        },
    },

    // search: {
    //   display: "flex",
    //   justifyContent: "flex-end",
    //   alignItems: "center",
    //   // marginRight: 20,
    //   cursor: "pointer",
    //   position: "relative",
    //   "& input": {
    //     height: 48,
    //     width: 48,
    //     border: "1px solid #e7ecf0",
    //     transition: "ease all 300ms",
    //     borderRadius: 12,
    //     pointerEvents: "none",
    //   },
    // },
    // searchExpand: {
    //   // justifyContent: "space-between",
    //   "& input": {
    //     display: "block",
    //     width: "100%",
    //     padding: "0 15px",
    //     pointerEvents: "unset !important",
    //   },
    // },
    searchExpandMobile: {
        justifyContent: "space-between",
        width: "100%",

        "& input": {
            display: "block",
            width: "100%",
            padding: "0 15px",
        },
    },
    searchIcon: {
        position: "absolute",
        right: 35,
        color: theme.textColor.primary
    },
    modalTop: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        "& div:first-child": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    backBtn: {
        width: 72,
        height: 30,
        position: 'absolute',
        right: 121,
        top: 33,
        cursor: 'pointer',
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        fontSize: 13,
        fontFamily: theme.font.medium,
        color: theme.buttonColor.normal,
        '&:hover': {
            backgroundColor: theme.textColor.threePercent,
            color: theme.buttonColor.hover,
        },
        [theme.breakpoints.down("sm")]: {
            top: 17.5,
            right: 110,

            '&:hover': {
                backgroundColor: theme.textColor.threePercent,
                color: theme.buttonColor.hover,
            }
        },
    },
    itemWrapper: {
        position: 'relative',
        padding: "15px 15px 15px 35px !important",
        // borderBottom: "1px solid rgba(0, 5, 52, 0.11)",
        '&:after': {
            content: '""',
            width: 'calc(100% - 96px)',
            height: 1,
            backgroundColor: '#EBEBEF',
            position: 'absolute',
            bottom: 0,
            right: 0,
            [theme.breakpoints.down('sm')]: {
                width: 'calc(100% - 123px)',
            },
        },
        '&:hover': {
            backgroundColor: 'transparent'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0 10px 24px',
        },
    },
    loadingText: {
        color: theme.palette.primary.main,
        fontSize: 13,
        fontFamily: "yekanB",
    },
}));
