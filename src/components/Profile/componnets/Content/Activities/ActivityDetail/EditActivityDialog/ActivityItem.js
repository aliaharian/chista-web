import { Grid } from "@material-ui/core"
import useStyles from './Styles'
import CheckList from "../../../../../../../assets/images/CheckList"
import Edit from "../../../../../../../assets/images/PenEdit";
import { Typography } from "@material-ui/core";

function ActivityItem(props) {
    const classes = useStyles()
    return (
        <Grid item xs={12} md={12}>
            <div className={classes.activityItem}>
                <div>
                    {props.icon || <CheckList />}
                    <div className={classes.activityInput}>
                        <span>{props.name}</span>
                        <Typography noWrap>
                            {props.value}
                        </Typography>
                    </div>
                </div>
                <div onClick={props.handleChange}>
                    <Edit />
                </div>
            </div>
        </Grid>
    )
}

export default ActivityItem