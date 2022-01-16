import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    modalWrapper: {
        maxWidth: '464px !important',
        minWidth: '464px !important',
        Width: '464px !important',
        height: '373px !important',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '100% !important',
            minWidth: '100% !important',
            Width: '100% !important',
            borderRadius: '25px 25px 0 0 !important',
            height: '290px !important',
        },
    },
    borderNone: {
        border: 'none !important'
    },
    share: {
        all: "unset",
        backgroundColor: "#fff",
        width: 24,
        height: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        cursor: "pointer",
    },
    modalTitle: {
        "& h2": {
            display: "flex",
            fontFamily: theme.font.bold,
        },
        "& svg": {
            marginRight: 10,
        },
    },
    shareContactContent: {
        paddingTop: '16px !important',
        '& p': {
            fontFamily: theme.font.bold,
            marginBottom: 12,
            fontSize: 13,
            color: theme.textColor.primary
        }
    },
    shareInput: {
        width: "100%",
        height: "56px",
        position: "relative",
        borderRadius: "8px",
        [theme.breakpoints.down("sm")]: {
            height: 48,
        },
        "& input": {
            border: "1px solid " + theme.textColor.border,
            width: "100%",
            textAlign: "right",
            padding: "0 20px",
            borderRadius: "8px",
            paddingLeft: 50,
            height: 56,
            resize: "none",
            fontFamily: theme.font.regular,
            fontSize: 13,
            [theme.breakpoints.down("sm")]: {
                height: 48,
            },
        },
        "& img": {
            position: "absolute",
            left: 16,
            cursor: "pointer",
            top: 0,
            bottom: 0,
            margin: "auto",
        },
    },
    closeModalIcon: {
        cursor: "pointer",
    },
    shareSocial: {
        marginTop: 8,
        display: "flex",
        justifyContent: "flex-end !important",
        alignItems: "center",
        width: '100%',
        "& > a": {
            cursor: "pointer",
            width: 48,
            height: 48,
            borderRadius: 8,
            marginLeft: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&>img': {
                width: 48,
                height: 48
            },
            '&:hover': {
            }
        },
    },
}));
