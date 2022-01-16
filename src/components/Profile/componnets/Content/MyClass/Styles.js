import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    table: {
        marginTop: 40,
        '&>tbody': {
            '&>tr': {
                '&>td': {
                    padding: '14px 15px',
                    borderColor: theme.textColor.border
                }
            }
        }
    },
    
    skeletonMyClassesMainContainer : {
        display: 'grid',
        gridTemplateColumns: '362px 362px 362px',
        columnGap: 25,
        rowGap: 25,
        marginTop: 40,
        '@media (max-width: 1800px)': {
            gridTemplateColumns: '287px 287px 287px',
            columnGap: 19,
            rowGap: 19,
            marginTop: 30,
        },
        '@media (max-width: 480px)': {
            gridTemplateColumns: '100%',
            columnGap: 19,
            rowGap: 19,
            marginTop: 30,
        }
    },
    classListContainer: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '362px 362px 362px',
        columnGap: '25px',
        rowGap: '25px',
        justifyContent: 'flex-start',
        [theme.breakpoints.down(1801)]: {
            margin: '0 auto',
            gridTemplateColumns: '287px 287px 287px',
            columnGap: '19px',
            rowGap: '19px',

        },
        [theme.breakpoints.down(1200)]: {
            margin: '0 auto',
            gridTemplateColumns: 'calc(33.3333% - 12px) calc(33.3333% - 12px) calc(33.3333% - 12px)',
            columnGap: '18px',
            rowGap: '18px',
        },
        [theme.breakpoints.down(1000)]: {
            margin: '0 auto',
            gridTemplateColumns: 'calc(50% - 9.5px) calc(50% - 9.5px)',
            columnGap: '19px',
            rowGap: '19px',
        },
    },
    classSearchLoading: {
        position: 'absolute',
        right: 50,
        width: '15px !important',
        height: '15px !important',
        color: theme.buttonColor.normal,
        top: 13,
        [theme.breakpoints.down("sm")]: {
            top: 16

        },

    },
    noDataContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '0 auto'
    },
    activeShadow: {
        '&:after': {
            height: '54px !important',
            boxShadow: '0 3px 6px #00000029',
            backgroundColor: 'transparent !important'
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
        display: 'flex',
        '&>button': {
            width: 112,
            height: 40,
            // backgroundColor: theme.buttonColor.normal,
            border: '1px solid ' + theme.buttonColor.normal,
            borderRadius: 24,
            color: 'white',
            '& svg': {
                marginRight: 4
            },
            '& span': {
                fontSize: 12
            },
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,

            }
        },
        [theme.breakpoints.up("md")]: {
            display: 'none'

        },
    },
    myClassActionsCell: {
        width: 228,
        paddingRight: '0!important'
    },
    myClassWrapper: {
        position: "relative",
        [theme.breakpoints.down(800)]: {
            padding: "48px 34px",
            // marginBottom: 90
        },
        [theme.breakpoints.down(480)]: {
            padding: "48px 24px",
            // marginBottom: 90
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
            marginBottom: 8,
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
        height: 40,
        width: 115,
        marginRight: 30,
    },
    
    statusWrapperActive: {
        // backgroundColor: "rgba(52, 194, 120, 0.1)",
        backgroundColor: '#3f53d9',
        fontSize: 13,
        color: 'white',
        borderRadius: 20,
        "&:hover": {
            backgroundColor: theme.buttonColor.normal,
            border: `1px solid #3f53d9`,

            color: "#fff",
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
            fontSize: 13,
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            width: '100%'

        },
        '&:hover': {
            // backgroundColor:'#fff !important',

            borderRadius: 8,
            backgroundColor: '#f5f8fa!important',
            '&>a': {
                color: theme.buttonColor.normal,
                // color: theme.textColor.primary,
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
    mb20: {
        marginBottom: '20px!important'
    },
    mb24: {
        marginBottom: '24px!important'
    },
    
    mobileAddClassHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        display: "none",
        marginBottom: 0,
        [theme.breakpoints.down(900)]: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40
        },
    },
    filterBarRes: {
        width: '100%',
        display: "none",

        justifyContent: "space-between",
        alignItems: "center",
        // position:'relative',
        height: 54,
        marginBottom: 26,
        position: 'sticky',
        // top: 0,
        transition: 'all 250ms ease-in-out',
        backgroundColor: '#fff',
        right: 0,
        zIndex: 995,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            padding: '0 20px'

        },
        '&:before': {
            width: '100vw',
            content: '""',
            position: 'absolute',
            height: 1,
            backgroundColor: theme.textColor.border,
            top: 0,
            right: -23,
        },
        '&:after': {
            width: '100vw',
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            height: 1,
            backgroundColor: theme.textColor.border,
            bottom: 0,
            right: -23,
        },
        '&>div': {
            height: 54,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: 'pointer',
            borderBottom: '3px solid #fff',
            fontSize: 13

        }
    },
    filterActiveRes: {
        color: theme.buttonColor.normal,
        position: 'relative',
        fontFamily: theme.font.medium,
        '&:after': {
            backgroundColor: theme.buttonColor.normal,
            content: '""',
            bottom: -4,
            borderRadius: 1.5,
            position: 'absolute',
            height: 3,
            width: '100%'
            // borderBottom: '3px solid ' + theme.buttonColor.normal + ' !important'
        }
    },
    breadCrumb: {
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginBottom: 27,
        // marginTop: 5,
        margin: 0,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 0,
            marginTop: 0,
        },
        '&>p': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            margin: 0
        },
        '&>svg': {
            marginRight: 7,
        }
    },
    headerWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginBottom: 26,
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
            height: 40,
            width: 48,
            outline: 'none !important',
            fontFamily: theme.font.regular,
            pointerEvents: "none",
            border: "1px solid " + theme.textColor.border,
            transition: "ease all 300ms",
            borderRadius: 24,
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
        display: "none",

        '&>input': {
            border: 'none',
            transition: 'none',
            padding: '0 10px'
        },
        '&>svg': {
            right: 10
        },
        [theme.breakpoints.down("sm")]: {
            display: "block",

        },
    },
    searchExpand: {
        justifyContent: "space-between",
        "& input": {
            display: "block",
            width: 300,
            fontSize: 13,
            padding: "0 20px",
            pointerEvents: "unset !important",
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: theme.textColor.disabled + ' !important'
            }
        },
    },
    searchExpandMobile: {
        justifyContent: "space-between",
        width: "300px",
        height: 40,
        "& input": {
            border: '1px solid ' + theme.textColor.border,
            display: "block",
            width: "100%",
            padding: "0 15px",
            pointerEvents: "unset !important",
        },
        // [theme.breakpoints.down('xs')]: {
        //     width: 200,
        //
        // },
        [theme.breakpoints.down(470)]: {
            marginRight: 8

        },
    },
    searchIcon: {
        position: "absolute",
        color: theme.textColor.primary,
        right: 15,
        top: 8
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
        '&>div:nth-child(1)': {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        "& button": {
            height: 40,
            "&>span": {
                "&>span": {
                    marginLeft: 0,
                }
            },
        },
        [theme.breakpoints.down(480)]: {
            display: 'none'
        },
    },
    addClass: {
        marginRight: 0,
    },
    myClassDesktop: {
        overflow: 'hidden !important',
        // [theme.breakpoints.down("sm")]: {
        //     display: "none",
        // },
    },
    myClassMobile: {
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '100%',
        rowGap: 19
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
    checkOwnerWrapper: {
        [theme.breakpoints.down("sm")]: {
            borderRadius: '25px 25px 0 0 !important',
            maxHeight: '100vh !important',
            height: '440px !important'
        },
    },
    checkOwnerIcon: {
        textAlign: "center",
        width: 100,
        height: 100,
        margin: '0 auto',
        backgroundColor: '#ff657529',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 83,
        '& img': {
            width: 58
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 43,
            width: 75,
            height: 75,
            '& img': {
                width: 40
            },
        },

    },
    checkOwnerText: {
        fontSize: 16,
        color: theme.textColor.error,
        textAlign: "center",
        fontFamily: theme.font.bold,
        marginTop: 40,
        marginBottom: 50,
        [theme.breakpoints.down("sm")]: {
            marginTop: 26,
            fontSize: 14,
            marginBottom: 0,

        },
    },
    checkOwnerName: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: theme.font.bold,
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
        borderRadius: 8,
        color: "#aab8c1",
        fontFamily: theme.font.bold,
        fontSize: 13,
        textAlign: "center",
        margin: 0,
        pointerEvents: "none",
        position: 'absolute',
        width: 384,
        height: 56,
        bottom: 23,
        right: 40,
        [theme.breakpoints.down("sm")]: {
            right: 24,
            width: 'calc(100% - 48px)',
            height: 48,
            bottom: 13,
        },
    },
    actionActiveBTN: {
        cursor: "pointer",
        pointerEvents: "unset",
        backgroundColor: theme.buttonColor.normal,
        color: "white",
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,

        }
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
    },
    closeModalIcon: {
        position: 'absolute',
        top: 24,
        left: 24,
        cursor: "pointer",
    },
}));
