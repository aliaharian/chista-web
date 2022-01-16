import React from "react"
import {
    Dialog,
    DialogContent,
    Slide
} from "@material-ui/core"

import { connect, useDispatch } from "react-redux";
import transform from "../../../../../../../utilities/transform";
import useStyles from './styles';

function Fullscreen(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <>
            <Dialog
                maxWidth={false}
                open={props.open}
                transition={Slide}
                keepMounted
                onClose={props.handleClose}
                contentStyle={{ width: "auto" }}
                PaperProps={{ className: classes.root }}
            >
                <DialogContent className={classes.modalContent}>
                    {props.videoFile && <div className={classes.videoItem}>
                        <video width="100%" height="100%" disablePictureInPicture
                            loop
                            controls
                            controlsList="nodownload"  >
                            <source src={transform.getImage(props.videoFile)} type="video/mp4" />
                            <source src={transform.getImage(props.videoFile)} type="video/ogg" />
                            <source src={transform.getImage(props.videoFile)} type="video/3gpp" />
                            <source src={transform.getImage(props.videoFile)} type="video/webm" />
                                            Your browser does not support the video tag.
                                        </video>
                    </div>}
                    {props.imageFile && <div className={classes.imageItem}>
                        <img src={transform.getImage(props.imageFile)} alt="" />
                    </div>}
                </DialogContent>
            </Dialog>
        </>
    )
}

const mapStateToProps = ({ state }) => ({
})

export default connect(
    mapStateToProps,
)(Fullscreen)
