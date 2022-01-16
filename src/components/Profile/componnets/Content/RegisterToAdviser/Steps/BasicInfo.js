import React, { useState, memo } from "react";
import Axios from "axios";
import { useFormik, ErrorMessage } from "formik";
import useStyles from "./Styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputForm from "./../../../form/InputForm";
import SelectForm from "./../../../form/SelectForm";
import CalendarForm from "./../../../form/CalendarForm";
import * as Yup from "yup";
import {Button, Grid} from "@material-ui/core";
import userIcon from "../../../../../../assets/images/profile/registerOstad/User.svg";
import sexIcon from "../../../../../../assets/images/profile/registerOstad/Gender.svg";
import calenderIcon from "../../../../../../assets/images/profile/registerOstad/Calendar.svg";
import nationalIcon from "../../../../../../assets/images/profile/registerOstad/UserCard.svg";
import shebaIcon from "../../../../../../assets/images/profile/registerOstad/Bank.svg";
import { numberFormat } from "../../../../../../utilities";
import jMoment from "moment-jalaali";

import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2,numberFormat.toPersianDigits( "نام نباید کمتر از 2 کاراکتر باشد"))
    .max(30,numberFormat.toPersianDigits( "نام نباید بیشتر از 30 کاراکتر باشد"))
    .required("پر کردن این فیلد الزامی می باشد"),
  lastName: Yup.string()
    .min(2, numberFormat.toPersianDigits("نام خانوادگی نباید کمتر از 2 کاراکتر باشد"))
    .max(60,numberFormat.toPersianDigits( "نام خانوادگی نباید بیشتر از 60 کاراکتر باشد"))
    .required("پر کردن این فیلد الزامی می باشد"),
  birthTime: Yup.string().required("پر کردن این فیلد الزامی می باشد"),
  male: Yup.boolean().required("پر کردن این فیلد الزامی می باشد"),
  nationalCode: Yup.string().test("len",numberFormat.toPersianDigits( "کدملی باید 10 رقم باشد"), (val) => {
    if (val) return val.toString().length === 10;
  }),
  // sheba: Yup.string()
  //   .notRequired()
  //   .test("len", "شماره شبا باید 24 رقم باشد", (val) => {
  //     if (val) return val.toString().length === 27;
  //   }),
});

const BasicInfo = ({ handelStep, initialValues }) => {
  const classes = useStyles();
  const userName = useSelector((state) => state.user.user.username);
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthTime: "",
      male: "",
      nationalCode: "",
      sheba: "",
      ...initialValues,
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { firstName, lastName, sheba, nationalCode, birthTime } = values;
      const shebaNormal = numberFormat.toEnglishDigits(
        sheba.replaceAll("-", "")
      );
      const nationalCodeNormal = numberFormat.toEnglishDigits(
        nationalCode.replace("-", "")
      );
      const birthTimeNormal = jMoment(birthTime).unix();

      try {
        const response = await Axios.post(`/advisor/verify`, {
          username: userName,
          firstName: firstName,
          lastName: lastName,
          sheba: shebaNormal,
          nationalCode: nationalCodeNormal,
        });
        if (response.data.message === "true") {
          const { sheba, birthTime, nationalCode, ...param } = values;
          handelStep("category", {
            sheba: shebaNormal,
            birthTime: birthTimeNormal,
            nationalCode: nationalCodeNormal,
            ...param,
          });
        }
      } catch (err) {
        setErrorMessage(err.response.data.message);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container className={classes.formContainer} spacing={3}>
          <Grid>
            <InputForm
              label="نام"
              name={"firstName"}
              formik={formik}
              icon={userIcon}
              required
            />
          </Grid>
          <Grid>
            <InputForm
              label="نام خانوادگی"
              name={"lastName"}
              formik={formik}
              icon={userIcon}
              required
            />
          </Grid>
          <Grid >
            <InputForm
                label="کد ملی"
                name={"nationalCode"}
                formik={formik}
                icon={nationalIcon}
                normalize={numberFormat.toPersianDigits}
                className={classes.textAlignLeft}
                required
            />
          </Grid>
          <Grid>
            <CalendarForm
              label="تاریخ تولد"
              name={"birthTime"}
              formik={formik}
              icon={calenderIcon}
              noPadding={true}
              required
            />
          </Grid>
          <Grid>
            <SelectForm
                label="جنسیت"
                name={"male"}
                formik={formik}
                icon={sexIcon}
                required
                options={[
                  { title: "مرد", value: true },
                  { title: "زن", value: false },
                ]}
            />
          </Grid>

          <Grid >
            <InputForm
              label="شماره شبا"
              name={"sheba"}
              formik={formik}
              icon={shebaIcon}
              normalize={numberFormat.shebaMask}
              className={classes.textAlignLeft}
              constValue="IR"
            />
          </Grid>
        </Grid>
        <div className={classes.btnErrorContainer}>

          <Button
          onClick={formik.handleSubmit}
          type="submit"
          className={classes.submitBtn}
          disableRipple
        >
          ادامه
        </Button>

          {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}

        </div>
      </form>
    </div>
  );
};

export default memo(BasicInfo);
