import {makeStyles} from "@material-ui/styles";

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
    regularFont: {
        fontFamily: theme.font.regular + '!important',
        '&>span': {
            fontFamily: theme.font.regular + '!important',
        }
    },

    detailClassWrapper: {
        maxWidth: '100%',
        margin: '0',
        [theme.breakpoints.down(800)]: {
            padding: '24px 0 48px',
        },
        [theme.breakpoints.down(480)]: {
            padding: '24px 0',
        },
    },
    modalWrapper: {
        maxWidth: '464px !important',
        minWidth: '464px !important',
        Width: '464px !important',
        height: '356px !important',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '100% !important',
            minWidth: '100% !important',
            Width: '100% !important',
            borderRadius: '25px 25px 0 0 !important',
            height: '460px !important',

        },
    },
    searchUserContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },

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
        marginRight: 15,
        [theme.breakpoints.down("sm")]: {
            height: "100%",
        },
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
        width: 48,
        height: 48,
        backgroundColor: theme.textColor.fivePercent,
        borderRadius: 300,
        display: "flex",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        border: '1px solid ' + theme.textColor.border,
        justifyContent: "center",
        alignItems: "center",
        cursor: 'pointer',
        "& img": {
            color: "#657686",
            width: 24,
        },
    },
    /////
    imageUploaded: {
        position: "relative",
        "&:hover": {
            "& > div": {
                display: "flex",
            },
        },
    },

    deleteIcon: {
        width: 48,
        height: 48,
        position: "absolute",
        top: 0,
        right: 0,

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.textColor.secondary,
        borderRadius: "300px",
        left: 0,
        bottom: 0,
        margin: "auto",
        color: "white",
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",

        },
    },
    imageBadge: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: '#e6e5ea',
        border: '1px solid #fff',
        left: -2,
        bottom: -2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>img': {
            width: 20
        }
    },
    ////
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
        width: 56,
        height: 56,
        fontSize: 16,
        borderRadius: "50%",
        cursor: 'pointer'
    },
    classAvatarBorder: {
        // border: "1px solid #808895",
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    loginClassIcon: {
        fontSize: 24
    },
    classTitle: {
        marginLeft: 10,
        "& p:first-child": {
            fontFamily: theme.font.medium,
            fontSize: 13,
            marginTop: 0,
            marginBottom: 6,
            color: "#0c0b31",
            [theme.breakpoints.down("sm")]: {
                marginBottom: 0,

            },
        },
        "& p:last-child": {
            fontSize: 13,
            color: "#0c0b31",
        },
        "& span": {
            fontSize: 13,
            color: "#0c0b31",
        },
        "& span:last-child": {
            marginLeft: 5,
            fontSize: 13,
        },
    },
    classHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: '0px 16px'
    },
    classHeaderRes: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '@media (max-width: 800px)': {
            padding: '0 34px'
        },
        '@media (max-width: 480px)': {
            padding: '0 24px'
        },
        '&>div': {
            padding: ' 0 0 22px 0 ',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        },
    },
    classShareContainerRes: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    shareRes: {
        all: "unset",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,
        cursor: "pointer",
    },
    classInfoRes: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    joinRes: {
        all: "unset",
        borderRadius: 17,
        cursor: 'pointer',
        // boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
        backgroundColor: theme.buttonColor.normal,
        color: "white",
        height: 30,
        width: 70,
        boxSizing: "border-box",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        fontSize: 12,
        alignItems: "center",
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#3748bb'
        }
    },
    sessionsContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: '0 -15px',
        width: 'calc(100% + 30px)'

    },
    actionWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    disabledJoin: {
        border: '1px solid ' + theme.textColor.border + ' !important',
        backgroundColor: '#fff !important',
        color: theme.textColor.disabled + ' !important',
        pointerEvents: 'none',
        cursor:'auto !important'
    },

    cursorAuto:{
      cursor:'auto !important'
    },
    join: {
        all: "unset",
        borderRadius: 300,
        cursor: 'pointer',
        marginRight: 18,
        // boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
        backgroundColor: theme.buttonColor.normal,
        color: "white",
        height: 40,
        width: 100,
        boxSizing: "border-box",
        padding: "0 0",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: 'all 0.3s ease-in-out',
        '& svg': {
            marginRight: 3
        },
        '& span': {
            fontSize: 13,
            fontFamily: theme.font.medium
        },
        '&:hover': {
            backgroundColor: '#3748bb'
        }
    },
    addSessionBtn: {
        width: 140,
        marginTop: 40
    },
    nodata: {
        marginTop: 80,
        paddingTop: 30,
        height: 'max-content',
        width: '100%',
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        [theme.breakpoints.down(480)]: {
            marginTop: 30,
            marginBottom: 20
        },
        '&>img': {
            width: 51,
            marginBottom: 20
        },
        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary,
            margin: '5px 0'
        }
    },
    classDetailLink: {
        backgroundColor: '#fff !important',
        zIndex: 990,
        fontSize: 13,
        width: '158px',
        height: '43px',
        margin: '0px auto',
        borderRadius: 4,
        '&>a': {
            fontSize: 13,
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            

        },
        '&:hover': {
            backgroundColor: 'rgb(245,248,250) !important',
            '&>a': {
                color: theme.textColor.primary,
            },
        }
    },
    borderNone: {
        border: 'none !important'
    },
    
    addMemberContainer : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // padding: '0 14px',
        '&>div': {
            paddingBottom: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            height: '73px',
            padding: '0 16px',
            borderBottom: '1px solid rgb(231,236,240)',
            [theme.breakpoints.down("sm")]: {
                padding: '11px 4px',
                borderBottom: 'none',
                position: 'relative',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: 'calc(100% - 21px)',
                    left: 21,
                    bottom: 0,
                    height: 1,
                    backgroundColor: theme.textColor.border
                }

            },
            '&>div': {
                width: '48px',
                height: '48px',
                border: '1px solid rgba(12, 11, 49, 0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 24,
                marginRight: 12,
                '&>img': {
                    width: 24
                }
            }
        }
    },
    singleMemberContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // padding: '0 14px',


        '&>div': {
            paddingBottom: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '0 16px',
            borderBottom: '1px solid rgb(231,236,240)',
            [theme.breakpoints.down("sm")]: {
                padding: '11px 4px',
                borderBottom: 'none',
                position: 'relative',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: 'calc(100% - 21px)',
                    left: 21,
                    bottom: 0,
                    height: 1,
                    backgroundColor: theme.textColor.border
                }

            },
        }
    },
    share: {
        all: "unset",
        backgroundColor: "#fff",
        // border: '1px solid rgb(204,215,221)',
        width: 24,
        height: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 11,
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
            backgroundColor: theme.textColor.border
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
            padding: '0 !important',
            position: 'sticky',
            top: 0,
            zIndex: 955,
            backgroundColor: '#fff',
            transition: 'all 250ms ease-in-out',

            '&:after': {
                width: '100%',
                right: 0,
                height: 48,
                zIndex: -1,
                backgroundColor: '#fff',
                borderBottom: '1px solid ' + theme.textColor.border
            },
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
            marginRight: 43
        },
    },
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 25,
        cursor: "pointer",
        position: "relative",
        [theme.breakpoints.down(1000)]: {
            marginRight: 20,
        },
        [theme.breakpoints.down(800)]: {
            marginRight: 0,
        },
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
    searchDesktop: {
        [theme.breakpoints.down(800)]: {
            width: "100%",
            marginTop: 26,
            "& input": {
                width: "100% !important",
                backgroundColor: '#f4f4f6',
                border: 'none'
            },
        },
    },
    searchExpand: {
        justifyContent: "space-between",
        "& input": {
            display: "block",
            width: 362,
            fontFamily: theme.font.regular,
            padding: "0 12px",
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
        margin: "40px 0px",
        [theme.breakpoints.down(800)]: {
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 19,
            marginTop: 4,
            padding: '0px 24px'

        },
    },
    userTapGridView: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '362px 362px 362px',
        columnGap: 25,
        rowGap: 18,
        [theme.breakpoints.down(1800)]: {
            gridTemplateColumns: '287px 287px 287px',
            columnGap: 19,
        },
        [theme.breakpoints.down(1200)]: {
            gridTemplateColumns: 'calc(33.3333% - 13px) calc(33.3333% - 13px) calc(33.3333% - 13px)',
            columnGap: 19.5,
        },
        [theme.breakpoints.down(1000)]: {
            gridTemplateColumns: 'calc(50% - 9.5px) calc(50% - 9.5px)',
            columnGap: 19,
        },
        [theme.breakpoints.down(480)]: {
            gridTemplateColumns: '100%',
            columnGap: 0,
            rowGap: 0
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
        width: '100%',
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    myClassNameWrapper: {
        marginLeft: 10,
        fontSize: 13,
        textAlign: "left",
        "& :first-child": {
            fontFamily: theme.font.medium,
            color: theme.textColor.primary
        },
        "& p": {
            fontSize: 13,
            margin: "0",
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
    shareContactContent: {
        padding: '35px 19px 0px !important',
        '& p': {
            fontFamily: theme.font.regular,
            margin: '0 0 14px 0',
            fontSize: 14,
            color: theme.textColor.primary
        }
    },
    shareInput: {
        width: "100%",
        height: "56px",
        position: "relative",
        borderRadius: "8px",
        [theme.breakpoints.down("sm")]: {
            height: 48,
        },
        "& input": {
            border: "1px solid " + theme.textColor.border,
            width: "100%",
            textAlign: "left",
            direction: 'rtl',
            padding: "0 20px",
            borderRadius: "8px",
            paddingLeft: 50,
            height: 56,
            resize: "none",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: theme.font.regular,
            fontSize: 13,
            [theme.breakpoints.down("sm")]: {
                height: 48,
            },
            '&:focus': {
                outline: 'none'
            }
        },
        "& img": {
            position: "absolute",
            left: 16,
            cursor: "pointer",
            top: 0,
            bottom: 0,
            margin: "auto",
        },
    },
    closeModalIcon: {
        cursor: "pointer",
    },
    loginClassBtn: {
        width: '384px',
        height: 56,
        position: 'absolute',
        bottom: 23,
        right: 40,
        backgroundColor: theme.buttonColor.normal,
        color: '#fff',
        borderRadius: 8,
        fontFamily: theme.font.bold,
        cursor: 'pointer',
        border: 'none !important',
        outline: 'none !important',

        '&:hover': {
            backgroundColor: theme.buttonColor.hover,

        },
        
        [theme.breakpoints.down("sm")]: {
            // width: "100% !important",
            width: 'calc(100% - 48px)',
            right: 24,
            bottom: 13,
            height: 48
        },

    },
    shareSocial: {
        marginTop: 8,
        // marginBottom: 10,
        display: "flex",
        justifyContent: "flex-end !important",
        alignItems: "center",
        width: '100%',
        "& > a": {
            cursor: "pointer",
            width: 40,
            height: 40,
            borderRadius: 8,
            // backgroundColor: '#fff',
            // border:'1px solid '+theme.textColor.border,
            marginLeft: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&>img': {
                width: 40,
                height: 40
            },
            '&:hover': {
                // backgroundColor:'rgb(231,236,240)'
            }
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
        [theme.breakpoints.down("sm")]: {
            marginTop: 24
        },
        "& span": {
            fontSize: 13,
            marginLeft: 11,
            fontFamily: theme.font.regular,
            color: theme.textColor.primary,
            [theme.breakpoints.down("sm")]: {
                marginLeft: 9,

            },
        },
    },
    iconWrapper: {
        // marginLeft: 10,
        width: 18,
        height: 18,
        // border: "1px solid #ccd7dd",
        // backgroundColor: "#f5f8fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        [theme.breakpoints.down("sm")]: {
            width: 24,
            height: 24,
            border: "none",
            backgroundColor: "#fff",
        },
        '&>img': {
            width: 18,
            height: 18,
            marginBottom: 3,
            [theme.breakpoints.down("sm")]: {
                width: 24,
                height: 24,
            },
        },
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
    sessionNumber: {
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        borderRadius: '50%',
        marginRight: 1
    },
    sessionNotStarted: {
        border: '1px solid ' + theme.buttonColor.normal,
        color: theme.buttonColor.normal,
        backgroundColor: '#fff'
    },
    sessionStarted: {
        border: '1px solid ' + theme.buttonColor.normal,
        backgroundColor: theme.buttonColor.normal,
        color: '#fff'
    },
    sessionEnded: {
        border: '1px solid ' + theme.textColor.primary,
        color: theme.textColor.primary,
        backgroundColor: theme.textColor.fivePercent
    },
    sessionItemTime: {
        marginRight: 24,
        '&>p': {
            margin: 0,
            fontSize: 13,
            color: theme.textColor.secondary
        },
        '&>p:nth-child(1)': {
            color: theme.textColor.primary,
            fontFamily: theme.font.bold
        },

    }
}));
