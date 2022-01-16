import React, {useState} from "react";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import clsx from "clsx";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {
    TableRow,
    TableCell,
    Button,
    Grid,
    MenuItem,
    Menu,
    Dialog, withStyles,
} from "@material-ui/core";
import {
    transform,
    numberFormat,
    dateTime,
} from "../../../../../../../../utilities";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import gaieb from "../../../../../../../../assets/images/gaieb-icon.svg";
import hazer from "../../../../../../../../assets/images/hazer-icon.svg";
import userIcon from "../../../../../../../../assets/images/user-profile-white.png";

import useStyles from "../../Styles";
import Link from "../../../../../../../Link/Link";

import StyledMenu from "../../../../../../../menu/StyledMenu";
import jMoment from "moment-jalaali";

const MyClassTableCell = ({row, index, ...props}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const states = {
        '1': 'اجرا نشده',
        '2': 'در حال اجرا',
        '-1': 'اجرا شده',


    }


    return (
        <Grid md={props.noAction ? 12 : 4} sm={props.noAction ? 12 : 6} xs={12}
              className={classes.singleMemberContainer}>
            <Grid style={props.noAction ? {borderBottom: 'none'} : {}}>
                <Grid align="center">
                    <div className={classes.myClassAvatarWrapper}>
                        <div className={clsx(classes.sessionNumber,
                            row.state === 1 && classes.sessionNotStarted,
                            row.state === 2 && classes.sessionStarted,
                            row.state === -1 && classes.sessionEnded,)}>
                            {numberFormat.toPersianDigits(index)}
                        </div>
                        <div className={classes.myClassNameWrapper}>
                            <p>{
                                props.noAction &&
                                numberFormat.toPersianDigits(
                                    jMoment
                                        .unix(row.startTime)
                                        .format("dddd")
                                )
                            } {
                                numberFormat.toPersianDigits(
                                    jMoment
                                        .unix(row.startTime)
                                        .format("jDD jMMMM jYYYY")
                                )
                            }</p>
                            {/* <p>{memberRole[row.memberRoleType]}</p> */}
                            <p> {props.noAction ?
                                <p className={classes.regularFont}>
                                    <span> {numberFormat.toPersianDigits(dateTime.secondToTime(row.startHour))} </span>
                                    <span> تا {numberFormat.toPersianDigits(dateTime.secondToTime(row.endHour))} </span>
                                    <span> {props.withState && `(${states[row.state]})`}</span>
                                </p>
                                :
                                numberFormat.toPersianDigits(
                                    jMoment
                                        .unix(row.startTime)
                                        .format("dddd")
                                )
                            }</p>
                        </div>
                    </div>
                </Grid>
                <Grid align="center">

                    {!props.noAction && <div className={classes.actionWrapper}>
                        <div className={classes.sessionItemTime}>
                            <p>{numberFormat.toPersianDigits(dateTime.secondToTime(row.startHour))}</p>
                            <p>تا {numberFormat.toPersianDigits(dateTime.secondToTime(row.endHour))} </p>
                        </div>
                        <MoreVertIcon
                            aria-controls="more"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={classes.editBtnRes}
                        />
                        <StyledMenu
                            id="more"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            style={{
                                marginTop: 40,
                            }}
                        >
                            {row.state === 1 &&
                            <>
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        props.handleDelete([row, index])
                                        handleClose();
                                    }}
                                >
                                    <Link href={`#`}
                                          onClick={(e) => e.preventDefault()}>
                                        حذف
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={classes.classDetailLink}
                                    onClick={() => {
                                        props.handleEdit(row)
                                        handleClose();
                                    }}
                                >
                                    <Link href={`#`}
                                          onClick={(e) => e.preventDefault()}>

                                        ویرایش
                                    </Link>
                                </MenuItem>
                            </>
                            }
                            <MenuItem
                                className={classes.classDetailLink}
                                onClick={() => {
                                    props.handleAddNextWeek([row, index])
                                    handleClose();
                                }}
                            >
                                <Link href={`#`}
                                      onClick={(e) => e.preventDefault()}>
                                    تکرار در هفته آینده
                                </Link>
                            </MenuItem>
                            <MenuItem
                                className={classes.classDetailLink}
                                onClick={() => {
                                    props.handleSessionDetail([row, index])
                                    handleClose();
                                }}
                            >
                                <Link href={`#`}
                                      onClick={(e) => e.preventDefault()}>

                                    جزییات
                                </Link>
                            </MenuItem>
                        </StyledMenu>
                    </div>}


                </Grid>
            </Grid>
        </Grid>
    );
};

export default MyClassTableCell;
