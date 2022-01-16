import { makeStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

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
    grow: {
        flexGrow: 1,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
    },
    menuActive: {
        color: '#0c0b31!important',
        textDecoration: 'none',
        fontFamily: 'chistaYekanB'
    },
    headerMainParent: {
        height: 80,
        position: "sticky",
        transition: 'all 250ms ease-in-out',
        zIndex: "999",
        width: '100%',
        maxWidth: '100%',
        padding: '0px',
    },
    headerParent: {
        width: '100%',
        height: 80,
        position: "sticky",
        top: 0,
        zIndex: "999",
        maxWidth: '100%',
        padding: '0 112px',
        [theme.breakpoints.down(1800)]: {
            padding: '0 60px',
        },
        [theme.breakpoints.down(1200)]: {
            padding: '0 34px',
        },
        [theme.breakpoints.down(800)]: {
            padding: '0 34px',
        },
        [theme.breakpoints.down(480)]: {
            padding: '0 24px',
            position:'fixed'
        },
    },
    navbar: {
        width: '50%',
        marginLeft: '129px',
        display: 'flex',
        justifyContent: 'flex-start',
        textDecoration: 'none',
        color: '#0c0b31cc',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            width: '70%',
        },
        '& a': {
            color: '#0c0b31cc',
            cursor: 'pointer',
            textDecoration: 'none',
            marginRight: '35px',
            '&:hover': {
                color: '#0c0b31',
                textDecoration: 'none',
            }
        },
    },
    navbarDark: {
        '& a': {
            color: '#fff',
            '&:hover': {
                color: '#fff',
            }
        },
    },
    toolbar: {
        [theme.breakpoints.down('sm')]: {
            width: 'calc( 100% + 4px)',
            transform: 'translateX(-2px)'
        },
    },
    header: {
        padding: '0!important',
        position: "relative",
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
    },
    sectionMobile: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    downloadButton: {
        color: "#92A4BB",
        marginLeft: "8px"
    },
    chatButton: {
        color: theme.buttonColor.normal,
        backgroundColor: "#fff",
        height: "41px",
        padding: '0 18px',
        borderRadius: 8,
        fontSize: '14px',
        fontFamily: 'chistayekanR',
        '&:hover': {
            color: theme.buttonColor.hover,
            backgroundColor: '#fff',
            '& img': {
                filter: 'invert(93%) sepia(151%) saturate(50%) hue-rotate(400deg) brightness(309%) contrast(178%)'
            }
        },
    },
    chatButtonDarkMode: {
        color: '#fff',
        backgroundColor: "transparent",
        transition: 'all 0s ease',
        '&:hover': {
            color: '#fff',
            backgroundColor: "transparent",
        },
    },
    classAvatarBorder: {
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        padding: 2,
        position: "relative",
    },
    classAvatar: {
        width: '48px !important',
        height: '48px !important',
        fontSize: '16px !important',
        borderRadius: "50% !important",
    },
    loginButton: {
        color: "#0c0b31cc",
        backgroundColor: "#fff",
        width: "60px",
        height: "41px",
        borderRadius: 8,
        '&:hover': {
            backgroundColor: "#fff",
            color: "#0c0b31",
            '& img': {
                filter: 'invert(93%) sepia(151%) saturate(41%) hue-rotate(400deg) brightness(162%) contrast(100%)'
            }
        },
    },
    loginButtonDark:{
        color: "#fff",
        backgroundColor: theme.textColor.dark,
        '&:hover': {
            backgroundColor: theme.textColor.dark,
            color: "#fff",
        },
    },
    chatButtonMobile: {
        border: "1px solid #34c278",
        width: "46px",
        height: "46px",
        borderRadius: 12,
    },
    menuButtonMobile: {
        border: "none",
        width: "46px",
        height: "46px",
        borderRadius: 12,
        paddingRight: '0!important',
    },
    divider: {
        marginRight: "4px",
        marginLeft: "4px",
        backgroundColor: "transparent",
    },
    dividerLoggedIn: {
        marginRight: "15px",
        marginLeft: "15px",
        backgroundColor: "transparent",
    },
    dividerHorizontal:
    {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        position: "fixed",
        left: 0,
        right: 0,
        top: '100px',
        transition: 'all 0.2s ease-in-out',
    },
    profileButton: {
        padding: 0,
        '&:hover': {
            backgroundColor: "transparent",
        }
    },
    profileMenu: {
        '& .MuiPaper-root': {
            overflow: 'visible',
            top: '86px!important',
            borderRadius: "8px!important",
            width: "161px!important",
            height: "155px!important",
            border: 'none!important',
            boxShadow: "0 3px 10px 0 rgba(0, 5, 52, 0.11)",
            padding: '20px 4px',
            [theme.breakpoints.down('sm')]: {
                padding: '0 4px',
            },
            '&:before': {
                content: '""',
                backgroundColor: '#ffffff',
                width: 20,
                height: 20,
                display: 'block',
                top: -7,
                right: 11,
                position: 'absolute',
                transform: 'rotateZ(45deg)'
            },
            '& .MuiList-root': {
                padding: '0!important'
            },
            '& .MuiListItem-root': {
                marginTop: 0,
                marginBottom: 0,
                borderRadius: '8px',
                fontSize: '14px',
                color: '#0c0b31',
                backgroundColor: '#fff!important',
                '&:first-child': {
                    marginBottom: '10px'
                },
                '&:nth-child(2)': {
                    marginBottom: '10px'
                },
                '&:hover': {
                    color: '#1641ff',
                    backgroundColor: '#f5f8fa!important'
                },
                '& .MuiLink-root': {
                    marginTop: 0,
                    marginBottom: 0,
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: 'inherit',
                    backgroundColor: 'inherit!important',
                    '&:hover': {
                        color: 'inherit',
                        backgroundColor: '#f5f8fa!important'
                    },
                }
            }
        },
        '& a': {
            color: '#000',
            '&:hover': {
                textDecoration: 'none'
            }
        }
    },
    profileMenuOstad: {
        '& .MuiPaper-root': {
            height: "109px!important",
        }
    },
    modalHead: {
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    containerModalIcon: {
        width: '69px',
        height: '67px',
        borderRadius: '21px',
        backgroundColor: 'rgba(255, 82, 122, 0.04)',
        marginBottom: 19,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalIcon: {
        fontSize: 37,
        color: "#ff527a",
    },
    modalTitle: {
        fontWeight: 900,
        fontSize: 19,
        color: "#1a172d",
        lineHeight: '29px',
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogBtn: {
        height: 49,
        borderRadius: 12,
        color: '#ffffff',
        backgroundColor: '#1641ff',
        fontSize: 16,
        fontWeight: 'bold',
        boxShadow: '0 6px 19px 0 rgba(9, 0, 255, 0.23)',
        margin: '35px',
        '&:hover': {
            backgroundColor: '#1641ff',
            color: '#fff',
            boxShadow: '0 6px 19px 0 rgba(9, 0, 255, 0.23)',
        }
    },
    modalContent:
    {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: '22px',
        padding: "10px 90px 30px",
        textAlign: 'center',
        color: '#92a4bb'
    }
}));
