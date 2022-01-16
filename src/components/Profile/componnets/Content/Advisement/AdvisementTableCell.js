import React from "react";
import { TableRow, TableCell, Avatar } from "@material-ui/core";
import { transform, numberFormat, dateTime } from "../../../../../utilities";
import useStyles from "./Styles";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import clsx from "clsx";

const AdvisementTableCell = ({ row }) => {
  const classes = useStyles();

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

  const dateTimeRow = () => {
    const { day, month, year, time } = dateTime.dateTimeCustom(row.createdTime);
    return (
      <div className={classes.dateTime}>
        <span>{day}</span>
        <span>{month}</span> <span>{year}</span> - <span>{time}</span>
      </div>
    );
  };

  return (
    <TableRow>
      <TableCell align="center">
        <div className={classes.advisementAvatarWrapper}>
          <div className={classes.advisementAvatarBorder}>
            <Avatar
              src={transform.getImage(row.imageProfile)}
              className={classes.advisementAvatar}
            />
          </div>
          <div className={classes.advisementNameWrapper}>
            <p>{row.incomingStr}</p>
            <p>{row.fullName}</p>
          </div>
        </div>
      </TableCell>
      <TableCell align="center">{dateTimeRow()}</TableCell>
      <TableCell align="center">{timeDistance()}</TableCell>
      <TableCell align="center">
        <div
          className={clsx(
            classes.statusWrapper,
            row.success
              ? classes.statusWrapperSuccess
              : classes.statusWrapperFailure
          )}
        >
          <div className={classes.status}>
            {row.incoming ? (
              <CallReceivedIcon className={classes.statusIcon} />
            ) : (
              <CallMadeIcon className={classes.statusIcon} />
            )}
          </div>
          {row.success ? <p>برقراری موفق</p> : <p>برقراری ناموفق</p>}
        </div>
      </TableCell>
      {/* <TableCell align="center">
        <button className={classes.infoWrapper}>
          <InfoOutlinedIcon style={{ color: "#808895" }} />
        </button>
      </TableCell> */}
    </TableRow>
  );
};

export default AdvisementTableCell;
