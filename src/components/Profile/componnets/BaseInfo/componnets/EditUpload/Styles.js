import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    errorMessage: {
        marginTop: 30,
        color: `${theme.palette.error.main} !important`,
        fontSize: 16,
    },
    editUploadWrapper: {
        marginBottom: 20,
    },
    uploadValidation: {
        fontSize:13,
        color: "#0c0b31",
        marginLeft: 15,
        fontFamily: 'chistaYekanB',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
        '&>p': {
            display: 'inline'
        },
        '&>span': {
            fontFamily: 'chistaYekanR',
            color: "#0c0b31cc",
            marginLeft: 22,
            [theme.breakpoints.down('sm')]: {
                marginLeft: 9,
            },

        }
    },

    uploadNote: {
        fontSize:13,
        marginTop: 8,
        marginBottom: 25,
        '&>span': {
            fontFamily: 'chistaYekanR',
            color: "#0c0b31cc",
            marginLeft: 15,
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
            },



        }
    },

    uploadTitleReq: {
        position: "relative",
        "&::before": {
            content: '""',
            height: 5,
            width: 5,
            backgroundColor: "#fc3563",
            borderRadius: '50%',
            right: -39,
            position: "absolute",
            [theme.breakpoints.down('sm')]: {
                right: -41,
            },
        },
    },
}));
