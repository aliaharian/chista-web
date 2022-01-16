import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    addContactBody: {
        padding: '0 19px !important',
        '& input': {
            fontSize: 13
        },


        [theme.breakpoints.down('sm')]: {
            padding: '0 24px !important',

        },
        
    },
    dividerContact: {
        // position:'absolute !important',
        // height:100,
        // top:40,
        // backgroundColor:'#fff',
        // borderBottom:'1px solid '+theme.textColor.border,
        // zIndex:-1

    },
    borderNone: {
        border: 'none !important',
        '& fieldset': {
            outline: 'none !important',
            border: '1px solid ' + theme.textColor.border + ' !important'
        }
    },
    previewContainer: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        height: 38,
        marginTop: 40,
        '& .MuiLinearProgress-colorPrimary': {
            backgroundColor: theme.buttonColor.normal,
            height: 5,
            borderRadius: 2.5
        },
        '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: '#e7ecf0',
            height: 5,
            borderRadius: 2.5
        },
        '&>div:nth-child(1)': {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: 'center',
            height: '100%',
            '&>svg': {
                width: 24,
                height: 24,
                cursor: 'pointer',
                marginRight: 14,
                color: theme.textColor.primary,
                transform: 'translateY(1px)',
                [theme.breakpoints.down('sm')]: {
                    width: 24,
                    height: 24,
                },
            }
        },
        '&>div:nth-child(2)': {
            flexBasis: '340px',
            height: 38,
            position: 'relative',
            paddingTop: 29,

            [theme.breakpoints.down('sm')]: {
                // flexBasis: '221px',

            },
            '&>p': {
                margin: 0,
                width: '100%',
                textAlign: 'right',
                position: 'absolute',
                top: -4
            },

        },
        '&>div:nth-child(3)': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            '&>img': {
                width: 24,
                marginLeft: 16
            },
            [theme.breakpoints.down('sm')]: {
                '&>img': {
                    width: 24
                }
            },

        },
    },
    addMemberBTNWrapper: {
        position: 'relative',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        marginBottom: 2,
        paddingTop: 18,
        // flexWrap: "wrap",
        width: "100%",
        paddingBottom: 30,
        '&>hr': {
            width: 'calc(100% + 80px)',
            position: "relative",
            bottom: -33,
            [theme.breakpoints.down("sm")]: {
                width: 'calc(100% + 48px)',
                bottom: -25,

                // paddingBottom: 30,

            },
        },
        "& button:first-child": {
            paddingBottom: 32,
            // [theme.breakpoints.down("sm")]: {
            //   marginRight: 0,
            // },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignContent: "flex-start",
            fontSize: 13,
            paddingBottom: 22,
            paddingTop: 3,
            "& button:first-child": {
                marginBottom: 0,
                paddingBottom: 24
            },
            "& button": {
                border: "none",
            },
        },
    },
    addMemberBTN: {
        all: "unset",
        padding: "0 12px",
        // border: "1px solid rgba(146, 164, 187, 0.2)",
        borderRadius: 8,
        color: theme.textColor.primary,
        fontSize: 13,
        width: '100%',
        fontFamily: theme.font.regular,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            padding: "0",

        },
        "&>div": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5

        },
        "& img": {
            marginRight: 5,
            marginBottom: 5,
        },
    },
    noMember: {
        textAlign: "center",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        marginTop: 119,
        fontSize: 13,
        marginBottom: 127,
        color: theme.textColor.secondary,
        '&>img': {
            marginBottom: 40
        }
    },


    phoneInputLabel: {
        color: theme.textColor.secondary,
        fontSize: 13,
        width: 'max-content',
        fontFamily: theme.font.regular,
        position: 'relative',
        marginTop: 16
    },
    mt0: {
        marginTop: '0 !important'
    },
    mt14: {
        marginTop: '14px !important'
    },
    mt19: {
        marginTop: '19px !important'
    },
    addContactInput: {
        '& fieldset': {
            outline: 'none !important',
            border: '1px solid ' + theme.textColor.border + ' !important'
        },
        '& .Mui-focused': {
            '& fieldset': {
                outline: 'none !important',
                border: '1px solid ' + theme.textColor.primary + ' !important'
            }

        }
    },

    phoneInputLabelRequired: {
        '&:after': {
            content: '""',
            width: 5,
            height: 5,
            position: 'absolute',
            display: 'inline-block',
            borderRadius: '50%',
            right: -10,
            backgroundColor: theme.textColor.error
        }
    },
    actionBtn: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 4,
        color: theme.buttonColor.normal,
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        margin: "0",
        outline: "none",
        fontSize: 13,
        border: "1px solid " + theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
            color: '#fff',


        },
        [theme.breakpoints.down('sm')]: {
            top: 17.5,
            backgroundColor: '#fff',
            margin: 0,
            right: 24,
            // width: 'max-content',
            color: theme.buttonColor.hover,
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.hover,

            },
        },
    },
    disabledBtn: {
        backgroundColor: '#fff',
        border: '1px solid ' + theme.textColor.border,
        color: '#0c0b3180',
        pointerEvents: 'none',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid ' + theme.textColor.border,
            color: '#0c0b3180',
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
    itemContainer: {
        position: 'relative',

        "& hr": {
            position: "absolute",
            right: -96,
            height: 1,
            width: '100%',
            backgroundColor: theme.textColor.border
        }
    },

    itemWrapper: {
        // borderBottom: "1px solid rgba(0, 5, 52, 0.11)",
        padding: "9px 0",
        // margin: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: 'relative',
        '&:after': {
            content: '""',
            height: 1,
            backgroundColor: theme.textColor.border,
            width: 'calc(100% - 25px)',
            position: 'absolute',
            bottom: 0,
            right: -34,

        },
        "& button": {
            all: "unset",
            cursor: "pointer",
            height: 24
        },

    },
    downloadExcel:{
        color:theme.buttonColor.normal,
         [theme.breakpoints.down("sm")]: {
            fontSize:10
        },
    },
    newContactsContainer: {
        width: '100%',
        height: 417,
        position: 'absolute',
        left: 0,
        [theme.breakpoints.down("sm")]: {
            height: 'calc(100vh - 230px)',
        },
        '&>div': {
            '&>div:first-child': {
                padding: '0 35px',
                marginRight: -15,
                marginLeft: 'unset !important',
                paddingTop: 9,
                [theme.breakpoints.down("sm")]: {
                    padding: '9px 41px 0 24px',


                },
            }
        }
    },
}));
