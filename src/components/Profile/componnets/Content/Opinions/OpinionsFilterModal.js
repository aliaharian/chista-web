import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
  TextField,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import {
  getCommentsList,
  getOpinionsList,
} from "../../../../../../redux/adviserDashboard/Actions";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./StylesFilterModal";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import JalaliUtils from "@date-io/jalaali";
import Icon from "../../../../Icon/Icon";
import jMoment from "moment-jalaali";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

const OpinionsFilterModal = ({
  closeModal,
  filterValues,
  handelFilterValue,
  advisorId,
}) => {
  const Dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filterValue, setFilterValue] = useState(filterValues);

  const handleChange = (e) => {
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };

  const handelClearForm = () => {
    setFilterValue({
      fromRate: "",
      toRate: "",
      replied: "",
    });
  };

  const handelSubmit = () => {
    Dispatch(
      getOpinionsList(
        false,
        {
          advisorId,
          toRate: filterValue.toRate,
          fromRate: filterValue.fromRate,
          replied: filterValue.replied,
        },
        true
      )
    );
    closeModal(false);
    handelFilterValue(filterValue);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => closeModal(false)}
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: classes.modalWrapper,
      }}
    >
      <button className={classes.clearFormDesktop} onClick={handelClearForm}>
        پاک کردن
      </button>
      <CloseIcon
        className={classes.closeModalIcon}
        onClick={() => closeModal(false)}
      />
      <DialogTitle id="responsive-dialog-title" className={classes.modalTitle}>
        محدود سازی
      </DialogTitle>
      <DialogContent>
        {/* <Divider className={classes.divider} /> */}
        <Grid container className={classes.inputWrapper}>
          <Grid item xs={6} className={classes.inputLabel}>
            <StarBorderRoundedIcon />
            <span>بر اساس امتیاز</span>
          </Grid>
          <Grid item xs={6} className={classes.twoColumnWrapper}>
            <span>از</span>
            <TextField
              name="fromRate"
              select
              value={filterValue.fromRate}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "100%" }}
              className={classes.input}
            >
              <option value={1} defaultValue>
                1
              </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </TextField>
            <span>تا</span>
            <TextField
              name="toRate"
              select
              value={filterValue.toRate}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "100%" }}
              className={classes.input}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5} defaultValue>
                5
              </option>
            </TextField>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container className={classes.inputWrapper}>
          <Grid item xs={6} className={classes.inputLabel}>
            <ChatBubbleOutlineOutlinedIcon />
            <span>پاسخ</span>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="replied"
              select
              value={filterValue.replied}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "100%" }}
              className={classes.input}
            >
              <option value={"true"}>پاسخ د اده شده</option>
              <option value={"false"}>بدون پاسخ</option>
              <option value={""}>هیچکدام</option>
            </TextField>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </DialogContent>
      <DialogActions>
        <button className={classes.filterBtn} onClick={handelSubmit}>
          محدودسازی
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default OpinionsFilterModal;
