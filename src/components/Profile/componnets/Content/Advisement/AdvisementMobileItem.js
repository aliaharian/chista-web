import React from "react";
import useStyles from "./Styles";
import { Avatar } from "@material-ui/core";
import { transform, numberFormat } from "../../../../../utilities";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import clsx from "clsx";

const AdvisementMobileItem = ({ row }) => {
  const dateTime = () => {
    const day = transform.customizeDateAndTime(row.createdTime * 1000, {
      day: "numeric",
    });

    const month = transform.customizeDateAndTime(row.createdTime * 1000, {
      month: "short",
    });

    const year = transform.customizeDateAndTime(row.createdTime * 1000, {
      year: "numeric",
    });
    const hour = transform.customizeDateAndTime(row.createdTime * 1000, {
      hour: "numeric",
      minute: "numeric",
    });
    return (
      <div className={classes.dateTime}>
        <span>{day}</span>
        <span>{month}</span> <span>{year}</span> - <span>{hour}</span>
      </div>
    );
  };
  const timeDistance = () => {
    let s = row.callDuration * 1000;
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = (s % 60).toString().length < 2 ? `0${s % 60}` : s % 60;
    s = (s - secs) / 60;
    let mins = (s % 60).toString().length < 2 ? `0${s % 60}` : s % 60;
    let hrs =
      ((s - mins) / 60).toString().length < 2
        ? `0${(s - mins) / 60}`
        : (s - mins) / 60;

    return (
      numberFormat.toPersianDigits(hrs) +
      ":" +
      numberFormat.toPersianDigits(mins) +
      ":" +
      numberFormat.toPersianDigits(secs)
    );
  };

  const classes = useStyles();
  return (
    <div className={classes.rowItemMobile}>
      <div className={classes.advisementAvatarBorder}>
        <Avatar
          src={transform.getImage(row.imageProfile)}
          className={classes.advisementAvatar}
        />
      </div>
      <div style={{ width: "65%", fontSize: 12 }}>
        <p className={classes.itemTextWrapper}>
          <span className={classes.incomingStrMobile}>{row.incomingStr}</span>
          <span className={classes.dateTimeMobile}>{dateTime()}</span>
        </p>
        <p className={classes.itemTextWrapper}>
          <span>{row.fullName}</span>
          <span>{timeDistance()}</span>
        </p>
      </div>
      <div
        className={clsx(
          classes.status,
          row.success
            ? classes.statusWrapperSuccess
            : classes.statusWrapperFailure
        )}
      >
        {row.incoming ? (
          <CallReceivedIcon className={classes.statusIcon} />
        ) : (
          <CallMadeIcon className={classes.statusIcon} />
        )}
      </div>
    </div>
  );
};

export default AdvisementMobileItem;
