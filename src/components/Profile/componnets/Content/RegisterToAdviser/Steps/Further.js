import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import {Checkbox, Grid} from "@material-ui/core";

import SelectForm from "./../../../form/SelectForm";
import CheckboxForm from "./../../../form/CheckboxForm";
import InputFormMultiline from "./../../../form/InputFormMultiline";
import pinIcon from "../../../../../../assets/images/pin-icon.svg";
import news from "../../../../../../assets/images/news.svg";

import useStyles from "./Styles";
import checkboxEmpty from "../../../../../../assets/images/checkbox-empty.svg";
import checkboxChecked from "../../../../../../assets/images/checkbox-checked.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {createMuiTheme} from "@material-ui/core/styles";
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
const validationSchema = Yup.object().shape({
  province: Yup.string().required("پر کردن این فیلد الزامی می باشد"),
  cityId: Yup.string().required("پر کردن این فیلد الزامی می باشد"),
  intro: Yup.string()
    .min(5, "جمله معرفی نباید کمتر از 5 کاراکتر باشد")
    .max(25, "جمله معرفی نباید بیشتر از 25 کاراکتر باشد")
    .required("پر کردن این فیلد الزامی می باشد"),
  note: Yup.string()
    .min(10, "درباره من نباید کمتر از 10 کاراکتر باشد")
    .max(10000, "درباره من نباید بیشتر از 10000 کاراکتر باشد")
    .required("پر کردن این فیلد الزامی می باشد"),
});

const Further = ({ handelStep, initialValues }) => {
  const classes = useStyles();

  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      province: "",
      cityId: "",
      intro: "",
      note: "",
      possibleTutoring: "",
      ...initialValues,
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      handelStep("upload", values);
    },
  });

  const getProvinceList = async (parentid) => {
    const response = await Axios.get(
      parentid ? `area/summary?parentid=${parentid}` : "area/summary"
    );
    if (parentid) {
      setCityList(response.data);
      return;
    }
    setProvinceList(response.data);
  };

  const handleChangeProvince = (e) => {
    setCityList([]);
    formik.resetForm({
      values: {
        cityId: "",
        province: formik.values.province,
        intro: formik.values.intro,
        note: formik.values.note,
        possibleTutoring: formik.values.possibleTutoring,
      },
    });

    getProvinceList(e.target.value);
  };

  useEffect(() => {
    provinceList.length === 0 && getProvinceList();
  }, [provinceList]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container className={classes.formContainer} spacing={4}>
          <Grid item md={6} xs={12}>
            <SelectForm
              label="استان"
              name={"province"}
              handleChange={handleChangeProvince}
              formik={formik}
              required
              icon={pinIcon}
              className={isMobile?'':classes.ml44}
              options={provinceList.map((item) => {
                return { title: item.name, value: item.id };
              })}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <SelectForm
              label="شهر"
              name={"cityId"}
              formik={formik}
              icon={pinIcon}
              required
              className={isMobile?'':classes.mr44}
              options={cityList.map((item) => {
                return { title: item.name, value: item.id };
              })}
            />
          </Grid>

          <Grid item md={8} xs={12}>
            <InputFormMultiline
              label="جمله معرفی"
              name={"intro"}
              formik={formik}
              icon={news}
              required
              characterNumber
              maxCharacter={25}
              className={classes.introInput}
            />
          </Grid>
          <Grid item md={4} xs={12} className={classes.pb0}>
            <CheckboxForm
                icon={<img src={checkboxEmpty} alt=""/>}
                checkedIcon={<img src={checkboxChecked} alt=""/>}
                label="امکان تدریس خصوصی"
                name={"possibleTutoring"}
                formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <InputFormMultiline
              label="درباره من"
              name={"note"}
              formik={formik}
              characterNumber
              required
              maxCharacter={1000}
              rows={3}
            />
          </Grid>
        </Grid>
        <button type="submit" className={classes.submitBtn}>
          ادامه
        </button>
      </form>
    </div>
  );
};

export default Further;
