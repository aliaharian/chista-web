import { Dialog, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 466,
        height: 377,
        borderRadius: 16,
        padding: '70px 0px 40px',
        [theme.breakpoints.down(1800)]: {
            width: 386,
            height: 308,
            padding: '60px 0px 30px'
        },
        [theme.breakpoints.down(480)]: {
            width: '100%',
            height: 339,
            position: 'absolute',
            bottom: 0,
            borderRadius: '16px 16px 0 0',
            padding: '90px 0px 36px',
            margin: 0
        }
    }
}));

function ModalLayoutWithoutHeader({children, ...props}) {
    const classes = useStyles();
    return (
        <Dialog
        open={props.openDialog}
        hideBackdrop={props.hideBackdrop}
        onClose={props.closeModal}
        PaperProps={{
            className: clsx(classes.root, props.customClass)
        }}
        >
            {children}
        </Dialog>
    )
}

export default ModalLayoutWithoutHeader;