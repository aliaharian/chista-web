import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import DeleteIcon from '../../../../../../../assets/images/trashIcon.svg'
import InputForm from "../../../../form/InputForm";
import Blackboard from "../../../../../../../assets/images/profile/BlackboardSidebar";
import blackboardIcon from '../../../../../../../assets/images/profile/blackboardSidebar.svg'
import Note from "../../../../../../../assets/images/note.svg";
import photoIcon from "../../../../../../../assets/images/photoIcon.svg";
import cameraPhoto from "../../../../../../../assets/images/cameraPhoto.svg";
import avatarIcon from "../../../../../../../assets/images/avatarEdit.svg";
import ChistaTextField from '../../../../../../Kit/Inputs/ChistaTextField'
import ChistaButton from '../../../../../../Kit/Buttons/ChistaButton';
import classes from '../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import { numberFormat, transform } from "../../../../../../../utilities";
import { withSnackbar } from "notistack";

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, "نام نباید کمتر از 2 کاراکتر باشد")
        .max(30, "نام نباید بیشتر از 30 کاراکتر باشد")
        .required("نام کلاس را وارد نمایید"),

});

const BasicInfo = ({ handelStep, initialValues, ...props }) => {
    // const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState("");
    const [photo, setPhoto] = useState(initialValues.photo || "");
    const [photoBase64, setPhotoBase64] = useState("");
    const selectFile = useRef();

    const handleChange = (e) => {
        setErrorMessage("");
        if (e.target.files[0]?.size > 1000000) {
            props.enqueueSnackbar('حجم عکس انتخابی بیش از یک مگابایت است', {
                variant: 'error',
                // persist:true,
                style: {},
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
            });
            setErrorMessage("حجم عکس انتخابی بیش از یک مگابایت است");
            return;
        }
        setPhoto(URL.createObjectURL(e.target.files[0]));

        setPhoto(e.target.files[0]);
        transform.getBase64(e.target.files[0], (result) => {
            setPhotoBase64(result);
        });
    };

    const deletePhoto = (e) => {
        e.preventDefault();
        setErrorMessage("");
        setPhoto("");
        selectFile.current.value = ''

    };

    const formik = useFormik({
        initialValues: {
            title: "",
            about: "",
            ...initialValues,
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            handelStep("addMember", {
                ...values,
                photo,
                photoBase64,
            });
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid>
                    <div className={classes.rightSide}>
                        
                        <div className={classes.imageWrapper}>
                            <label className={classes.borderWrapper}>
                                <input
                                    style={{ display: "none" }}
                                    id={"photo"}
                                    name={"photo"}
                                    type="file"
                                    onChange={handleChange}
                                    accept="image/*"
                                    ref={selectFile}
                                />
                                {photo ? (
                                    <div className={classes.imageUploaded}>
                                        {photo && (
                                            <img
                                                src={URL.createObjectURL(photo)}

                                                className={classes.image}
                                            />
                                        )}

                                        <div className={classes.deleteIcon} onClick={deletePhoto}>
                                            <img src={DeleteIcon} style={{ width: 24 }} />
                                        </div>
                                        <div className={classes.imageBadge}>
                                            <img src={avatarIcon} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className={classes.image}>
                                        <img src={cameraPhoto} alt="" />
                                    </div>
                                )}
                            </label>

                        </div>
                    </div>
                    <div className={classes.baseInfoContainer}>
                        <div>
                            <ChistaTextField
                                customClassContainer={classes.myClassNameContainer}
                                // titleClassName
                                title="نام کلاس"
                                isRequired
                                inError={formik.errors['title'] && formik.touched['title']}
                                icon={blackboardIcon}
                                errorIcon={blackboardIcon}
                                onChange={e => formik.setFieldValue('title', numberFormat.toPersianDigits(e.target.value))}
                                placeholder={'مثلا: ریاضی'}
                                inputValue={formik.values['title']}
                                inputClassName={classes.myClassNameInput}
                                // lastIcon
                                // errorTextClassName
                                errorText={formik.errors['title']}
                            />

                        </div>

                    </div>
                </Grid>
                <div className={classes.stepBtnContainer}>
                    <ChistaButton>بعدی</ChistaButton>
                </div>

            </form>
        </div>
    );
};

export default memo(withSnackbar(BasicInfo));
