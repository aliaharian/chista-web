import React from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import back from '../../../../../../../../assets/images/arrowBack.svg';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, TextField, Button, Divider,
} from "@material-ui/core";

import classes from '../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss';
import IncreaseAndDecrease from '../../../../../../../Kit/Inputs/IncreaseAndDecrease'
import ModalLayoutWithHeader from "../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import ChistaButton from "../../../../../../../Kit/Buttons/ChistaButton";
const CountModal = ({ closeModal, showModal, handelSubmit, data , hideBackdrop=true }) => {
  // const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [count, setCount] = React.useState(data.maxMemberCnt || 100)

  return (
    <ModalLayoutWithHeader
      openDialog={showModal}
      closeModal={() => closeModal()}
      style={{ position: 'unset' }}
      hideBackdrop={hideBackdrop}
    >
      <div className={classes.addClassHeaderWrapper}>
        <div className={classes.selectAddClassTitle}>
          <div>
            <img
              src={back}
              alt="icon"
              style={{ marginLeft: 13, width: 17 }}
              onClick={() => closeModal()}
            />
            <p>حداکثر تعداد شرکت کننده</p>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.countModalBody}>

        <IncreaseAndDecrease
          plusValue={() => count < 999 && setCount(parseInt(count) + 1)}
          unit={'نفر'}
          max={100}
          min={1}
          inputValue={count}
          onChange={(e) => setCount(e.target.value)}
          minusValue={() => count > 1 && setCount(count - 1)}
          inputWrapperClass={classes.countModalInputWrapper}
        />
        <div className={classes.stepBtnContainer}>
          <ChistaButton disabled={(count < 1 || count == '' || count > process.env.REACT_APP_CLASS_MAX_USERS)} customClassName={classes.disableBtn} onClick={() => handelSubmit(count)}>تایید</ChistaButton>
        </div>
      </div>
    </ModalLayoutWithHeader>
  );
};


export default CountModal;
