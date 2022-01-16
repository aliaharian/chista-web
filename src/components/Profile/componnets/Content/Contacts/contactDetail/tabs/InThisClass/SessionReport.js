import chartIcon from "../../../../../../../../assets/images/chartIcon.svg";
import ArrowBack from "../../../../../../../../assets/images/ArrowBack";
import noData from '../../../../../../../../assets/images/board-basics.svg'
import useStyles from '../style'
import {Typography} from "@material-ui/core";

const SessionReport = ({tracks}) => {

    const classes = useStyles()

    return (<div>
        <div className={classes.trackHeader}>
            <div>
                <img src={chartIcon} alt=""/>
                <p>گزارش جلسات</p>
            </div>
            <div className={classes.disabledButton}>
                
                {/* <p>مشاهده همه</p>
                <ArrowBack/> */}
            </div>

        </div>
        <div className={classes.trackBody}>
            <div className={classes.noData}>
                <img src={noData} alt=""/>
                <Typography>گزارش جلسات موجود نیست</Typography>
            </div>
        </div>
    </div>)
}

export default SessionReport;