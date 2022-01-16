import React, { useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import {
  Dialog,
  DialogContent,
  DialogActions,
  InputAdornment,
  TextField,
  Divider,
  LinearProgress,

} from "@material-ui/core";

import Iran from "../../../../../../../../assets/images/iran.png";
import MobileIcon from "../../../../../../../../assets/images/MobileIcon";
import mobileIcon from "../../../../../../../../assets/images/mobileIcon.svg";

import classes from "../../../../../../../../assets/stylesheet/profile/myClass/addMemberModal.module.scss";
import MemberItem from "./MemberItem";
import clsx from "clsx";
import { numberFormat } from "../../../../../../../../utilities";
import close from "../../../../../../../../assets/images/close.svg";
import back from '../../../../../../../../assets/images/arrowBack.svg';
import ModalLayoutWithHeader from "../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import ChistaButton from "../../../../../../../Kit/Buttons/ChistaButton";
import ChistaTextField from "../../../../../../../Kit/Inputs/ChistaTextField";
const AddFromNumberModal = ({
  closeModal,
  showModalNumber,
  handleAddMember,
  handleCloseAll
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);
  const [numberInfo, setNumberInfo] = useState("");
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState();
  const regexNum = /^(\+98|0)?9\d{9}$/g;
  const numberMatch = (number) => regexNum.test(
    numberFormat.toEnglishDigitsOnlyNum(number)
  );
  const handleChange = async (e) => {
    const changeNumber = e.target.value;
    setMessage("");
    if (e.target.value.length === "") {
      setNumberInfo("");
    }
    if (e.target.value.length > 11) return;
    if (e.target.value.length < 11) {
      setNumberInfo("");
    }
    setNumber(numberFormat.toPersianDigits(e.target.value));

    if (e.target.value.length === 11) {
      setNumberInfo("");


      if (numberMatch(e.target.value)) {
        setLoading(true);
        const response = await axios.post("user/exist", {
          username: numberFormat.toEnglishDigitsOnlyNum(e.target.value),
        });
        setLoading(false);
        setNumberInfo(
          response.data.username
            ? {
              ...response.data,
              username: numberFormat.toEnglishDigitsOnlyNum(changeNumber),
            }
            : {
              ...response.data,
              number: numberFormat.toEnglishDigitsOnlyNum(changeNumber),
              username: numberFormat.toEnglishDigitsOnlyNum(changeNumber),
            }
        );
      }
    }
  };

  const handelSubmit = () => {
    if (!numberMatch(number)) {
      !number || number?.length === 0 ? setMessage("فیلد تلفن همراه اجباری است") : setMessage("تلفن همراه وارد شده صحیح نیست");
    } else {
      if (numberInfo !== "") {
        handleAddMember(numberInfo);
        closeModal(false);
      }
    }
  };
  return (
    <ModalLayoutWithHeader
      openDialog={showModalNumber}
      closeModal={() => closeModal(false)}
      hideBackdrop
      PaperProps={{ className: classes.modalWrapper }}
      style={{ position: 'unset' }}
    >

      <div className={classes.addClassHeaderWrapper}>
        <div className={classes.selectAddClassTitle}>
          <div>

            <img
              src={back}
              alt="icon"
              style={{ marginLeft: 13, width: 17 }}
              onClick={() => {
                closeModal(false)
              }}
            />
            <p>مخاطب جدید</p>
          </div>

        </div>
      </div>
      <Divider className={classes.divider} />
      {loading && <LinearProgress className={classes.loadingProgress} />}

      <div className={classes.addFromNumberContainer}>
        <p className={classes.modalDec}>
          لطفا شماره همراه مورد نظر را وارد کنید
        </p>

          <ChistaTextField
            customClassContainer={classes.myClassNameContainer}
            // titleClassName
            title="تلفن همراه"
            isRequired
            inError={message}
            // icon={mobileIcon}
            // errorIcon={mobileIcon}
            onChange={handleChange}
            placeholder={'۰۹۱۲۰۰۰۰۰۰۰'}
            inputValue={number}
            inputClassName={clsx(classes.numberInputClass)}
            lastIcon={mobileIcon}
            // errorTextClassName
            errorText={message}
          />
      

        {numberInfo && numberInfo !== '' && (
          <div className={classes.infoWrapper}>
            <MemberItem memberInfo={numberInfo} number={number} />
          </div>
        )}
      </div>
      <div>

        <div className={classes.stepBtnContainer}>
          <ChistaButton customClassName={!(number.length == 11 && numberInfo !== "") && classes.disableBtn} onClick={handelSubmit} disabled={!(number.length == 11 && numberInfo !== "")}>بعدی</ChistaButton>
        </div>
      </div>
    </ModalLayoutWithHeader>
  );
};

export default AddFromNumberModal;
