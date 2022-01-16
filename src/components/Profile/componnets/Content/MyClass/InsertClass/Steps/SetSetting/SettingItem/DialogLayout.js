import {
    Avatar,
    Button,
    CircularProgress,
    Dialog,
    DialogContent, Divider, Fade,
    Input,
    InputAdornment,
    Slide,
    Typography, useTheme
} from "@material-ui/core";

import React, {useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./../../../Dialog/Styles";
import close from "../../../../../../../../../assets/images/close.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import clsx from "clsx";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function DialogLayout({hideBackdrop = false, ...props}) {
    const [transition, setTransition] = React.useState(false)
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })

    return (
        <Dialog
            fullScreen={isMobile}
            open={props.open}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={Slide}
            keepMounted
            hideBackdrop={props.hideBackdrop}
            onClose={props.closeModal}
            PaperProps={{
                className: clsx(props.className||classes.root) ,
            }}
            classes={{
                scrollPaper: clsx(classes.dialog)
            }}
        >
            <>
                <div className={classes.addClassHeaderWrapper}>
                    <div className={classes.selectAddClassTitle}>
                        <div>

                            <ArrowForwardIcon onClick={props.closeModal} className={classes.backArrow}/>
                            {/* <img
                                src={close}
                                alt="icon"
                                onClick={()=> {
                                    props.closeModal()
                                    props.handleCloseAll && props.handleCloseAll()
                                }}
                                style={{marginLeft:13,width:17}}
                            /> */}
                            <p>{props.title||''}</p>
                        </div>

                            {/*<img*/}
                            {/*    src={close}*/}
                            {/*    alt="icon"*/}
                            {/*    onClick={props.closeModal}*/}
                            {/*/>*/}
                        {/* {!props.disableBack&&<div
                            className={classes.backBtn}
                            onClick={() => {
                                props.closeModal()

                            }}>
                            قبلی
                        </div>} */}

                        <div
                            className={clsx(classes.stepBTN,props.disableSubmit && classes.disabledBtn)}
                            onClick={() => {
                                props.handleSubmit&&props.handleSubmit();
                            }}>
                            تایید
                        </div>

                    </div>
                    {!props.noHeaderDivider && <Divider className={classes.divider}/>}
                </div>
                <div className={props.className || classes.stepContainer} style={props.style||{}}>
                    {props.children}
                </div>

            </>
        </Dialog>
    )
}

export default DialogLayout;