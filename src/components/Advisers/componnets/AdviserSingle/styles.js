import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbarRoot:
    {
        paddingLeft: "72px",
        paddingRight: "72px",
        paddingTop: 44,
        paddingBottom: 28,
        position: "sticky",
        top: "100px",
        zIndex: "99",
        backgroundColor: "#fff",
        [theme.breakpoints.down('sm')]: {
            paddingRight: 16,
            paddingLeft: 16,
            paddingTop: 34,
            paddingBottom: 18,
            position: "sticky",
            right: 0,
            left: 0,
        },
    },
    root:
    {
        flexGrow: 1,
        width: '100%',
        paddingLeft: "72px",
        paddingRight: "72px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    },
    tabRoot: {
        "&$selected": {
            color: "#1890ff",
            fontWeight: theme.typography.fontWeightMedium
        },
    },
    tabWrapper: {
        fontSize: "15px",
        color: "#484e5c",
        borderBottom: "1px solid rgb(231, 236, 240)",
        '&: MuiTabRoot': {
            minWidth: 40
        },
        '&$tabSelected': {
            color: "#4264fb",
        }
    },
    "MuiTabs-indicator": {
        height: 4,
        color: "#4264fb",
    },
    tab: {
        minWidth: 40,
        margin: "0 31px",
        [theme.breakpoints.down('sm')]: {
            minWidth: 36,
            margin: "0 10px",
        },
    },
    tabContent: {
        [theme.breakpoints.down('sm')]: {
            padding: "0 30px",
            position: "relative"
        },
    },
    btnWrapper:
    {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '& span':
        {
            fontFamily: "yekanHeavy",
            color: "#484e5c",
            fontSize: "21px",
            marginLeft: 5,
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                fontSize: 14,
            },
        }
    },
    goBackText:
    {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    btn:
    {
        width: 48,
        height: 48,
        marginRight: 10,
        backgroundColor: "transparent",
        border: "1px solid rgba(146, 164, 187, 0.3)",
        borderRadius: 8,
        minWidth: "31px !important",
        '& span':
        {
            margin: 0
        }
    },
    btnGroupWrapper:
    {
        display: "flex",
        justifyContent: "space-between",
    },
    btnFav: {
        marginRight: 0,
    },
    adviserInfo:
    {
        padding: "23px 30px",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            padding: "0"
        }
    },
    avatarContainer:
    {
        width: "81px",
        height: "81px",
        borderRadius: "50%",
        border: "1px solid #92a4bb",
        position: "relative",
        marginRight: "15px",
        flexShrink: 0,
        [theme.breakpoints.down('sm')]: {
            margin: "21px 0",
            width: "97px",
            height: "97px",
        }
    },
    avatar: {
        width: "100% !important",
        height: "100% !important",
        border: '1px solid #fff',
        backgroundColor: "#ffa352",
        fontSize: 18
    },
    status: {
        width: "20px",
        height: '20px',
        borderRadius: '50%',
        bottom: "0px",
        left: "4px",
        position: "absolute",
        zIndex: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    statusOnline: {
        backgroundColor: '#34c278',
    },
    statusOffline: {
        backgroundColor: '#c5c9cc',
    },
    statusBusy: {
        backgroundColor: '#fa418d',
    },
    adviserTitle: {
        fontSize: "22px",
        fontFamily: "yekanHeavy",
        color: "#1a172d",
        [theme.breakpoints.down('sm')]: {
            fontSize: "16px",
        }
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            marginBottom: 21,
        }
    },
    desc:
    {
        fontSize: 13,
        color: '#808895'
    },
    adviserContainer: {
        backgroundColor: "#F6F8FE",
        borderRadius: "8px",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        position: "sticky",
        top: "220px",
        zIndex: 9,
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            position: "sticky",
            borderRadius: 0,
            top: "200px",
        }
    },
    adviserInfoWrapper:
    {
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    actionAdviserWrapper: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
            marginBottom: 21,
        },
    },
    adviserPriceContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    adviserPrice: {
        fontSize: "14px",
        color: "#4264fb",
    },
    adviserPriceimg:
    {
        marginRight: 9,
        height: 18,
    },
    adviserDetailWrapper:
    {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "flex-start",
        },
    },
    adviserPriceUnit:
    {
        fontSize: "12px",
        fontFamily: "yekanLight",
        color: "#92A4BB"
    },
    adviserLocContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 27

    },
    adviserLoc: {
        height: 24,

    },
    adviserLocText: {
        fontSize: "12px",
        marginLeft: '5px',
        marginTop: 15
    },
    countsWrapper:
    {
        display: "flex",
        justifyContent: "start",
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            margin: "26px 0"
        }
    },
    countItem:
    {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        marginRight: 36,
    },
    countItemTop:
    {
    },
    countItemBottom:
    {
    },
    rateContainer: {
        width: 25,
        [theme.breakpoints.down('sm')]: {
            '& img': {
                width: 22,
                height: 22,
            }
        }
    },
    rateTextContainer: {
        width: 30,
        color: "#536B88",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        }
    },
    rate: {
        width: 24,
    },
    rateText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#2a2f33',
    },
    rateBox:
    {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    countItemText:
    {
        fontFamily: "chistaYekanR",
        fontSize: 16,
        color: "#484e5c",
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        }
    },
    countItemSubText:
    {
        fontFamily: "yekanLight",
        fontSize: 14,
        color: "#484e5c",
        [theme.breakpoints.down('sm')]: {
            fontSize: 13
        }
    },
    chatBtnWrapper:
    {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
    videoChatButton: {
        color: "#fff",
        backgroundColor: "#4264fb",
        height: 48,
        width: 148,
        fontSize: 14,
        borderRadius: 12,
        [theme.breakpoints.down('sm')]: {
            height: 42,
            width: 135,
            fontSize: 13,
            '& img': {
                height: "24px!important",
                width: "24px!important",
            }
        },
    },
    chatButton: {
        color: "#ffffff",
        height: 48,
        width: 152,
        fontSize: 16,
        borderRadius: 8,
        marginRight: 14,
        fontFamily: theme.font.regular,
        backgroundColor: "#4264fb",
        boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
        border: "1px solid #4264fb",
        '&:hover':{
            backgroundColor: "#4264fb",
        },
        [theme.breakpoints.down('sm')]: {
            height: 42,
            width: 135,
            fontSize: 13,
            '& img': {
                height: "24px!important",
                width: "24px!important",
            }
        },
    },
    divider:
    {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    chatButtonMobile: {
        width: "48px",
        border: "1px solid rgba(146, 164, 187, 0.3)",
        height: "48px",
        marginRight: "20px",
    },
    videoButtonMobile: {
        width: "48px",
        border: "1px solid rgba(146, 164, 187, 0.3)",
        height: "48px",
        backgroundColor: "#4264fb",
        '&:disabled': {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
        }
    }
}));