import React, { useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import { useTheme } from "@material-ui/core/styles";

import { numberFormat } from "../../../../../../utilities";
import share from "../../../../../../assets/images/share.svg";
import chistaApp from "../../../../../../assets/images/chista-app.svg";
import telegram from "../../../../../../assets/images/telegram.svg";
import whatsapp from "../../../../../../assets/images/whatsapp.svg";
import copy from "../../../../../../assets/images/copy.svg";
import success from "../../../../../../assets/images/success.svg";

// import useStyles from "./Styles";
import classes from './ContactDetail.module.scss';
const ShareModal = ({ handelStep, closeModal, url }) => {
  // const classes = useStyles();
  const linkRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(800));

  const handelSubmit = (e) => {
    console.log("e", e);
  };

  const copyToClipboard = () => {
    const range = document.createRange();
    range.selectNode(linkRef.current);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log("Copy link command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={true}
      onClose={closeModal}
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: classes.contactDetailShareModalWrapper,
      }}
    >
      <DialogTitle id="responsive-dialog-title" className={classes.contactDetailShareModalTitle}>
        <CloseIcon className={classes.closeModalIcon} onClick={closeModal} />
        اشتراک گزاری
      </DialogTitle>
      <DialogContent className={classes.contactDetailShareModalContent}>
        <div className={classes.contactDetailShareInput}>
          <textarea type="text" value={url} ref={linkRef} />
          <img src={copy} alt="share" onClick={copyToClipboard} />
        </div>
        <div className={classes.contactDetailShareSocial}>
          <a>
            <img src={chistaApp} alt="chista" />
          </a>
          <a
            href={`https://telegram.me/share/url?url=https://chista.ir&text=${url}`}
            target={"_blank"}
          >
            <img src={telegram} alt="chista" />
          </a>
          <a href={`whatsapp://send?text=${url}`} target={"_blank"}>
            <img src={whatsapp} alt="chista" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
