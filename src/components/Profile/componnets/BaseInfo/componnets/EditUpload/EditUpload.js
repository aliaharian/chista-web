import React, {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@material-ui/core";
import clsx from "clsx";
import useUploadChunk from "../../../../../../customHook/uploadChunk";
import UploadFile from "../../../Content/RegisterToAdviser/Steps/form/uploadFile";

import useStyles from "./Styles";
import {useDispatch} from "react-redux";
import {deleteFile, errorSnackbar, updateInfo} from "../../../../../../../redux/user";
import {numberFormat} from "../../../../../../utilities";

const EditUpload = ({adviser}) => {
    const classes = useStyles();

    const Dispatch = useDispatch();

    const {
        uploudChunkFile,
        successUpload,
        arrayID,
        uploadError,
        endInsert,
    } = useUploadChunk();

    const [loading, setLoading] = useState([false,'deedFiles'] );
    const [uploadErrorMesage, setUploadErrorMesage] = useState(false);
    const [imageFile, setImageFile] = useState({
        deedFiles: [...adviser.deedFiles.map((item) => item)],
        videoFiles: [...adviser.videoFiles.map((item) => item)],
        imageFiles: [...adviser.imageFiles.map((item) => item)],
    });
    const [errorMessage, setErrorMessage] = useState({
        deedFiles: "",
        videoFiles: "",
        imageFiles: "",
    });

    const handleChange = (file, name) => {
        setErrorMessage({...errorMessage, [name]: ""});
        setUploadErrorMesage(false);
        if (name === "videoFiles" && file.size > 60000000) {
            setErrorMessage({
                ...errorMessage,
                videoFiles: "حجم ویدئو نباید بیشتر از 60 مگابایت باشد",
            });

            return;
        }
        if (name !== "videoFiles" && file.size > 1000000) {
            setErrorMessage({
                ...errorMessage,
                [name]: "حجم عکس نباید بیشتر از 1 مگابایت باشد",
            });

            return;
        }
        setLoading([true , name]);

        setImageFile({...imageFile, [name]: [...imageFile[name], file]});

        uploudChunkFile({[name]: [file]});
    };

    const removeFile = async (name, index, fileId) => {
        if (fileId) {
            const response = await axios.delete(
                `advisor/deleteFile?fileId=${fileId}`
            );
            if (response.data.responseCode) {
                const newFileArray = {...imageFile};
                newFileArray[name].splice(index, 1);
                setImageFile(newFileArray);
            }
            return;
        }
        const newFileArray = {...imageFile};
        newFileArray[name].splice(index, 1);
        setImageFile(newFileArray);
    };

    useEffect(() => {
        setImageFile({
            deedFiles: [...adviser.deedFiles.map((item) => item)],
            videoFiles: [...adviser.videoFiles.map((item) => item)],
            imageFiles: [...adviser.imageFiles.map((item) => item)],
        });
        if (successUpload) {
            try {
                Dispatch(
                    updateInfo({...arrayID}, function (res) {
                        // setLoading(false);
                        if (res.id) {
                            // handleClose();
                            endInsert();
                        }
                    })
                );
            } catch (err) {
                Dispatch(errorSnackbar(err));
            }

            setTimeout(()=>{
                setLoading([false , loading[1]]);
            },500)

        }
        if (uploadError.length > 0) {
            setLoading([false , loading[1]]);
            setUploadErrorMesage(true);
        }
    }, [successUpload, adviser]);

    return (
        <div className={classes.editUploadWrapper}>
            <Grid container spacing={4}>
                <Grid item md={8} xs={12}>
          <span className={clsx(classes.uploadValidation)}>
              <p className={classes.uploadTitleReq}>
            مجوز ها و مدارک تحصیلی
              </p>
            <span>
                {numberFormat.toPersianDigits(
                    `( حداکثر 5 عدد، ۱ مگابایت)`
                )}
            </span>
          </span>
                    <div className={clsx(classes.uploadNote)}>
            <span>
این تصاویر در اختیار کاربران قرار نخواهد گرفت
            </span>
                    </div>

                    <UploadFile
                        name="deedFiles"
                        handleChange={handleChange}
                        imageFile={imageFile.deedFiles}
                        numberValidate={5}
                        errorMessage={errorMessage}
                        removeFile={removeFile}
                        loading={loading[1]==='deedFiles'?loading[0]:false}
                        size={120}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
          <span className={classes.uploadValidation}>
              <p>
                 ویدیو معرفی
              </p>
              <span>
                   ( حداکثر ۱ عدد، ۶۰ مگابایت)
              </span>
          </span>
                    <div className={clsx(classes.uploadNote)}>
            <span>
این ویدیو برای عموم قابل مشاهده است
            </span>
                    </div>

                    <UploadFile
                        name="videoFiles"
                        handleChange={handleChange}
                        imageFile={imageFile.videoFiles}
                        numberValidate={1}
                        accept="video/mp4,video/x-m4v,video/*"
                        errorMessage={errorMessage}
                        size={120}
                        loading={loading[1]==='videoFiles'?loading[0]:false}
                        removeFile={removeFile}
                        deleteValid
                    />
                </Grid>
                <Grid item xs={12}>
          <span className={classes.uploadValidation}>
              <p>
                  تصاویر من
              </p>
              <span>
  {numberFormat.toPersianDigits(
      `( حداکثر 4 عدد، ۱ مگابایت)`
  )}              </span>
          </span>
                    <div className={clsx(classes.uploadNote)}>
            <span>
این عکسها برای عموم قابل مشاهده است
            </span>
                    </div>


                    <UploadFile
                        name="imageFiles"
                        handleChange={handleChange}
                        imageFile={imageFile.imageFiles}
                        numberValidate={4}
                        errorMessage={errorMessage}
                        removeFile={removeFile}
                        size={120}
                        loading={loading[1]==='imageFiles'?loading[0]:false}
                        deleteValid
                    />
                </Grid>
            </Grid>

            {uploadErrorMesage && (
                <p className={classes.errorMessage}>
                    مشکلی رخ داده است لطفا مجدد تلاش نمایید
                </p>
            )}
        </div>
    );
};

export default EditUpload;
