import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
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
    dialogRoot: {
        height: '615px !important',
        width: '464px !important',
        [theme.breakpoints.down(1800)]: {
            height: '512px !important',
            width: '386px !important',
        },
        [theme.breakpoints.down(480)]: {
            height: '100% !important',
            width: '100% !important',
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
        height: "706px !important",
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
            padding: '40px 44px 16px 27px !important',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '16px 25px !important',
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
        marginTop: 28,
        [theme.breakpoints.down(1800)]: {
            width: '100%'
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
        pointerEvents: 'none',
        borderColor: theme.textColor.border + ' !important',
        color: theme.textColor.border + ' !important'
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
            width: '66px',
            top: 25,
            height: 26,
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
        paddingLeft: '10px !important'
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
        padding: "21px 18px",
        cursor: "pointer",
        position: 'relative',
        height: 68,
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
            padding: "21px 9px",
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
        width: '100%',
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
        marginBottom: 94,
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
        margin: "10px auto 20px auto",
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
            width: 'calc(100% - 143px)',
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
    form: {
        height: '510px',
        [theme.breakpoints.down(1800)]: {
            height: '430px',
        },
        [theme.breakpoints.down(480)]: {
            height: 'calc(100vh - 75px)',
        },
        '&>div': {
            '&>div': {
                marginRight: '-17px !important',
                marginLeft: 'unset !important',
                [theme.breakpoints.down('sm')]: {
                    marginRight: '0 !important',
                },
            }
        }
    },
    baseInfoMainContainer: {
        paddingTop: 0
    },
    titleText: {
        fontSize: 13,
        color: theme.textColor.primary
    },
    dropzoneTitle: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '18px',
        '&>p': {
            '&:nth-child(1)': {
                fontSize: 13,
                color: theme.textColor.primary
            },
            '&:nth-child(2)': {
                fontSize: 13,
                color: theme.textColor.border
            }
        }
    },
    imagesContainer: {
        display: 'flex',
        flexWrap: "wrap",
    },
    questionImageContainer: {
        maxWidth: '100%',
        border: '1px solid #dbdbe0',
        flex: '1 1 50%',
        height: '214px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 14,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 7,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '&:hover': {
            '&>div': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }
    },
    questionImageOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        right: 0,
        backgroundColor: theme.textColor.secondary,
        display: 'none',
        cursor: 'pointer',
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& svg': {
            fontSize: 45,
            color: '#fff'
        }
    },
    addQuestionBtnContainer: {
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 35,
        marginTop: 28,
        '& p , & svg': {
            color: theme.buttonColor.normal,
        },
        '& svg': {
            marginRight: 11
        },
        '& p': {
            fontSize: 13
        }
    },
    choicesContainer: {
        width: '100%',
        marginBottom: 18,
        marginTop: 28,
        '&>p:nth-child(1)': {
            display: 'block',
            width: '100%',
            fontSize: 13,
            color: theme.textColor.primary,
            marginBottom: 15,
            "&::before": {
                content: '""',
                height: 5,
                width: 5,
                backgroundColor: "#fc3563",
                borderRadius: 30,
                left: 105,
                position: "absolute",
            },
        },
        '&>div': {
            '&>div': {
                width: 92,
                height: 30,
                borderRadius: 16,
                border: "1px solid " + theme.textColor.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme.textColor.primary,
                cursor: 'pointer',
                [theme.breakpoints.down(1800)]: {
                    width: 72,
                },
            }
        }
    },
    selectedChoice: {
        borderColor: 'transparent',
        backgroundColor: theme.buttonColor.normal,
        color: '#fff !important'
    },
    errorMessage: {
        color: '#f64d4d !important'
    },
    questionsContainer: {
        width: '100%',
        paddingTop: 35,
        position: 'relative',
        '&:before': {
            content: '""',
            width: '100%',
            height: 1,
            backgroundColor: theme.textColor.border,
            position: 'absolute',
        }
    },
    removeBorder: {
        paddingTop: '0 !important',
        '&:before': {
            content: '""',
            width: '0',
            display: 'none',
            height: 1,
            backgroundColor: theme.textColor.border,
            position: 'absolute',
        }
    },
    questionControls: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>div': {
            '&:nth-child(1)': {
                width: 26,
                height: 26,
                borderRadius: 30,
                backgroundColor: theme.textColor.fivePercent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            '&:nth-child(2)': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                '&>svg': {
                    cursor: "pointer",
                    '&:nth-child(1)': {
                        marginRight: 18
                    }

                }
            }
        }
    },
    questionTitle: {
        marginTop: 6,
        marginBottom: 20,
        maxWidth: '100%',
        overflowWrap: 'anywhere',
        '&>p': {
            color: theme.textColor.primary,
            fontSize: 13,
        }
    },
    questionImages: {
        '&>div': {
            borderRadius: 8,
            overflow: 'hidden',
            paddingRight: 7,
            maxWidth: '165px',
            flex: '1 1 50%',
            height: '103px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: 14,
            borderRadius: 8,
            overflow: 'hidden',
            marginRight: 7,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid #dbdbe0',
            [theme.breakpoints.down("sm")]: {
                maxWidth: '152px',
                height: '95px',
            },
            '&>img': {
                border: '1px solid ' + theme.textColor.border,
                borderRadius: 8,
            }
        }
    },
    AnswerChoicesContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        '& p': {
            [theme.breakpoints.down(1800)]: {
                fontSize: 12
            },
        },
        '&>div': {
            '&:nth-child(1)': {
                '&>div': {
                    width: 'auto',
                }
            },
            '&:nth-child(2)': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                '&>div': {
                    marginRight: 8,
                    '&:last-child': {
                        marginRight: 0,
                    },
                    '&>div': {
                        width: 85,
                        height: 30,
                        borderRadius: 16,
                        border: "1px solid " + theme.textColor.border,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: theme.textColor.primary,
                        cursor: 'pointer',
                        '&:hover': {
                            borderColor: '#3f53d9'
                        },
                        [theme.breakpoints.down(1800)]: {
                            width: 70,
                            height: 26,
                        },
                    }

                }
            },
        }
    },
    progressContainer: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        '&>p': {
            marginBottom: 7,
            textAlign: 'right',
            fontSize: 14,
            color: theme.textColor.secondary
        }
    },
    uploadFileContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        '& svg': {
            fontSize: 20,
            marginRight: 11,
            marginBottom: -5,
            cursor: 'pointer',
            pointerEvents: 'auto !important'
        }
    },
    progress: {
        width: '291px',
        [theme.breakpoints.down(1800)]: {
            width: '250px',
        },
    },
    errorContainer: {
        width: 'calc(100%)',
        margin: '7px auto 0 auto',
        height: 30,
        padding: '0 35px',
        backgroundColor: 'rgba(255,101,117,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& svg': {
            height: 30,
            color: '#ff6575',
            marginRight: 5
        },
        '&>p': {
            color: '#ff6575',
            fontSize: 13,
        }
    },
    dialogHeaderElement: {
        height: 91,
        [theme.breakpoints.down(1800)]: {
            height: 75,
        },
    }
}));
