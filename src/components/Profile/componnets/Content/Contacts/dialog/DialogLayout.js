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

import React, { useRef, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./Styles";
import Back from "../../../../../../assets/images/ArrowBack";
import closeIcon from "../../../../../../assets/images/close.svg";
import clsx from "clsx";
function Transition(props) {
    return <Slide direction="up" {...props} timeout={500} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function DialogLayout(props) {
    const [transition, setTransition] = React.useState(false)
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));

    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })
    const scrollRef = useRef();
    const [addListShadow, setAddListShadow] = useState('none');

    const handleScroll = () => {
        // console.log(scrollRef.current.offsetTop - scrollRef.current.scrollTop + scrollRef.current.clientTop)
        let distance = scrollRef.current.offsetTop - scrollRef.current.scrollTop + scrollRef.current.clientTop
        if (props.setShadow) {
            if (distance > 45) {
                setAddListShadow('none')
            } else {
                setAddListShadow('0 3px 6px #00053412')
            }
        }
    }
    return (

        <Dialog
            fullScreen
            open={props.open}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={Slide}
            keepMounted
            style={props.rootStyle}
            onClose={props.closeModal}
            BackdropProps={{
                className: classes.backdropRoot
            }}
            BackdropProps={{
                style: props.transparent ? {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                } : {},
            }}
            PaperProps={{
                className: clsx(classes.root, props.className?.root),

            }}
            classes={{
                scrollPaper: classes.dialog
            }}
        >
            <>
                {!props.noHeader &&
                    <div className={clsx(classes.addClassHeaderWrapper, props.headerClass || '')} style={{ boxShadow: addListShadow, ...props.headerStyle } || { boxShadow: addListShadow }}>
                        <div className={classes.selectAddClassTitle}>
                            <div>
                                {props.customBack &&
                                    <img
                                        src={closeIcon}
                                        alt="icon"
                                        style={{ width: 20, marginLeft: 8, zIndex: 999999 }}
                                        onClick={props.closeModal}
                                    />

                                }
                                {!props.withCloseIcon && !props.customBack && <Back
                                    viewBox="0 0 22 22"
                                    style={{ marginLeft: 10, zIndex: 999999 }}
                                    onClick={props.closeModal}
                                />}
                                {
                                    props.withCloseIcon &&
                                    <img
                                        src={closeIcon}
                                        alt="icon"
                                        style={{ width: 20, marginLeft: 8, zIndex: 999999 }}
                                        onClick={props.closeModal}
                                    />
                                }
                                <p>{props.title || ''}</p>
                            </div>

                            {/* {
                            props.withCloseIcon &&
                            <img
                                src={closeIcon}
                                alt="icon"
                                style={{width: 20}}
                                onClick={props.closeModal}
                            />
                        } */}

                        </div>
                        <Divider className={classes.divider} style={addListShadow === 'none' ? { display: 'block' } : { display: 'none' }} />
                    </div>
                }

                <div id={props.id} className={clsx(classes.stepContainer , props.hasScroll&& classes.scrollContainer)} ref={scrollRef} onScroll={() => handleScroll()} style={props.style || {}}>
                    {props.children}
                </div>

            </>
        </Dialog>
    )
}

export default DialogLayout;