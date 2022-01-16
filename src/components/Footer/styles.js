import {makeStyles} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";

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
    root: {
        backgroundColor: "#050038",
        width: "100%",
        padding: "100px 5px 20px 5px",
        [theme.breakpoints.down(1200)]: {
            padding: "100px 34px 20px",
        },
        [theme.breakpoints.down(480)]: {
            padding: "100px 24px 20px",
        },
        '&>div:first-child':{
            maxWidth: 1400,
            padding: 0,
            [theme.breakpoints.down(1800)]: {
                maxWidth: 1119
            },
            [theme.breakpoints.down(1200)]: {
                maxWidth: '100%'
            }
        },
        [theme.breakpoints.down(480)]: {
            padding: "65px 24px 40px",
        }
    },
    footerCol:{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: 'column',
    },
    logo: {

        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down('480px')]: {
            width:'100%',
            marginBottom:15
        },
    },
    logoText: {
        marginLeft: 25,
        marginTop: 10,
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        webkitTextStroke: '1px rgba(0, 0, 0, 0)',
        fontSize: 15,
        fontFamily: 'chistaYekanR',
        color: 'white',
        '&:before': {
            position: 'absolute',
            content: '""',
            display: 'inline-block',
            width: 1,
            left: -10,
            height: 29,
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(480)]: {
            marginTop: 0
        },
    },
    aboutChista:{
        '& p':{
            marginTop:32,
            color:'white',
            fontSize:13,
            fontFamily: "chistaYekanB",
            textAlign:'justify',
            lineHeight: '34px',
            maxWidth: '354px',
            [theme.breakpoints.down('sm')]: {
                margin: '0px',
                maxWidth: '100%',
                marginTop: 31
            },
        }
    },
    footerCategories:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0px 140px 0px 40px',
        [theme.breakpoints.down(1800)]: {
            padding: '0px 0px 0px 107px',
        },
        [theme.breakpoints.down(1200)]: {
            padding: '0px 0px 0px 107px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            width: '100%',
            margin: '40px 0px'
        },
        '&>ul>li': {
            [theme.breakpoints.down('sm')]: {
                marginTop: '15px'
            },
        },
        '&>ul:first-child':{
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            },
        },
        '&>ul:last-child':{
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            },
        },
    },
    footerBottom: {
        width: "1400px",
        height: "70px",
        display:'flex',
        alignItems:'center',
        padding: "22px 0px 15px",
        margin: '0px auto',
        backgroundColor:'transparent',
        [theme.breakpoints.down(1800)]: {
            width: 1119
        },
        [theme.breakpoints.down(1200)]: {
            width: '100%',
            padding: 0
        },
        [theme.breakpoints.down('sm')]: {
           height: 'auto',
           marginTop: 50,
           paddingTop: 0
        },
    },
    list: {
        width:'max-content',
        listStyle: "none",
        padding: "0",
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: '0px',
        marginTop:0,
        [theme.breakpoints.down('sm')]: {
            alignItems: "center!important",
            width:'100%',
        },
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start!important',
            justifyContent: 'center!important',
            height: 'auto'
        },
    },
    listTitle:
        {
            fontSize: "14px",
            fontFamily: "chistaYekanB",
            color: "#ffbfbf",
            height:53,
            display:'flex',
            alignItems:'center',
            marginBottom:30,
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
    listItem:
        {
            textDecoration: "none",
            fontSize: "13px",
            fontFamily: "chistaYekanB",
            color: "white",
            display: "block",
            "&:hover": {
                color: theme.buttonColor.normal,
            }
        },
    listImgItem:
        {
            width: '100%',
            "& > img": {
                width: "100%",
                margin: "3px auto"
            }
        },
    licenceRoot: {
        display: "flex",
        marginTop: "10px",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
    licence:
        {
            width: "90%",
            "& > img": {
                width: "80%",
                height: "100%",
                [theme.breakpoints.down('sm')]: {
                    height: 'auto'
                }
            }
        },
    divider: {
        width: 1400,
        height:1,
        margin:'100px auto 8px',
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        [theme.breakpoints.down(1800)]: {
            width: 1119
        },
        [theme.breakpoints.down(1200)]: {
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    copyRight:
        {
            display:'flex',
            alignItems:'right',
            '& > p': {
                    color: 'white',
                    fontSize: '12px',
                    fontFamily:'chistaYekanB',
                    textAlign:'left',
                    [theme.breakpoints.down('sm')]: {
                        margin: '40px 0 10px 0',
                        lineHeight: '28px',
                        fontSize: '12px',
                        textAlign:'center',
                    },
                },
        },
    socialLinks:
        {
            display: "flex",
            width: '100%',
            justifyContent: "flex-end",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                justifyContent: "center",
                margin:'20px 0 30px 0'
            },
            '& div':{
                marginRight:15,
                '&:last-child':{
                    marginRight:0,
                }
            },
            '& a':{
                display: "flex",
                alignItems: "center",
            },
            '& img': {
                width: 17,
                height: 17,
            },
        },
        phoneDetail: {
            display:'flex',
            alignItems:'center',
            justifyContent: 'flex-end',
            [theme.breakpoints.down(480)]: {
                width: '100%',
                justifyContent: 'center',
            },
            '& > p': {
                    color: 'white',
                    fontSize: '12px',
                    fontFamily:'chistaYekanB',
                [theme.breakpoints.down(480)]: {
                    fontSize: '14px',
                    textAlign:'center',
                    justifyContent: 'center',
                },
            },
            '& > img': {
                width: 20,
                height: 20,
                marginLeft: 3
            }
        },
        logosItems: {
            textAlign: 'center', 
            width: '100px', 
            height: '100px', 
            borderRadius: 8, 
            backgroundColor: '#ebebef', 
            padding: '12px 0px', 
            [theme.breakpoints.down(480)]: {
                width: 'calc(40vw - 8px)',
                height: 'calc(40vw - 8px)',
            }
        },
        footerItemsContainer:  {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column-reverse'
            }
        }
}));