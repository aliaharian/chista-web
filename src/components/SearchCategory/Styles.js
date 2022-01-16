import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    inputLabelBold: {
        fontSize: "15px",
        color: "#536b88",
        marginLeft: 10,
        marginRight: 14,
        fontFamily: "chistaYekanB",
        position: "relative",
    },
    courseCheckbox: {
        width: 28,
        height: 28,
        '& svg': {
            width: 28,
            height: 28,
        }
    },
    courseCheckboxContainer: {
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    courseTitleContainer: {
        '&>p:first-child': {
            fontFamily: 'chistaYekanB',
            color: '#0c0b31',
            marginBottom: 2,
            [theme.breakpoints.down('sm')]: {
                fontSize: 14

            },
        },
        '&>p:last-child': {
            fontFamily: 'chistaYekanR',
            color: '#0c0b31cc',
            [theme.breakpoints.down('sm')]: {
                fontSize: 14
            },

        }
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
        fontSize: "14px",
        color: "#92a4bb",
        fontFamily: "yekanLight",
    },
    submitBtn: {
        backgroundColor: theme.palette.primary.main,
        height: 60,
        width: 260,
        borderRadius: 8,
        fontSize: 16,
        color: "white",
        border: "none",
        fontFamily: "chistaYekanB",
        margin: "50px 0 0 auto",
        boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        cursor: "pointer",
        display: "block",
    },
    disableBtn: {
        pointerEvents: "none",
        backgroundColor: "#bdbdbd",
        boxShadow: "none !important",
    },
    textAlignLeft: {
        "& input": {
            textAlign: "right",
            direction: "rtl",
        },
    },
    searchBoxWrapper: {
        display: "flex",
        height: 60,
        border: "1px solid #e7ecf0",
        borderRadius: 8,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    categoryBtn: {
        height: "100%",
        width: "30%",
        backgroundColor: "#e7ecf0",
        padding: "5px 23px",
        color: "#0c0b31",
        fontFamily: 'chistaYekanB',
        display: "flex",
        borderRadius: "8px 0 0 8px",
        justifyContent: "space-between",
        alignItems: "center",
        svg: {
            transition: "all 200ms",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: 60,
            width: "100%",
        },
    },
    openCategoryArrow: {
        transform: "rotate(180deg)",
        transition: "all 200ms",
    },
    searchBoxStep: {
        position: "relative",
    },
    categoryWrapepr: {
        position: "absolute",
        backgroundColor: "white",
        zIndex: 99,
        width: "100%",
        height: 417,
        borderRadius: 8,
        boxShadow: "0 5px 10px 0 rgba(0, 5, 52, 0.11)",
        display: "flex",
        marginTop: 6,
        color: "#0c0b31cc",
        border: 'solid 1px rgba(20, 23, 26, 0.12)',
        borderTopLeftRadius: "8px",
        "& ul": {
            height: "100%",
            overflow: 'hidden',
            // overflowY: "auto",
            width: "253px",
            padding: "15px 0",
            margin: 0,
            "& li": {
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 24px",
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
                color: "#0c0b31",
                "& svg": {
                    color: `#0c0b31 !important`,
                },
            },
        },
    },
    allcats: {
        '&:hover': {
            color: theme.buttonColor.normal,
            backgroundColor: '#ccd7dd',
        }
    },
    mainCategory: {
        backgroundColor: "#e7ecf0",
        "& $hoverActive": {
            color: theme.buttonColor.normal,
            backgroundColor: '#ccd7dd',
        },
    },
    categoryItem: {
        cursor: "pointer",
    },
    hoverActive: {
        color: theme.buttonColor.normal,
        "& svg": {
            color: `#3f53d9 !important`,
        },
    },
    scrollBarContainer: {
        '&>div:first-child': {
            marginRight: '-19px!important',
            marginLeft: 'unset!important',
            // marginBottom:'unset!important'
        },
        '&>div:nth-child(2)': {
            display: 'none'
        }
    },
    courseWrapper: {
        marginTop: 6,
        width: "76%",
        margin: "0 0 0 auto",
        height: 400,
        border: 'solid 1px rgba(20, 23, 26, 0.12)',
        borderRadius: 8,
        boxShadow: "0 5px 10px 0 rgba(0, 5, 52, 0.11)",
        // overflowY: "hidden",
        '& ::-webkit-scrollbar': {
            minWidth: 1,
            minHeight: 1
        },
        [theme.breakpoints.down("sm")]: {
            height: 400,
            width: "100%",
            marginTop: "90px",
        },
    },
    courseItem: {
        padding: '13px 24px',
        [theme.breakpoints.down('sm')]: {
            padding: '4px 18px',


        },
        '&:hover': {
            backgroundColor: '#f5f8fa'
        },
        '&>.MuiListItemIcon-root': {
            [theme.breakpoints.down('sm')]: {
                minWidth: 40

            },
        }
    },
    divider: {
        backgroundColor: 'rgba(20, 23, 26, 0.12)',
    },
    imageIcon: {
        width: 25,
        height: 25,
    },
    searchInput: {
        padding: "0 10px 0 24px",
        width: "100%",
        minHeight: 60,

        "&:hover": {
            "&:before": {
                borderBottom: "none !important",
            },
        },
        "&:before": {
            content: "",
            border: "none",
            right: 0,
            left: 0,
            position: "absolute",
            bottom: 0,
        },
        "&:after": {
            content: "",
            border: "none",
            right: 0,
            left: 0,
            position: "absolute",
            bottom: 0,
        },
        "& input": {
            minHeight: "100%",
            margin: 0,
            padding: 0,
            [theme.breakpoints.down('sm')]: {
                textAlign:'left'
            },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            border: "1px solid #e7ecf0",
            borderRadius: 8,
            marginTop: 10,
            padding: "0 20px",
        },
    },
    categoryFooter: {
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",


        "& button": {
            margin: "0 0 0 30px",
        },
        "& p span:first-child": {
            marginRight: 5,
        },
        "& p span:last-child": {
            color: "#0c0b31cc",
            fontSize: 18,
        },
    },
    noData: {
        marginTop: 50,
        "& img": {
            margin: "auto",
            display: "block",
        },
        "& p": {
            textAlign: "center",
            color: "#0c0b31cc",
            fontSize: 16,
        },
    },
    avatarContainer:
        {
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid #0c0b31cc",
            position: "relative",
            marginRight: "15px",
            flexShrink: 0,
        },
    avatar: {
        width: "100% !important",
        height: "100% !important",
        // border: '1px solid #0c0b31cc',
        backgroundColor: "#ffa352",
        fontSize: 18
    },
    displayNone: {
        display: "none"
    },
    resetInput: {
        top: 20,
        position: "absolute",
        right: 27,
        width: 24,
        border: '1px solid rgba(20, 23, 26, 0.12)',
        borderRadius: 4,
        fontSize: 24,
        height: 24,
        padding: 2,
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            position: "unset",
            margin: "-40px 15px 0 auto",
        },
    },
    subCat_2Wrapper: {
        width: "50% !important",
    },
}));
