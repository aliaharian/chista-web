import clsx from 'clsx';
import React from 'react';
import Style from '../Style/kits.module.scss';
import { Menu, withStyles } from "@material-ui/core";

//this component needs parent with anchor
function ChistaMenu({ children, ...props }) {
    const StyledMenu = withStyles((theme) => ({
        paper: {
            overflow: 'visible',
            transform: "translateY(-12px)!important",
            border: 'none',
            width: '170px',
            borderRadius: '8px!important',
            boxShadow: '0 3px 10px 0 rgba(0, 5, 52, 0.11)',
            '& ul': {
                marginRight: 4,
                marginLeft: 4,
            },
            '& li': {
                borderRadius: 8,
                [theme.breakpoints.down("sm")]: {
                    minHeight: '34px !important'
                },
            }
        },
    }))(props => (
        <Menu
        {...props}
        PaperProps={{
            style:{
                width: props.width || '172px',
                border:props.border || 'none',
                boxShadow: props.boxShadow
            }
        }}
        MenuListProps={{ onMouseLeave: props.handleClose }}
        />
    ));
    return (
        <StyledMenu
            //id={props.id || 'more'}
            anchorEl={props.anchorEl}
            keepMounted
            open={props.open}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            style={{
                marginTop: 40,
                left: props.left || 16
            }}
            {...props}
        >
            {children}
        </StyledMenu>
    )
}

export default ChistaMenu;