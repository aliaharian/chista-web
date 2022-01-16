import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    breadcrumbWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
        "& span": {
            margin: "0 10px",
            fontSize: 20,
            fontWeight: "bold",
        },
    },
    
    detailClassWrapper: {
        maxWidth: '100%',
        margin: '0',
    },
    modalWrapper: {
        padding: '12px 11px',
        boxSizing: 'border-box',
        maxWidth: '380px !important',
        minWidth: '380px !important',
        Width: '380px !important',
        overflow: 'unset !important'
    },
    breadcrumbTitle: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "& a": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#657686",
        },
    },
    breadcrumbSteper: {
        width: 60,
        height: 60,
        borderRadius: 8,
        fontSize: 17,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid rgba(224, 224, 224, 1)",
    },
    breadcrumbStep_1: {
        borderTop: `3px solid ${theme.palette.primary.main} !important`,
    },
    breadcrumbStep_2: {
        borderTop: `3px solid ${theme.palette.primary.main} !important`,
        borderLeft: `3px solid ${theme.palette.primary.main} !important`,
    },
    breadcrumbStep_3: {
        borderTop: `3px solid ${theme.palette.primary.main} !important`,
        borderLeft: `3px solid ${theme.palette.primary.main} !important`,
        borderBottom: `3px solid ${theme.palette.primary.main} !important`,
    },
    breadcrumbStep_4: {
        border: `3px solid ${theme.palette.primary.main} !important`,
    },
    backArrow: {
        cursor: "pointer",
        marginRight: 9,
    },
    imageWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 50px",
        borderRight: "1px solid #e7ecf0",
        "& label": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
            border: "none",
        },
    },
    classImageWrapper: {
        flexDirection: "row",
        border: "none",
        justifyContent: "flex-start",
        padding: 0,
    },
    classImage: {
        width: 85,
        height: 85,
    },
    image: {
        width: 135,
        height: 135,
        backgroundColor: "#ccd7dd",
        borderRadius: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            color: "#657686",
            fontSize: 36,
        },
    },
    borderWrapper: {
        border: "1px solid #ccd7dd",
        width: 142,
        height: 142,
        borderRadius: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    classAvatar: {
        width: 48,
        height: 48,
        fontSize: 16,
        borderRadius: "50%",
    },
    classAvatarBorder: {
        // border: "1px solid #808895",
        borderRadius: 100,
        padding: 2,
        position: "relative",
    },
    chatIcon: {
        fontSize: 20,
    },
    classTitle: {
        marginLeft: 11,
        "& p:first-child": {
            fontFamily: theme.font.medium,
            fontSize: 13,
            marginTop: 0,
            marginBottom: 6,
            color: theme.textColor.primary,
        },
        "& p:last-child": {
            fontSize: 13,
            color: theme.textColor.secondary,
        },
        "& span": {
            fontSize: 13,
            color: "#0c0b31cc",
        },
        "& span:last-child": {
            // marginLeft: 5,
            fontSize: 13,
        },
    },
    classHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down(800)]: {
            padding: '0px 34px',
            marginBottom: 20,
        },
    },
    actionWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    chat: {
        all: "unset",
        borderRadius: 20,
        cursor: 'pointer',
        marginRight: 8,
        color: '#fff',
        backgroundColor: theme.buttonColor.normal,
        // boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
       
        border: '1px solid ' + theme.buttonColor.normal,
        height: 40,
        width: 120,
        boxSizing: "border-box",
        padding: "10px 20px 10px 14px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 13,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#fff',
            color: theme.buttonColor.normal,
        },
        [theme.breakpoints.down(800)]: {
            width: 24,
            height: 24,
            borderRadius: 12,
            border: 'none',
            padding: 5,
            marginRight: 15,
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.normal,
            },
        },
    },
    nodata: {
        paddingTop: 30,
        height: 100,
        width: '100%',
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
    },
    classDetailLink: {
        fontSize: 13,
        backgroundColor: '#fff !important',
        zIndex: 990,
        minHeight: 'auto',
        '&>a': {
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            width: '100%'

        },
        '&:hover': {
            backgroundColor: 'rgb(245,248,250) !important',
            '&>a': {
                color: theme.textColor.primary,
            },
        }
    },
    singleMemberContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 14px',
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '18px 12px',
            borderBottom: '1px solid rgb(231,236,240)',
        }
    },
    share: {
        all: "unset",
        backgroundColor: "#fff",
        // border:'1px solid rgb(204,215,221)',
        width: 40,
        position: 'relative',
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,
        cursor: "pointer",
    },
    tabs: {
        // borderBottom: '1px solid rgba(12,11,49,0.15)',
        height: 48,
        borderRadius: 0,
        marginTop: 40,
        fontSize: '13px!important',
        position: 'relative',
        '&:after': {
            bottom: 1.5,
            right: 0,
            content: '""',
            width: '100%',
            height: 1,
            position: 'absolute',
            display: 'block',
            backgroundColor: theme.textColor.border,
            [theme.breakpoints.down("sm")]: {
                width: '100%',
            },
        },
        '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: 3,
            display: 'inline-block',
            backgroundColor: theme.buttonColor.normal
            // position:'absolute',
            // bottom:-2,
            // zIndex:9999999
            // transform:'translateY(2px)'
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            borderRadius: 0,
            border: 'none',
            overflow: 'visible',
            // borderBottom: '1px solid rgba(12,11,49,0.15)',

        },
        '& .Mui-selected': {
            color: theme.buttonColor.normal + ' !important',
            fontFamily: theme.font.medium
        },
        '& .MuiTab-textColorPrimary': {
            color: '#0c0b31',
            fontSize: '13px!important',

        },
        "& button": {
            padding: '0 15px !important',
            marginRight: 43,
            [theme.breakpoints.down("sm")]: {
                marginRight: 15,
            },
        },
    },
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        cursor: "pointer",
        position: "relative",
        "& input": {
            height: 48,
            width: 48,
            pointerEvents: "none",
            border: "1px solid #e7ecf0",
            transition: "ease all 300ms",
            borderRadius: 8,
        },
    },
    searchDesktop: {
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginTop: 20,
            "& input": {
                width: "100% !important",
            },
        },
    },
    searchExpand: {
        justifyContent: "space-between",
        "& input": {
            display: "block",
            width: 380,
            fontFamily: theme.font.regular,
            padding: "0 15px",
            pointerEvents: "unset !important",
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
        right: 13,
    },
    userHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },

    statusWrapperActive: {
        // backgroundColor: "rgba(52, 194, 120, 0.1)",
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        borderRadius: 8,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
            color: "white",
        },
    },
    statusWrapperinActive: {
        border: `1px solid #ccd7dd`,
        color: "#aab8c1",
        borderRadius: 8,
        cursor: "no-drop",
    },
    statusIcon: {
        fontSize: 17,
        marginLeft: 5,
    },
    myClassAvatarWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    myClassNameWrapper: {
        marginLeft: 10,
        fontSize: 13,
        textAlign: "left",
        "& :first-child": {
            fontFamily: theme.font.bold,
        },
        "& p": {
            margin: "5px 0",
        },
    },
    modalTitle: {
        "& h2": {
            display: "flex",
            fontFamily: theme.font.bold,
        },
        "& svg": {
            marginRight: 10,
        },
    },
    shareInput: {
        width: "390px",
        height: "50px",
        position: "relative",
        borderRadius: "8px",
        "& textarea": {
            border: "1px solid #e7ecf0",
            height: "100%",
            width: "100%",
            textAlign: "right",
            padding: "0 20px",
            borderRadius: "8px",
            paddingLeft: 50,
            resize: "none",
            fontFamily: "yekanB",
            fontSize: 15,
        },
        "& img": {
            position: "absolute",
            left: 20,
            cursor: "pointer",
            top: 0,
            bottom: 0,
            margin: "auto",
        },
    },
    closeModalIcon: {
        cursor: "pointer",
    },

    shareSocial: {
        marginTop: 20,
        marginBottom: 10,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "& > a": {
            cursor: "pointer",
            width: 48,
            height: 48,
            borderRadius: 8,
            backgroundColor: theme.palette.primary.main,
            marginLeft: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    statusWrapper: {
        width: 110,
        height: 36,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            marginRight: 10,
        },
    },
    hazer: {
        backgroundColor: "rgba(52, 194, 120, 0.1)",
        color: "#34c278",
    },
    gaieb: {
        backgroundColor: "rgba(246, 77, 77, 0.1)",
        color: "#f64d4d",
    },
    addUserBTN: {
        all: "unset",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "& span": {
            fontSize: 13,
            marginLeft: 10,
            fontWeight: "bold",
        },
    },
    iconWrapper: {
        marginLeft: 10,
        width: 56,
        height: 56,
        border: "1px solid #ccd7dd",
        backgroundColor: "#f5f8fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        '& span': {
            fontSize: 13
        }
    },
    selectAddUserWrapper: {
        display: "flex",
        flexDirection: "column",
        position: 'relative',
        '& hr': {
            position: 'absolute',
            top: 61,
            left: -35,
            width: 'calc(100% + 70px)'

        },
        "& button": {
            all: "unset",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            '& img': {
                marginRight: 10,
            },
            "& p": {
                padding: "10px 0 10px 0",
                fontWeight: "bold",
                textAlign: 'left'
            },
        },
    },
    divider: {
        backgroundColor: "rgba(0, 5, 52, 0.11)",
        border: "none",
        height: "1px",
        width: "100%",
    },
    selectAddUserTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: '0 0 23px 0',

        "& p": {
            margin: 0,
            fontFamily: theme.font.bold,
            fontSize: 18,
            color: "#0c0b31",
        },
        "& img": {
            cursor: "pointer",
        },
    },
    contactMobileHeader: {
        height: 65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        marginBottom: 25,
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        '&:after': {
            content: '""',
            width: '100vw',
            position: 'absolute',
            bottom: 0,
            right: -28,
            height: 1,
            backgroundColor: theme.textColor.border
        }
    },
    mobileHeaderActions: {

    }
}));
