import React, { useEffect, useRef, useState } from 'react';
import useStyles from './styles';
import {
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide
} from "@material-ui/core";
import { connect } from "react-redux";

import { transform } from "../../../../../../utilities";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import addIconCircle from "../../../../../../assets/images/addIconCircle.png";
import { updateInfo, loadUser, deleteFile, showMessage } from "../../../../../../../redux/user";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';




function Videos(props) {
    const classes = useStyles();
    const [files, setFiles] = useState(props.images);
    const selectFile = useRef();


    function handleSelectFile(event) {
        var reader = new FileReader();
        var file = event.target.files[0];
        if (!file) {
            return;
        }
        let filesize = ((file.size / 1024) / 1024).toFixed(4);// MB
        if (filesize > props.fileSize) {
            props.showMessage('حجم فایل انتخابی بیش از حد مجار است!');
            return;
        }

        reader.onload = function (upload) {


            let tempFiles = [...files, { file: upload.target.result, id: transform.GenerateUUID(), local: true }];
            setFiles(tempFiles);
            props.updateInfo({ videoFiles: tempFiles.filter(item => item.local === true).map((item) => ({ file: item.file })) }, (response) => { setFiles(response.videoFiles) });
            selectFile.current.value = '';
        };
        reader.readAsDataURL(file);
    }
    function removeItem(id) {
        try {
            let tempFiles = [...files];
            tempFiles = tempFiles.filter(item => item.id !== id);

            props.deleteFile(id, () => { setFiles(tempFiles) })
        } catch (e) { console.log(e) }
    };
    return (

        <>

            <Grid container spacing={1} direction={"column"} alignItems="flex-start" justify='space-between' style={{ margin: '8px 0', width: "100%" }} >
                <div className={classes.fileBoxTitle}>
                    <Typography className={classes.inputLabel}>فیلم ها( حداکثر {props.countLimit} فایل  {props.fileSize} مگابایت)</Typography>
                </div>
                <div className={classes.filesRoot} >
                    <input type="file" style={{ display: 'none' }} onChange={handleSelectFile} ref={selectFile} accept={props.acceptFiles} />
                    {files.map((item) => (<div className={classes.item} key={item.id}>
                        {props.load ? (
                            <CircularProgress
                                color="primary"
                                style={{ width: 20, height: 20 }}
                            />
                        ) : (
                                <>
                                    <video width="100%" height="100%" >
                                        <source src={item.local ? item.file : transform.getImage(item.file)} type="video/mp4" key={'vido' + item.id} />
                                        <source src={item.local ? item.file : transform.getImage(item.file)} type="video/ogg" key={'vido' + item.id} />
                                        <source src={item.local ? item.file : transform.getImage(item.file)} type="video/3gpp" key={'vido' + item.id} />
                                        <source src={item.local ? item.file : transform.getImage(item.file)} type="video/webm" key={'vido' + item.id} />
                                        Your browser does not support the video tag.
                                    </video>
                                    <IconButton aria-label="play" className={classes.palyIcon}>
                                        <PlayArrowIcon fontSize="large" />
                                    </IconButton>
                                    <DeleteForeverIcon className={classes.removeIcon} key={'delete' + item.id} onClick={() => { removeItem(item.id) }} />
                                </>
                            )}

                    </div>))}
                    {props.countLimit > files.length && <div className={classes.addItemBtn} onClick={() => { selectFile.current.click() }}>
                        <img src={addIconCircle} />
                        <Typography component={'span'}>افزودن</Typography>
                    </div>}

                </div>
            </Grid>
        </>
    );
}

Videos.propTypes = {

};
const mapStateToProps = (state) => {



    return {
        user: state.user.user,
        load: state.user.load
    }
}

export default connect(
    mapStateToProps,
    { updateInfo, loadUser, deleteFile, showMessage }
)(Videos);

