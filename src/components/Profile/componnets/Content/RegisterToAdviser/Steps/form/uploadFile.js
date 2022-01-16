import React from "react";
import clsx from "clsx";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CloseIcon from '@material-ui/icons/Close';
import errorIcon from "../../../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import {transform} from "../../../../../../../utilities";
import trashIcon from '../../../../../../../assets/images/trashIcon.svg'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {createMuiTheme} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});

const UploadFile = ({
                        name,
                        handleChange,
                        imageFile,
                        numberValidate,
                        accept,
                        errorMessage,
                        removeFile,
                        multiple,
                        size = 120,
                        loading,
                        deleteValid,
                    }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    console.log('loading' , loading)
    return (

        <>
            <div
                className={clsx(
                    classes.uploadWrapper,
                    imageFile.length === numberValidate ? classes.numberValidate : ""
                )}
                style={{marginBottom: 21}}
            >
                {imageFile.length > 0 &&

                imageFile.map((item, index) => (
                    <div className={classes.previewWrapper} style={{
                        backgroundImage: `url(${typeof item.file === "string"
                            ? transform.getImage(item.file)
                            : ''})`
                    }}>
                        {/*: URL.createObjectURL(item)})`}}>*/}
                        {name === "videoFiles" ? (
                            <video
                                style={{maxHeight: size, maxWidth: size}}
                                // poster={typeof item.file === "string"
                                //     ? transform.getImage(item.file)
                                //     : URL.createObjectURL(item)}
                                src={
                                    typeof item.file === "string"
                                        ? transform.getImage(item.file)
                                        : URL.createObjectURL(item)
                                }
                            />
                        ) : (
                            <></>
                            // <img
                            //     style={{maxHeight: '100%', maxWidth: '100%'}}
                            //     key={index}
                            //     src={
                            //         typeof item.file === "string"
                            //             ? transform.getImage(item.file)
                            //             : URL.createObjectURL(item)
                            //     }
                            // />
                        )}

                        {
                            (loading) && index === imageFile.length-1 &&(
                                <div className={classes.loadingOverlay}>
                                    <CircularProgress />

                                </div>
                            )

                        }

                        {deleteValid && (
                            <div className={classes.deleteOverlay}
                                 onClick={() => removeFile(name, index, item.id || null)}>
                                <img src={trashIcon} alt="حذف"/>
                            </div>

                        )}


                    </div>
                ))}
                <label htmlFor={name}>
                    <input
                        style={{display: "none"}}
                        multiple={multiple}
                        id={name}
                        name={name}
                        type="file"
                        onChange={(e) => handleChange(e.target.files[0], name)}
                        accept={accept}
                    />
                    <AddCircleOutlineOutlinedIcon/>
                    <p>افزودن</p>
                </label>
            </div>
            {errorMessage[name] && (
                <p className={classes.errorMessage}>
                    <img src={errorIcon} alt=""/>
                    <span>{errorMessage[name]}</span>
                </p>
            )}
        </>
    );
};

export default UploadFile;
