import historyIcon from "../../../../../../../../assets/images/historyIcon.svg";
import ArrowBack from "../../../../../../../../assets/images/ArrowBack";
import {Grid, Typography} from "@material-ui/core";
import {dateTime} from "../../../../../../../../utilities";
import ClockIcon from "../../../../../../../../assets/images/ClockIcon";
import useStyles from '../style'
import noData from '../../../../../../../../assets/images/no_result_search.svg'

const MemberTrackItem = ({track , style}) => {

    const classes = useStyles()
    return (
        <div className={classes.singleTrack} style={style||{}}>
            <div className={classes.trackInfo}>
                <div className={classes.trackImage}>
                    <img src={process.env.REACT_APP_IMAGE_URL + track.icon} alt=""/>
                </div>
                <div>
                    <Typography>{track.title}</Typography>
                    <Typography>
                        {dateTime.dateTimeCustom(track.time).day
                        + " " + dateTime.dateTimeCustom(track.time).month
                        + " " + dateTime.dateTimeCustom(track.time).year
                        }</Typography>
                </div>
            </div>
            <div className={classes.trackTime}>
                <p>
                    {dateTime.dateTimeCustom(track.time).hour
                    + ":" + dateTime.dateTimeCustom(track.time).minute=='۰'?'۰۰':dateTime.dateTimeCustom(track.time).minute
                    }
                </p>
                <ClockIcon/>
            </div>


        </div>
    )
}

export default MemberTrackItem;