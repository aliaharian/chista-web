import React, {useState} from "react";
import useStyles from "./Style";
import {dateTime, numberFormat} from "../../../../../../../../../utilities";
import jMoment from "moment-jalaali";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Menu, MenuItem, withStyles} from "@material-ui/core";
import Link from "../../../../../../../../Link/Link";
import StyledMenu from "../../../../../../../../menu/StyledMenu";

function SessionItem({data, index, ...props}) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.sessionItemContainer} style={props.noPadding ? {padding: '21px 19px'} : {}}>
            <div className={classes.sessionItemDateWrapper}>
                <div className={classes.sessionItemNumber}>{numberFormat.toPersianDigits(index)}</div>
                <div className={classes.sessionItemDate}>
                    <p>
                        {
                            numberFormat.toPersianDigits(
                                jMoment
                                    .unix(data.startTime)
                                    .format("jDD jMMMM jYYYY")
                            )
                        }
                    </p>
                    <p>
                        {
                            numberFormat.toPersianDigits(
                                jMoment
                                    .unix(data.startTime)
                                    .format("dddd")
                            )
                        }
                    </p>
                </div>
            </div>
            <div className={classes.sessionItemTimeWrapper}>
                <div className={classes.sessionItemTime}>
                    <p>{numberFormat.toPersianDigits(dateTime.secondToTime(data.startHour))}</p>
                    <p>تا {numberFormat.toPersianDigits(dateTime.secondToTime(data.endHour))} </p>
                </div>
                <div className={classes.sessionItemActions}>
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
                            onClick={(e) => {
                                e.preventDefault()
                                handleClose()
                                props.handleDelete(data)
                            }}
                        >
                            <Link href={`#`}>حذف</Link>
                        </MenuItem>

                        {props.editable && <MenuItem
                            className={classes.classDetailLink}
                            onClick={(e)=>{
                                e.preventDefault()
                                handleClose()
                                props.handleEdit(data)
                            }}
                        >
                            <Link href={`#`}>ویرایش</Link>
                        </MenuItem>}

                    </StyledMenu>
                </div>
            </div>
        </div>
    )
}

export default SessionItem