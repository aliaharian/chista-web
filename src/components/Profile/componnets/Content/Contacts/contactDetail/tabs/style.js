import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({

    
    
    cardBody: {
        marginBottom: 23,
        cursor: 'pointer',
        [theme.breakpoints.down("sm")]: {
            marginBottom: 14,

        },
    },
    borderNone: {
        border: 'none !important'
    },
    myRole: {
        fontSize: 13,
        margin: 0,
        '&>p': {
            margin: 0
        }
    },
    actionClass: {
        '&>p': {
            fontSize: 13,
            margin: 0
        }
    },
    loginClass: {
        all: "unset",
        borderRadius: 15,
        cursor: 'pointer',
        // boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
        backgroundColor: '#fff',
        color: theme.buttonColor.normal,
        // border: '1px solid ' + theme.buttonColor.normal,
        height: 30,
        width: 73,
        boxSizing: "border-box",
        padding: "10px 14px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 13,
        border: '1px solid ' + theme.buttonColor.normal,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: theme.buttonColor.normal,
            color: '#fff',
        }
    },
    chatIcon: {
        width: 20,
        height: 20
    },

    cardFooter: {
        marginTop: 23,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]: {
            marginTop: 14,
        },
    },
    commonGroupsContainer: {
        width: '100%',
        // [theme.breakpoints.down("sm")]: {
        //     marginTop: 24,
        //     marginBottom: 90
        // },
    },
    classItemWrapper: {
        width: '100% !important',
        // [theme.breakpoints.down("xs")]: {
        //     minWidth: '100% !important',
        //     maxWidth: '100% !important',
        // },
        '&>div': {
            padding: 26,
            paddingBottom: 22,
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            transition: 'all 0.25 ease',
            width: '100%',
            '&:hover': {
                border: 'none',

                boxShadow: '0 3px 6px rgba(0,0,0,0.17)'

            },
            [theme.breakpoints.down("sm")]: {
                padding: 14,
            },
        }

    },
    groupInfoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    groupAvatarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupName: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 11,
        '&>p': {
            maxWidth: '190px',
            fontSize: 13,
            margin: 0
        },
        '&>p:first-child': {
            fontFamily: theme.font.medium,
            color: theme.textColor.primary
        }
    },
    classAvatar: {
        width: 48,
        height: 48,
        fontSize: 16,
        borderRadius: "50%",
        '& svg': {
            fontSize: 22
        }
    },
    classAvatarBorder: {
        // border: "1px solid #808895",
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    classAvatarThumb: {
        width: 26,
        height: 26,
        fontSize: 12,
        borderRadius: "50%",
    },
    classAvatarThumbNumber: {
        width: 26,
        height: 26,
        fontSize: `12px !important`,

        borderRadius: "50%",
        // backgroundColor: theme.textColor.fivePercent + ' !important',
        backgroundColor: '#f2f2f4 !important',
        border: "1px solid " + theme.textColor.border + " !important",
        color: theme.textColor.secondary + ' !important'
    },
    classAvatarThumbBorder: {
        border: "1px solid #fff !important",
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    classAvatarThumbBorderNumber: {
        border: "1px solid " + theme.textColor.border,
        borderRadius: 100,
        padding: 0,
        position: "relative",
    },
    memberAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },


    groupActions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&>div': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    },

    classDetailLink: {
        backgroundColor: '#fff !important',
        zIndex: 990,
        '&>a': {
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
    groupMembers: {
        marginTop: 38,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: 14,

        },
    },
    memberCnt: {
        fontSize: 13,
    },
    noData: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 175,
        '& img': {
            width: 40
        },
        '& p': {
            fontSize: 13,
            marginTop: 20
        }
    },

    inThisClassContainer: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'calc(50% - 12.5px) calc(50% - 12.5px)',
        columnGap: 25,
        [theme.breakpoints.down(1200)]: {
            gridTemplateColumns: '100%',
            margin: '0 auto',
            padding: '0px',
        },
        [theme.breakpoints.down(800)]: {
            padding: '0px 24px 0 36px',
        },
    },
    trackTable: {
        marginTop: 60,
        minHeight: 582,
        width: '100%',
        '&>div': {
            minHeight: 582,
            border: `1px solid ${theme.textColor.border}`,
            borderRadius: 16
        }
    },
    SessionTable: {
        marginTop: 60,
        minHeight: 582,
        width: '100%',
        '&>div': {
            minHeight: 582,
            border: `1px solid ${theme.textColor.border}`,
            borderRadius: 16
        }
    },
    trackHeader: {
        height: 88,
        width: `100%`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: `space-between`,
        padding: '35px 30px 34px 30px',
        borderBottom: `1px solid ${theme.textColor.border}`,
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& p': {
                margin: '0 6px',
                fontSize: 13
            },
            '&:nth-child(2)': {
                cursor: 'pointer',
                '&:hover': {
                    '&>p': {
                        color: theme.buttonColor.hover
                    },
                    '&>svg': {
                        transform: 'rotateZ(180deg) translateX(-5px)',
                        fontSize: 20,
                        color: theme.buttonColor.hover
                    }
                },
                '&>p': {
                    color: theme.buttonColor.normal
                },
                '&>svg': {
                    transform: 'rotateZ(180deg)',
                    fontSize: 20,
                    color: theme.buttonColor.normal,
                    transition: 'all 250ms ease'

                }
            }
        }
    },
    trackBody: {
        padding: '15px 35px',

    },
    singleTrack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
        borderBottom: '1px solid ' + theme.textColor.border,
        maxHeight: 48,
        boxSizing: 'content-box',
        '&:last-child': {
            border: 'none'
        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    trackInfo: {
        '&>div:nth-child(2)': {
            '&>p': {
                fontSize: 13,
                lineHeight: '18px',
                '&:nth-child(1)': {
                    marginBottom: 5,
                    fontFamily: theme.font.medium,
                    color: theme.textColor.primary
                }
            }
        }
    },
    trackImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        // borderRadius: 300,
        // backgroundColor: `rgba(63, 83, 217, 0.1)`,
        // border: `1px solid ${theme.buttonColor.normal}`,
        marginRight: 15,
        '&>img': {
            width: '100%',
            height: '100%'
        }
    },
    trackTime: {
        '&>p': {
            margin: '0 4px 0 0 ',
            fontSize: 13,
        },
        '&>svg': {
            fontSize: 18,
            color: theme.textColor.primary

        }
    },
    disabledButton: {
        pointerEvents: 'none',
        cursor: 'auto',
        '&>p , &>svg': {
            color: theme.textColor.disabled + ' !important'
        }
    },

    summeryContainer: {
        display: 'grid',
        gridTemplateColumns: '178px 178px 178px 178px',
        columnGap: '85px',
        margin: '60px auto 0px',
        justifyContent: 'center',
        [theme.breakpoints.down(1800)]: {
            gridTemplateColumns: '168.75px 168.75px 168.75px 168.75px',
            columnGap: '75px',
            margin: '50px auto 0px',
        },
        [theme.breakpoints.down(1200)]: {
            gridTemplateColumns: 'calc(25% - 37.5px) calc(25% - 37.5px) calc(25% - 37.5px) calc(25% - 37.5px)',
            columnGap: '50px',
            margin: '50px auto 0px',
        },
        [theme.breakpoints.down(1000)]: {
            gridTemplateColumns: 'calc(40% - 25px) calc(40% - 25px)',
            columnGap: '50px',
            rowGap: '25px',
            margin: '50px auto 0px',
        },
        // [theme.breakpoints.down(800)]: {
        //     gridTemplateColumns: 'calc(50% - 25px) calc(50% - 25px)',
        //     columnGap: '50px',
        //     rowGap: '25px',
        //     margin: '50px auto 0px',
        // },
        [theme.breakpoints.down(800)]: {
            justifyContent: 'flex-start',
            gridTemplateColumns: '100%',
            padding: '0px 24px',
            marginTop: '40px'
        },

    },
    summeryItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down(1200)]: {
            justifyContent: 'flex-start'
        },
        [theme.breakpoints.down(800)]: {
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            justifyContent: 'flex-start',
            '&:after': {
                content: '""',
                width: 'calc(100% - 33px)',
                backgroundColor: theme.textColor.border,
                position: 'absolute',
                height: 1,
                right: -28,
                bottom: 0
            }
        },
        '&:nth-child(2)': {
            [theme.breakpoints.down(800)]: {
                marginRight: 0,
            },
        },
        '&:nth-child(1) , &:nth-child(2)': {
            [theme.breakpoints.down(800)]: {
                marginBottom: 30
            },
            [theme.breakpoints.down(800)]: {
                marginBottom: 0,
                marginRight: 0,
                padding: '11px 0'

            },
        },
        '&:nth-child(3)': {
            [theme.breakpoints.down(800)]: {
                marginBottom: 0,
                marginRight: 0,
                padding: '11px 0'
            },

        },
        '&:nth-child(4)': {
            marginRight: 0,
            [theme.breakpoints.down(800)]: {
                marginBottom: 0,
                paddingBottom: 18,
                marginRight: 0,
                paddingTop: 11,
                '&:after': {
                    content: '""',
                    width: '100vw',
                    backgroundColor: theme.textColor.border,
                    position: 'absolute',
                    height: 1,
                    right: -28,
                    bottom: 0
                },

            },
        }
    },
    summeryIcon: {
        width: 48,
        height: 48,
        padding: 10,
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>svg': {
            fontSize: 24,
            color: theme.textColor.primary
        }
    },
    bgDark: {
        backgroundColor: 'rgba(12,11,49,0.1)'
    },
    bgInfo: {
        backgroundColor: 'rgba(63,83,217,0.15)'
    },
    bgDanger: {
        backgroundColor: 'rgba(255,101,117,0.15)'
    },
    bgWarning: {
        backgroundColor: 'rgba(255,209,47,0.15)'
    },
    summeryInfo: {
        marginLeft: 13,
        width: 119,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 48,
        '&>p': {
            fontSize: 13,
            '&:nth-child(1)': {
                // marginBottom:5,
                fontSize: 15,
                fontFamily: theme.font.bold,
                color: theme.textColor.primary,
                [theme.breakpoints.down(580)]: {
                    fontSize: 13,
                },
            }
        }
    },
    summeryEdit: {
        marginLeft: 0,
        height: 18,
        cursor: 'pointer',
        '&>svg': {
            fontSize: 18,
            color: theme.textColor.primary

        },
        [theme.breakpoints.down(800)]: {
            position: 'absolute',
            right: 0
        },
    },
    trackDialogHeader: {
        marginBottom: 0
    },
    scrollBars: {

        '&>div:nth-child(1)': {
            marginLeft: 0,
            marginRight: -15
        }
    },
    memberTrackRes: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 65,
        padding: '20px 0',
        position: 'relative',
        '&>span:nth-child(1)': {
            '&:after': {
                content: '""',
                width: 'calc(100% - 12px)',
                backgroundColor: theme.textColor.border,
                position: 'absolute',
                height: 1,
                right: -28,
                bottom: 0
            },
            '&>div': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                '&>p': {
                    fontFamily: theme.font.bold,
                    fontSize: 13,
                    marginLeft: 19
                }
            }
        }
    },
    afterNone: {
        '&>span:nth-child(1)': {
            '&:after': {
                display: 'none'
            }
        }
    },
    selectRoleContainer: {
        padding: '19px 20px',
        marginBottom: 111,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        // padding: '34px 35px 23px 35px',
        [theme.breakpoints.down('sm')]: {
            padding: '19px 24px',

        },
        '& label': {
            fontSize: 13,
            color: theme.textColor.secondary,
            fontFamily: theme.font.regular,
            transform: 'none !important',
            marginLeft: 3,
            display: 'inline-block',
            lineHeight: '25px',
            '&:after': {
                content: '""',
                position: 'absolute',
                width: 5,
                height: 5,
                backgroundColor: theme.textColor.error,
                right: -10,
                borderRadius: 8,

            }
        },
        '&>div': {
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 392
            },
        },
        '&>svg': {
            marginRight: 15
        },
        '&  .MuiInput-root': {
            width: '100%',
            height: '56px',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
            marginTop: 33,
            padding: '16px 20px',
            paddingRight: 15,
            [theme.breakpoints.down('sm')]: {
                height: '48px',
                maxWidth: 392
            },
        },
        '& .MuiInputAdornment-root': {
            marginRight: 15
        },
        '& .Mui-disabled': {
            '& .MuiSelect-root': {
                border: 'none !important'
            }
        },
        '& .MuiInput-underline': {
            '&:before': {
                display: 'none !important',
                content: "''"
            },
            '&:after': {
                display: 'none !important',
                content: "''"
            }
        },
        '& .MuiSelect-select.MuiSelect-select': {
            backgroundColor: '#fff',
            fontSize: 13
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.textColor.secondary,
            fontSize: 13
        }
    },
    nextBtn: {
        right: 35,
        width: '78px',
        position: "absolute",
        top: 33,
        height: 30,
        cursor: "pointer",
        backgroundColor: '#fff',
        borderRadius: 15,
        color: theme.buttonColor.normal,
        // boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        display: "block",
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
            // width: 'max-content',
            color: theme.buttonColor.hover,
            '&:hover': {
                backgroundColor: '#fff',
                color: theme.buttonColor.hover,

            },
        },
    },
    errorText: {
        color: theme.textColor.error,
        fontSize: 13,
        marginTop: 6

    },
    statusWrapperActive: {
        // backgroundColor: "rgba(52, 194, 120, 0.1)",
        border: `1px solid #3f53d9`,
        fontSize: 13,
        color: theme.buttonColor.normal,
        backgroundColor: '#fff',
        borderRadius: 24,
        "&:hover": {
            backgroundColor: theme.buttonColor.normal,
            border: `1px solid #3f53d9`,

            color: "#fff",
        },
    },
    statusWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 110,
        marginRight: 30,
    },
    inThisClassSameClassesGridView: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '362px 362px 362px',
        columnGap: 25,
        rowGap: 18,
        [theme.breakpoints.down(1800)]: {
            gridTemplateColumns: '287px 287px 287px',
            columnGap: 19,
        },
        [theme.breakpoints.down(1200)]: {
            gridTemplateColumns: 'calc(33.3333% - 13px) calc(33.3333% - 13px) calc(33.3333% - 13px)',
            columnGap: 19.5,
        },
        [theme.breakpoints.down(1000)]: {
            gridTemplateColumns: 'calc(50% - 9.5px) calc(50% - 9.5px)',
            columnGap: 19,
        },
        [theme.breakpoints.down(480)]: {
            gridTemplateColumns: '100%',
            columnGap: 0,
            rowGap: 0
        },
    }


}));

