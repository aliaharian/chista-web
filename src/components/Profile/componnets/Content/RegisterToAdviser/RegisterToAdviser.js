import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import BreadCrumb from "./BreadCrumb";
import BasicInfo from "./Steps/BasicInfo";
import Category from "./Steps/Category";
import Further from "./Steps/Further";
import Upload from "./Steps/Upload";
import { SnackbarProvider, useSnackbar } from "notistack";
import SuccessDialog from "./successDialog/successDialog";
import { createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileBreadCrumb from "./MobileBreadCrumb";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  RegisterToAdviserRoot: {
    padding: "0 12px 0 46px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 9px 30px 9px",
      position: "relative",
    },

    "&>div": {
      width: "100%",
    },
  },
  errorMessage: {
    marginTop: 30,
    color: `${theme.palette.error.main} !important`,
    fontSize: 16,
  },
}));

const RegisterToAdviser = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [step, setStep] = useState("basicInfo");
  const [successDialog, setSuccessDialog] = useState(false);
  const [allData, setAllData] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const user = useSelector((state) => state.user.user);

  const handelStep = async (step, data) => {
    setAllData({ ...allData, ...data });
    if (step === "end") {
      // console.log("all data for server", { ...allData, ...data });
      try {
        const response = await axios.post(`/advisor/insert`, {
          id: 0,
          username: user.username,
          ...allData,
          ...data,
        });
        if (response.data.responseCode === 200) {
          setStep("basicInfo");
          enqueueSnackbar("ثبت نام شما با موفقیت انجام شد", {
            variant: "success",
          });
          setSuccessDialog(true);
        }
      } catch (err) {
        setErrorMessage(err.response.data.message);
        setStep("basicInfo");
      }

      return;
    }
    setStep(step);
  };

  const stepRenderer = () => {
    switch (step) {
      case "basicInfo":
        return (
          <BasicInfo
            handelStep={handelStep}
            initialValues={{
              firstName: allData?.firstName || user.firstName,
              lastName: allData?.lastName || user.lastName,
              birthTime: allData?.birthTime * 1000 || "",
              male: allData?.male ?? "",
              nationalCode: allData?.nationalCode || "",
              sheba: allData?.sheba || "",
              allData: allData,
            }}
          />
        );
      case "category":
        return <Category handelStep={handelStep} courses={allData?.courses} />;
      case "further":
        return (
          <Further
            handelStep={handelStep}
            initialValues={{
              intro: allData?.intro || "",
              note: allData?.note || "",
              possibleTutoring: allData?.possibleTutoring || "",
            }}
          />
        );
      case "upload":
        return <Upload handelStep={handelStep} />;
      default:
        return <Category />;
    }
  };

  const openSuccessDialog = (open) => {
    setSuccessDialog(open);
  };
  return (
    <div className={classes.RegisterToAdviserRoot}>
      <SuccessDialog
        open={successDialog}
        openSuccessDialog={openSuccessDialog}
      />
      {isMobile ? (
        <MobileBreadCrumb step={step} handelStep={handelStep} />
      ) : (
        <BreadCrumb step={step} handelStep={handelStep} />
      )}
      {stepRenderer()}
      {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default RegisterToAdviser;
