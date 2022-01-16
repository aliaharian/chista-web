import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    favoritesWrapper: {
        padding: '2px 30px 30px 30px' ,
        "& .infinite-scroll-component ": {
            overflow: "unset !important",
        },
    },
    favoriteItemParent:{
        padding:'6px 11px 12px 11px !important'
    },
    favoriteItem: {
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 0px 18px 0px",
        width: "100%",
        color: "unset",
        "& p": {
            margin: 0,
        },
        "&:hover": {
            textDecoration: "none !important",
        },
    },
    favoriteItemPlaceHolder: {
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
            fontFamily:'chistaYekanB',
            fontSize:13,
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
        fontSize:16,
        color:'#0c0b31',
        marginRight:3
    },
    subtitle: {
        fontSize:13,
        lineHeight: 2.14,
        //whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display:'webkit-box',
        webkitLineClamp:3,
        webkitBoxOrient:'vertical',
        marginRight: "19px",
        color: "#0c0b31cc",
        maxHeight:50,
        overflow:"hidden",
        fontFamily:"chistaYekanR!important"
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
        width: 86,
        height: 86,
        border:'1px solid #92A4BB',
        borderRadius:'50%'

    },
    avatar: {
        width: '100%',
        height: '100%',
        border:'1px solid #fff',
        borderRadius:'50%'

    },
    favoriteAvatarWrapper: {
        display: "flex",
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
        fontSize:13,
        color: "#808895",
    },
    itemLoc: {
        height: 20,
    },
}));
