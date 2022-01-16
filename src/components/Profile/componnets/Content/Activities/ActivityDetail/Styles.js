import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    activityDetailContainer: {
        padding: '0px 10px 0 44px',
        [theme.breakpoints.down(480)]: {
            padding: '0px 24px 0',
        },
    },
    ostadActivityDetailContainerForQues: {
        borderRadius: 16,
        border: '1px solid rgba(12, 11, 49, 0.16)',
        padding: '35px',
        margin: '30px 0px 39px 0px',
        [theme.breakpoints.down(480)]: {
            marginTop: 10
        }
    },
    activityHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 12,
            '&:after': {
                content: "''",
                width: '100vw',
                height: 1,
                backgroundColor: theme.textColor.border,
                position: 'absolute',
                bottom: 0,
                left: -24
            },
        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }
    },
    activityHeaderInfo: {
        '&>svg:nth-child(1)': {
            marginRight: 15,
            width: 20,
            cursor: 'pointer'
        },
        '&>svg:nth-child(2)': {
            marginRight: 11,
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        '&>div': {
            '&>p': {
                '&:nth-child(1)': {
                    fontSize: 13,
                    fontFamily: theme.font.bold,
                    color: theme.textColor.primary
                },
                '&:nth-child(2)': {
                    fontSize: 13,
                    fontFamily: theme.font.regular,
                    color: theme.textColor.secondary
                },
            }
        }
    },
    activityHeaderActions: {
        '&>img': {
            marginRight: 19,
            cursor: 'pointer',
            '&:nth-child(1)': {
                marginRight: 11,
                cursor: 'auto',
            },
            '&:nth-child(3)': {
                [theme.breakpoints.down('sm')]: {
                    display: 'none'
                },
            }
        },
        '&>p': {
            fontSize: 25,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            marginRight: 26,
            direction: 'rtl',
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
                marginRight: 8,
            },
        }
    },
    editBtnRes: {
        cursor: 'pointer'
    },
    classDetailLink: {
        backgroundColor: '#fff !important',
        zIndex: 990,
        '&>a': {
            fontSize: 13,
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            width: '100%',
        },
        '&:hover': {
            backgroundColor: 'rgb(245,248,250) !important',
            '&>a': {
                color: theme.textColor.primary,
            },
        }
    },
    activityBody: {
        width: '100%',
    },
    activityNote: {
        width: '100%',
        fontSize: 13,
        color: theme.textColor.primary,
        lineHeight: '35px',
        marginBottom: 10,
        [theme.breakpoints.down(480)]: {
            marginBottom: 0
        }
    },
    activityQuestionImages: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        marginBottom: 16,
        flexWrap:'wrap',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap'
        },
        '&>div': {
            width: 234,
            height: 147,
            marginLeft: 8,
            marginBottom: 8,
            borderRadius: 8,
            overflow: 'hidden',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: 160,
                flex: '1 1 100%',
                marginBottom: 10
            },
            '&:hover': {
                '&>div': {
                    opacity: 1,
                }
            },
            '&>img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }
        }
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: theme.textColor.percent70,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        padding: 20,
        opacity: 0,
        transition: 'all 0.25s ease',
        '&>svg': {
            color: '#fff',
            marginLeft: 13,
            cursor: 'pointer'
        }
    },
    answersContainer: {
        width: '100%',
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 16,
        position: 'relative',
        padding: '27px 0 17px 0',
        [theme.breakpoints.down(480)]: {
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 16,
            padding: '13px 24px 13px',
            position: 'relative',
            marginBottom: 40
        },
        '&>div:last-child': {
            border: 'none'
        }
    },
    answerTitleFloat: {
        position: 'absolute',
        top: -10,
        left: 35,
        padding: '0 10px',
        backgroundColor: '#fff',
        fontSize: '13px',
        fontFamily: theme.font.bold
    },
    answerItem: {
        width: '100%',
        padding: '20px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid ' + theme.textColor.border,
        '&>p': {
            color: '#3f53d9',
            fontSize: 13,
        },
        [theme.breakpoints.down(480)]: {
            padding: '8px 0',
        }
    },
    answerDetail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '&>span': {
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            textAlign: 'center',
            backgroundColor: 'rgba(12, 11, 49, 0.05)',
            fontSize: '13px',
            marginRight: '13px'
        }
    },
    answerShow: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        '&>p': {
            fontSize: 13,
            color: theme.buttonColor.normal,
            cursor: 'pointer',
            '&:hover': {
                color: theme.buttonColor.hover
            }
        }
    },
    questionsContainer: {
        marginTop: 35,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    questionItem: {
        padding: '35px 35px 23px 35px',
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 16,
        width: '100%',
        marginBottom: 20,
        position: 'relative',
    },
    questionTitle: {
        width: '100%',
        marginBottom: 39,
        overflowWrap: 'anywhere',
        display: 'flex',
        '&>p': {
            fontSize: 13,
            display: 'inline-flex',
        }
    },
    questionNumber: {
        width: 26,
        height: 26,
        minWidth: 26,
        flexBasis: '26px',
        backgroundColor: theme.textColor.fivePercent,
        borderRadius: 26,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 9
    },
    questionItemFooter: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid ' + theme.textColor.border,
        paddingTop: 20,
        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary
        }
    },
    toolTip: {
        height: 25,
        backgroundColor: theme.textColor.tooltip
    },
    questionNumbersContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        direction: 'ltr',
        fontSize: 13,
        marginBottom: 14,
        '&>span': {
            borderRadius: '50%',
            width: '26px',
            height: '26px',
            margin: '0px 5px',
            textAlign: 'center',
            backgroundColor: 'rgba(12, 11, 49, 0.05)'
        },
    },
    howManyAnswersAndCorrected: {
        display: 'flex',
        flexDirection: 'column',
        '&>p': {
            fontSize: 13,
            color: 'rgba(12, 11, 49, 0.7)',
            margin: '0px',
        },
    },
    howManyAnswersP: {
        color: '#0c0b31 !important',
        margin: '0px 0px 7px 0px',
    },
    disabledSeeBtn: {
        color: 'rgba(12, 11, 49, 0.16) !important'
    }
}));
