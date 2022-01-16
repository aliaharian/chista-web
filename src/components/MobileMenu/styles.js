import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
    dialog: {
        zIndex: '997!important',
        '& .MuiDialog-paperFullScreen':{
            backgroundColor:'#0c0b31'
        }
    },
    root: {
        margin: '100px 3px 0',
    },
    '.MuiPaper-root': {
        backgroundColor: '#0c0b31',
    },
    appBar: {
        '&.MuiAppBar-colorPrimary': {
            position: 'fixed',
            backgroundColor: '#0c0b31',
            color: '#fff',
            padding: '22px 0',
        }
    },
    navRoot: {
        paddingTop: 100,
        backgroundColor: '#0c0b31',
        color: '#fff',
        height: '100%',
    },
    title: {
        fontFamily: 'yekanHeavy',
        fontWeight: 900,
        fontSize: 18,
        flex: 1,
        lineHeight: 1.22,
    },
    imageIcon: {
        width: 24,
        height: 24,
    },
    listItemIcon: {
        minWidth: 27,
    },
    listItem: {
        padding: '10px 34px',
    },
    mobileMenuItemActive: {
        '&>span': {
            color: theme.buttonColor.normal,
        },
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: 3,
            height: 24,
            borderRadius: '3px',
            backgroundColor: theme.buttonColor.normal,
            position: "absolute",
            left: 22
        },
    },
    listItemText: {
        fontFamily: theme.font.regular,
        color: '#fff',
        lineHeight: 1.57,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        '&:hover': {
            '&>span': {
                color: theme.buttonColor.normal,
            },
            '&::before': {
                content: '""',
                display: 'inline-block',
                width: 3,
                height: 24,
                borderRadius: '3px',
                backgroundColor: theme.buttonColor.normal,
                position: "absolute",
                left: 22
            },
        },
        '&>span': {
            marginLeft: 11,
            display: 'inline-block',
        }
    },
    expandMoreIcon: {
        color: '#536b88',
    },
    divider:
        {
            '&.MuiDivider-root': {
                width: "87%",
                backgroundColor: "#e7ecf0",
                opacity: 0.5,
                marginLeft: '20px',
            }
        },
    scrollableContainer:
        {
            height: '40px',
            margin: "8px auto",
            width: '100%',
            display: "flex",
            '&>div':
                {
                    marginLeft: 5,
                    height: 40,
                    borderRadius: "16px",
                    padding: 10,
                    backgroundColor: "#f1f1f3",
                    color: '#616161',
                }
        },
    filterPanel:
        {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            '&:first-child':
                {
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                },
            '&:last-child':
                {
                    borderBottomRightRadius: "15px",
                    borderBottomLeftRadius: "15px",
                }
        }
    ,
    filterPanelHeading:
        {
            fontFamily: theme.font.regular,
            fontSize: "15px",

        },
    filterPanelExpandBtn:
        {
            border: "1px solid rgb(146,164,187,.28)",
            borderRadius: "5px",
            backgroundColor: "transparent!important"
        },
    radioLabel:
        {
            '&>span':
                {
                    padding: "2px"
                }
        },
    filterOptionRoot:
        {
            display: 'flex',
            flexWrap: "wrap"

        },
    filterPanelSelect:
        {
            marginTop: "6px",
            height: "45px !important",
            backgroundColor: "rgb(189,200,214,.05) !important",
            fontFamily: 'yekan',
            borderRadius: "16px !important",
            border: "1px solid rgb(189,200,214,.28) !important",
            '& fieldset': {
                display: "none"
            },
            '& div':
                {
                    backgroundColor: 'transparent !important',
                    fontFamily: 'yekan !important',
                    fontSize: '13px !important'
                }
        },
    priceSelectOption:
        {
            fontFamily: theme.font.regular,
        },
    selectWrapper: {
        display: 'flex',
        alignItems: "center"

    },
    selectLabel: {
        fontFamily: 'yekan',
        fontSize: 13,
        marginRight: "8px",
        color: "#536B88",
    },
    selectList: {
        lineHeight: "30px",
        padding: 10
    },
    socialContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 36,
        backgroundColor: '#0c0b31',
        '&>a': {
            margin: '0 10px',
        },
    },
    social: {
        backgroundImage: 'url(/images/social.png)',
        backgroundRepeat: 'no-repeat',
        display: 'block',
    },
    socialFacebook: {
        width: 10,
        height: 19,
        backgroundPosition: '-5px -5px',
    },
    socialInstagram: {
        width: 19,
        height: 19,
        backgroundPosition: '-25px -5px',
    },
    socialTwitter: {
        width: 23,
        height: 19,
        backgroundPosition: '-5px -34px',
    },
    socialLinkedin: {
        width: 19,
        height: 19,
        backgroundPosition: '-54px -5px',
    }
}));
