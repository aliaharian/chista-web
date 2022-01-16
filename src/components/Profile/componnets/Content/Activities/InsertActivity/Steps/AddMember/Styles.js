import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    addClassHeaderWrapper: {
        height: 74,
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 17,
        paddingTop: 16,
        paddingRight: 35,
        paddingLeft: 35,
        justifyContent: 'center',
        [theme.breakpoints.down(480)]: {
            height: 65,
            padding: '17.5px 24px'
        },
    },
    checkboxRoot: {
        position: "absolute",
        zIndex: 4,
        left: 48,
        bottom: 2,
        [theme.breakpoints.down(480)]: {
            left: 22
        },
    },
    errorMessage: {
        color: theme.textColor.error,
        fontSize: 13,
        marginTop: 0,
        marginLeft: 5
    },
    overrideStepContainer: {
        width: 'calc(100% + 30px)',
        margin: '0 -15px',
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
    },
    actionBTN: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        borderRadius: 4,
        display: "block",
        margin: "0",
        outline: "none",
        fontFamily: theme.font.bold,
        transition: 'all 0.3s ease-in-out',
        backgroundColor: "#f5f8fa",
        color: "#aab8c1",
        border: 'none',
        pointerEvents: 'none',
        [theme.breakpoints.down("sm")]: {
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
        display: "block",
        zIndex: 999,
        margin: "0",
        outline: "none",
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.bold,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',
        },
        [theme.breakpoints.down(1800)]: {
            width: '66px',
            top: 25,
            height: 26,
        },
        [theme.breakpoints.down(480)]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
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
            fontFamily: theme.font.bold,
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
        height: 706,
        padding: '17px 0',
        borderRadius: 16,
        [theme.breakpoints.down(480)]: {
            width: "100% !important",
            margin: 0,
            height: "100% !important",
            borderRadius: "0 !important",
            padding: 0,
        },
    },
    modalTitle: {
        "& h2": {
            display: "flex",
            fontFamily: theme.font.bold,
        },
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
        [theme.breakpoints.down(480)]: {
            padding: '8px 24px',
        },
    },
    modalDec: {
        fontSize: 13,
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
        maxHeight: 375,
        height: 375,
        [theme.breakpoints.down(1800)]: {
            maxHeight: 310,
            height: 310,
        },
        [theme.breakpoints.down(480)]: {
            height: 'calc(100vh - 60px)'
        },
        "&>div": {
            "&>div": {
                marginRight: '-15px !important',
                marginLeft: 'unset !important',
                [theme.breakpoints.down(480)]: {
                    paddingTop: 0,
                },
            }
        },
        "& li": {
            listStyle: "none",
        },
    },
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
        marginTop: 170,
        '& img': {
            width: 51,
            marginBottom: 35
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
        cursor: "pointer",
        position: "relative",
        "& input": {
            height: 68,
            width: 48,
            fontFamily: theme.font.regular,
            outline: 'none!important',
            border: "1px solid " + theme.textColor.border,
            transition: "ease all 300ms",
            borderRadius: 0,
            pointerEvents: "none",
        },
    },
    searchExpand: {
        "& input": {
            display: "block",
            width: "100%",
            padding: "0 35px",
            pointerEvents: "unset !important",
        },
        [theme.breakpoints.down(480)]: {
            paddingTop: 16,
            paddingBottom: 10,
            "& input": {
                padding: "0 20px",
                height: 48,
                borderRadius: 24,
                margin: '0 38px',
                border: '1px solid ' + theme.textColor.border + ' !important',
            }
        },
    },
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
        right: 48,
        color: theme.textColor.primary
    },
    usersCheckbox: {
        marginRight: 26,
        '&>span': {
            paddingLeft: '0 !important'
        }
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
        [theme.breakpoints.down(1800)]: {
            right: 100,
            top: 23,
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
        padding: '10px 25px 10px',
        position: 'relative',
        '&:after': {
            content: '""',
            width: 'calc(100% - 100px)',
            height: 1,
            backgroundColor: theme.textColor.border,
            position: 'absolute',
            bottom: 0,
            right: 0,
            [theme.breakpoints.down(480)]: {
                width: 'calc(100% - 100px)',
            },
        },
        [theme.breakpoints.down(480)]: {
            padding: '10px 0 10px 0',
        },
    },
    loadingText: {
        color: theme.palette.primary.main,
        fontSize: 13,
        fontFamily: "yekanB",
    },
    errorContainer: {
        width: 'calc(100% - 30px)',
        margin: '7px auto 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 36px',
        height: 30,
        backgroundColor: 'rgba(255,101,117,0.1)',
        '& img': {
            height: 20,
            marginRight: 5,
        },
        '&>p': {
            fontSize: 13,
            color: theme.textColor.error
        }
    }
}));
