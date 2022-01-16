import React, { useEffect, useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import clsx from "clsx";

import UploadFile from "./form/uploadFile";
import useUploadChunk from "../../../../../../customHook/uploadChunk";

import useStyles from "./Styles";
import checkboxEmpty from "../../../../../../assets/images/checkbox-empty.svg";
import checkboxChecked from "../../../../../../assets/images/checkbox-checked.svg";
import CheckboxForm from "../../../form/CheckboxForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Upload = ({ handelStep }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [uploadErrorMesage, setUploadErrorMesage] = useState(false);

  const [imageFile, setImageFile] = useState({
    deedFiles: [],
    videoFiles: [],
    imageFiles: [],
  });
  const [errorMessage, setErrorMessage] = useState({
    deedFiles: "",
    videoFiles: "",
    imageFiles: "",
  });

  const {
    uploudChunkFile,
    successUpload,
    arrayID,
    uploadError,
  } = useUploadChunk();

  const [checkboxPolicy, setCheckboxPolicy] = useState(false);

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
  };

  const removeFile = (name, index) => {
    console.log(name, index);
    const newFileArray = { ...imageFile };
    newFileArray[name].splice(index, 1);
    setImageFile(newFileArray);
  };

  const handleChangePolicy = () => {
    setCheckboxPolicy(!checkboxPolicy);
  };

  const onsubmit = () => {
    setUploadErrorMesage(false);
    setLoading(true);
    if (Object.keys(imageFile).some((item) => imageFile[item].length > 0)) {
      uploudChunkFile(imageFile);
      return;
    }
    handelStep("end", arrayID);
  };

  useEffect(() => {
    console.log("successUpload", successUpload, arrayID);
    if (successUpload) {
      setLoading(false);
      handelStep("end", arrayID);
    }
    if (uploadError.length > 0) {
      setLoading(false);
      setUploadErrorMesage(true);
    }
  }, [successUpload]);

  return (
    <div className={classes.uploadWrapper}>
      <Grid container spacing={4}>
        <Grid item md={8} xs={12} className={classes.uploadContainer}>
          <p
            className={clsx(
              classes.uploadTitle
              , classes.uploadTitleReq
            )}
          >
            مجوزها و مدارک تحصیلی
          </p>
          <span className={classes.uploadValidation}>
            (حداکثر ۱۰ عدد، یک مگابایت)
          </span>
          <p className={classes.uploadDescription}>
            این تصاویر در اختیار کاربران قرار نخواهد گرفت
          </p>
          <UploadFile
            name="deedFiles"
            handleChange={handleChange}
            imageFile={imageFile.deedFiles}
            numberValidate={5}
            errorMessage={errorMessage}
            removeFile={removeFile}
            deleteValid
          />
        </Grid>
        <Grid item md={4} xs={12} className={classes.uploadContainer}>
          <p className={classes.uploadTitle}>ویدیوی معرفی </p>
          <span className={classes.uploadValidation}>
            (حداکثر ۱ عدد، 60 مگابایت)
          </span>
          <p className={classes.uploadDescription}>
            این ویدیو برای عموم قابل مشاهده است
          </p>
          <UploadFile
            name="videoFiles"
            handleChange={handleChange}
            imageFile={imageFile.videoFiles}
            numberValidate={1}
            accept="video/mp4,video/x-m4v,video/*"
            errorMessage={errorMessage}
            removeFile={removeFile}
            deleteValid
          />
        </Grid>
        <Grid item xs={12} className={classes.uploadContainer}>
          <p className={classes.uploadTitle}>تصاویر من</p>
          <span className={classes.uploadValidation}>
            ( حداکثر ۴ عدد ، یک مگابایت)
          </span>
          <p className={classes.uploadDescription}>
            این تصاویر برای عموم قابل مشاهده است
          </p>
          <UploadFile
            name="imageFiles"
            handleChange={handleChange}
            imageFile={imageFile.imageFiles}
            numberValidate={4}
            errorMessage={errorMessage}
            removeFile={removeFile}
            deleteValid
          />
        </Grid>
      </Grid>

      <div className={classes.categoryFooter}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxPolicy}
              onChange={handleChangePolicy}
              name="policy"
              icon={<img src={checkboxEmpty} alt=""/>}
              checkedIcon={<img src={checkboxChecked} alt=""/>}
            />
          }
          label={
            <p>
              شرایط
              <a href="#" className={classes.policy}>&nbsp;قوانین و مقررات&nbsp;</a>
              را قبول دارم
            </p>
          }
        />
        <button
          onClick={onsubmit}
          type="submit"
          className={clsx(
            classes.submitBtn,
            checkboxPolicy ? "" : classes.disableBtn,
            loading ? classes.disableBtn : ""
          )}
        >
          {loading ? (
            <CircularProgress
              color="primary"
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <span>تایید</span>
          )}
        </button>
      </div>
      {uploadErrorMesage && (
        <p className={classes.errorMessage}>
          مشکلی رخ داده است لطفا مجدد تلاش نمایید
        </p>
      )}
    </div>
  );
};

export default Upload;
