import { Dialog, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 464,
        height: 615,
        borderRadius: 16,
        padding: '0px 0px 40px',
        overflowX: 'hidden',
        [theme.breakpoints.down(1800)]: {
            width: 386,
            height: 512,
            padding: '0px 0px 30px'
        },
        [theme.breakpoints.down(480)]: {
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            borderRadius: 0,
            padding: 0,
            margin: 0
        }
    }
}));

function ModalLayoutWithHeader({children, ...props}) {
    const classes = useStyles();
    return (
        <Dialog
        open={props.openDialog}
        hideBackdrop={props.hideBackdrop}
        onClose={props.closeModal}
        PaperProps={{
            className: clsx(classes.root, props.customClass)
        }}
        fullScreen={props.fullScreen}
        >
            {children}
        </Dialog>
    )
}

export default ModalLayoutWithHeader;