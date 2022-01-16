import {makeStyles} from "@material-ui/styles";
import {fade} from "@material-ui/core/styles";
import React from "react";

export default makeStyles((theme) => ({
    root: {
        minHeight: "100%",
        padding: "12px 30px",
    },
    editGroupRoot: {
        padding: '0px 29px 0 57px',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    },
    editButton: {
        borderRadius: "25%",
        width: "37px",
        height: "37px",
        paddingTop: 0,
        paddingLeft:38,
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            right: 1,
            padding: '0 0 13px 0',
            width: 'unset'

        },

    },

    dialogRoot: {
        // width: "436px !important",
        height: "auto !important",
        padding: 50,
        borderRadius: 8
    },
    formTitle: {
        fontSize: 12,
        color: "#0c0b31",
    },
    courseTitleContainer: {
        display: "flex",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 30,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0,


        },

    },
    modalHead: {
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    modalTitle: {
        fontSize:13,
        color: "#0c0b31",
        fontFamily: "chistaYekanB",
        lineHeight: "31px",
        padding: 11,
    },
    modalIcon: {
        fontSize: 60,
        color: "#607d8b",
        marginBottom: 10,
        height: "76px !important",
    },
    phoneInputLabel: {
        color: "#0c0b31cc",
        fontSize: 15,
        fontFamily: "chistaYekanR",
    },

    modalTitleDesc: {
        fontSize:13,
        color: "#0c0b31cc",
        marginBottom: 15,
        marginTop: 14,
    },
    dialogBtn: {
        borderRadius: "0 !important",
    },
    submitBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "10px",
    },
    loadingBox: {
        margin: "250px auto 250px auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    modalContent: {
        padding: "15px",
    },
    actionBtn: {
        width: 140,
        height: 48,
        borderRadius: 12,
        color: "#0c0b31",
        backgroundColor: "rgba(213, 223, 235, 0.35)",
        fontSize: 16,
        margin: "10px",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#1641ff",
        },
    },
    actionContainer: {
        display: "flex",
        justifyContent: "center",
    },
    modalTitleBolder: {
        fontFamily: "chistaYekanB",
        fontSize: 25,
        fontWight: "bold",
    },
    profileField: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: 14,
    },
    profileFieldLabel: {
        fontFamily: "chistaYekanR",
        fontSize:13,
        color: "#0c0b31cc",
    },
    profileFieldValue: {
        fontFamily: "chistaYekanR",
        fontSize:13,
        color: "#0c0b31",
    },
    profileFieldWrapper: {
        // borderBottom: "1px solid rgba(146, 164, 187, 0.17)",
        flexWrap: "nowrap",
    },
    inputWrapper: {
        marginBottom: "18px",
    },
    editButtonTag: {
        position: "absolute",
        left: 0,
    },
    breadcrumbWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
        "& span": {
            margin: "0 10px",
            fontSize:13,
            fontFamily: 'chistaYekanB',
        },
    },
    breadcrumbTitle: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    submitBtn: {
        backgroundColor: '#3f53b9',
        height: 56,
        width: 319,
        minHeight: 56,
        borderRadius: 8,
        fontSize: 16,
        color: "white",
        border: "none",
        fontFamily: "chistaYekanB",
        margin: "50px 0 0 auto",
        //boxShadow: "0 6px 19px 0 rgba(9, 0, 255, 0.23)",
        cursor: "pointer",
        display: "block",
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#3748bb'
        }
    },
    disableBtn: {
        pointerEvents: "none",
        border: '1px solid #bdbdbd',
        color: '#bdbdbd',
        backgroundColor: "#fff",
        boxShadow: "none !important",
    },
    courseItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '&>div': {
            width: '100%',
            paddingLeft: 6
        },
        "& p:first-child": {
            fontSize:13,
            color: "#2a2f33",
            fontFamily: "chistaYekanB",
            marginBottom: 6
        },
        "& p:last-child": {
            fontSize:13,
            marginTop: 5,
            fontFamily: 'chistaYekanR',
            [theme.breakpoints.down('sm')]: {
                fontSize: 13,
            },

        },
    },
    deleteCourse: {
        width: 25,
        height: 25,
        borderRadius: 5,
        border: `1px solid ${theme.palette.border.main}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "& svg": {
            width: 15,
            height: 15,
        },
    },
}));
