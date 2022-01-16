import React, { useState, useEffect } from "react";
import clsx from "clsx";
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
import MemberItem from "./MemberItem";
import { getContactList } from "../../../../../../../../../../redux/contacts";
import { numberFormat } from "../../../../../../../../../utilities";

import useStyles from "./ModalStyles";

const SelectOstadModal = ({
  closeModal,
  showModalContact,
  handleAddMember,
  addContactNumber,
  user,
  ostad,
}) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(true);
  const [contactFiltered, setContactFiltered] = useState();
  const [selectAll, setSelectAll] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [checked, setChecked] = useState(ostad);

  const contact = useSelector((state) => state.adviserDashboard.contact);

  const handelSubmit = () => {
    closeModal(false);
    if (selectAll) {
      handleAddMember(contact);
      return;
    }
    handleAddMember(checked);
  };
  console.log(ostad)
  const handleToggle = (value) => () => {
    setChecked(value);
  };

  const handleSearch = (e) => {
    const filteredContact = (contact || []).filter((item) => {
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

  console.log("ostad:", ostad);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={showModalContact}
      onClose={() => {
        console.log('closeinside')
        closeModal(false)
      }}
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
              onClick={() => {
                closeModal(false)
              }}
            />
            انتخاب استاد
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
            <ListItem button onClick={handleToggle(user)}>
              <MemberItem memberInfo={user} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(user)}
                  checked={checked?.username === user.username}
                  inputProps={{ "aria-labelledby": user.username }}
                />
              </ListItemSecondaryAction>
            </ListItem>

            {(addContactNumber || []).length > 0
              ? addContactNumber.map((item) => (
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
                        checked={checked?.username === item.username}
                        inputProps={{ "aria-labelledby": item.username }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              : ""}

            {(contactFiltered || contact).length > 0
              ? (contactFiltered || contact).map((item) => (
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
                        checked={checked?.username === item.username}
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
      <DialogActions className={classes.contactActionBTN}>
        <button
          className={clsx(
            classes.actionBTN,
            checked ? classes.actionActiveBTN : ""
          )}
          onClick={handelSubmit}
        >
          تایید
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectOstadModal;
