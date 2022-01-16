import React, { useRef, useState } from "react"
import {
    Typography,
    CircularProgress,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import addIconCircle from '../../assets/images/addIconCircle.png'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import classNames from "classnames";
import { transform } from "../../utilities";
import { showMessage } from "../../../redux/user";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: "flex-start",
        padding: 8
    },
    item: {
        width: 98,
        marginLeft: 8,
        height: 98,
        position: 'relative',
        border: "1px solid #92a4bb",
        borderRadius: 18,
        overflow: 'hidden',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& svg': {
            fontSize: '20px',
            position: 'absolute',
            bottom: 6,
            left: 6,
            cursor: "pointer"
        },
        '& img':
        {
            width: "100%",
            height: '100%'
        }
    },
    videoItem: {
        width: 124
    },
    addItemBtn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 98,
        marginLeft: 4,
        cursor: "pointer",
        height: 98,
        backgroundColor: 'rgba(189, 200, 214, 0.17)',
        border: "1px dashed #92a4bb",
        borderRadius: 18,
        '& span': {
            color: '#536b88',
            fontSize: 14,
            fontFamily: theme.font.regular,
        },
        '& img': {
            width: "30px!important",
            height: "30px!important",
        },
        removeIcon: {
            backgroundColor: "#00000052",
            color: "#fff",
            borderRadius: "4px",
        }
    }
}));

const Files = (props) => {
    const [files, setfiles] = useState([]);
    const [fileLoad, setFilLoad] = useState(false);
    const selectFile = useRef();
    const classes = useStyles();

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

        setFilLoad(true);
        reader.onload = function (upload) {
            let tempFiles = null;
            if (props.type === 'video') {

                let blobURL = URL.createObjectURL(file);
                tempFiles = [...files, { file: upload.target.result, blobURL: blobURL, uuid: transform.GenerateUUID() }];
            } else {
                tempFiles = [...files, { file: upload.target.result, uuid: transform.GenerateUUID() }];
            }
            setfiles(tempFiles);
            setFilLoad(false);
            props.input.onChange(tempFiles)
            selectFile.current.value = '';
        };
        reader.readAsDataURL(file);
    }
    function removeItem(uuid) {
        try {
            setFilLoad(true);
            let tempFiles = [...files];
            tempFiles = tempFiles.filter(item => item.uuid !== uuid);

            setfiles(tempFiles);
            setFilLoad(false);
            props.input.onChange(tempFiles)
        } catch (e) { }
    };
    return (
        <div className={classes.root} >
            <input type="file" style={{ display: 'none' }} onChange={handleSelectFile} ref={selectFile} accept={props.acceptFiles} />
            {files.map((item) => (<div className={classNames(classes.item, {
                [classes.videoItem]: props.type === 'video'
            })} key={item.uuid}>
                {props.type === 'video' ?
                    <>
                        {fileLoad ? (
                            <CircularProgress
                                color="primary"
                                style={{ width: 20, height: 20 }}
                            />
                        ) : (
                                <video width="100%" height="100%" >
                                    <source src={item.blobURL} type="video/mp4" key={'vido' + item.uuid} />
                                    <source src={item.blobURL} type="video/ogg" key={'vido' + item.uuid} />
                                    <source src={item.blobURL} type="video/3gpp" key={'vido' + item.uuid} />
                                    <source src={item.blobURL} type="video/webm" key={'vido' + item.uuid} />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                    </>
                    :
                    <>
                        {fileLoad ? (
                            <CircularProgress
                                color="primary"
                                style={{ width: 20, height: 20 }}
                            />
                        ) : (
                                <img src={item.file} key={'img' + item.uuid} style={{ width: "100%", height: "100%", color: "#fff" }} />
                            )}
                    </>
                }
                <DeleteForeverIcon className={classes.removeIcon} key={'delete' + item.uuid} onClick={() => { removeItem(item.uuid) }} />
            </div>))}
            {props.countLimit > files.length && <div className={classes.addItemBtn} onClick={() => { selectFile.current.click() }}>
                <img src={addIconCircle} />
                <Typography component={'span'}>افزودن</Typography>
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { showMessage })(Files)
