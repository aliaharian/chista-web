import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    parentCategoryContainer: {
        width: '100%',
        '&>span': {
            fontSize: 13,
            color: 'rgb(12,11,49)',
            fontFamily: 'chistaYekanB',
            [theme.breakpoints.up(1800)]: {
                fontSize: 13
            },
            [theme.breakpoints.down(1800)]: {
                fontSize: 12
            },
        },
        '&>ul': {
            margin: '25px 0px 50px',
            cursor: 'pointer',
            padding: 0,
            '&>li': {
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '&>img': {
                    width: 24,
                    height: 24,
                    marginRight: 6
                },
                '&>span': {
                    fontSize: 13,
                    color: '#0c0b31',
                    fontFamily: 'chistaYekanR',
                    [theme.breakpoints.down(1800)]: {
                        fontSize: 12
                    }
                }
            }
        }
    },
    childCategoriesContainer: {
        width: '100%',
        margin: '0px 0px 50px',
    },
    goParentCategoriesContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        '&>img': {
            width: 26,
            height: 26
        },
        '&>span': {
            fontSize: 13,
            color: '#0c0b31',
            fontFamily: 'chistaYekanB',
            marginLeft: 10,
            [theme.breakpoints.down(1800)]: {
                fontSize: 12
            }
        }
    },
    parentCategoryNameContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        cursor: 'pointer',
        '&>img': {
            width: 24,
            height: 24
        },
        '&>span': {
            fontSize: 13,
            color: '#0c0b31',
            fontFamily: 'chistaYekanB',
            marginLeft: 12,
            lineHeight: "24px",
            [theme.breakpoints.down(1800)]: {
                fontSize: 12
            }
        }
    },
    childCategoryList: {
        listStyle: "none",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 0,
        marginTop: 20,
        '& .categoryParent': {
            fontFamily: 'chistaYekanB',
            color:'rgb(12, 11, 49)',
            [theme.breakpoints.up(1800)]: {
                fontSize: 13
            },
            [theme.breakpoints.down(1800)]: {
                fontSize: 12
            }
        }
    },
    childCategoryListTitleLevel2: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'left',
        '&>span': {
            width: 100,
            fontSize: 12,
            color: '#0c0b31',
            fontFamily: 'chistaYekanB',
            [theme.breakpoints.down(1800)]: {
                fontSize: 11
            }
        }
    },
    childCategoryListItem: {
        fontFamily: 'chistaYekanR',
        display: "flex",
        marginBottom: 20,
        flexDirection: "column",
        fontSize: 12,
        cursor: 'pointer',
        width: '100px',
        lineHeight: "24px",
        color: 'rgb(12,11,49)',
        [theme.breakpoints.up(1800)]: {
            fontSize: 12
        },
        [theme.breakpoints.down(1800)]: {
            fontSize: 11
        },
        '&>span': {
            textAlign: 'left'
        },
        '&:hover':
        {
            color: '#3f53d9',
            // fontFamily: theme.font.medium,
        }
    },
    childCategoryListItemLevel2: {
        fontFamily: theme.font.regular,
        display: "flex",
        borderLeft: '1px solid #ebebef',
        paddingBottom: 20,
        paddingLeft: 10,
        flexDirection: "column",
        fontSize: 12,
        cursor: 'pointer',
        width: '100px',
        lineHeight: "24px",
        color: "#0c0b31cc",
        [theme.breakpoints.down(1800)]: {
            fontSize: 11
        },
        '&:last-child': {
            paddingBottom: 0
        },
        '&>span': {
            textAlign: 'left'
        },
        '&:hover':
        {
            color: "#3f53d9",
            // fontFamily: theme.font.medium,
        }
    },
    childCategoryItemSelected:
    {
        color: '#4264fb',
        fontFamily: theme.font.regular,
    },
    headerContainer: {
        width: '100%',
        padding: '21px 24px',
        borderBottom: '1px solid rgba(12, 11, 49, 0.16)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&>img': {
            width: 24,
            height: 24,
            cursor: 'pointer'
        },
        '&>span': {
            lineHeight: '24px',
            fontSize: 13,
            color: '#0c0b31',
            marginLeft: 4,
        }
    },
    categoriesContainer: {
        padding: '24px 0px',
        width: '100%',
        '&>div': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 24,
            '&>img': {
                width: 24,
                height: 24,
            },
            '&>span': {
                width: 'calc(100% - 36px)',
                lineHeight: '24px',
                color: 'rgba(12, 11, 49, 0.8)',
                fontSize: 13,
                marginLeft: 12,
            }
        },
        '&>ul': {
            cursor: 'pointer',
            padding: 0,
            marginTop: 14,
            paddingLeft: 24,
            '&>li': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                '&>img:nth-child(1)': {
                    width: 24,
                    height: 24,
                    marginRight: 12
                },
                '&>img:nth-child(3)': {
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    right: 24, 
                },
                '&>span': {
                    width: 'calc(100% - 36px)',
                    padding: '14px 0px',
                    fontSize: 13,
                    color: 'rgba(12, 11, 49, 0.8)',
                    fontFamily: 'chistaYekanR',
                    borderTop: '1px solid #ebebef',
                }
            }
        }
    },
    childrenCategoriesContainer: {
        padding: '10px 0px',
        width: '100%',
        '&>ul': {
            cursor: 'pointer',
            padding: 0,
            margin: 0,
            paddingLeft: 24,
            '&>li:nth-child(1)>span': {
                border: 'none !important'
            },
            '&>li': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                '&>img': {
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    right: 24, 
                },
                
                '&>span': {
                    width: '100%',
                    padding: '14px 0px',
                    fontSize: 13,
                    color: 'rgba(12, 11, 49, 0.8)',
                    fontFamily: 'chistaYekanR',
                    borderTop: '1px solid #ebebef',
                }
            }
        }
    },
    modalLayoutCustomPadding: {
        padding: '0px !important'
    }
}));
