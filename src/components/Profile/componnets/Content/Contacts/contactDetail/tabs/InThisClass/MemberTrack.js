import React from 'react'
import historyIcon from "../../../../../../../../assets/images/historyIcon.svg";
import ArrowBack from "../../../../../../../../assets/images/ArrowBack";
import { Grid, Typography } from "@material-ui/core";
import { dateTime } from "../../../../../../../../utilities";
import ClockIcon from "../../../../../../../../assets/images/ClockIcon";
import useStyles from '../style'
import noData from '../../../../../../../../assets/images/Page-2.svg'
import MemberTrackItem from "./MemberTrackItem";
import TrackDialog from "./TrackDialog";

const MemberTrack = ({ tracks, setOpenTrackModal }) => {

    const classes = useStyles()


    return (<div>
        <div className={classes.trackHeader}>
            <div>
                <img src={historyIcon} alt="" />
                <p>تاریخچه فعالیت</p>
            </div>
            <div onClick={() => {
                tracks.total > 3 &&
                    setOpenTrackModal(true)
            }} className={tracks?.total < 4 && classes.disabledButton}>
                {tracks?.total < 4 ? null : 
                <>
                    <p>مشاهده همه</p>
                    <ArrowBack />
                </>
                }
            </div>


        </div>
        <div className={classes.trackBody}>
            {tracks && tracks.total !== 0 ? tracks.result.slice(0, 5).map((track, index) => (
                <MemberTrackItem track={track} key={index} />
            )) :
                tracks?.total !== 0 && <div className={classes.noData}>
                    <img src={noData} alt="" />
                    <Typography>منتظر بمانید</Typography>
                </div>
            }
            {
                (tracks?.result?.length === 0 || tracks?.total === 0 )&&
                <div className={classes.noData}>
                    <img src={noData} alt="" />
                    <Typography>تاریخچه فعالیت موجود نیست</Typography>
                </div>
            }
        </div>
    </div>)
}

export default MemberTrack;