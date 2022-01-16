import React from "react";
import {
    Dialog,
    Divider, Fade,
    Slide,
    useTheme
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./../../../Dialog/Styles";
import close from "../../../../../../../../../assets/images/close.svg";
import clsx from "clsx";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function DialogLayout(props) {
    const [transition, setTransition] = React.useState(false)
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })

    return (
        <Dialog
            fullScreen={props.fullScreen || isMobile}
            open={props.open}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={Slide}
            keepMounted
            BackdropProps= {{
                style: props.transparent ?{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  }:{},
            }}
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
                            <img
                                src={close}
                                alt="icon"
                                onClick={()=> {
                                    props.closeModal()
                                    props.handleCloseAll && props.handleCloseAll()
                                }}
                                style={{marginLeft:13,width:17}}
                            />
                            <p>{props.title||''}</p>
                        </div>
                        {!props.disableBack&&<div
                            className={classes.backBtn}
                            onClick={() => {
                                props.closeModal()
                            }}>
                            قبلی
                        </div>}
                        <div
                            className={classes.stepBTN}
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