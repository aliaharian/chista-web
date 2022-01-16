import { Grid, Typography } from "@material-ui/core";
import UserIcon from '../../../../../../../../assets/images/profile/registerOstad/UserIcon'
import EyeIcon from '../../../../../../../../assets/images/EyeIcon'
import AlarmClockIcon from '../../../../../../../../assets/images/AlarmClockIcon'
import ClockIcon from '../../../../../../../../assets/images/ClockIcon'
import Edit from "../../../../../../../../assets/images/PenEdit";
import useStyles from '../style'
import clsx from "clsx";

const Summery = (props) => {
    const classes = useStyles()
console.log('props.memberInfo',props.memberInfo)
    return (
        <>
            <div className={classes.summeryItem}>
                <div className={clsx(classes.summeryIcon, classes.bgDark)}>
                    <UserIcon />
                </div>
                <div className={classes.summeryInfo}>
                    
                {/* <Typography>{props.memberInfo.memberRoleStr}</Typography> */}
                <Typography>{props.role}</Typography>
                    <Typography>نقش در کلاس</Typography>
                </div>
                {((props.memberInfo.youAreCreator || (props.memberInfo.callerRoleType !== process.env.REACT_APP_ASSISTANT_ROLE_TYPE))&&props.memberInfo.memberRoleType!==process.env.REACT_APP_GUEST_ROLE_TYPE) &&
                    <div className={classes.summeryEdit} onClick={() => {
                        props.editRole()
                    }}>

                        <Edit />
                    </div>
                }
            </div>
            <div className={classes.summeryItem}>
                <div className={clsx(classes.summeryIcon, classes.bgInfo)}>
                    <EyeIcon />
                </div>
                <div className={classes.summeryInfo}>
                    <Typography>-</Typography>
                    <Typography>شاخص دقت</Typography>
                </div>

            </div>
            <div className={classes.summeryItem}>
                <div className={clsx(classes.summeryIcon, classes.bgWarning)}>
                    <AlarmClockIcon />
                </div>
                <div className={classes.summeryInfo}>
                    <Typography>-</Typography>
                    <Typography>تاخیر (دقیقه)</Typography>
                </div>

            </div>
            <div className={classes.summeryItem}>
                <div className={clsx(classes.summeryIcon, classes.bgDanger)}>
                    <ClockIcon />
                </div>
                <div className={classes.summeryInfo}>
                    <Typography>-</Typography>
                    <Typography>حضور (دقیقه)</Typography>
                </div>

            </div>
        </>
    )
}

export default Summery;