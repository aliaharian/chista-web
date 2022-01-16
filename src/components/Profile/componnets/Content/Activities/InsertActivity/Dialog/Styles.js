import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    root: {
        borderRadius: "16px !important",
        width: "464px !important",
        height: "615px !important",
        padding: '17px 0',
        overflow: 'hidden',
        [theme.breakpoints.down(1800)]: {
            width: "386px !important",
            height: "512px !important",
        },
        [theme.breakpoints.down(480)]: {
            width: "100% !important",
            margin: 0,
            height: "100% !important",
            maxHeight:'100% !important',
            minHeight:'100% !important',
            borderRadius: "0 !important",
            padding: 0
        },
    },
    dialog: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end'
        },
    },
    backBtn: {
        width: 66,
        height: 26,
        position: 'absolute',
        right: 121,
        top: 33,
        cursor: 'pointer',
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        fontSize: 13,
        fontFamily: theme.font.medium,
        color: theme.buttonColor.normal,
        '&:hover': {
            backgroundColor:'#fff',
            color: theme.buttonColor.hover,
        },
        [theme.breakpoints.down(1800)]: {
            right: 100,
            top: 25,
        },
        [theme.breakpoints.down(480)]: {
            top: 17.5,
            right: 110,
            '&:hover': {
                backgroundColor: theme.textColor.threePercent,
                color: theme.buttonColor.hover,
            }
        },
    },
    stepBTN: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        zIndex: 55,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 15,
        color: theme.buttonColor.normal,
        margin: "0",
        outline: "none",
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        fontSize: 13,
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
        [theme.breakpoints.down('sm')]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
            color: theme.buttonColor.hover,
        },
    },
    deleteSessionWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 58,
        '&>p': {
            marginTop: 41,
            color: '#ff6575',
            fontFamily: theme.font.bold,
            fontSize: 16,
            marginBottom: 0,
            [theme.breakpoints.down("sm")]: {
                fontSize: 13,
            },
        }
    },
    trashIconContainer: {
        width: 121,
        height: 121,
        borderRadius: 8,
        backgroundColor: '#ff657529',
        color: '#ff6575',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>svg': {
            fontSize: 75
        }
    },
    deleteSessionActions: {
        marginTop: 233,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 19px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 9px',
        },
        '&>button': {
            height: 56,
            borderRadius: 8,
            boxShadow: 'none',
            fontFamily: theme.font.regular,
            outline: 'none',
            [theme.breakpoints.down("sm")]: {
                height: 48,
            },
        },
        '&>button:nth-child(1)': {
            width: 265,
            backgroundColor: theme.buttonColor.normal,
            color: '#fff',
            border: '1px solid #fff !important',
            [theme.breakpoints.down("sm")]: {
                width: 194,
            },
        },
        '&>button:nth-child(2)': {
            width: 127,
            backgroundColor: '#fff',
            color: theme.buttonColor.normal,
            border: '1px solid ' + theme.buttonColor.normal,
            [theme.breakpoints.down("sm")]: {
                width: 109,
            },
        },
    },
    addClassHeaderWrapper: {
        height: 74,
        zIndex: 4,
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 17,
        paddingRight: 35,
        paddingLeft: 35,
        marginBottom: 11,
        paddingTop: 16,
        justifyContent: 'center',
        [theme.breakpoints.down(1800)]: {
            paddingBottom: 22,
            paddingTop: 6,
            marginBottom: 0,
        },
        [theme.breakpoints.down(480)]: {
            height: 65,
            padding: '17.5px 24px',
            marginBottom: 0
        },
    },
    divider: {
        color: theme.textColor.border,
        width: "calc(100%)",
        height: 1,
        position: "absolute",
        top: 91,
        right: 0,
        [theme.breakpoints.down(1800)]: {
            top: 76
        },
        [theme.breakpoints.down(480)]: {
            top: 65,
        },
    },

    stepContainer: {
        padding: '0',
        height: '100%',
    },
    selectAddClassTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: '0',
        height: 30,
        width: '100%',
        "&>div:nth-child(1)": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
            },
        },
        "& p": {
            margin: 0,
            fontFamily: theme.font.bold,
            fontSize: 14,
            color: theme.textColor.primary,
            maxWidth: 170,
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
    table: {
        minWidth: 650,
        marginTop: 25,
        '&>tbody': {
            '&>tr': {
                '&>td': {
                    padding: 15,
                    borderColor: theme.textColor.border
                }
            }
        }
    },
    myClassAvatarWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    editBtnRes: {
        width: 24,
        marginLeft: 20,
        color: theme.textColor.secondary,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 11,
        },
    },
    addClassResBtn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 48,
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
    },
    myClassActionsCell: {
        width: 228,
        paddingRight: '0!important'
    },
    myClassWrapper: {
        position: "relative",
        padding: "0px 10px 0 44px",
        [theme.breakpoints.down("sm")]: {
            padding: "0 11px",
            paddingTop: 38
        },
    },
    myClassAvatarBorder: {
        border: "1px solid #808895",
        borderRadius: 100,
        padding: 2,
        position: "relative",
    },
    myClassAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    myClassNameWrapper: {
        marginLeft: 0,
        textAlign: "left",
        color: theme.textColor.secondary,
        [theme.breakpoints.down("sm")]: {
            maxWidth: 90,
            marginLeft: 10
        },
        "& :first-child": {
            fontFamily: theme.font.regular,
            color: theme.textColor.primary,
            marginBottom: 14,
            [theme.breakpoints.down("sm")]: {
                fontSize: 13
            },
        },
        "& p": {
            fontSize: 13,
            margin: "0",
            [theme.breakpoints.down("sm")]: {
                margin: 0
            },
        },
    },
    dateTime: {
        "& span": {
            color: theme.textColor.secondary,
            fontSize: 13,
            padding: "0 2px",
            [theme.breakpoints.down("sm")]: {
                fontSize: 12
            },
        },
    },
    myClassRoleCell: {
        color: theme.textColor.secondary,
        fontSize: 13,
        [theme.breakpoints.down("sm")]: {
            fontSize: 12
        },
    },
    statusWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        width: 142,
        marginRight: 30,
    },
    statusWrapperActive: {
        border: `1px solid #3f53d9`,
        fontSize: 13,
        color: '#fff',
        backgroundColor: theme.buttonColor.normal,
        borderRadius: 8,
        "&:hover": {
            backgroundColor: '#3748bb',
            border: `1px solid #3748bb`,
            color: "white",
        },
    },
    classStatusWrapper: {
        backgroundColor: "#fff",
        color: theme.textColor.secondary,
        borderRadius: 8,
        width: 30,
        height: 30,
        "&:hover": {
            backgroundColor: '#fff',
            color: 'rgb(63,83,217)',
        },
    },
    statusWrapperinActive: {
        color: "#aab8c1",
        borderRadius: 8,
        cursor: "no-drop",
    },
    statusIcon: {
        fontSize: 24,
        marginLeft: 4,
    },
    incomingStrMobile: {
        fontFamily: theme.font.bold,
    },
    classDetailLink: {
        backgroundColor: '#fff !important',
        zIndex: 990,
        '&>a': {
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            width: '100%',
        },
        '&:hover': {
            backgroundColor: 'rgb(245,248,250) !important',
            '&>a': {
                color: theme.textColor.primary,
            },
        }
    },
    infoWrapper: {
        backgroundColor: "transparent",
        border: "1px solid #c5c9cc",
        borderRadius: 16,
        width: 41,
        height: 41,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    },
    filterWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#F7F9FF",
        borderRadius: 12,
        marginTop: 15,
        padding: 15,
    },
    filterWrapperMobile: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateTimeMobile: {
        color: "#92a4bb !important",
    },
    filterBtn: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 12,
        color: "white",
        outline: "none",
        fontFamily: theme.font.regular,
        border: "none",
        width: 150,
        height: 50,
        padding: "0 25px",
        cursor: "pointer",
    },
    filterBtnMobile: {
        all: "unset",
        color: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    totalStatusWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0",
    },
    totalStatusItem: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(22, 65, 255, 0.05)",
        borderRadius: 12,
        width: "45%",
        padding: "0 15px",
    },
    totalStatustext: {
        marginLeft: 7,
    },
    totalStatusNmuber: {
        fontFamily: theme.font.bold,
        color: "#1a172d",
        marginRight: 2,
    },
    rowItemMobile: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemTextWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tableHead: {
        "& th": {
            backgroundColor: "rgba(194, 203, 218, 0.08)",
            border: `1px solid ${theme.palette.border.main}`,
        },
        "& th:nth-child(1)": {
            display: "block",
            borderRight: "none",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        },
        "& th:nth-child(2)": {
            borderRight: "none",
            borderLeft: "none",
        },
        "& th:nth-child(3)": {
            borderRight: "none",
            borderLeft: "none",
        },
        "& th:nth-child(4)": {
            display: "block",
            borderLeft: "none",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        },
    },
    actionWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 22,
    },
    classAvatar: {
        borderRadius: 300,
        width: 56,
        height: 56,
        [theme.breakpoints.down("sm")]: {
            width: 47,
            height: 47,
        },
    },
    classAvatarBorder: {
        border: "none",
        borderRadius: 300,
        padding: 0,
    },
    myClassAvatarCell: {
        paddingLeft: '0!important',
        borderBottom: 'none',
        width: 63
    },
    myClassNameCell: {
        paddingLeft: '0!important'
    },
    breadCrumb: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        "& p": {
            fontSize: 18,
            fontFamily: theme.font.bold,
            marginLeft: 15,
            marginTop: 8,
            marginBottom: 40,
            color: theme.textColor.primary,
            [theme.breakpoints.down("sm")]: {
                fontSize: 13,
                marginLeft: 7,
                margin: '10px 0 9px 0',
            },
        },
        "& svg": {
            marginTop: 17,
            color: '#0c0b31',
            [theme.breakpoints.down("sm")]: {
                fontSize: 18,
            },

        },
    },
    headerWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginBottom: 25,
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
            outline: 'none !important',
            fontFamily: theme.font.regular,
            pointerEvents: "none",
            border: "1px solid " + theme.textColor.border,
            transition: "ease all 300ms",
            borderRadius: 8,
            '&::placeholder': {
                color: theme.textColor.secondary
            }
        },
    },
    displayNone: {
        display: 'none'
    },
    searchMobile: {
        width: "50px",
        margin: "0",
        height: 48,
        '&>input': {
            border: 'none',
            transition: 'none',
            padding: '0 10px'
        },
        '&>svg': {
            right: 10
        },
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchExpand: {
        justifyContent: "space-between",
        "& input": {
            display: "block",
            width: 300,
            padding: "0 15px",
            pointerEvents: "unset !important",
        },
    },
    searchExpandMobile: {
        justifyContent: "space-between",
        width: "100%",
        "& input": {
            border: '1px solid rgb(231,236,240)',
            display: "block",
            width: "100%",
            padding: "0 15px",
            pointerEvents: "unset !important",
        },
    },
    searchIcon: {
        position: "absolute",
        color: theme.textColor.primary,
        right: 13,
    },
    searchCloseIcon: {
        position: "absolute",
        color: theme.textColor.primary,
        right: 13,
        border: '1px solid rgba(146,164,187,0.28)',
        borderRadius: 8,
        padding: 2,
        width: 26,
        height: 26
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
            height: 48,
            "&>span": {
                "&>span": {
                    marginLeft: 7,
                }
            },
        },
        [theme.breakpoints.down("sm")]: {
            position: "absolute",
            top: "-53px",
            right: 0,
        },
    },
    addClass: {
        marginRight: 0,
    },
    myClassDesktop: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    myClassMobile: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    myClassMobileWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: '20px 0',
        borderBottom: '1px solid rgb(231,236,240)'
    },
    myClassActionWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > div:first-child": {
            marginRight: 10,
            '&>p': {
                [theme.breakpoints.down("sm")]: {
                    fontSize: 12
                },
            }
        },
        "& p:last-child": {
            textAlign: "right",
            fontFamily: theme.font.bold,
            [theme.breakpoints.down("sm")]: {
                margin: 0
            },
        },
    },
    checkOwnerIcon: {
        textAlign: "center",
    },
    checkOwnerText: {
        fontSize: 20,
        color: "#ff527a",
        textAlign: "center",
        fontFamily: theme.font.bold,
        marginBottom: 30,
    },
    checkOwnerName: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: "yekanHeavy",
        "& span:last-child": {
            marginLeft: 5,
        },
    },
    checkOwnerMessage: {
        fontSize: 13,
        color: "#484e5c",
        textAlign: "center",
        maxWidth: 370,
        margin: "0 auto",
    },
    actionBTN: {
        all: "unset",
        backgroundColor: "#f5f8fa",
        height: 59,
        borderRadius: 8,
        color: "#aab8c1",
        fontFamily: "chistaYekanB",
        fontSize: 13,
        width: "100%",
        textAlign: "center",
        margin: "57px 15px 10px",
        pointerEvents: "none",
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
        },
    },
    actionActiveBTN: {
        cursor: "pointer",
        pointerEvents: "unset",
        backgroundColor: "#4264fb",
        color: "white",
        boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
    },
    closeModalIcon: {
        cursor: "pointer",
    },
    sessionDetailWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    sessionDetailUsers: {
        width: '100%',
        padding: '0',
        '&>div': {
            '&>div:nth-child(1)': {
                marginLeft: 'unset !important',
                marginRight: '-15px !important',
                overflow: 'auto'
            }
        }
    },
    sessionStats: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 35px 10px 35px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 25px 10px 25px',
        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            '&>p': {
                fontSize: 13,
                margin: '10px 0'
            },
            '&>p:nth-child(2)': {
                fontFamily: theme.font.bold,
                color: theme.textColor.primary
            },
            '&>p:nth-child(1)': {
                fontFamily: theme.font.regular,
                color: theme.textColor.secondary
            }
        }
    }
}));
