import React from "react";
import clsx from "clsx";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import errorIcon from "../../../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import { transform } from "../../../../../../../utilities";

const UploadFile = ({
  name,
  handleChange,
  imageFile,
  numberValidate,
  accept,
  errorMessage,
  removeFile,
  multiple,
  size = 100,
  deleteValid,
}) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={clsx(
          classes.uploadWrapper,
          imageFile.length === numberValidate ? classes.numberValidate : ""
        )}
      >
        {imageFile.length > 0 &&
          imageFile.map((item, index) => (
            <div className={classes.previewWrapper}>
              {name === "videoFiles" ? (
                <video
                  style={{ height: size, width: size }}
                  src={
                    typeof item.file === "string"
                      ? transform.getImage(item.file)
                      : URL.createObjectURL(item)
                  }
                />
              ) : (
                <img
                  style={{ height: size, width: size }}
                  key={index}
                  src={
                    typeof item.file === "string"
                      ? transform.getImage(item.file)
                      : URL.createObjectURL(item)
                  }
                />
              )}

              {deleteValid && (
                <CancelRoundedIcon
                  onClick={() => removeFile(name, index, item.id || null)}
                />
              )}
            </div>
          ))}
        <label htmlFor={name} style={{ height: size, width: size }}>
          <input
            style={{ display: "none" }}
            multiple={multiple}
            id={name}
            name={name}
            type="file"
            onChange={(e) => handleChange(e.target.files[0], name)}
            accept={accept}
          />
          <AddCircleOutlineOutlinedIcon />
          <p>افزودن</p>
        </label>
      </div>
      {errorMessage[name] && (
        <p className={classes.errorMessage}>
          <img src={errorIcon} alt="" />
          <span>{errorMessage[name]}</span>
        </p>
      )}
    </>
  );
};

export default UploadFile;
