import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    activityDetailContainer: {
        padding: '0px 10px 0 44px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 8px ',

        },
    },
    activityHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 33,
        [theme.breakpoints.down('sm')]: {
            position:'relative',
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
            cursor: 'pointer',
        },
        '&>svg:nth-child(2)': {
            marginRight: 11,
            [theme.breakpoints.down('sm')]: {
                display: 'none'
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
            }
        },
        '&>p': {
            fontSize: 25,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            marginRight: 26,
            direction: 'rtl',
            [theme.breakpoints.down('sm')]: {
                marginRight: 0,
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
            width: '100%'
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
        marginBottom: 10
    },
    activityQuestionImages: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        flexWrap:'wrap',
        marginBottom: 16,
        '&>div': {
            width: 234,
            height: 147,
            marginLeft: 8,
            marginBottom: 8,
            borderRadius: 8,
            overflow: 'hidden',
            position: 'relative',
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
        padding: '0px 35px 0px 35px',
        marginBottom: 20,
        [theme.breakpoints.down(480)]: {
            padding: '0px',
            '&>div': {
                borderRadius: '16px!important'
            }
        },
    },
    answerItemFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 23,
        borderTop: '1px solid #ebebef'
    },
    addScoreBtn: {
        cursor: 'pointer',
        color: theme.buttonColor.normal,
        fontSize: 13,
        '&:hover': {
            color: theme.buttonColor.hover
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
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px 0px 10px',
    },
    hasUnderLine: {
        borderBottom: '1px solid ' + theme.textColor.border,
    },
    answerDetail: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        '&>div': {
            '&>p': {
                fontSize: 11,
                '&:nth-child(1)': {
                    fontFamily: theme.font.bold,
                    marginBottom: 3,
                    color: theme.textColor.primary,
                    '&>span': {
                        fontFamily: theme.font.regular,
                    }
                },
                '&:nth-child(2)': {
                    fontFamily: theme.font.regular,
                    color: theme.textColor.secondary
                },
            }
        }
    },
    answerShow: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0px 0px 20px 0px',
        '&>p': {
            fontSize: 13,
            color: theme.textColor.primary,
            cursor: 'pointer',
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
        [theme.breakpoints.down('sm')]: {
            padding: '24px 24px 23px 24px',
        },
        '&>p': {
            fontSize: 13,
            display: 'inline-flex',
        }
    },
    questionTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            overflowWrap: 'anywhere'
        },
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
    barom: {
        fontSize: '13px !important',
    },
    avatarContainer: {
        width: 35,
        height: 35,
        marginRight: 12
    },
    avatar: {
        width: 35,
        height: 35,
    },
    userScoreContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        '&>div': {
            '&:nth-child(1)': {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '& p': {
                    fontSize: 11,
                },
            }
        }
    },
    editScoreContainer: {
        '&>p': {
            cursor: 'pointer',
            color: theme.buttonColor.normal,
            fontSize: '13px !important',
            '&:hover': {
                color: theme.buttonColor.hover
            }
        }
    },
    scoreNote: {
        width: '100%',
        marginTop: 30,
        '&>p': {
            width: '100%',
            lineHeight: '35px',
            fontSize: 13,
            color: theme.textColor.primary
        }
    },
    scoreDateContainer: {
        '&>p': {
            '&:nth-child(1)': {
                fontFamily: theme.font.bold,
                color: theme.textColor.primary
            },
            '&:nth-child(2)': {
                fontFamily: theme.font.regular,
                color: theme.textColor.secondary,
                '& p': {
                    fontFamily: theme.font.regular,
                    color: theme.textColor.secondary,
                }
            },
        }
    },
    accordionSummaryContainer: {
        margin: 0 + " !important",
        [theme.breakpoints.down(480)]: {
            padding: '0px 14px',
            borderRadius: 16,
            '&>div': {
                margin: '0px !important'
            }
        },
    },
    accordionDetContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 26px 26px 26px',
    }
}));
