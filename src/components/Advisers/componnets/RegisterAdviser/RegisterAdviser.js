import React, { useEffect } from "react";
import useStyles from "./styles";
import {
  Typography,
  Grid,
  Button,
  IconButton,
  CircularProgress,
  Paper,
} from "@material-ui/core";
import jMoment from "moment-jalaali";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  getAdviser,
  registerAdviserVerify,
  advisersUpdateField,
  registerAdviserStep2,
  registerAdviserStep3,
  registerAdviserReset,
  registerAdviserInsert,
} from "../../../../../redux/advisers";
import {
  getCityList,
  getPriceList,
  getCategoryList,
  getProvinceList,
  getSubCategoryList,
  getTagsList,
} from "../../../../../redux/filters";
import { enqueueSnackbar } from "../../../../../redux/user";
import doneIcon from "../../../../assets/images/done-icon.png";
import { reduxForm, Field, change } from "redux-form";
import {
  Select,
  ChistaText,
  JDatePicker,
  MultiSelect,
  ChistaTagsSelect,
  ChistaTextArea,
  Files,
} from "../../../form";
import {
  required,
  minLength10,
  minLength5,
  maxLength25,
  maxLength1000,
  numberFormat,
  minLength24,
  isValidNationalCode,
  justPersian,
} from "../../../../utilities";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import userIcon from "../../../../assets/images/user-icon-gray.png";
import sexIcon from "../../../../assets/images/profile-sex-icon.png";
import calenderIcon from "../../../../assets/images/calender-icon.png";
import nationalIcon from "../../../../assets/images/national-card.svg";
import shebaIcon from "../../../../assets/images/profile-sheba-icon.png";
import groupIcon from "../../../../assets/images/group-icon.png";
import categoryIcon from "../../../../assets/images/category-icon.png";
import pinIcon from "../../../../assets/images/pin-icon.svg";
import introIcon from "../../../../assets/images/intro-icon.png";
import advIcon from "../../../../assets/images/register-adv-icon.svg";
import rightIcon from "../../../../assets/images/arrow-right.svg";

import step1Icon from "../../../../assets/images/step1.svg";
import step2Icon from "../../../../assets/images/step2.svg";
import step3Icon from "../../../../assets/images/step3.svg";
import step4Icon from "../../../../assets/images/step4.svg";

import AlertDialog from "../../../AlertDialog/AlertDialog";
import Icon from "../../../Icon/Icon";
import classNames from "classnames";

