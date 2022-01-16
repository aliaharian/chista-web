import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    finalCheckContainer: {
        [theme.breakpoints.down(480)]: {
            marginTop: '20px !important'
        },
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        "& label": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
            border: "none",
        },
    },
    inviteLinkContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '&>p': {
            fontSize: 13
        }
    },
    modalWrapper: {
        borderRadius: "16px !important",
        width: "464px !important",
        height: "373px !important",
        padding: '17px 0',
        [theme.breakpoints.down("sm")]: {
            height: "100% !important",
            borderRadius: "0 !important",
        },
    },
    addMemberMainWrapper: {
        padding: `30px 35px 2px 35px !important`,
        [theme.breakpoints.down("sm")]: {
            padding: `10px 24px 2px 24px !important`,
        },
    },
    modalTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 17,
        '&>div:nth-child(2)': {
            width: 24,
            height: 24,
        }
    },
    datePickerDialog: {
        '& .MuiPaper-root': {
            borderRadius: "8px !important",
            width: "470px !important",
            height: "706px !important",
            padding: '17px 0',
        }
    },
    classImageWrapper: {
        flexDirection: "row",
        border: "none",
        justifyContent: "flex-start",
        padding: 0,
    },
    createClassImageWrapper: {
    },
    rightSide: {
        padding: '16px 35px !important',
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            padding: '16px 25px !important',
        },
    },
    baseInfoContainer: {
        padding: '40px 52px 16px 35px !important',
        [theme.breakpoints.down(1800)]: {
            padding: '40px 47px 16px 30px !important',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '16px 24px !important',
        },
    },
    imageLabel: {
        height: 48,
        width: 262,
        marginTop: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        color: theme.textColor.primary,
        border: `1px solid ${theme.textColor.border}`,
        '&>img': {
            marginRight: 10
        }
    },
    borderWrapper: {
        border: "1px solid transparent",
        width: 100,
        height: 100,
        borderRadius: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    classBorderWrapper: {
        width: 48,
        height: 48,
    },
    addClassInput: {
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
    image: {
        minWidth: '90px',
        maxWidth: '90px',
        height: '90px',
        backgroundColor: theme.textColor.fivePercent,
        borderRadius: 300,
        display: "flex",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        border: '1px solid ' + theme.textColor.border,
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            color: "#0c0b31cc",
            fontSize: 36,
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '90px',
            maxWidth: '90px',
            height: '90px',
        },
    },
    classImage: {
        width: 48,
        height: 48,
        maxWidth: 48,
        minWidth: 48
    },
    imageUploaded: {
        position: "relative",
        "&:hover": {
            "& > div": {
                display: "flex",
            },
        },
    },
    imageError: {
        color: "#f64d4d",
        textAlign: "center",
        fontSize: "12px",
    },
    deleteIcon: {
        width: 90,
        height: 90,
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
            width: 90,
            height: 90,
            display: "flex",
        },
    },
    imageBadge: {
        position: 'absolute',
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: '#e6e5ea',
        border: '1px solid #fff',
        left: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>svg': {
            fontSize: 15
        }
    },
    decription: {
        marginTop: 30,
        [theme.breakpoints.down(1800)]: {
           width:326
        },
        "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            padding: "16px 20px",
            '&>textarea': {
                height: '125px !important',
            }
        },
        "& .MuiInputAdornment-positionStart": {
            top: "25px",
            position: "absolute",
            left: "10px",
        },
    },
    disableBtn: {
        pointerEvents: 'none'
    },
    largerBtn: {
        width: '118px !important',
    },
    stepBTN: {
        right: 35,
        width: '78px',
        zIndex: 55,
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 15,
        color: theme.buttonColor.normal,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
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
        [theme.breakpoints.down(1800)]: {
            top: 25,
            height: 26,
            width: '66px',
    
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
    errorWrapper: {
        "& .MuiInputBase-root": {
            border: `1px solid #f64d4d !important`,
        },
        '& svg': {
            color: theme.textColor.error + ' !important'
        }
    },
    formError: {
        top: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.regular,
        '&>span': {
            color: '#f64d4d',
            fontSize: '13px',
            marginRight: 5
        }
    },
    contactListContent: {
        paddingTop: 61
    },
    classTitle: {
        marginLeft: 15,
        "& p:first-child": {
            fontFamily: theme.font.bold,
            fontSize: 13,
            margin: 0,
            marginBottom: 5
        },
        "& p:last-child": {
            fontSize: 13,
            color: theme.textColor.secondary,
            textAlign: "left",
            margin: 0,
        },
    },
    addMemberBTN: {
        all: "unset",
        padding: "0 12px",
        borderRadius: 8,
        color: theme.textColor.primary,
        width: '100%',
        fontFamily: theme.font.regular,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        fontSize: 13,
        "& img": {
            marginRight: 5,
            marginBottom: 5,
        },
    },
    addMemberBTNWrapper: {
        position: 'relative',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        marginBottom: 30,
        fontFamily: theme.font.regular,
        width: "100%",
        "& button:first-child": {
            paddingBottom: 32,
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignContent: "flex-start",
            marginBottom: 21,
            "& button:first-child": {
                marginBottom: 0,
                paddingBottom: 26,
            },
            "& button": {
                border: "none",
            },
        },
    },
    memberHeader: {
        backgroundColor: "#f5f8fa",
        padding: "15px 20px",
        borderRadius: 8,
        marginTop: 25,
        width: "100%",
        fontSize: 17,
        fontFamily: "chistaYekanB",
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
    memebrAvatarClassSetting: {
        width: 65,
        height: 65,
        fontSize: 14,
        borderRadius: "50%",
        fontFamily: theme.font.medium
    },
    modalTitle: {
        paddingTop: '1px !important',
        paddingRight: 35,
        paddingLeft: 35,
        [theme.breakpoints.down("sm")]: {
            height: 65,
            padding: '17.5px 24px',
        },
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
    memebrAvatarBorder: {
        border: "1px solid transparent",
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    memberWrapper: {
        height: 435,
        [theme.breakpoints.down('sm')]: {
            height: 435,
        },
        '&>div': {
            '&>div': {
                marginRight: -15,
                marginLeft: "unset !important",
                paddingTop: 8,
                [theme.breakpoints.down('sm')]: {
                    marginRight: 'unset !important',
                    paddingTop: 10,
                },
            }
        }
    },
    noMember: {
        textAlign: "center",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.textColor.secondary,
        [theme.breakpoints.down('sm')]: {
            height: '100%'
        },
    },
    divider: {
        color: theme.textColor.border,
        width: "calc(100%)",
        height: 1,
    },
    finalStepDivider: {
        color: theme.textColor.border,
        width: "calc(100% + 75px)",
        transform: 'translateX(-40px)',
        height: 1,
    },
    settingWrapper: {
        padding: '0 19px',
        [theme.breakpoints.down('sm')]: {
            padding: '0 9px',
        },
    },
    addClassSettingContainer: {
        marginTop: 24
    },
    addClassHeaderSetting: {
        padding: '0 35px !important',
        [theme.breakpoints.down('sm')]: {
            padding: '0 24px !important',
        },
    },
    inviteWrapper: {
        padding: '21px 0 21px 18px !important',
        [theme.breakpoints.down('sm')]: {
            padding: '21px 0 21px 10px !important',
            fontSize: '13px !important'
        },
    },
    settingItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "21px 35px",
        cursor: "pointer",
        position: 'relative',
        height: 68,
        [theme.breakpoints.down(1800)]: {
            padding: "21px 27px",
        },
        '&:after': {
            content: '""',
            bottom: 0,
            width: 'calc(100% - 35px)',
            backgroundColor: theme.textColor.border,
            height: 1,
            position: 'absolute',
            right: -19,
            [theme.breakpoints.down('sm')]: {
                right: -9,
                width: 'calc(100% - 38px)',
            },
        },
        [theme.breakpoints.down('sm')]: {
            padding: "21px 24px",
        },
        "& svg:first-child": {
            marginRight: 15,
            color: theme.textColor.primary
        },
        "& img:first-child": {
            marginRight: 15,
        },
        "& img:last-child": {
            cursor: "pointer",
        },
        "& > div:first-child": {
            display: "flex",
            alignItems: 'center',
        },
        "& > div:last-child": {
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            "&>svg": {
                marginRight: 0,
                color: theme.textColor.primary
            },
        },
    },
    flex: {
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'space-between !important',
        width: '100%'
    },
    settingInput: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "& > span:first-child": {
            color: theme.textColor.secondary,
            fontSize: 13,
        },
        "& > span:last-child": {
            color: theme.textColor.primary,
            fontSize: 13,
            fontFamily: theme.font.medium,
        },
    },
    dateMonth: {
        margin: "0 5px",
    },
    datepicker: {
        width: 120,
        "& .MuiInputBase-root": {
            border: "1px solid #e7ecf0",
            borderRadius: "8px",
        },
        "& .MuiInput-underline::before ": {
            content: "",
            border: "none !important",
        },
    },
    assistantWrapper: {
        display: "flex",
        flexWrap: "wrap",
        "& span": {
            color: "#2a2f33",
            fontFamily: theme.font.regular,
            fontSize: 16,
        },
        "& span:not(:first-child)": {
            margin: "0 10px",
        },
    },
    countInput: {
        "& .MuiInputBase-input": {
            borderRadius: 8,
            width: "21px",
            textAlign: "left",
            height: 27
        },
        "& .MuiInput-underline::before ": {
            content: "",
            border: "none !important",
        },
        "& .MuiInput-underline::after ": {
            content: "",
            border: "none !important",
        },
    },
    formInput: {
        width: '394px !important',
        [theme.breakpoints.down(1800)]: {
            width: '326px !important',
        },
        '&>div': {
            width: 394,
            height: '56px !important',
            [theme.breakpoints.down(1800)]: {
                width: 326,
                height: '48px !important',
            },
        },
        '& .MuiInput-root': {
            outline: 'none !important',
            border: '1px solid ' + theme.textColor.border,
        },
        '& .Mui-focused': {
            outline: 'none !important',
            border: '1px solid ' + theme.textColor.primary
        }
    },
    countInputWrapper: {
        display: "flex",
        alignItems: "center",
        height: 27,
        "& > span": {
            fontFamily: theme.font.medium,
            fontSize: 13,
            color: theme.textColor.primary
        },
        "& input": {
            fontFamily: theme.font.medium,
            fontSize: 13,
            color: theme.textColor.primary
        },
    },
    countAction: {
        display: "flex",
        "& > div": {
            width: 24,
            height: 24,
            borderRadius: 4,
            border: "1px solid",
            cursor: "pointer",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&>svg': {
                width: 20,
                height: 20,
                marginRight: '0 !important'
            }
        },
    },
    countActionClose: {
        borderColor: theme.textColor.border + " !important",
        marginRight: 8,
    },
    countActionCheck: {
        borderColor: `${theme.buttonColor.normal} !important`,
        color: theme.buttonColor.normal,
    },
    actionBTN: {
        all: "unset",
        height: 59,
        backgroundColor: "#f5f8fa",
        borderRadius: 8,
        color: "#aab8c1",
        fontFamily: "chistaYekanB",
        fontSize: 16,
        width: "100%",
        textAlign: "center",
        margin: "57px 15px 10px",
        pointerEvents: "none",
        [theme.breakpoints.down("sm")]: {
        },
    },
    actionActiveBTN: {
        cursor: "pointer",
        pointerEvents: "unset",
        backgroundColor: "#4264fb",
        color: "white",
        fontSize: 13,
        fontFamily: theme.font.medium,
        boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
    },
    CreateClassBTN: {
        width: 386,
    },
    succesText: {
        fontSize: 16,
        color: '#00dbb5',
        fontFamily: theme.font.bold,
        textAlign: "center",
    },
    errorText: {
        fontSize: 16,
        color: theme.textColor.error,
        fontFamily: theme.font.bold,
        textAlign: "center",
    },
    loginClassBtn: {
        width: '384px',
        height: 56,
        position: 'absolute',
        bottom: 40,
        right: 40,
        backgroundColor: theme.buttonColor.normal,
        color: '#fff',
        borderRadius: 8,
        fontFamily: theme.font.bold,
        cursor: 'pointer',
        border: 'none',
        '&:hover': {
            backgroundColor: theme.buttonColor.hover,
        },
        [theme.breakpoints.down("sm")]: {
            width: 'calc(100% - 48px)',
            right: 24,
            bottom: 44
        },
    },
    succesWrapper: {
        backgroundColor: theme.textColor.successAlt,
        width: 100,
        height: 100,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "33px auto 38px auto",
        "& img": {
            width: 73,
            height: 73,
        },
    },
    warningWrapper: {
        backgroundColor: theme.textColor.errorAlt,
        width: 100,
        height: 100,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "33px auto 38px auto",
        "& img": {
            width: 73,
            height: 73,
        },
    },
    linkWrapper: {
        borderRadius: 8,
        padding: "0 16px",
        "& > div": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: 'relative',
            "& button": {
                all: "unset",
                cursor: "pointer",
                position: 'absolute',
                color: theme.textColor.secondary,
            },
            "& button:first-child": {
                marginLeft: 16,
                borderRadius: 8,
                top: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                '& svg': {
                    color: theme.textColor.primary,
                    '&:hover': {
                        color: theme.buttonColor.hover
                    }
                }
            },
            "& textarea , & input": {
                border: '1px solid ' + theme.textColor.border,
                height: 56,
                borderRadius: 8,
                width: "100%",
                outline: "none",
                padding: "16px 16px 16px 45px",
                direction: 'ltr',
                fontFamily: theme.font.regular,
                fontSize: 13,
                textAlign: "right",
                [theme.breakpoints.down('sm')]: {
                    height: 48,
                },
            },
        },
    },
    closeModalIcon: {
        cursor: "pointer",
    },
    itemWrapper: {
        padding: "10px 15px",
        margin: "0 15px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '&:after': {
            content: '""',
            width: 'calc(100% - 90px)',
            height: '1px',
            backgroundColor: theme.textColor.border,
            position: 'absolute',
            bottom: 0,
            right: 0,
            [theme.breakpoints.down('sm')]: {
                width: 'calc(100% - 85px)',
            },
        },
        "& button": {
            all: "unset",
            cursor: "pointer",
            height: 24,
        },
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            padding: '10px 24px'
        },
    },
    ostadItemWrapper: {
        padding: '8px 27px',
        position: 'relative',
        '&:after': {
            content: '""',
            width: 'calc(100% - 100px)',
            right: 0,
            position: 'absolute',
            height: 1,
            backgroundColor: theme.textColor.border,
            bottom: 0,
            [theme.breakpoints.down('sm')]: {
                width: 'calc(100% - 133px)',
            },
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 16px',
        },
    },
    usersCheckbox: {
        marginRight: 26
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
    validationMessage: {
        color: "#f64d4d",
    },
    shareSocial: {
        marginTop: 8,
        display: "flex",
        justifyContent: "flex-end !important",
        alignItems: "center",
        width: '100%',
        "& > a": {
            cursor: "pointer",
            width: 48,
            height: 48,
            borderRadius: 8,
            marginLeft: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&>img': {
                width: 48,
                height: 48
            },
            '&:hover': {
            }
        },
    },
    addSessionButton: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '14px 20px 28px 20px',
        cursor: 'pointer',
        '&>img': {
            marginRight: 18
        },
        '&>p': {
            color: theme.textColor.primary,
            margin: 0
        }
    },
    sessionDivider: {
        width: 'calc(100% + 25px)',
        transform: 'translateX(-18px)'
    },
    sessionsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    scrollBar: {
        height: '320px !important',
        [theme.breakpoints.down('sm')]: {
            height: '389px !important',
        },
        '&>div:nth-child(1)': {
            marginLeft: 'unset!important',
            marginRight: '-15px !important',
        }
    },
    sessionSettingContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    sessionSettingTitle: {
        padding: '0 19px',
        color: theme.textColor.primary,
        fontFamily: theme.font.bold,
        marginBottom: 32
    },
    p40res: {
        [theme.breakpoints.down("sm")]: {
            paddingRight: '40px !important',
            paddingLeft: '40px !important',
        },
    },
    form: {
        height: '515px',
        [theme.breakpoints.down(1800)]: {
            height: '430px',
        },
        [theme.breakpoints.down(480)]: {
            paddingBottom: '24px',
            height: 'calc(100vh - 60px)'
        },
        '&>div': {
            '&>div': {
                marginRight: '-17px !important',
                marginLeft: 'unset !important',
                [theme.breakpoints.down("sm")]: {
                    marginRight: '0 !important',
                },
            }
        }
    },
    settingTitle: {
        marginTop: 40,
        fontSize: 13,
        color: theme.textColor.primary
    },
    baseInfoMainContainer: {
        paddingTop: 0
    },
    finalCheckTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'flex-start',
        padding: '0 35px',
        marginBottom: 40,
        width: '100%',
        '&>div': {
            '&:nth-child(1)': {
                display: "flex",
                alignItems: "center",
                justifyContent: 'flex-start',
                '& svg': {
                    marginRight: 15,
                }
            },
            '&:nth-child(2)': {
                '&>p': {
                    fontSize: 13,
                    '&:nth-child(1)': {
                        fontFamily: theme.font.bold,
                        color: theme.textColor.primary
                    },
                    '&:nth-child(2)': {
                        fontFamily: theme.font.regular,
                        color: theme.textColor.secondary
                    },
                }
            }
        },
        [theme.breakpoints.down(480)]: {
            padding: '0 24px',
        },
    },
    finalCheckTable: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        padding: '0 52px 0px 35px',
        flexDirection: 'column',
        '&>div': {
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 21,
            '&>p': {
                fontSize: 13,
                '&:nth-child(2)': {
                    fontFamily: theme.font.bold,
                    color: theme.textColor.primary
                },
                '&:nth-child(1)': {
                    fontFamily: theme.font.regular,
                    color: theme.textColor.secondary
                },
            }
        },
        [theme.breakpoints.down(480)]: {
            padding: '0 24px',
        },
    },
    finalCheckError: {
        width: '100%',
        padding: '0 35px',
        fontSize: 13,
        color: theme.textColor.primary,
        marginBottom: 40,
        [theme.breakpoints.down(480)]: {
            padding: '0 24px',
        },
    },
    root: {
        height: '615px !important'
    },
    baseInfoHeaderElement: {
        width: '100%',
        height: 92,
        top: 0,
        position: 'absolute',
        zIndex: 0,
        [theme.breakpoints.down(1800)]: {
            height: 75,
        },
    }
}
));
