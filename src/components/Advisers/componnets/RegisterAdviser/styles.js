import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    sectionDesktop: {
        display: 'none!important',
        [theme.breakpoints.up('md')]: {
            display: 'flex!important',
        },
    },
    sectionMobile: {
        display: 'flex!important',
        [theme.breakpoints.up('md')]: {
            display: 'none!important',
        },
    },
    toolbarRoot:
    {
        margin: '42px auto',
        paddingLeft: "72px",
        paddingRight: "72px",
        display: "flex",
        alignItems: "center",
        '& p': {
            color: "#1a172d",
            fontWeight: 900,
            fontSize: 21,
            paddingLeft: 6,
        },
        ['@media (max-width:768px)']:
        {
            paddingLeft: "24px",
            paddingRight: "24px",
        }
    },
    root:
    {
        margin: '15px 72px',
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid rgba(146, 164, 187, 0.17)",
        ['@media (max-width:768px)']:
        {
            margin: '8px 24px!important',
        }
    },
    stepContainer:
    {
        width: '100%',
        padding: '39px 55px',
        height: "auto",
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'baseline',
        borderBottom: '1px solid #f7f9fc',
    },
    stepItemWrapper:
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        cursor: "pointer",
    },
    stepItemActive: {
        border: '1px solid #1641ff',
        borderRadius: "50%",
        width: 74,
        height: 74,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    stepItem: {
        backgroundColor: 'rgba(189, 200, 214, 0.2)',
        borderRadius: "50%",
        width: 74,
        height: 74,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    stepItemComplete: {
        backgroundColor: '#fff',
        borderRadius: "50%",
        width: 74,
        height: 74,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        border: "1px solid #1641ff"
    },
    stepItemCompleteInner: {
        borderRadius: "50%",
        width: 66,
        height: 66,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'

    },
    stepItemIcon: {
        width: 24,
        height: 24
    },
    stepItemInner: {
        borderRadius: "50%",
        width: 66,
        height: 66,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    stepItemInnerActive: {
        borderRadius: "50%",
        width: 66,
        height: 66,
        backgroundColor: "#1641ff",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    stepItemNumber: {
        fontFamily: 'yekan',
        fontSize: "30px",
        color: '#536b88'
    },
    stepItemNumberActive: {
        fontFamily: 'yekanB',
        fontSize: "30px",
        color: '#ffffff'
    },
    stepItemTextWrapper: {
        marginTop: 15

    },
    stepItemTextActive: {
        fontFamily: 'yekan',
        fontSize: "14px",
        color: '#1641ff',
        textAlign: 'center'
    },
    stepItemText: {
        fontFamily: 'yekan',
        fontSize: "14px",
        color: '#536b88',
        textAlign: 'center'
    },
    divider:
    {
        borderTop: '2px dashed #b5b4b4',
        flexGrow: 1,
        margin: '0 7px',
        textAlign: 'center',
        display: 'inline-block',
    },
    formContainer:
    {
        padding: '0px 37px 37px 47px'
    },
    bottomToolbar:
    {
        margin: '15px auto',
        paddingLeft: "72px",
        paddingRight: "72px",
        ['@media (max-width:768px)']:
        {
            paddingLeft: "24px",
            paddingRight: "24px",
        },
        display: "flex",
        justifyContent: 'flex-end'
    },
    actionBtn:
    {
        width: 267,
        height: 59,
        borderRadius: "13px",
        fontSize: "16px",
        fontFamily: 'yekanB'
    },
    inputWrapper: {
        display: "flex",
        flexDirection: 'column',
        marginTop: 53,
        '& img': {
            width: "24px",
            height: "24px",
        },
        '& input': {
            fontSize: 15,
            color: "#536b88",
            fontFamily: theme.font.regular,
        },
        '& textarea': {
            fontSize: 15,
            color: "#536b88",
            fontFamily: theme.font.regular,
            height: 160
        },
    },
    inputLabelBold: {
        fontSize: "15px",
        color: "#536b88",
        marginLeft: 10,
        marginRight: 14,
        fontFamily: "chistaYekanB",
        position: "relative",
    },
    inputLabel: {
        fontSize: "15px",
        color: "#92a4bb",
        marginLeft: 10,
        marginBottom: 12,
        fontFamily: "yekanLight",
        position: "relative",
    },
    inputHint: {
        fontSize: "14px",
        color: "#92a4bb",
        fontFamily: "yekanLight",
    },
    inputLabelRequired: {
        color: '#fc3563',
        fontSize: "55px",
        lineHeight: "0",
        verticalAlign: 'super',
        position: "absolute",
    },
    hide: {
        display: "none !important"
    },
    flexBox: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    fileBoxTitle: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    fileBoxTitleWrapper:
    {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    inputFileHint:
    {
        fontSize: "14px",
        color: "#92a4bb",
        marginLeft: 10,
        marginBottom: 24,
        marginTop: 4,
        fontFamily: "yekanLight",
    },
    showMessage:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        minHeight: 500,
        margin: '15px 0px'
    },
    btnWrapper:
    {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '& span':
        {
            fontSize: 18,
            color: "#1a172d",
            fontFamily: "yekanHeavy",
            lineHeight: "22px",
        }
    },
    btnBack:
    {
        width: 48,
        height: 48,
        marginRight: 10,
        backgroundColor: "transparent",
        borderRadius: "15px",
        border: "1px solid rgba(146, 164, 187, 0.3)",
        minWidth: "31px !important",
        '& span':
        {
            margin: 0
        }
    },
    stepWrapperMobile: {
        position: "relative",
        '& button': {
            padding: 0,
        },
    },
    stepTextMobile: {
        fontSize: 14,
        color: "#393d69",
        fontFamily: "chistaYekanB",
        lineHeight: "22px",
        position: "absolute",
    }
}));
