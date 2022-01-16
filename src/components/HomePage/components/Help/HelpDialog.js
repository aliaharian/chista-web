import {Dialog, Fade, Slide, useTheme} from "@material-ui/core";
import React from "react";
import useStyles from './Styles'
import close from "../../../../assets/images/close.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function HelpDialog(props){
    const classes=useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Dialog
            open={props.open}
            fullScreen
            TransitionComponent={isMobile ? Transition : NoTransition}
            transition={Slide}
            onClose={props.handleClose}
            PaperProps={{className: classes.root}}
            classes={{
                scrollPaper: classes.dialog
            }}
        >
            <img
                src={close}
                alt="icon"
                style={{ width: 20}}
                className={classes.closeModalIcon}
                onClick={() => props.handleClose()}
            />
            <p className={classes.title}>{props.data.title}</p>
            <img className={classes.gif} src={props.data.gif} alt=""/>
            <p className={classes.text}>{props.data.text}</p>
        </Dialog>
    )
}

export default HelpDialog;