import React, {useState} from "react";
import {
    TableRow,
    TableCell,
    Button,
    MenuItem,
    Menu,
    Dialog, withStyles,
} from "@material-ui/core";
import {transform, numberFormat, dateTime} from "../../../../../utilities";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import clsx from "clsx";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import blackBoard from '../../../../../assets/images/Blackboard-white.svg'
import LoginClass from '../../../../../assets/images/loginClass'
import useStyles from "./Styles";
import Link from "../../../../Link/Link";
import {Tooltip, Fab} from '@material-ui/core';

import StyledMenu from "../../../../menu/StyledMenu";
import {joinToClass} from "../../../../../../redux/groups";
import {useDispatch} from "react-redux";

const MyClassTableCell = ({row}) => {
    const classes = useStyles();
    const Dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);

    const dateTimeRow = () => {
        const {day, month, year, time} = dateTime.dateTimeCustom(row.createdTime);
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span>{month}</span> <span>{year}</span> - <span>{time}</span>
            </div>
        );
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TableRow>
            <TableCell className={classes.myClassAvatarCell} align="center">
                <Link href={`/profile/dashboard/myClass/${row.id}`}>
                    <div className={classes.myClassAvatarWrapper}>
                        <ProfileAvatar
                            user={row}
                            variant="circle"
                            avatar={classes.classAvatar}
                            avatarContainer={classes.classAvatarBorder}
                            content={<img src={blackBoard} alt=""/>}
                        />
                        {/* <div className={classes.myClassAvatarBorder}>
            <Avatar
              src={transform.getImage(row.imageProfile)}
              className={classes.myClassAvatar}
            />
          </div> */}
                    </div>
                </Link>
            </TableCell>
            <TableCell align="center" className={classes.myClassNameCell}>
                <div className={classes.myClassNameWrapper}>
                    <p>{numberFormat.toPersianDigits(row.title)}</p>
                    <p>{numberFormat.toPersianDigits(row.memberCount)} نفر</p>
                </div>
            </TableCell>
            <TableCell align="center">{dateTimeRow()}</TableCell>
            <TableCell align="center" className={classes.myClassRoleCell}>{row.myRoleStr || `-`}</TableCell>
            <TableCell align="center" className={classes.myClassActionsCell}>
                <div className={classes.actionWrapper}>
                    <Tooltip
                        title="ورود به کلاس" aria-label="ورود به کلاس"
                        placement="bottom-end"
                        onClick={()=>{
                                Dispatch(joinToClass(row.chatGroupId , row.myChatUserId, 'chatGroupId','_blank'))
                        }}
                        className={clsx(
                            classes.classStatusWrapper,
                            row.active
                                ? classes.WrapperActive
                                : classes.statusWrapperinActive
                        )}
                    >
                        <Fab style={{backgroundColor:'white !important'}}>

                            <LoginClass className={classes.statusIcon} viewBox="0 0 24 31"/>

                        </Fab>
                    </Tooltip>
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
                        <MenuItem
                            className={classes.classDetailLink}
                            //  onClick={handelEditBtn}
                        >
                            <Link href={`/profile/dashboard/myClass/${row.id}`}>جزئیات</Link>
                        </MenuItem>
                        {/* <MenuItem
            //  onClick={handelEditBtn}
            >
              آرشیو کردن
            </MenuItem> */}
                        {row.active && row.myRole === process.env.REACT_APP_CREATOR_ROLE_TYPE && (
                            <MenuItem
                                //  onClick={handelEditBtn}
                            >
                                غیرفعال کردن
                            </MenuItem>
                        )}
                    </StyledMenu>
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

export default MyClassTableCell;
