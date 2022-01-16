import { makeStyles } from "@material-ui/styles";

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
        cursor: 'pointer',
        color: theme.textColor.primary,
        [theme.breakpoints.down("xs")]: {
            // marginLeft: -16,
            position: 'absolute',
            right: 8

        },
    },
    inviteDialogRoot: {
        // height: '600px !important',
        [theme.breakpoints.down("sm")]: {
            height: '568px !important',
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '25px 25px 0 0 !important'
        },
    },
    deleteDialogRoot: {
        height: '607px !important',
        width: '464px !important',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '10px 10px 0 0 !important',
            height: '460px !important',

        },

    },
    deleteBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '19px 24px 16px 24px',
        height: '100%',
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
        fontSize: 14,
        textAlign: 'center',
        margin: '40px 0 101px 0',
        fontFamily: theme.font.medium,
        color: theme.textColor.primary,
        [theme.breakpoints.down("sm")]: {
            margin: '30px 0 35px 0',

        },
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
            fontFamily: theme.font.regular,
            [theme.breakpoints.down("sm")]: {
                height: 48,
            },
        },

        '&>img': {
            position: 'absolute',
            left: 16,
            top: 16,
            cursor: 'pointer',
            [theme.breakpoints.down("sm")]: {
                top: 12,

            },
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
        backgroundColor: theme.buttonColor.normal,
        border: `1px solid ${theme.buttonColor.normal}`,
        color: '#fff',
        borderRadius: 24,
        width: 126,
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 9,
        alignItems: "center",
        fontSize: 13,
        "& span": {
            margin: '0 !important'
        },
        "&:hover": {
            backgroundColor: theme.buttonColor.hover,
            color: "white",
        },
    },
    classDetailLink: {
        backgroundColor: '#fff !important',
        zIndex: 990,
        '&>a , &>span:nth-child(1)': {
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
    contactItemParent: {
        padding: '6px 12.5px 12px 12.5px !important',
        [theme.breakpoints.down("sm")]: {
            padding: '6px 0 12px 0 !important',

        },
    },
    contactsMainWrapper: {
        maxWidth: '100%',
        margin: 0,
        padding: '0',
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
            fontFamily: theme.font.medium,
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
        borderRadius: '50%',
        cursor: 'pointer'

    },
    deleteAvatarContainer: {
        width: 70,
        height: 70,
        borderRadius: '50%',
        [theme.breakpoints.down("sm")]: {
            width: 56,
            height: 56,
        },
    },
    deleteContactName: {
        marginBottom: 1,
        marginTop: 10,
        fontSize: 13,
        fontFamily: theme.font.bold + ' !important',
        lineHeight: '24px',
    },
    deleteContactPhone: {
        margin: 0,
        fontSize: 13,
        lineHeight: '24px',


    },
    deleteContactConfirmText: {
        marginTop: 40,
        marginBottom: 0,
        fontSize: 14,
        lineHeight: '26px',
        textAlign: 'center',
        color: theme.textColor.primary,
        fontFamily: theme.font.medium
    },
    avatar: {
        fontSize: 13,
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
            fontFamily: theme.font.regular,
            color: theme.textColor.secondary
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
    chatIcon: {
        width: 24,
        height: 24,
        color: theme.textColor.primary,
        cursor: 'pointer',
        '&:hover': {
            color: theme.buttonColor.normal,
        }
    },
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
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40,

        '&>div:nth-child(2)': {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%',
                marginTop: 15,
                marginBottom: 24,
            },
        },
        "& button": {
            height: 40,
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
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 46,
        cursor: "pointer",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
            width: '100%'
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
    searchExpand: {
        justifyContent: "space-between",
        "& input": {
            display: "block",
            width: 362,
            padding: "0 20px",
            pointerEvents: "unset !important",
            [theme.breakpoints.down("sm")]: {
                width: '100%',

            },
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
        marginTop: 184,
        [theme.breakpoints.down("sm")]: {
            marginTop: 61,
        },

        '&>button': {
            height: 56,
            borderRadius: 8,
            outline: 'none',
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: theme.font.bold,
            [theme.breakpoints.down("sm")]: {
                height: 48,
            },
        },

        '&>button:first-child': {
            width: 259,
            backgroundColor: theme.buttonColor.normal,
            marginRight: 8,
            border: 'none',
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,

            }
        },
        '&>button:last-child': {
            width: 117,
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
        height: 40,
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
    contactSearchPhrase: {
        width: '100%',
        marginTop: 10,
        marginBottom: 30,
        '&>h4': {
            fontSize: 20,
            fontFamily: theme.font.bold,
            marginBottom: 20,
            lineHeight: '28px',
            color: theme.textColor.primary
        },
        '&>p': {
            fontSize: 13,
            lineHeight: '18px',
        },

    },
    contactNoResultText: {
        fontSize: 14,
        color: theme.textColor.primary,
        lineHeight: '19px',
        margin: '30px 0 16px 0'
    },
    contactOfferAddText: {
        fontSize: 13,
        color: '#0c0b31',
        lineHeight: '18px',
        marginBottom: 30
    },
    addContactAlt: {
        margin: '0 auto'
    }
}));
