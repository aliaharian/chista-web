import React, { useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { useDispatch, useSelector } from "react-redux";

import noData from "../../../../../../../../../assets/images/noData.svg";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  ListItem,
  Checkbox,
  ListItemSecondaryAction,
} from "@material-ui/core";
import lodash from "lodash";
import { getContactList } from "../../../../../../../../../../redux/contacts";
import clsx from "clsx";
import MemberItem from "./MemberItem";
import { numberFormat } from "../../../../../../../../../utilities";

import useStyles from "./ModalStyles";

const SelectAssistantModal = ({
  closeModal,
  showModalContact,
  handleAddMember,
  addContactNumber,
  assistantList,
  user,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const Dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(true);
  const [contactFiltered, setContactFiltered] = useState();
  const [selectAll, setSelectAll] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [checked, setChecked] = useState(assistantList || []);
  const [message, setMessage] = useState("");

  const contact = useSelector((state) => state.adviserDashboard.contact);

  const [allUser, setAllUSer] = useState(
    lodash.uniq([user, ...contact, ...addContactNumber], "username")
  );

  const handelSubmit = () => {
    if (checked.length > 5) {
      setMessage("شما نمیتوانید بیشتر از ۵ دستیار انتخاب کنید");
      return;
    }
    closeModal(false);
    if (selectAll) {
      handleAddMember(contact);
      return;
    }
    handleAddMember(checked);
  };

  const handleToggle = (value) => () => {
    setMessage("");
    const currentIndex = checked.findIndex(
      (item) => item.username === value.username
    );
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  const handleSearch = (e) => {
    const filteredContact = (setAllUSer || []).filter((item) => {
      return (item.firstName || item.fullName)
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setContactFiltered(filteredContact);
  };

  useEffect(() => {
    !contact && Dispatch(getContactList());
    contact && setLoading(false);
  }, [contact]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={showModalContact}
      onClose={() => closeModal(false)}
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: classes.modalWrapper,
      }}
    >
      <DialogTitle
        id="responsive-dialog-title"
        className={clsx(classes.modalTitle, classes.modalTitleContact)}
      >
        <div className={classes.modalTop}>
          <div>
            <CloseIcon
              className={classes.closeModalIcon}
              onClick={() => closeModal(false)}
            />
            انتخاب ناظر
          </div>
          <div
            className={clsx(
              classes.searchDesktop,
              classes.search,
              isExpand ? classes.searchExpand : ""
            )}
          >
            <input name="title" onChange={handleSearch} />
            <SearchRoundedIcon
              onClick={() => setIsExpand((prevState) => !prevState)}
              className={classes.searchIcon}
            />
          </div>
        </div>
      </DialogTitle>
      <DialogContent className={classes.contactListContent}>
        <div className={classes.listStatus}>
          <div>
            <span>کاربران</span>
            <span>{numberFormat.toPersianDigits((checked || []).length)}</span>
            <span>نفر</span>
          </div>
          {/* {selectAll ? (
            <button onClick={() => handleSelectAll(false)}>پاک کردن</button>
          ) : (
            <button onClick={() => handleSelectAll(true)}>انتخاب همه</button>
          )} */}
        </div>
        {loading ? (
          <div className={classes.infoWrapper}>
            <CircularProgress
              color="primary"
              style={{ width: 20, height: 20 }}
            />
            <p>در حال دریافت اطلاعات</p>
          </div>
        ) : (
          <div className={classes.contactList}>
            {(contactFiltered || allUser).length > 0
              ? (contactFiltered || allUser).map((item) => (
                  <ListItem
                    key={item.username}
                    button
                    onClick={handleToggle(item)}
                  >
                    <MemberItem memberInfo={item} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(item)}
                        checked={
                          selectAll
                            ? true
                            : checked.some(
                                (check) => check.username == item.username
                              )
                        }
                        inputProps={{ "aria-labelledby": item.username }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              : // <div className={classes.noDataWrapper}>
                //   <img src={noData} alt="no data" />
                //   <p>هیچ موردی یافت نشد!</p>
                // </div>
                ""}
          </div>
        )}
      </DialogContent>
      {message && <p className={classes.limitAssistant}>{message}</p>}
      <DialogActions className={classes.contactActionBTN}>
        <button
          className={clsx(
            classes.actionBTN,
            checked.length > 0 ? classes.actionActiveBTN : ""
          )}
          onClick={handelSubmit}
        >
          تایید
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectAssistantModal;
