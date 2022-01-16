import React from 'react';
import useStyles from './styles';
import { Button, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import noMoreImg from "../../../../../../assets/images/no-more-pic-img.png";
import ScrollContainer from "react-indiana-drag-scroll";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import transform from "../../../../../../utilities/transform";
import Fullscreen from "./FullScreen/Fullscreen";

function AdviserGallery(props) {
    const classes = useStyles();
    const galleryInner = React.useRef(null);
    const [openFullsreen, setOpenFullscreen] = React.useState(false);
    const [imageFile, setImageFile] = React.useState(null);
    const [videoFile, setVideoFile] = React.useState(null);

    function galleryNext() {
        galleryInner.current.getElement().scrollTo(galleryInner.current.getElement().scrollLeft + (-270), 0);
    }

    function openFullScreen(file, type) {
        setOpenFullscreen(true);
        switch (type) {
            case 'video':
                setVideoFile(file);
                break;
            case 'image':
                setImageFile(file);
                break;
        }
    }

    function closeFullScreen() {
        setOpenFullscreen(false);
        setVideoFile(null);
        setImageFile(null);
    }
    return (
        <>
            <Fullscreen open={openFullsreen} handleClose={closeFullScreen} videoFile={videoFile} imageFile={imageFile} />
            <div className={classes.galleryWrapper}>
                <ScrollContainer vertical={false} horizontal={true} className={classes.galleryInner} ref={galleryInner}>
                    {props.videoFiles.length > 0 && props.videoFiles.map((item) => {
                        return (
                            <div className={classes.galleryVideoItemWrapper} onClick={() => { openFullScreen(item.file, 'video') }}>
                                <video width="100%" height="100%" >
                                    <source src={transform.getImage(item.file)} type="video/mp4" key={'vido' + item.id} />
                                    <source src={transform.getImage(item.file)} type="video/ogg" key={'vido' + item.id} />
                                    <source src={transform.getImage(item.file)} type="video/3gpp" key={'vido' + item.id} />
                                    <source src={transform.getImage(item.file)} type="video/webm" key={'vido' + item.id} />
                                    Your browser does not support the video tag.
                                </video>
                                <IconButton aria-label="delete" className={classes.margin}>
                                    <PlayArrowIcon fontSize="large" />
                                </IconButton>
                            </div>
                        );
                    })}
                    {props.imageFiles.length > 0 && props.imageFiles.map((item) => {
                        return (
                            <div className={classes.galleryImageItemWrapper} onClick={() => { openFullScreen(item.file, 'image') }}>
                                <img src={transform.getImage(item.file)} alt="" />
                            </div>
                        );
                    })}
                    {props.imageFiles.length === 0 && <div className={classes.noImageContainer}><img src={noMoreImg} className={classes.noImg} alt="" /></div>}
                </ScrollContainer>
                {(props.imageFiles.length + props.videoFiles.length) > 3 && <Button className={classes.galleryNextBtn} onClick={galleryNext} endIcon={<ChevronLeftIcon style={{ color: '#4F5563', fontSize: "32px" }} />} />}
            </div>
        </>
    );
}

AdviserGallery.propTypes = {};

export default AdviserGallery;
