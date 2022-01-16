import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    packetsWrapper: {
        width: '100%',
        [theme.breakpoints.down(800)]: {
            padding: '0 0 104px 0',
        },
        "& .infinite-scroll-component ": {
            overflow: "unset !important",
            width: '100%',

        },
        '&>div:nth-child(2)': {
            display: 'flex',
            flexDirection: 'row',

            [theme.breakpoints.down("sm")]: {
                // flexDirection: 'column'
            },

        }
    },
    breadCrumbRes: {
        paddingLeft: 34,
        height: 65,

        marginBottom: 24,
        '@media (max-width: 480px)': {
            paddingLeft: '24px'
        }
    },
    breadCrumb: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-start",
        marginBottom: 55,
        [theme.breakpoints.down("sm")]: {
            height: 65,
        },

        '&>img:nth-child(1)': {
            width: 20,
            marginRight: 8
        },
        '&>p:nth-child(2)': {
            fontFamily: theme.font.bold,
            color: theme.textColor.primary
        },
        '&>svg:nth-child(3)': {
            margin: '0 8px',
            color: theme.textColor.primary

        },
        '&>p:nth-child(4)': {
            color: theme.textColor.secondary,

            fontFamily: theme.font.regular
        },

    },

    packetHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (max-width: 800px)': {
            width: 'auto',
            margin: '0px 34px'
        },
        '@media (max-width: 480px)': {
            width: '100%',
            padding: '0px 24px',
            margin: 0
        }
    },
    borderForNoPacket: {
        borderBottom: '1px solid rgba(12, 11, 49, 0.16)',
        paddingBottom: 50,
        marginBottom: 50 + 'px!important',
        [theme.breakpoints.down(1800)]: {
            paddingBottom: 50,
            marginBottom: 50 + 'px!important'
        },
        [theme.breakpoints.down(800)]: {
            paddingBottom: 50,
            marginBottom: 50 + 'px!important',
        }
    },
    packetHeaderMain: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        '@media (max-width: 1800px)': {
            marginBottom: 30
        },
        '@media (max-width: 800px)': {
            padding: '0px 34px'
        },
        '@media (max-width: 480px)': {
            padding: '0px 24px'
        }
    },
    currentPacketInfoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100%',
    },
    currentPacketInfoContainerSub: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100%',
    },
    currentPacketInfo: {
        [theme.breakpoints.down("sm")]: {
            paddingLeft: '0 !important'
        },
        '&>p:nth-child(2)': {
            fontSize: 13,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            marginBottom: 5,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
            },
            '& span': {
                fontSize: 18
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: 12,
            },
        },
        '&>p:nth-child(1)': {
            fontSize: 13,
            width: '160px',
            fontFamily: theme.font.regular,
            color: theme.textColor.secondary,
            '&>img': {
                [theme.breakpoints.down(1800)]: {
                    width: 20 + 'px!important'
                }
            },
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
            }
        }
    },
    extendBtn: {
        all: "unset",
        borderRadius: 300,
        cursor: 'pointer',
        marginRight: 19,
        padding: '11px 27px',
        // boxShadow: "0 8px 19px 0 rgba(9, 0, 255, 0.25)",
        backgroundColor: theme.buttonColor.normal,
        color: "white",
        boxSizing: "border-box",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: 'background-color 0.3s ease-in-out',
        padding: 0,
        width: 113,
        fontSize: 13,
        lineHeight: '18px',
        height: 40,
        [theme.breakpoints.down(1800)]: {
            padding: 0,
            width: 94,
            fontSize: 12,
            lineHeight: '16px',
            height: 30,
            // padding: '7px 20px'
        },
        [theme.breakpoints.down(480)]: {
            padding: 0,
            width: 100,
            fontSize: 13,
            lineHeight: '18px',
            height: 35,
            marginRight: 15,
        },
        '& svg': {
            marginRight: 3
        },
        '& span': {
            fontSize: 13,
            lineHeight: '18px',
            fontFamily: theme.font.regular,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12,
                lineHeight: '16px'
            }
        },
        '&:hover': {
            backgroundColor: '#3748bb'
        }
    },
    packetMenuLink: {
        fontSize: 13,
        backgroundColor: '#fff !important',
        zIndex: 990,
        minHeight: '43px',
        [theme.breakpoints.down(480)]: {
            minHeight: 'auto',

        },
        '&>div': {
            textDecoration: 'none !important',
            color: theme.textColor.secondary,
            width: '100%'

        },
        '&:hover': {
            backgroundColor: 'rgb(245,248,250) !important',
            '&>div': {
                color: theme.textColor.primary,
            },
        }
    },
    packetActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    packetBuyActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        width: '200px',
        '&>button': {
            marginRight: 0 + '!important',
        },
    },
    packetTitle: {
        fontSize: '20px !important',
        width: '100%!important',
        fontFamily: theme.font.bold + ' !important',
        color: theme.textColor.primary + ' !important',
        marginBottom: '0px !important',
        [theme.breakpoints.down(1800)]: {
            fontSize: '18px !important',
        }
    },
    packetIcon: {
        padding: 12,
        borderRadius: '50%',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 0,
        // backgroundColor: theme.textColor.fivePercent,
        // border: `1px solid ${theme.textColor.border}`,
        // marginRight: 15,
        [theme.breakpoints.down("sm")]: {
            paddingRight: 10,
        },

        '&>svg': {
            color: theme.textColor.primary,
            width: 24,
            height: 24,
        }
    },

    packetItemParent: {
        width: '100%',
        overflowX: 'auto',
        marginTop: 40,
        marginBottom: 50,
        [theme.breakpoints.down(1800)]: {
            marginTop: 30,
        }
        // [theme.breakpoints.down("sm")]: {
        //     position: 'relative',
        //     width: '100vw',
        //     margin: '0 -24px',
        //     '&:before': {
        //         content: '""',
        //         width: '100vw',
        //         height: 1,
        //         position: 'absolute',
        //         top: 34,
        //         right: 0,
        //         backgroundColor: theme.textColor.border,
        //     },
        //     '&:after': {
        //         content: '""',
        //         width: '100vw',
        //         height: 1,
        //         position: 'absolute',
        //         bottom: 10,
        //         right: 0,
        //         backgroundColor: theme.textColor.border,
        //     }

        // },
    },

    packetItem: {
        width: '100%',
        height: 442,
        borderRadius: 8,
        // border: `1px solid ${theme.textColor.border}`,
        marginTop: 0,
        position: 'relative',
        [theme.breakpoints.down(1200)]: {
            height: 'auto'
        },
        // minWidth: 1068,
        // [theme.breakpoints.down(480)]: {
        //     padding: '40px 0 30px 0',

        // },

    },
    packetItemTitle: {
        fontSize: 13,
        fontFamily: theme.font.bold,
        color: theme.textColor.primary,
        position: 'absolute',
        top: -10,
        left: 48,
        backgroundColor: '#fff',
        padding: '0 16px',
        // [theme.breakpoints.down("sm")]: {
        //     top: 25,
        //     left: 0,
        //     backgroundColor: '#fff',
        //     padding: '0 24px',
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center'

        // }


    },
    chart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid rgba(12, 11, 49, 0.16)',
        borderRadius: 16,
        padding: '50px 50px 30px',
        [theme.breakpoints.down(800)]: {
            borderRadius: 16,
            minHeight: 275,
            width: 'auto',
            margin: '0 34px',
            padding: '30px'
        },
        [theme.breakpoints.down(480)]: {
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: 0,
            minHeight: 275,
            width: '100%',
            margin: '0',
            padding: '50px 24px',
        },
        // '& .highcharts-container':{
        //     width:'100% !important'
        // }
    },
    chartData: {
        width: '100%',
        height: 322,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        '&>div&>div': {
            width: '100%'
        },
        '& .highcharts-axis-labels': {
            '&>span': {
                [theme.breakpoints.down("sm")]: {
                    display: 'flex !important',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'max-content !important'
                },

            }
        },
        '& text , & p': {
            fontFamily: theme.font.regular,
            fontSize: 13,
            color: theme.textColor.primary,
            [theme.breakpoints.down("sm")]: {
                fontSize: 11,

            },
            // direction: 'ltr',
        },
        [theme.breakpoints.down("sm")]: {
            overflowX: 'auto',
            height: 319,
        },
    },

    chartCalendar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
        height: 27,
        '&>svg': {
            color: theme.textColor.primary,
        },
        '&>p': {
            width: 120,
            minWidth: 120,
            textAlign: 'center',
            fontSize: 13,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
        }
    },
    chartVerticalNumbers: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column-reverse',
        height: '100%',
        paddingBottom: 55,
        marginLeft: 16,
        [theme.breakpoints.down("sm")]: {
            position: 'absolute',
            right: 34,
            height: 'max-content',
            paddingBottom: 0,
            top: 74

        },

        [theme.breakpoints.down(600)]: {
            right: 24,
        },
        '&>div': {
            lineHeight: '18px',
            marginTop: 14,
            fontSize: 13,
            [theme.breakpoints.down("sm")]: {
                fontSize: 11,
                marginTop: '12.5px',
                lineHeight: '12px',

            },
            '&:last-child': {
                marginTop: 0,
                marginBottom: 10
            }
        }

    },
    dayChartTitles: {
        transform: 'rotateZ(90deg) ',
        width: 34
    },
    chartBar: {
        width: 9,
        height: '287px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        marginLeft: 22,
        [theme.breakpoints.down("sm")]: {
            height: '190px',

        },
        '&:hover': {
            color: theme.textColor.primary,
        },
        '&>p': {
            position: 'absolute',
            bottom: 0,
            lineHeight: '18px',
            fontSize: 13,
            [theme.breakpoints.down("sm")]: {
                fontSize: 11,
                bottom: -14
            },
        }
    },
    moreSpace: {
        marginLeft: 30,
        height: 302,
        [theme.breakpoints.down("sm")]: {
            height: 211
        },
    },
    noDataContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column !important',
        margin: '0 auto',
        [theme.breakpoints.down("xs")]: {
            padding: '0 8px',
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

    dayLetter: {
        position: 'absolute',
        left: 30,
        bottom: 83,
        margin: 0,
        fontSize: 13,
        fontFamily: theme.font.medium,
        color: theme.textColor.primary,
        [theme.breakpoints.down("sm")]: {
            backgroundColor: '#fff',
            bottom: 60,

        },
    },
    personLetter: {
        fontSize: 13,
        fontFamily: theme.font.medium,
        color: theme.textColor.primary,
    },
    backToMonth: {
        position: 'absolute',
        right: 60,
        bottom: 29,
        fontSize: 13,
        color: theme.buttonColor.normal,
        fontFamily: theme.font.medium,
        cursor: 'pointer',
        [theme.breakpoints.down(480)]: {
            right: 24,
            bottom: 51,
        },
    },
    chartInfo: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 40,
        [theme.breakpoints.down("sm")]: {
            padding: '0 24px',
        },
        '& svg': {
            marginTop: 4,
        },
        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary,
            fontFamily: theme.font.regular,
            marginLeft: 12,
            lineHeight: '32px',
            '&>a': {
                fontSize: 13,
                color: theme.buttonColor.normal,
                fontFamily: theme.font.regular,
                textDecoration: 'none'
            }
        }

    }

}));
