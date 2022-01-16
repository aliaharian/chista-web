import React from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import { useRouter } from "next/router";

import { numberFormat } from "../../../../../../utilities";

const useStyles = makeStyles((theme) => ({
  breadcrumbWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    "& span": {
      margin: "0 10px",
      fontSize: 20,
      fontWeight: "bold",
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

const BreadCrumb = ({ step, handelStep, title }) => {
  const router = useRouter();
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
      case "addMember":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_2)}
          >
            {numberFormat.toPersianDigits(2)}/{numberFormat.toPersianDigits(4)}
          </div>
        );
      case "setSetting":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_3)}
          >
            {numberFormat.toPersianDigits(3)}/{numberFormat.toPersianDigits(4)}
          </div>
        );

      case "createClass":
        return (
          <div
            className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_4)}
          >
            {numberFormat.toPersianDigits(4)}/{numberFormat.toPersianDigits(4)}
          </div>
        );

      default:
        return "";
    }
  };

  const handelBack = () => {
    switch (step) {
      case "basicInfo":
        return router.push("/profile/dashboard/myClass");
      case "addMember":
        return handelStep("basicInfo");
      case "setSetting":
        return handelStep("addMember");
      case "createClass":
        return handelStep("setSetting");
      default:
        return;
    }
  };

  return (
    <div className={classes.breadcrumbWrapper}>
      <div className={classes.breadcrumbTitle}>
        <ArrowForwardIcon onClick={handelBack} className={classes.backArrow} />
        <span>ایجاد کلاس</span>
        <ChevronLeftIcon />
        <span>{title}</span>
      </div>
      {stepRenderer()}
    </div>
  );
};

export default BreadCrumb;
