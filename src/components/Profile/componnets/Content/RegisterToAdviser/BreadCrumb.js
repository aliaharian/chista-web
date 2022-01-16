import React from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { numberFormat } from "../../../../../utilities";
import clsx from "clsx";
const primaryColor = '#0c0b31';
const secondaryColor = '#0c0b31cc';


const useStyles = makeStyles((theme) => ({
  breadcrumbWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 63,
    "& span": {
      margin: "0 15px 0 10px",
      fontSize: 18,
      fontFamily:'chistaYekanR',
      color:secondaryColor,
      "&:last-child":{
        color:primaryColor,
        fontSize: 18,
        fontFamily:'chistaYekanM',
        margin: "0 10px 0 10px",


      }
    },
  },
  breadcrumbTitle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  breadcrumbSteper: {
    width: 60,
    height: 60,
    borderRadius: 8,
    fontSize: 17,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid rgba(224, 224, 224, 1)",
  },
  breadcrumbStep_1: {
    borderTop: `3px solid ${theme.palette.primary.main} !important`,
  },
  breadcrumbStep_2: {
    borderTop: `3px solid ${theme.palette.primary.main} !important`,
    borderLeft: `3px solid ${theme.palette.primary.main} !important`,
  },
  breadcrumbStep_3: {
    borderTop: `3px solid ${theme.palette.primary.main} !important`,
    borderLeft: `3px solid ${theme.palette.primary.main} !important`,
    borderBottom: `3px solid ${theme.palette.primary.main} !important`,
  },
  breadcrumbStep_4: {
    border: `3px solid ${theme.palette.primary.main} !important`,
  },
  backArrow: {
    cursor: "pointer",
  },
}));

const BreadCrumb = ({ step, handelStep }) => {
  const classes = useStyles();

  const stepRenderer = () => {
    switch (step) {
      case "basicInfo":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_1)}
          >
            {numberFormat.toPersianDigits(1)}/{numberFormat.toPersianDigits(4)}
          </div>
        );
      case "category":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_2)}
          >
            {numberFormat.toPersianDigits(2)}/{numberFormat.toPersianDigits(4)}
          </div>
        );
      case "further":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_3)}
          >
            {numberFormat.toPersianDigits(3)}/{numberFormat.toPersianDigits(4)}
          </div>
        );
      case "upload":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_4)}
          >
            {numberFormat.toPersianDigits(4)}/{numberFormat.toPersianDigits(4)}
          </div>
        );
      default:
        return <BasicInfo />;
    }
  };

  const titleRenderer = () => {
    switch (step) {
      case "basicInfo":
        return "اطلاعات پایه";
      case "category":
        return "اطلاعات تخصصی ";
      case "further":
        return "اطلاعات تکمیلی";
      case "upload":
        return "تصاویر و ویدیو";
      default:
        return <BasicInfo />;
    }
  };

  const handelBack = () => {
    switch (step) {
      case "category":
        return handelStep("basicInfo");
      case "further":
        return handelStep("category");
      case "upload":
        return handelStep("further");
      default:
        return;
    }
  };

  return (
    <div className={classes.breadcrumbWrapper}>
      <div className={classes.breadcrumbTitle}>
        <ArrowForwardIcon onClick={handelBack} className={classes.backArrow} />
        <span>ثبت نام استاد</span>
        <ChevronLeftIcon />
        <span>{titleRenderer()}</span>
      </div>
      {/*{stepRenderer()}*/}
    </div>
  );
};

export default BreadCrumb;
