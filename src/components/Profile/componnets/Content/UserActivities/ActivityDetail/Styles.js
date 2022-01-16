import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    activityDetailContainer: {
        // padding: '0px 10px 0 44px',
        [theme.breakpoints.down(480)]: {
            padding: '0px 24px',
        }

    },
    stuActivityDetailContainerForQues: {
        borderRadius: 16,
        border: '1px solid rgba(12, 11, 49, 0.16)',
        padding: '35px',
        margin: '30px 0px 39px 0px',
        [theme.breakpoints.down(480)]: {
            marginTop: 10
        }
    },
    stuQuestionNumbersContainer: {
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
    activityHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 33,
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% + 10px)',
            height: 60,
            position: 'relative',
            paddingBottom: 12,
            marginBottom: 24,

            '&:after': {
                content: "''",
                width: '100vw',
                position: 'absolute',
                bottom: -1,
                right: -14,
                height: 1,
                backgroundColor: theme.textColor.border

            }
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

        },
        '&>div': {
            '&>p': {
                [theme.breakpoints.down(480)]: {
                    maxWidth: 120
                },

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
                [theme.breakpoints.down('sm')]: {
                    marginRight: 0,

                }

            }

        },
        '&>p': {
            fontSize: 25,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            marginRight: 26,
            direction: 'rtl',
            width: 125,
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
                width: 80,
                marginRight: 8,


            }

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
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 24,

        }

    },
    activityQuestionImages: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        marginBottom: 16,
        padding: '0 35px 0 35px',
        flexWrap:'wrap',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
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
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 8,
                flex: '1 1 45%',
            },
            '&:nth-child(2n)': {
                [theme.breakpoints.down('sm')]: {
                    marginLeft: 0,

                },

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
        padding: '27px 35px 17px 35px',
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
        height: 78,
        display: 'flex',
        align: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        borderBottom: '1px solid ' + theme.textColor.border,
    },
    answerDetail: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        '&>p': {
            fontSize: 13,
            '&:nth-child(1)': {
                fontFamily: theme.font.bold,
                marginBottom: 5,
                '&>span': {
                    fontFamily: theme.font.regular,
                }
            },
            '&:nth-child(2)': {
                fontFamily: theme.font.regular,
                color: theme.textColor.secondary
            },

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
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,

        }

    },
    questionItem: {
        padding: '0',
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 16,
        // minHeight: 343,
        width: '100%',
        marginBottom: 20,
        position: 'relative',
        overflow: 'hidden'

    },
    questionTitle: {
        width: '100%',
        marginBottom: 39,
        padding: '35px 35px 0 35px',
        [theme.breakpoints.down('sm')]: {
            padding: '35px 24px 0 24px',


        },
        '&>p': {
            fontSize: 13,
            display: 'inline-flex',
            color: theme.textColor.primary
        }
    },
    questionNumber: {
        width: 26,
        height: 26,
        backgroundColor: theme.textColor.fivePercent,
        borderRadius: 26,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 9
    },
    widthAuto: {
        width: 'auto !important',
    },
    questionItemFooter: {
        width: 'calc(100% - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid ' + theme.textColor.border,
        margin: '0 35px',
        padding: '17px 0',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            margin: '0 24px',
            width: 'calc(100% - 48px)',


        },

        // height: 64,
        // position: 'absolute',
        // bottom:0,
        // left:0,

        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary
        }
    },
    resDoneContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },

    activityDone: {
        width: 202,
        height: 40,
        borderRadius: 20,
        border: '1px solid ' + theme.textColor.border,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between !important',
        padding: '0 20px 0 24px',
        '& p': {
            cursor: 'pointer',
            fontSize: 13,
            zIndex: 2,
            color: theme.textColor.secondary
        }
    },
    doneSelector: {
        position: 'absolute',
        width: 94,
        height: 32,
        backgroundColor: '#ebedfa',
        borderRadius: 16,
        zIndex: 1,
        right: 4,
        top: 3,
        transition: 'all 250ms ease'
    },
    questionMultipleChoice: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'space-between',

        },
        '&>p': {
            fontSize: 13,
            marginRight: 10,
            width: 75,
        }
    },
    choicesContainer: {
        width: '100%',
        // marginBottom: 18,
        // marginTop: 28,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

        },

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
            marginRight: 8,
            width: 92,
            maxWidth: 92,
            [theme.breakpoints.down(1800)]: {
                width: 70,
                maxWidth: 70,
                marginRight: 0,

            },

            // '&:last-child':{
            //     marginRight:0,

            // }
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
                    width: 60,
                    maxWidth: 60,
                    marginRight: 0,
    
                },
                [theme.breakpoints.down('sm')]: {
                    width: 60,
                },

            }
        }
    },
    selectedChoice: {
        borderColor: 'transparent',
        backgroundColor: theme.buttonColor.normal,
        color: '#fff !important'
    },
    questionItemScoreContainer: {
        width: '100%',
        // height: 64,
        backgroundColor: theme.textColor.threePercent,
        borderTop: '1px solid ' + theme.textColor.border,
        padding: '23px 35px',
        [theme.breakpoints.down('sm')]: {
            padding: '23px 24px',
        },
    },
    questionScore: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>p': {
            fontSize: 13,
            [theme.breakpoints.down(480)]: {
                fontSize: 12,
            }
        }
    },
    addAnswerBtn: {
        fontSize: 13,
        color: theme.buttonColor.normal,
        cursor: 'pointer',
        '&:hover': {
            color: theme.buttonColor.hover,
        }
    },
    questionAnswerTime: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: 15
        },
        '& p': {
            fontSize: 13
        },
        '& span': {
            fontSize: 13
        }
    },
    descriptiveAnswerContainer: {
        width: '100%',
    },
    descriptiveTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        '&>div:nth-child(1)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '&>p': {
                marginRight: 10
            },
            '&>svg': {
                cursor: 'pointer',
                fontSize: 18
            }
        },
        '& p': {
            fontSize: 13
        }
    },
    questionNote: {
        marginTop: 20,
        '& p': {
            fontSize: 13
        }
    },
    disableChoice: {
        pointerEvents: 'none',
    },
    toolTip: {
        height: 25,
        backgroundColor: theme.textColor.tooltip
    },
}));
