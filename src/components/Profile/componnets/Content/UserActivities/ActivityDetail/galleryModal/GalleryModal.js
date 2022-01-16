import React, { useRef, useState } from "react";
import {
    Backdrop,
    CircularProgress,
    Dialog
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import useStyles from "./Styles";
import DownloadIcon from "../../../../../../../assets/images/DownloadIcon";
import { useDispatch } from "react-redux";
import { withSnackbar } from "notistack";
import { Close } from "@material-ui/icons";
import _ from 'lodash';
const GalleryModal = ({ open, closeModal, enqueueSnackbar, imagesProp, imagesIndexProp, allowedImages }) => {
    const classes = useStyles();
    const linkRef = useRef(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const url = 'chista.ir'
    const [images, setImages] = useState(_.uniqBy(imagesProp, function (e) {
        return e.hashCode;
    }))

    const [selectedImage, setSelectedImage] = useState(imagesIndexProp == -1 ? images[0] : images[imagesIndexProp])
    console.log('imagesIndexProp', imagesIndexProp)
    const downloadFile = (file) => {
        if (file.mimeType === "image/jpeg") {
            let tempLink = document.createElement('a');
            tempLink.href = file.url;
            tempLink.setAttribute('download', 'activity.jpg');
            tempLink.click();
        } else if (file.mimeType === "image/png") {
            let tempLink = document.createElement('a');
            tempLink.href = file.url;
            tempLink.setAttribute('download', 'activity.png');
            tempLink.click();
        }
    }

    console.log('images', images)
    return (
        <Backdrop className={classes.backdrop} open={open} onClick={() => { }}>
            <div className={classes.saveBtn} onClick={() => downloadFile(selectedImage)}><DownloadIcon /></div>
            <div className={classes.closeBtn} onClick={closeModal}><Close /></div>
            <div className={classes.mainImageContainer}>
                <img src={selectedImage?.url || selectedImage?.base} />

            </div>
            <div className={classes.thumbContainer}>
                {
                    allowedImages.map((img) => {
                        let image;
                        let index = images.findIndex(x => x?.hashCode === img)
                        // console.log(index)
                        if (index !== -1) image = images[index]
                        return (
                            image?.url &&

                            <div onClick={() => {
                                setSelectedImage(image)
                            }}>
                                <img src={image?.url} />
                            </div>
                        )
                    })
                }
            </div>
        </Backdrop>
    );
};

export default withSnackbar(GalleryModal);
