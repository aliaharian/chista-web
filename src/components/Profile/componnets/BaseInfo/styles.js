import React from "react";
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
        minHeight: "100%",
        padding: '2px 0 2px 29px',
        marginLeft: 17,
        [theme.breakpoints.down('sm')]: {
            padding: '2px 8px',
            marginLeft: 0,
            paddingTop: 7,
        },
        '&>div:first-child': {
            paddingLeft: 50,
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 0,
            },
        },
        '&>div:nth-child(2)':
            {
                marginTop: 73,
                marginBottom:85,
                alignItems: "flex-start",
                flexDirection: 'row',
                [theme.breakpoints.down('sm')]: {
                    marginTop: 0,
                    paddingLeft: 0,
                    marginBottom:0,
                },
            }
    },
    editInfoGrid:{
        '&:nth-child(2n)':{
            padding: '0 13px 0 50px',
            [theme.breakpoints.down('sm')]: {
                padding: '0',
            }
        },
        '&:nth-child(2n-1)':{
            padding: '0 50px 0 0',
            [theme.breakpoints.down('sm')]: {
                padding: '0',
            }
        }
    },
    mobileDivider:{
        display:"none",
        [theme.breakpoints.down('sm')]: {
            display:"block",
            position:"absolute",
            width:'calc(100vw - 65px)',
            right: 0 ,
            transform:'translate(0,-8px)'
        },
    },
    formTitle:
        {
            fontSize: 16,
            color: '#0c0b31',
        },
    uploadWrapperContainer: {
        marginTop: 69,
        [theme.breakpoints.down('sm')]: {
            marginTop: 45,
        }
    }
}));
