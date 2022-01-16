import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    galleryWrapper:
    {
        display: "flex",
        padding: "23px 30px",
        [theme.breakpoints.down('sm')]: {
            padding: "30px 25px",
        },
    },
    galleryInner:
    {
        display: "flex",
        width: "100%",
        flexGrow: 1,
        flexFlow: 'row nowrap'
    },
    galleryNextBtn:
    {
        width: 53,
        height: 207,
        marginLeft: 14,
        backgroundColor: "#e8ebf1",
        borderRadius: "19px",
        border: "1px solid #e8ebf1",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        '&span>span': {
            marginLeft: '0px !important',
            marginRight: '0px !important',
        }
    },
    galleryVideoItemWrapper:
    {
        width: 311,
        height: 207,
        borderRadius: "15px",
        position: "relative",
        flexShrink: 0,
        margin: "auto 5px",
        border: "1px solid #0000000f",
        cursor: "pointer",
        '&>img':
        {
            width: "100%",
            height: "100%",
            borderRadius: 15
        },
        '&>div':
        {
            backgroundColor: 'rgba(26, 25, 43, 0.8)',
            width: 311,
            height: 207,
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: 15
        },
        '&>button':
        {
            position: 'absolute',
            top: 75,
            zIndex: 1,
            left: 0,
            backgroundColor: "#fff",
            right: 0,
            margin: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: 169,
            height: 113,
            borderRadius: "24px",
            '&>button':
        {
            top: 23,
        },
        }
    },
    galleryImageItemWrapper:
    {
        width: 207,
        height: 207,
        borderRadius: "15px",
        flexShrink: 0,
        margin: "auto 5px",
        border: "1px solid #0000000f",
        cursor: "pointer",
        '&>img':
        {
            width: "100%",
            height: "100%",
            borderRadius: 15,
            objectFit: "cover"
        },
        [theme.breakpoints.down('sm')]: {
            width: 112,
            height: 113,
            borderRadius: "24px",
        }
    },
    noImageContainer: {
        display: 'flex',
        width: 207,
        height: 207,
        backgroundColor: '#E8EBF1',
        borderRadius: '15px',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    noImg: {
        width: '188px',
        height: '149px',
    }
}));
