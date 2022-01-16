import {makeStyles} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});

export default makeStyles(theme => ({
    root: {
        borderRadius: "16px !important",
        width: "464px !important",
        height: "706px !important",
        padding: '17px 0',
        [theme.breakpoints.down('sm')]: {
            width: "100% !important",
            margin: 0,
            padding: '4px 0 17px 0',

            height: "calc(100% - 0px) !important",
            borderRadius: "0 !important",
        },
    },
    dialog: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end'
        },
    },
    modalHead: {
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    modalIcon: {
        fontSize: 60,
        color: "#607d8b",
        marginBottom: 10,
        height: '76px !important',
    },
    profileAvatarDemo: {
        '&>img': {
            width: '40%',
            height: 'unset'
        }
    },
    phoneInputLabel: {
        color: "#0c0b31cc",
        fontSize: 16,
        fontFamily: theme.font.regular,
        position: 'relative',
        '&:after': {
            content: '""',
            width: 5,
            height: 5,
            position: 'absolute',
            display: 'inline-block',
            borderRadius: '50%',
            left: 76,
            backgroundColor: '#f64d4d'
        }
    },
    modalTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 86,
        '& p': {
            fontFamily: 'chistaYekanB',
            fontSize: 18,
            color: "#0c0b31",
            marginBottom: 0,
            marginTop: 2,
            marginLeft: 9
        }
    },
    completeModalTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: '28px',
        padding: '0 35px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            padding: '0 24px',
        },
        '& p': {
            fontFamily: theme.font.bold,
            fontSize: 14,
            color: theme.textColor.primary,
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 9
        }
    },
    closeButton: {
        color: '#000',
        cursor: 'pointer'
    },
    modalTitleDesc: {
        fontSize: 16,
        color: "#0c0b31",
        marginBottom: 81,
        marginTop: 0
    },
    completeModalTitleDesc: {
        fontSize: 16,
        color: "#0c0b31",
        marginTop: 0,
        marginLeft: 10
    },
    verifyModalTitleDesc: {
        marginBottom: 11,
    },

    loginFormContainer: {
        padding: '8px 0'
    },
    dialogBtn: {
        borderRadius: "0 !important",
    },
    submitBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "10px",
    },
    loadingBox: {
        margin: "250px auto 250px auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    modalContent:
        {
            padding: "11px 0 15px 0",
            paddingBottom: 0
        },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: theme.textColor.border
    },
    actionBtn: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 4,
        color: theme.buttonColor.normal,
        margin: "0",
        outline: "none",
        fontSize: 13,
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',
        },
        [theme.breakpoints.down('sm')]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
            color: theme.buttonColor.hover,
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.hover,
            },
        },
    },
    modalTitleBolder: {
        fontFamily: 'chistaYekanR',
        fontSize: 25,
        fontWight: 'bold'
    },
    resetBtn:
        {
            color: "#1641ff",
            fontSize: "14px !important",
            fontFamily: theme.font.regular,
            backgroundColor: 'transparent !important'
        },
    callWithMeBtn:
        {
            backgroundColor: 'transparent !important',
            color: "#536b88",
            fontSize: "14px !important",
            fontFamily: theme.font.regular,
            marginTop: 34
        },
    dialogContent:
        {
            padding: '8px 0',
            display: "flex",
            flexDirection: "column",
        },
    timer: {
        marginRight: 5,
        fontSize: 16,
    },
    addImageContainer: {
        display: 'flex',
        marginTop: 37,
        height: 90,
        width: '100%',
        marginBottom: 29,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fieldLabel: {
        marginBottom: 7,
        marginLeft: 4,
        fontSize:13
    },
    addImageBtn: {
        width: 308,
        height: 48,
        borderRadius: 8,
        border: 'solid 1px #ccd7dd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: 166,
        },
    },
    modalBody: {
        padding: '8px 35px',
        [theme.breakpoints.down('sm')]: {
            padding: '8px 24px'
        },
        '& input':{
          fontSize:13
        },
        '& .MuiFormHelperText-root': {
            marginTop: 7,
            marginLeft: 0,
            color:theme.textColor.error
        },
        '& .Mui-error': {
            '& svg': {
                color: theme.textColor.error
            },
            '& fieldset': {
                border: '1px solid ' + theme.textColor.error + ' !important'
            }
        },
        '& .MuiSvgIcon-root':{
          fontSize:22,
            color:theme.textColor.primary
        },
        '& .Mui-focused':{
          '& fieldset':{
              border: '1px solid ' + theme.textColor.primary + ' !important'
          }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid ' + theme.textColor.border + ' !important'
        }
    },
    fieldLabelRequired: {
        position: 'relative',
        '&:after': {
            content: '""',
            width: 5,
            height: 5,
            position: 'absolute',
            display: 'inline-block',
            borderRadius: '50%',
            right: -9,
            top: 0,
            backgroundColor: '#f64d4d'
        }
    },
    profileAvatarContainer:
        {
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "0px solid #92A4BB",
            position: "relative",
            overflow: 'visible',
            '&:hover': {
                '& .profileOverlay': {
                    opacity: 1,
                },
            }
        },
    avatarBorder:{
      border:'1px solid '+theme.textColor.border
    },
    profileOverlay: {
        position: 'absolute',
        opacity: 0,
        backgroundColor: '#0c0b31b3',
        width: '90px',
        height: '90px',
        top: 0,
        right: 0,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
        cursor: "pointer",
        borderRadius: '50%',
        '&>img': {
            width: 30
        },
        '&:hover': {
            opacity: 1,
        }
    },
    avatarEditIcon: {
        position: 'absolute',
        opacity: 1,
        backgroundColor: '#e6e5ea',
        width: '24px',
        height: '24px',
        bottom: 0,
        border: '2px solid #fff',
        left: 0,
        zIndex: 999999,
        borderRadius: '50%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
        cursor: "pointer",
    },
    profileAvatar:
        {
            width: "100% !important",
            height: "100% !important",
            backgroundColor: "#0c0b310d!important",
            cursor: "pointer",
            borderRadius: '50%'
        },
}));