function RegisterAdviser(props) {
  const classes = useStyles();
  const multiSelectEl = React.useRef(null);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) 
      router.push("/");
    
    if (!props.categoryList) 
      props.getCategoryList();
    

    if (!props.provinceList) 
      props.getProvinceList();
    

    if (!props.cityList) 
      props.getCityList();
    
    if (!props.priceList) 
      props.getPriceList();
    
    props.registerAdviserReset();
  }, [props.userLoad, props.authLoad]);

  function changeCategory(value) {
    props.getSubCategoryList(value);
    props.getTagsList(null, []);
    ///TO do: clear Multi Select Autocomplete
    document
      .getElementsByClassName("MuiAutocomplete-clearIndicator")[0]
      .click();
  }
  function submited(values) {
    window.scrollTo(0, 0);
    if (props.step === 1) {
      props.registerAdviserVerify({
        ...values,
        username: props.user.username,
        firstName: values.firstName,
        lastName: values.lastName,
        sheba: numberFormat.toEnglishDigitsOnlyNum(values.sheba),
        nationalCode: numberFormat.toEnglishDigitsOnlyNum(values.nationalCode),
        birthTime: jMoment(values.birthTime).unix(),
        price: numberFormat.toEnglishDigitsOnlyNum(values.price),
      });
    } else if (props.step === 2) {
      props.registerAdviserStep2();
    } else if (props.step === 3) {
      props.registerAdviserStep3();
    } else if (props.step === 4) {
      if (!values.deedFiles) {
        dispatch(
          dispatch(
            enqueueSnackbar({
              message: "لطفا مجوزها و مدارک تحصیلی خود را انتخاب نمایید",
            })
          )
        );
        return;
      }
      props.registerAdviserInsert({
        ...values,
        username: props.user.username,
        sheba: numberFormat.toEnglishDigitsOnlyNum(values.sheba),
        nationalCode: numberFormat.toEnglishDigitsOnlyNum(values.nationalCode),
        birthTime: jMoment(values.birthTime).unix(),
        price: numberFormat.toEnglishDigitsOnlyNum(values.price),
        subCategories: values.subCategories
          ? values.subCategories.map((item) => ({ id: item.id }))
          : [],
        tags: values.tags ? values.tags.map((item) => ({ id: item })) : [],
        deedFiles: values.deedFiles.map((item) => ({ file: item.file })),
        videoFiles: values.videoFiles
          ? values.videoFiles.map((item) => ({ file: item.file }))
          : [],
        imageFiles: values.imageFiles
          ? values.imageFiles.map((item) => ({ file: item.file }))
          : [],
      });
    }
  }

  function goToProfile() {
    router.push("/profile/adviser/dashboard");
  }
  function backToStep(step) {
    if (step + 1 === props.step) {
      dispatch(
        advisersUpdateField({ prop: "registerStep", value: props.step - 1 })
      );
    }
  }
  function backToStepInMobile(step) {
    if (step == 1) {
      return;
    }
    dispatch(
      advisersUpdateField({ prop: "registerStep", value: props.step - 1 })
    );
  }
  function getStepMobileIcon() {
    switch (props.step) {
      case 1:
        return step1Icon;
      case 2:
        return step2Icon;
      case 3:
        return step3Icon;
      case 4:
        return step4Icon;
    }
  }

  if (
    props.user &&
    props.user.roleTypeId === 2891 &&
    props.user.inCartable === true
  ) {
    return (
      <Paper className={classes.showMessage}>
        <AlertDialog
          message={"ثبت نام شما انجام شده لطفا منتظر تایید اطلاعات باشید"}
          close={goToProfile}
        />
      </Paper>
    );
  }

  if (
    props.user &&
    props.user.roleTypeId === 2861 &&
    props.user.inCartable === false
  ) {
    return (
      <Paper className={classes.showMessage}>
        <AlertDialog
          message={
            "استاد گرامی ثبت نام شما کامل شده لطفا برای بروزرسانی اطلاعات به پروفایل خود مراجعه نمایید"
          }
          close={goToProfile}
        />{" "}
      </Paper>
    );
  }
  return (
    <>
      {props.user && (
        <>
          <Grid
            container
            className={classNames(classes.toolbarRoot, classes.sectionDesktop)}
          >
            <img src={advIcon} alt="ثبت نام به عنوان استاد" />
            <Typography>ثبت نام به عنوان استاد</Typography>
          </Grid>
          <Grid
            container
            justify="space-between"
            className={classNames(classes.toolbarRoot, classes.sectionMobile)}
          >
            <div className={classes.btnWrapper}>
              <Button
                className={classes.btnBack}
                onClick={() => {
                  backToStepInMobile(props.step);
                }}
                endIcon={
                  <Icon
                    src={rightIcon}
                    style={{ height: "24px", width: "24px" }}
                  />
                }
              />
              <span className={classes.goBackText}>ثبت نام به عنوان استاد</span>
            </div>
            <div className={classes.stepWrapperMobile}>
              <IconButton aria-label="step">
                <Icon
                  src={getStepMobileIcon()}
                  className={classes.backIcon}
                  style={{ height: "51px", width: "51px" }}
                />
                <span className={classes.stepTextMobile}>
                  {numberFormat.toPersianDigits(props.step)}/۴
                </span>
              </IconButton>
            </div>
          </Grid>
          <form onSubmit={props.handleSubmit((values) => submited(values))}>
            <div className={classes.root}>
              <div
                className={classNames(
                  classes.stepContainer,
                  classes.sectionDesktop
                )}
              >
                <div
                  className={classes.stepItemWrapper}
                  onClick={() => {
                    backToStep(1);
                  }}
                >
                  <div
                    className={
                      props.step === 1
                        ? classes.stepItemActive
                        : props.step > 1
                        ? classes.stepItemComplete
                        : classes.stepItem
                    }
                  >
                    {props.step > 1 ? (
                      <div className={classes.stepItemCompleteInner}>
                        <img
                          className={classes.stepItemIcon}
                          src={doneIcon}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div
                        className={
                          props.step === 1
                            ? classes.stepItemInnerActive
                            : classes.stepItemInner
                        }
                      >
                        <span
                          className={
                            props.step === 1
                              ? classes.stepItemNumberActive
                              : classes.stepItemNumber
                          }
                        >
                          ۱
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={classes.stepItemTextWrapper}>
                    <Typography
                      className={
                        props.step === 1
                          ? classes.stepItemTextActive
                          : classes.stepItemText
                      }
                    >
                      اطلاعات پایه
                    </Typography>
                  </div>
                </div>
                <span className={classes.divider}></span>
                <div
                  className={classes.stepItemWrapper}
                  onClick={() => {
                    backToStep(2);
                  }}
                >
                  <div
                    className={
                      props.step === 2
                        ? classes.stepItemActive
                        : props.step > 2
                        ? classes.stepItemComplete
                        : classes.stepItem
                    }
                  >
                    {props.step > 2 ? (
                      <div className={classes.stepItemCompleteInner}>
                        <img
                          className={classes.stepItemIcon}
                          src={doneIcon}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div
                        className={
                          props.step === 2
                            ? classes.stepItemInnerActive
                            : classes.stepItemInner
                        }
                      >
                        <span
                          className={
                            props.step === 2
                              ? classes.stepItemNumberActive
                              : classes.stepItemNumber
                          }
                        >
                          ۲
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={classes.stepItemTextWrapper}>
                    <Typography
                      className={
                        props.step === 2
                          ? classes.stepItemTextActive
                          : classes.stepItemText
                      }
                    >
                      اطلاعات تخصصی
                    </Typography>
                  </div>
                </div>
                <span className={classes.divider}></span>
                <div
                  className={classes.stepItemWrapper}
                  onClick={() => {
                    backToStep(3);
                  }}
                >
                  <div
                    className={
                      props.step === 3
                        ? classes.stepItemActive
                        : props.step > 3
                        ? classes.stepItemComplete
                        : classes.stepItem
                    }
                  >
                    {props.step > 3 ? (
                      <div className={classes.stepItemCompleteInner}>
                        <img
                          className={classes.stepItemIcon}
                          src={doneIcon}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div
                        className={
                          props.step === 3
                            ? classes.stepItemInnerActive
                            : classes.stepItemInner
                        }
                      >
                        <span
                          className={
                            props.step === 3
                              ? classes.stepItemNumberActive
                              : classes.stepItemNumber
                          }
                        >
                          ۳
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={classes.stepItemTextWrapper}>
                    <Typography
                      className={
                        props.step === 3
                          ? classes.stepItemTextActive
                          : classes.stepItemText
                      }
                    >
                      اطلاعات تکمیلی
                    </Typography>
                  </div>
                </div>
                <span className={classes.divider}></span>
                <div
                  className={classes.stepItemWrapper}
                  onClick={() => {
                    backToStep(4);
                  }}
                >
                  <div
                    className={
                      props.step === 4
                        ? classes.stepItemActive
                        : props.step > 4
                        ? classes.stepItemComplete
                        : classes.stepItem
                    }
                  >
                    {props.step > 4 ? (
                      <div className={classes.stepItemCompleteInner}>
                        <img
                          className={classes.stepItemIcon}
                          src={doneIcon}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div
                        className={
                          props.step === 4
                            ? classes.stepItemInnerActive
                            : classes.stepItemInner
                        }
                      >
                        <span
                          className={
                            props.step === 4
                              ? classes.stepItemNumberActive
                              : classes.stepItemNumber
                          }
                        >
                          ۴
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={classes.stepItemTextWrapper}>
                    <Typography
                      className={
                        props.step === 4
                          ? classes.stepItemTextActive
                          : classes.stepItemText
                      }
                    >
                      تصاویر و ویدیو
                    </Typography>
                  </div>
                </div>
              </div>

              <Grid
                container
                className={[
                  classes.formContainer,
                  props.step !== 1 ? classes.hide : "",
                ].join(" ")}
              >
                <Grid item md={4} xs={12} className={classes.inputWrapper}>
                  <Typography className={classes.inputLabel}>
                    نام <span className={classes.inputLabelRequired}>.</span>
                  </Typography>
                  <Field
                    name="firstName"
                    label="نام"
                    component={ChistaText}
                    icon={userIcon}
                    validate={[required, justPersian]}
                  />
                </Grid>
                <Grid item md={4} xs={12} className={classes.inputWrapper}>
                  <Typography className={classes.inputLabel}>
                    نام خانوادگی{" "}
                    <span className={classes.inputLabelRequired}>.</span>
                  </Typography>
                  <Field
                    name="lastName"
                    label="نام خانوادگی"
                    component={ChistaText}
                    icon={userIcon}
                    validate={[required, justPersian]}
                  />
                </Grid>
                <Grid item md={4} xs={12} className={classes.inputWrapper}>
                  <Typography className={classes.inputLabel}>
                    جنسیت <span className={classes.inputLabelRequired}>.</span>
                  </Typography>
                  <Field
                    name="male"
                    label="جنسیت"
                    component={Select}
                    options={[
                      { label: "مرد", value: "true" },
                      { label: "زن", value: "false" },
                    ]}
                    icon={sexIcon}
                    validate={[required]}
                  />
                </Grid>
                <Grid item md={4} xs={12} className={classes.inputWrapper}>
                  <Typography className={classes.inputLabel}>
                    تاریخ تولد{" "}
                    <span className={classes.inputLabelRequired}>.</span>
                  </Typography>
                  <Field
                    name="birthTime"
                    label="تاریخ تولد"
                    component={JDatePicker}
                    validate={[required]}
                    icon={calenderIcon}
                  />
                </Grid>
                <Grid item md={4} xs={12} className={classes.inputWrapper}>
                  <Typography className={classes.inputLabel}>
                    کد ملی <span className={classes.inputLabelRequired}>.</span>
                  </Typography>
                  <Field
                    name="nationalCode"
                    label="کد ملی"
                    component={ChistaText}
                    validate={[required, minLength10, isValidNationalCode]}
                    icon={nationalIcon}
                    tal={true}
                    normalize={numberFormat.nationalCodeMask}
                  />
                </Grid>
                <Grid item md={4} xs={12} className={classes.inputWrapper}>
                  <Typography className={classes.inputLabel}>
                    شماره شبا{" "}
                  </Typography>
                  <Field
                    name="sheba"
                    label="شماره شبا"
                    component={ChistaText}
                    endAdropment={"IR"}
                    validate={[minLength24]}
                    maxLength={29}
                    tal={true}
                    icon={shebaIcon}
                    normalize={numberFormat.shebaMask}
                  />
                </Grid>
              </Grid>

              {props.step > 1 && (
                <Grid
                  container
                  className={[
                    classes.formContainer,
                    props.step !== 2 ? classes.hide : "",
                  ].join(" ")}
                >
                  <Grid item md={6} xs={12} className={classes.inputWrapper}>
                    <Typography className={classes.inputLabel}>
                      گروه <span className={classes.inputLabelRequired}>.</span>
                    </Typography>
                    <Field
                      name="categoryId"
                      label="گروه"
                      component={Select}
                      options={
                        (props.categoryList &&
                          props.categoryList.map((item) => ({
                            label: item.name,
                            value: item.id,
                          }))) ||
                        []
                      }
                      icon={groupIcon}
                      validate={[required]}
                      onChange={(e) => {
                        changeCategory(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12} className={classes.inputWrapper}>
                    <Typography className={classes.inputLabel}>
                      دسته ها{" "}
                      <span className={classes.inputLabelRequired}>.</span>
                    </Typography>
                    <Field
                      ref={multiSelectEl}
                      name="subCategories"
                      label="دسته بندی"
                      component={MultiSelect}
                      multi
                      options={props.subCategoryList || []}
                      icon={categoryIcon}
                      validate={[required]}
                      onChange={(e, newValue) => {
                        props.getTagsList(null, newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} className={classes.inputWrapper}>
                    <Typography className={classes.inputLabel}>
                      برچسب ها{" "}
                      <span className={classes.inputLabelRequired}>.</span>
                    </Typography>
                    <Field
                      name="tags"
                      label="دسته بندی"
                      component={ChistaTagsSelect}
                      options={props.tagsList || []}
                    />
                  </Grid>
                </Grid>
              )}

              {props.step > 2 && (
                <Grid
                  container
                  className={[
                    classes.formContainer,
                    props.step !== 3 ? classes.hide : "",
                  ].join(" ")}
                >
                  <Grid item md={6} xs={12} className={classes.inputWrapper}>
                    <Typography className={classes.inputLabel}>
                      استان{" "}
                      <span className={classes.inputLabelRequired}>.</span>
                    </Typography>
                    <Field
                      name="provinceId"
                      label="استان"
                      component={Select}
                      icon={pinIcon}
                      options={
                        (props.provinceList &&
                          props.provinceList.map((item) => ({
                            label: item.name,
                            value: item.id,
                          }))) ||
                        []
                      }
                      validate={[required]}
                      onChange={(e) => {
                        props.getCityList(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12} className={classes.inputWrapper}>
                    <Typography className={classes.inputLabel}>
                      شهر <span className={classes.inputLabelRequired}>.</span>
                    </Typography>
                    <Field
                      name="cityId"
                      label="شهر"
                      component={Select}
                      icon={pinIcon}
                      options={
                        (props.cityList &&
                          props.cityList.map((item) => ({
                            label: item.name,
                            value: item.id,
                          }))) ||
                        []
                      }
                      validate={[required]}
                    />
                  </Grid>

                  <Grid item xs={12} className={classes.inputWrapper}>
                    <div className={classes.flexBox}>
                      <Typography className={classes.inputLabel}>
                        جمله معرفی{" "}
                        <span className={classes.inputLabelRequired}>.</span>
                      </Typography>
                    </div>
                    <Field
                      name="intro"
                      label="جمله معرفی"
                      component={ChistaText}
                      validate={[required, minLength5, maxLength25]}
                      maxLength={25}
                      minLength={5}
                      icon={introIcon}
                    />
                  </Grid>

                  <Grid item xs={12} className={classes.inputWrapper}>
                    <div className={classes.flexBox}>
                      <Typography className={classes.inputLabel}>
                        توضیحات استاد{" "}
                        <span className={classes.inputLabelRequired}>.</span>
                      </Typography>
                    </div>
                    <Field
                      name="note"
                      component={ChistaTextArea}
                      validate={[required, minLength10, maxLength1000]}
                      maxLength={1000}
                      minLength={10}
                    />
                  </Grid>
                </Grid>
              )}

              {props.step > 3 && (
                <Grid
                  container
                  className={[
                    classes.formContainer,
                    props.step !== 4 ? classes.hide : "",
                  ].join(" ")}
                >
                  <Grid item md={6} xs={12} className={classes.inputWrapper}>
                    <div className={classes.fileBoxTitle}>
                      <div className={classes.fileBoxTitleWrapper}>
                        <Typography className={classes.inputLabelBold}>
                          مجوزها و مدارک تحصیلی{" "}
                          <span className={classes.inputLabelRequired}>.</span>
                        </Typography>
                        <Typography className={classes.inputHint}>
                          (حداکثر 4 عکس، یک مگابایت)
                        </Typography>
                      </div>
                      <Typography className={classes.inputFileHint}>
                        این تصاویر در اختیار کاربران قرار نخواهد گرفت
                      </Typography>
                    </div>
                    <Field
                      name="deedFiles"
                      label="مجوزها و مدارک تحصیلی"
                      component={Files}
                      countLimit={4}
                      acceptFiles="image/x-png,image/jpeg"
                      fileSize={1}
                      type={"image"}
                    />
                  </Grid>
                  <Grid item md={6} xs={12} className={classes.inputWrapper}>
                    <div className={classes.fileBoxTitle}>
                      <div className={classes.fileBoxTitleWrapper}>
                        <Typography className={classes.inputLabelBold}>
                          ویدیوی معرفی{" "}
                        </Typography>
                        <Typography className={classes.inputHint}>
                          {" "}
                          ( حداکثر 1 فیلم، 10 مگابایت)
                        </Typography>
                      </div>
                      <Typography className={classes.inputFileHint}>
                        این فیلم ها برای عموم قابل مشاهده است
                      </Typography>
                    </div>
                    <Field
                      name="videoFiles"
                      label="ویدیوی معرفی"
                      component={Files}
                      countLimit={1}
                      acceptFiles="video/*"
                      fileSize={30}
                      type={"video"}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.inputWrapper}>
                    <div className={classes.fileBoxTitle}>
                      <div className={classes.fileBoxTitleWrapper}>
                        <Typography className={classes.inputLabelBold}>
                          تصاویر من
                        </Typography>
                        <Typography className={classes.inputHint}>
                          ( حداکثر 5 عکس، یک مگابایت)
                        </Typography>
                      </div>
                      <Typography className={classes.inputFileHint}>
                        این عکسها برای عموم قابل مشاهده است
                      </Typography>
                    </div>
                    <Field
                      name="imageFiles"
                      label="مجوزها و مدارک تحصیلی"
                      component={Files}
                      countLimit={5}
                      acceptFiles="image/x-png,image/jpeg"
                      fileSize={1}
                      type={"image"}
                    />
                  </Grid>
                </Grid>
              )}
            </div>

            <div className={classes.bottomToolbar}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={props.load || props.pristine || props.submitting}
                className={classes.actionBtn}
                endIcon={!props.load ? <ArrowBackIosIcon /> : ""}
              >
                {props.load ? (
                  <CircularProgress
                    color="primary"
                    style={{ width: 20, height: 20 }}
                  />
                ) : (
                  "مرحله بعدی"
                )}
              </Button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

RegisterAdviser.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.user.user,
  step: state.advisers.registerStep,
  load: state.advisers.registerLoad,
  categoryList: state.filters.categoryList,
  categoryListLoad: state.filters.categoryListLoad,
  priceList: state.filters.priceList,
  priceListLoad: state.filters.priceListLoad,
  cityList: state.filters.cityList,
  cityListLoad: state.filters.cityListLoad,
  provinceList: state.filters.provinceList,
  provinceListLoad: state.filters.provinceListLoad,
  subCategoryListLoad: state.filters.subCategoryListLoad,
  subCategoryList: state.filters.subCategoryList,
  tagsListLoad: state.filters.tagsListLoad,
  tagsList: state.filters.tagsList,
  initialValues: {
    firstName: state.user.user?.firstName,
    lastName: state.user.user?.lastName,
  },
});

export default connect(mapStateToProps, {
  getAdviser,
  registerAdviserVerify,
  getPriceList,
  getCityList,
  registerAdviserStep2,
  registerAdviserReset,
  getCategoryList,
  getProvinceList,
  getSubCategoryList,
  getTagsList,
  registerAdviserStep3,
  registerAdviserInsert,
})(
  reduxForm({ form: "registerAdviserForm", enableReinitialize: true })(
    RegisterAdviser
  )
);
