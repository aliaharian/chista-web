import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import useUploadChunk from "../../../../../../customHook/uploadChunk";
import UploadFile from "../../../Content/RegisterToAdviser/Steps/form/uploadFile";

import useStyles from "./Styles";
import { useDispatch } from "react-redux";
import { deleteFile, updateInfo } from "../../../../../../../redux/user";

const EditUpload = ({ adviser }) => {
  const classes = useStyles();

  const Dispatch = useDispatch();

  const {
    uploudChunkFile,
    successUpload,
    arrayID,
    uploadError,
    endInsert,
  } = useUploadChunk();

  const [loading, setLoading] = useState(false);
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
    setErrorMessage({ ...errorMessage, [name]: "" });
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
    setImageFile({ ...imageFile, [name]: [...imageFile[name], file] });
    uploudChunkFile({ [name]: [file] });
  };

  const removeFile = async (name, index, fileId) => {
    if (fileId) {
      const response = await axios.delete(
        `advisor/deleteFile?fileId=${fileId}`
      );
      if (response.data.responseCode) {
        const newFileArray = { ...imageFile };
        newFileArray[name].splice(index, 1);
        setImageFile(newFileArray);
      }
      return;
    }
    const newFileArray = { ...imageFile };
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
      setLoading(false);
      try {
        Dispatch(
          updateInfo({ ...arrayID }, function (res) {
            setLoading(false);
            if (res.id) {
              // handleClose();
              endInsert();
            }
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
    if (uploadError.length > 0) {
      setLoading(false);
      setUploadErrorMesage(true);
    }
  }, [successUpload, adviser]);

  return (
    <div className={classes.editUploadWrapper}>
      <Grid container spacing={4}>
        <Grid item md={8} xs={12}>
          <span className={classes.uploadValidation}>
            مدارک و مجوزها ( حداکثر ۶ عدد، ۱ مگابایت)
          </span>

          <UploadFile
            name="deedFiles"
            handleChange={handleChange}
            imageFile={imageFile.deedFiles}
            numberValidate={5}
            errorMessage={errorMessage}
            removeFile={removeFile}
            size={75}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <span className={classes.uploadValidation}>
            ویدیو ها ( حداکثر ۵ مگابایت)
          </span>

          <UploadFile
            name="videoFiles"
            handleChange={handleChange}
            imageFile={imageFile.videoFiles}
            numberValidate={1}
            accept="video/mp4,video/x-m4v,video/*"
            errorMessage={errorMessage}
            size={75}
            removeFile={removeFile}
          />
        </Grid>
        <Grid item xs={12}>
          <span className={classes.uploadValidation}>
            تصاویر ( حداکثر ۶ عدد ، ۱ مگابایت)
          </span>

          <UploadFile
            name="imageFiles"
            handleChange={handleChange}
            imageFile={imageFile.imageFiles}
            numberValidate={4}
            errorMessage={errorMessage}
            removeFile={removeFile}
            size={75}
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
