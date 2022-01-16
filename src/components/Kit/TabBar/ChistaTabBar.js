import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';
import { Tabs, Tab, withStyles, makeStyles } from "@material-ui/core";

//component styles:
const useStyles = makeStyles(theme => ({
    tabs: {
        // borderBottom: '1px solid rgba(12,11,49,0.15)',
        height: 48,
        borderRadius: 0,
        marginTop: 40,
        fontSize: '13px!important',
        position: 'relative',
        '&:after': {
            bottom: 1.5,
            right: 0,
            content: '""',
            width: '100%',
            height: 1,
            position: 'absolute',
            display: 'block',
            backgroundColor: theme.textColor.border
        },
        '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: 3,
            display: 'inline-block',
            backgroundColor: theme.buttonColor.normal
            // position:'absolute',
            // bottom:-2,
            // zIndex:9999999
            // transform:'translateY(2px)'
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            borderRadius: 0,
            border: 'none',
            overflow: 'visible',
            padding: '0 !important',
            position: 'sticky',
            top: 0,
            zIndex: 955,
            backgroundColor: '#fff',
            transition: 'all 250ms ease-in-out',

            '&:after': {
                width: '100%',
                right: 0,
                height: 48,
                zIndex: -1,
                backgroundColor: '#fff',
                borderBottom: '1px solid ' + theme.textColor.border
            },
            // borderBottom: '1px solid rgba(12,11,49,0.15)',

        },
        '& .Mui-selected': {
            color: theme.buttonColor.normal + ' !important',
            fontFamily: theme.font.medium
        },
        '& .MuiTab-textColorPrimary': {
            color: '#0c0b31',
            fontSize: '13px!important',

        },
        "& button": {
            padding: '0 15px !important',
            marginRight: 43
        },
    },
}))
function ChistaTabBar({ children, ...props }) {
    const classes = useStyles();
    const StyledTabs = withStyles({
        root: {
            padding: '0 25px',
            '&>div': {
                '&>div': {
                    overflow: 'auto'
                }
            }
        },
        indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& > span': {
                maxWidth: 60,
                width: '100%',
                backgroundColor: '#3748bb',
            },
        },
    })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

    const StyledTab = withStyles((theme) => ({
        root: {
            textTransform: 'none',
            color: '#fff',
            fontSize: 13,
            minWidth: 40,
            padding: '0 15px !important',
            marginRight: theme.spacing(1),
            '&:focus': {
                opacity: 1,
            },
        },
    }))((props) => <Tab disableRipple {...props} />);


    return (
        <StyledTabs
            value={props.value}
            onChange={props.handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
            style={props.customStyle||{}}
        >

            {props.items.map((item) => (
                <StyledTab label={item} />
            ))}

        </StyledTabs>
    )
}

export default ChistaTabBar;