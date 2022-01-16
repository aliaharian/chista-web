import classes from "../../../../../assets/stylesheet/profile/packets.module.scss";
import React from "react";
import CalendarIcon from "../../../../../assets/images/profile/registerOstad/CalendarIcon";
import infoIcon from "../../../../../assets/images/infoCirlce.svg";
import {numberFormat} from "../../../../../utilities";
import jMoment from "moment-jalaali";

const PacketHistoryItem = ({details}) => {
    // const classes = useStyles();

    return (
        <div className={classes.packetHistoryItem}>
            <div>
                <div className={classes.historyIcon}>
                    <CalendarIcon/>
                </div>
                <div className={classes.historyDetail}>
                    <p>{`بسته ${details.pup.typeName}`}</p>
                    <p>{`${numberFormat.toPersianDigits(details.pup.userCount)}نفره - ${numberFormat.toPersianDigits(details.pid.interval)}`} ماه </p>
                    <p className={classes.mobileExpire}>{`تا ${numberFormat.toPersianDigits(
                        jMoment
                            .unix(details.expireAt)
                            .format("jDD jMMMM jYYYY - HH:mm")
                    )}`}
                    </p>
                </div>
            </div>
            <div>
                <div className={classes.historyTime}>
                    <p className={classes.desktopExpire}>{`تا ${numberFormat.toPersianDigits(
                        jMoment
                            .unix(details.expireAt)
                            .format("jDD jMMMM jYYYY - HH:mm")
                    )}`}
                    </p>
                </div>
                <div className={classes.historyInfoBtn}>
                    <img src={infoIcon} alt=""/>
                </div>
            </div>
        </div>
    )

}

export default PacketHistoryItem;