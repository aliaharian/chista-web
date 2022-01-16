import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    contactsWrapper: {
        padding: '2px 0 128px 0',
        display: 'flex',
        "& .infinite-scroll-component ": {
            overflow: "unset !important",
        },
        "&>div:last-child": {
            width: '100%'
        },
        // "&>div:first-child": {
        //     zIndex:'999 !important'
        // }
    },
    breadcumb: {
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 27,
        marginTop: 5,
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
    toolTip: {
        height: 25,
        backgroundColor: theme.textColor.tooltip
    },
    contactDataContainer: {
        flexBasis: '77%',
        maxWidth: '77%'
    },
    editBtnRes: {
        marginLeft: 13,
        [theme.breakpoints.down("xs")]: {
            // marginLeft: -16,
            position: 'absolute',
            right: 8

        },
    },
    inviteDialogRoot: {
        height: '600px !important',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '10px 10px 0 0 !important'
        },
    },
    deleteDialogRoot: {
        height: '449px !important',
        width: '455px !important',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '10px 10px 0 0 !important'

        },

    },
    deleteBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 36px 16px 36px',
        '&>p:first-child': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            fontsize: 13,
            textAlign: 'center',
        },
        '&>p:nth-child(2)': {
            fontFamily: theme.font.regular,
            color: theme.textColor.primary,
            fontsize: 13,
            textAlign: 'center'

        }
    },
    inviteBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1px 19px 16px 19px',
        '&>p:first-child': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            fontsize: 13,
            textAlign: 'center',
        },
        '&>p:nth-child(2)': {
            fontFamily: theme.font.regular,
            color: theme.textColor.primary,
            fontsize: 13,
            textAlign: 'center'

        }
    },
    inviteUserName: {
        color: theme.textColor.primary,
        fontFamily: theme.font.bold,
        marginTop: 32,
        marginBottom: 10
    },
    inviteText: {
        fontSize: 13,
        textAlign: 'center',
        margin: '51px 0 40px 0'
    },
    inviteLinkText: {
        margin: 0,
        marginBottom: 11,
        width: '100%',
        fontSize: 13,
        fontFamily: theme.font.bold,
        color: theme.textColor.primary
    },
    inviteLink: {
        position: 'relative',
        width: '100%',
        '&>input': {
            width: '100%',
            height: 56,
            outline: 'none!important',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            direction: 'rtl',
            textAlign: 'right',
            padding: '0 16px 0 35px',
            color: theme.textColor.primary,
            fontSize: 13,
            fontFamily: theme.font.regular
        },

        '&>img': {
            position: 'absolute',
            left: 16,
            top: 16,
            cursor: 'pointer'
        }
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
            width: 48,
            height: 48,
            borderRadius: 8,
            // backgroundColor: '#fff',
            // border:'1px solid '+theme.textColor.border,
            marginLeft: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&>img': {
                width: 48,
                height: 48
            },
            '&:hover': {
                // backgroundColor:'rgb(231,236,240)'
            }
        },
    },

    inviteBtn: {
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 8,
        width: 48,
        minWidth: 48,
        height: 48,

        marginRight: 8,
        '&>span': {
            width: 24,
            height: 24,
        },
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    addContact: {
        width: 150,
        height: 48,
        backgroundColor: theme.buttonColor.normal,
        borderRadius: 24,
        color: '#fff',
        '& img': {
            marginRight: 4
        },
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,

        }
    },
    // classDetailLink: {
    //     backgroundColor: '#fff !important',
    //     zIndex: 990,
    //     '&>a': {
    //         fontSize: 13,
    //         textDecoration: 'none !important',
    //         color: theme.textColor.secondary,
    //         width: '100%'
    //
    //     },
    //     '&:hover': {
    //         // backgroundColor:'#fff !important',
    //
    //         borderRadius: 8,
    //         backgroundColor: '#f5f8fa!important',
    //         '&>a': {
    //             color: theme.buttonColor.normal,
    //             // color: theme.textColor.primary,
    //         },
    //     }
    // },
    contactItemParent: {
        padding: '6px 13.5px 12px 13.5px !important',
        [theme.breakpoints.down("sm")]: {
            padding: '6px 0 12px 0 !important',

        },
    },
    contactsMainWrapper: {
        maxWidth: '100%',
        margin: 0,
        padding: '0 12px 0 48px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 8px',

        },
    },
    noDataContainer: {
        width: "100%",
        textAlign: "center",
        marginTop: 145,
        [theme.breakpoints.down("sm")]: {
            marginTop: 114,

        },
    },
    addContactInput: {
        '& .Mui-focused': {
            '& fieldset': {
                outline: 'none !important',
                border: '1px solid ' + theme.textColor.primary + ' !important'
            }

        }
    },
    inputError: {
        '& fieldset': {
            borderColor: theme.textColor.error + ' !important'
        },
        '& svg': {
            color: theme.textColor.error,
        }
        // marginBottom:22
    },
    textError: {
        fontFamily: theme.font.regular,
        color: theme.textColor.error,
        fontSize: 13,
        marginTop: 5
        // marginBottom:22
    },


    contactItem: {
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0px 1px 18px 11px",
        width: "100%",
        color: "unset",
        '&:after': {
            [theme.breakpoints.down("sm")]: {
                content: '""',
                width: 'calc(100% - 63px)',
                height: '1px',
                right: -12,
                backgroundColor: '#e6e5ea',
                position: 'absolute',
                bottom: 0
            },
            [theme.breakpoints.down("xs")]: {
                content: '""',
                width: 'calc(100% - 70px)',
                height: '1px',
                right: -11,
                backgroundColor: '#e6e5ea',
                position: 'absolute',
                bottom: 0

            },
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 1px 18px 17px",
            borderBottom: "none",
            position: 'relative'
        },
        "& p": {
            margin: 0,
        },
        "&:hover": {
            textDecoration: "none !important",
        },
    },
    contactItemPlaceHolder: {
        backgroundColor: "rgba(146, 164, 187, 0.17)",
        borderRadius: 16,
        minHeight: 123,
    },
    favoritesItemName: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& p": {
            marign: 0,
            fontFamily: theme.font.bold,
            fontSize: 13,
            color: "#0c0b31",
        },
    },
    favoritesItemNameMobile: {
        justifyContent: "flex-start",
    },
    favoritesStar: {
        color: "#FFD800",
    },
    favoritesScore: {
        //  marginTop: 5,
        fontSize: 16,
        color: '#0c0b31',
        marginRight: 3
    },
    subtitle: {
        fontSize: 13,
        lineHeight: 2.14,
        //whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: 'webkit-box',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical',
        marginRight: "19px",
        color: "#0c0b31cc",
        maxHeight: 50,
        overflow: "hidden",
        fontFamily: "chistaYekanR!important"
    },
    favoritesLocationWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "5px !important",
    },
    favoritesLocation: {
        display: "flex",
    },
    avatarContainer: {
        width: 48,
        height: 48,
        //    border: '1px solid transparent',
        borderRadius: '50%'

    },
    deleteAvatarContainer: {
        width: 56,
        height: 56,
        borderRadius: '50%'
    },
    deleteContactName: {
        marginBottom: 1,
        marginTop: 8,
        fontSize: 13,
        fontFamily: theme.font.bold + ' !important'
    },
    deleteContactPhone: {
        margin: 0,
        fontSize: 13

    },
    deleteContactConfirmText: {
        marginTop: 45,
        marginBottom: 0,
        fontSize: 13
    },
    avatar: {
        fontSize: 14,
        fontFamily: theme.font.medium,
        width: '100%',
        height: '100%',
        border: '1px solid #fff',
        borderRadius: '50%'

    },
    contactDetailContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        '&>p:last-child': {
            fontFamily: theme.font.regular
        }
    },
    favoriteAvatarWrapper: {
        display: "flex",
        width: 48,
        height: 48,
        flexBasis: 48,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    favoriteAvatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
    favoriteAvatarBorder: {
        border: "1px solid #808895",
        borderRadius: 100,
        padding: 2,
        position: "relative",
    },
    star: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    starMobile: {
        marginLeft: 10,
        paddingBottom: 2,
    },
    status: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#c5c9cc",
        borderRadius: 100,
        width: 22,
        height: 22,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    statusMobile: {
        width: 12,
        height: 12,
        left: 3,
        bottom: 5,
        border: "1px solid white",
    },
    statusActive: {
        backgroundColor: "#34c278",
    },
    statusBusy: {
        backgroundColor: "#fa418d",
    },
    statusIcon: {
        // width: theme.spacing(2),
        // height: theme.spacing(2),
        color: "white",
    },
    statusIconMobile: {
        color: theme.palette.primary.main,
        marginRight: 7,
    },
    priceWrapper: {
        display: "flex",
        color: theme.palette.primary.main,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
    },
    price: {
        marginLeft: 3,
        fontWeight: "bold",
    },
    itemLocText: {
        fontSize: 13,
        color: "#808895",
    },
    itemLoc: {
        height: 20,
    },
    // chatIcon: {
    //     width: 24,
    //     height: 24,
    //     color: theme.textColor.primary,
    //     cursor: 'pointer',
    //     '&:hover': {
    //         color: theme.buttonColor.normal,
    //     }
    // },
    alphabetList: {
        padding: 0,
        listStyleType: 'none',
        width: 'max-content',
        marginTop: -5,
        '&>li': {
            marginRight: 16,
            borderRadius: '50%',
            width: 33,
            fontSize: 14,
            height: 33,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: theme.textColor.secondary,
            transition: 'all 0.3s ease',
            [theme.breakpoints.down("sm")]: {
                width: 20,
                height: 20,
                marginBottom: 14,
                marginRight: 0,

            },
            '&:hover': {

                fontFamily: theme.font.medium,
                color: theme.textColor.primary,

                // border:'1px solid '+theme.buttonColor.normal
            }
        },
    },
    alphabetListActive: {
        backgroundColor: theme.buttonColor.normal,
        color: '#fff !important',
        fontFamily: theme.font.bold
        // border: '1px solid ' + theme.buttonColor.normal
    },
    classFilterSkeleton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 170,
        height: 40,
        border:'1px solid '+theme.textColor.border,
        borderRadius:20,
        padding:13,
        '&>div:nth-child(1)': {
            padding: '1.5px 0',
            display: 'flex',
            height: 40,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'column',
            // '&>span':{
            //     marginBottom:15
            // }
        },
    },
    actionsRes: {
        width: '100%',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 26,
        '&>div': {
            height: 40,
            display: 'flex',
            flexBasis: '500px',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '&>div:nth-child(2)': {
            maxWidth: 110,
            minWidth: 110,
            height: 40,
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 20,
            justifyContent: 'center'
        }
    },
    filterbarResSkeleton: {
        width: '100%',
        height: 54,
        position: 'relative',
        marginBottom: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
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
            position: 'absolute',
            height: 1,
            backgroundColor: theme.textColor.border,
            bottom: 0,
            right: -23,
        },
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '&>div:nth-child(1)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        '&>div:nth-child(2)': {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%',
                marginTop: 3,
                marginBottom: 24,
            },
        },
        "& button": {
            height: 48,
            [theme.breakpoints.down("sm")]: {
                // marginBottom: 24
            },
            "&>span": {
                "&>span": {
                    marginLeft: 7,
                }
            },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column-reverse',
            marginBottom: 27,
        },
    },
    removeRes: {
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    myClassDesktop: {
        width: 'calc(100%)',
        margin: '0'

    },
    classListContainer: {
        justifyContent: 'center'
    },
    enterClass:{
        width: 70,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c0b310d',
        borderRadius: 20
    },
    addClass: {
        width: 115,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c0b310d',
        borderRadius: 20
    },
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 45,
        cursor: "pointer",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
            width: '100%'
        },
        "& input": {
            height: 48,
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
    searchExpandMobile: {
        justifyContent: "space-between",
        width: "300px",
        height: 40,
        borderRadius: 20,
        padding: '13px 24px',
        border: '1px solid ' + theme.textColor.border,
        "& input": {
            border: '1px solid ' + theme.textColor.border,
            display: "block",
            width: "100%",
            padding: "0 15px",
            pointerEvents: "unset !important",
        },
        [theme.breakpoints.down('xs')]: {
            width: 200,

        },
        [theme.breakpoints.down(350)]: {
            width: 155,

        },
    },
    searchExpand: {
        justifyContent: "space-between",
        width: 362,
        height: 40,
        borderRadius: 20,
        border: '1px solid ' + theme.textColor.border,
        padding: '13px 24px',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            marginBottom: 26
        },
    },
    searchIcon: {
        position: "absolute",
        color: theme.textColor.primary,
        right: 19,
    },
    deleteActionBtnContainer: {
        display: "flex",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 60,
        '&>button': {
            height: 56,
            borderRadius: 8,
            outline: 'none',
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: theme.font.bold,
        },

        '&>button:first-child': {
            width: 237,
            backgroundColor: theme.buttonColor.normal,
            marginRight: 8,
            border: 'none',
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,

            }
        },
        '&>button:last-child': {
            width: 106,
            backgroundColor: '#fff',
            border: '1px solid ' + theme.buttonColor.normal,
            color: theme.buttonColor.normal,
            '&:hover': {
                border: '1px solid ' + theme.buttonColor.hover,
                color: theme.buttonColor.hover,
            }
        }

    },

    searchFormSkeleton: {
        width: '300px',
        height: 48,
        borderRadius: 24,
        border: '1px solid ' + theme.textColor.fivePercent,
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]: {
            width: 'calc(100% + 8px)',
            // marginTop: 14
        },
    },
    skeletonAddContact: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'space-between!important',


        },
    },
    resBreadcumbSkeleton: {
        display: 'none',
        width: 104,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: '0',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]: {
            display: 'flex'

        }

    },

    cardBody: {
        marginBottom: 0,
        cursor: 'pointer',
        [theme.breakpoints.down("sm")]: {
            marginBottom: 14,

        },
    },
    borderNone: {
        border: 'none !important'
    },
    myRole: {
        fontSize: 13,
        margin: 0,
        '&>p': {
            margin: 0
        }
    },
    actionClass: {
        '&>p': {
            fontSize: 13,
            margin: 0
        }
    },
    loginClass: {
        all: "unset",
        borderRadius: 15,
        cursor: 'pointer',
        // boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
        backgroundColor: '#0c0b310d',
        color: '#fff',
        // border: '1px solid ' + theme.buttonColor.normal,
        height: 30,
        width: 73,
        boxSizing: "border-box",
        padding: "6px 11px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 13,
        transition: 'all 0.3s ease-in-out',

    },
    chatIcon: {
        width: 20,
        height: 20
    },

    cardFooter: {
        marginTop: 23,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]: {
            marginTop: 14,
        },
    },
    commonGroupsContainer: {
        marginTop: 42
    },
    classItemWrapper: {
        width: 362,
        [theme.breakpoints.down(1800)]: {
            width: 287,
        },
        // [theme.breakpoints.down("xs")]: {
        //     minWidth: '100% !important',
        //     maxWidth: '100% !important',
        // },
        [theme.breakpoints.down(480)]: {
            width: '100%',
            minWidth: '100% !important',
            maxWidth: '100% !important',
        },
        '&>div': {
            padding: 26,
            paddingBottom: 22,
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 10,
            [theme.breakpoints.down("sm")]: {
                padding: 14,
            },
        }

    },
    groupInfoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    groupAvatarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupName: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 11,
        '&>p': {
            maxWidth: '190px',
            fontSize: 13,
            margin: 0
        },
        '&>p:first-child': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary
        }
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
        padding: 0,
        position: "relative",
    },
    classAvatarThumb: {
        width: 26,
        height: 26,
        fontSize: 12,
        borderRadius: "50%",
    },
    classAvatarThumbNumber: {
        width: 24,
        height: 24,
        fontSize: 12,
        borderRadius: "50%",
        backgroundColor: theme.textColor.fivePercent,
        color: theme.textColor.primary
    },
    classAvatarThumbBorder: {
        border: "1px solid #fff",
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    classAvatarThumbBorderNumber: {
        border: "1px solid " + theme.textColor.border,
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    memberAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },


    groupActions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&>div': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
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
    groupMembers: {
        marginTop: 38,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: 14,

        },
    },
    memberCnt: {
        fontSize: 13,
    },
    noData: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 96
    }
}));
