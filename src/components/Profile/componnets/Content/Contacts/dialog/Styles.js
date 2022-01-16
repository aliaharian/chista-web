import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    root: {
        borderRadius: "16px ",
        width: "464px ",
        height: "615px ",
        padding: '17px 0',
        overflow: 'hidden',
        // [theme.breakpoints.down(1800)]: {
        //     width: "386px",
        //     height: "512px"
        // },
        
        [theme.breakpoints.down(480)]: {
            width: "100% ",
            margin: 0,
            paddingTop: 0,
            height: "calc(100% - 0px)",
            borderRadius: "0",
            maxWidth: '100%',
            maxHeight: '100%',

        },
    },
    dialog: {
        [theme.breakpoints.down(480)]: {
            alignItems: 'flex-end',
            transition: 'all 500ms ease !important'
        },
    },
    backdropRoot: {
        transition: 'all 500ms ease !important'
    },
    addClassHeaderWrapper: {
        position: "relative",
        minHeight: 74,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 17,
        paddingRight: 35,
        paddingLeft: 35,
        marginBottom: 6,
        justifyContent: 'center',
        [theme.breakpoints.down(1800)]: {
            paddingRight: 35,
            paddingTop: 17,
            paddingLeft: 35,
            minHeight: 59,

        },
        [theme.breakpoints.down(480)]: {
            // paddingBottom: 0,
            // paddingRight: 24,
            // paddingLeft: 24,
            minHeight: '65px',
            height: '65px',
            padding: '17.5px 24px',
            marginBottom: 0,

        },

    },

    divider: {
        color: theme.textColor.border,
        width: "calc(100%)",
        height: 1,
        position: "absolute",
        bottom: 0,
        right: 0,
        // borderTop: "1px solid #e7ecf0",
    },

    stepContainer: {
        position: 'relative',
        padding: '15px 16px',
        height: '100%',
        [theme.breakpoints.down(1800)]: {
            padding: '15px 7px',

        },
        [theme.breakpoints.down(480)]: {
            padding: '15px 0',
        },
       
    },

    scrollContainer:{
        '&>div': {
            '&>div': {
                marginRight: '-17px !important',
                marginLeft: 'unset !important',
                [theme.breakpoints.down("sm")]: {
                    marginRight: '0 !important',

                },
            }
        }
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
        },
        "& p": {
            margin: 0,
            fontFamily: theme.font.regular,
            fontSize: 14,
            color: theme.textColor.primary,
            [theme.breakpoints.down(1800)]: {
                lineHeight: '16px',
                fontSize: 12,
                fontFamily: theme.font.regular,

            },
            [theme.breakpoints.down('sm')]: {
                lineHeight: '20px',
                fontSize: 13
            }

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
            display: 'none'

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
        // backgroundColor: "rgba(52, 194, 120, 0.1)",
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
        // border: `1px solid rgb(204,215,221)`,
        color: theme.textColor.secondary,
        borderRadius: 8,
        width: 30,
        height: 30,
        "&:hover": {
            backgroundColor: '#fff',
            // border: `1px solid rgb(63,83,217)`,
            color: 'rgb(63,83,217)',
        },
    },

    statusWrapperinActive: {
        // border: `1px solid #ccd7dd`,
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
            width: '100%'

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
                margin: '10px 0 9px 0'

            },

        },
        "& svg": {
            marginTop: 17,
            color: '#0c0b31',
            [theme.breakpoints.down("sm")]: {
                fontSize: 18,

            },

        },
        // [theme.breakpoints.down("sm")]: {
        //   display: "none",
        // },
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
    // searchDesktop: {
    //   [theme.breakpoints.down("sm")]: {
    //     display: "none",
    //   },
    // },
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
     
        [theme.breakpoints.down(480)]: {
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
}));
