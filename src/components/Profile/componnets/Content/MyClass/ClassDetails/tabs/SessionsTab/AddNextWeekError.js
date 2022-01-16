import {Dialog, Divider, Fade, Slide, useTheme , Button} from "@material-ui/core";
import close from "../../../../../../../../assets/images/close.svg";
import React from "react";
import useStyles from "../../../InsertClass/Dialog/Styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SessionTableCell from "./SessionTableCell";
import WarningIcon from "../../../../../../../../assets/images/WarningIcon";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function AddNextWeekError (props){
    const [transition, setTransition] = React.useState(false)
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })
    return(
        <Dialog
            fullScreen
            open={props.open}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={Slide}
            keepMounted
            onClose={props.closeModal}
            PaperProps={{className: classes.root}}
            classes={{
                scrollPaper: classes.dialog
            }}
        >
            <>
                <div className={classes.addClassHeaderWrapper}>
                    <div className={classes.selectAddClassTitle}>
                        <div>

                            {/*<ArrowForwardIcon onClick={handelBack} className={classes.backArrow}/>*/}
                            {/*<p>{props.title||''}</p>*/}
                            <SessionTableCell noAction index={props.data[1]} row={props.data[0]}/>
                        </div>

                        <img
                            src={close}
                            alt="icon"
                            onClick={props.closeModal}
                        />

                    </div>
                    {!props.noHeaderDivider && <Divider className={classes.divider}/>}
                </div>
                <div className={props.className || classes.stepContainer} style={props.style||{}}>
                    <div className={classes.deleteSessionWrapper}>
                        <div className={classes.trashIconContainer}>
                            <WarningIcon />
                        </div>
                        <p>شما در هفته آینده همین ساعت جلسه دیگری دارید</p>

                    </div>
                </div>
            </>
        </Dialog>
    )
}
export default AddNextWeekError