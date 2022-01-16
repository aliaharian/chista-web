import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    root: {
        zIndex: 50 + ' !important'
    },
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        cursor: "pointer",
        position: "relative",
        "& input": {
            height: 40,
            width: 48,
            outline: 'none !important',
            fontFamily: theme.font.regular,
            pointerEvents: "none",
            border: "1px solid " + theme.textColor.threePercent,
            backgroundColor:theme.textColor.threePercent,
            transition: "ease all 300ms",
            borderRadius: 24,
            '&::placeholder': {
                color: theme.textColor.secondary
            }
        },
    },
    searchExpand: {
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        },
        "& input": {
            display: "block",
            width: 254,
            fontSize: 13,
            padding: "0 20px",
            pointerEvents: "unset !important",
            [theme.breakpoints.down("sm")]: {
                width: '100%'
            },
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: theme.textColor.disabled + ' !important'
            }
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
            top: 16,
        },
    },
    searchIcon: {
        position: "absolute",
        color: theme.textColor.primary,
        right: 15,
        top: 8
    },
    searchBar: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 19px',
        position: 'relative',
        paddingBottom: 20,
        '&:after': {
            width: 'calc(100% + 30px)',
            content: '""',
            position: 'absolute',
            height: 1,
            backgroundColor: theme.textColor.border,
            right: -15,
            bottom: 0
        }
    },
    memebrAvatarWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    memebrAvatarOpinion: {
        width: 48,
        height: 48,
        fontSize: 13,
        borderRadius: "50%",
        fontFamily: theme.font.medium
    },
    memebrAvatarBorder: {
        border: "1px solid transparent",
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    memebrNameWrapper: {
        marginLeft: 11,
        textAlign: "left",
        fontSize: 13,
        color: theme.textColor.secondary,
        "& p:first-child": {
            color: theme.textColor.primary,
            fontFamily: theme.font.medium,
            marginBottom: "5px",
        },
        "& p": {
            fontSize: 13,
            margin: 0
        },
    },
    contactList: {
        maxHeight: 515,
        height: 515,
        [theme.breakpoints.down('sm')]: {
            height: 515
        },
        "&>div": {
            "&>div": {
                paddingTop: 8,
                marginRight: '-15px !important',
                marginLeft: 'unset !important',
                [theme.breakpoints.down('sm')]: {
                    paddingTop: 0,
                    marginRight: '0 !important',
                },
            }
        },
        "& li": {
            listStyle: "none",
        },
    },
    itemWrapper: {
        padding: '10px 35px',
        position: 'relative',
        '&:after': {
            content: '""',
            width: 'calc(100% - 94px)',
            height: 1,
            backgroundColor: theme.textColor.border,
            position: 'absolute',
            bottom: 0,
            right: 0,
            [theme.breakpoints.down('sm')]: {
                width: 'calc(100% - 84px)',
            },
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 24px',
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
    examineeItemContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent:'space-between',
        width:'100%',
        '&>div:nth-child(2)':{
            '& p':{
                fontSize:13
            }
        }
    }
}));
